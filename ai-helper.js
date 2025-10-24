/**
 * AI Helper for Launcher
 * Semantic search using Transformers.js + embeddings
 * Model: all-MiniLM-L6-v2 (~23MB, cached offline)
 */

(function() {
    'use strict';
    
    // ============================================
    // Configuration
    // ============================================
    
    const CONFIG = {
        modelName: 'Xenova/all-MiniLM-L6-v2',
        cacheVersion: 'v1',
        maxResults: 10,
        minSimilarity: 0.3,
        storageKeys: {
            embeddings: 'launcher_embeddings_v1',
            modelReady: 'launcher_model_ready_v1'
        }
    };
    
    // ============================================
    // State
    // ============================================
    
    let embedder = null;
    let isAIReady = false;
    let isLoading = false;
    let currentMode = 'normal';
    let programEmbeddings = null;
    
    // ============================================
    // DOM Elements
    // ============================================
    
    const elements = {
        searchBox: document.getElementById('search-box'),
        modeButtons: document.querySelectorAll('.mode-btn'),
        aiStatus: document.getElementById('ai-status'),
        statusLoading: document.querySelector('.status-loading'),
        statusReady: document.querySelector('.status-ready'),
        statusError: document.querySelector('.status-error'),
        hintNormal: document.querySelector('.hint-normal'),
        hintAI: document.querySelector('.hint-ai'),
        aiResultsSection: document.getElementById('ai-search-results'),
        aiResultsCount: document.getElementById('ai-results-count'),
        aiResultsContainer: document.querySelector('.ai-search-results-container'),
        clearAISearch: document.getElementById('clear-ai-search'),
        appContainer: document.getElementById('app-container')
    };
    
    // ============================================
    // Utility Functions
    // ============================================
    
    function cosineSimilarity(a, b) {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        
        for (let i = 0; i < a.length; i++) {
            dotProduct += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }
    
    function normalizeEmbedding(embedding) {
        // Convert to regular array if needed
        if (embedding.data) {
            return Array.from(embedding.data);
        }
        if (Array.isArray(embedding[0])) {
            return Array.from(embedding[0]);
        }
        return Array.from(embedding);
    }
    
    function showStatus(status) {
        // Hide all status indicators
        elements.statusLoading?.classList.add('hidden');
        elements.statusReady?.classList.add('hidden');
        elements.statusError?.classList.add('hidden');
        
        // Show requested status
        if (status === 'loading') {
            elements.statusLoading?.classList.remove('hidden');
        } else if (status === 'ready') {
            elements.statusReady?.classList.remove('hidden');
        } else if (status === 'error') {
            elements.statusError?.classList.remove('hidden');
        }
    }
    
    // ============================================
    // Transformers.js Integration
    // ============================================
    
    async function loadTransformersJS() {
        if (window.transformers) {
            return window.transformers;
        }
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';
            script.type = 'module';
            
            script.onload = () => {
                // Wait a bit for module to initialize
                setTimeout(() => {
                    if (window.transformers) {
                        resolve(window.transformers);
                    } else {
                        reject(new Error('Transformers.js failed to load'));
                    }
                }, 100);
            };
            
            script.onerror = () => reject(new Error('Failed to load Transformers.js'));
            document.head.appendChild(script);
        });
    }
    
    async function initializeAI() {
        if (isLoading || isAIReady) return;
        
        isLoading = true;
        showStatus('loading');
        
        try {
            console.log('[AI] Loading Transformers.js...');
            
            // Load library
            const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1');
            
            console.log('[AI] Loading embedding model...');
            
            // Initialize embedder
            embedder = await pipeline('feature-extraction', CONFIG.modelName, {
                quantized: true, // Use quantized model for faster loading
            });
            
            console.log('[AI] Model loaded! Generating embeddings...');
            
            // Generate embeddings for all programs
            await generateAllEmbeddings();
            
            isAIReady = true;
            showStatus('ready');
            
            console.log('[AI] Ready!');
            
        } catch (error) {
            console.error('[AI] Initialization failed:', error);
            showStatus('error');
            isAIReady = false;
        } finally {
            isLoading = false;
        }
    }
    
    // ============================================
    // Embeddings Generation
    // ============================================
    
    async function generateAllEmbeddings() {
        // Try to load from cache first
        const cached = loadEmbeddingsFromCache();
        if (cached) {
            programEmbeddings = cached;
            console.log('[AI] Loaded embeddings from cache');
            return;
        }
        
        // Get programs from global scope (set by script.js)
        const programs = window.launcherPrograms || [];
        
        if (!programs.length) {
            console.warn('[AI] No programs found');
            return;
        }
        
        programEmbeddings = [];
        
        console.log(`[AI] Generating embeddings for ${programs.length} programs...`);
        
        // Process in batches for better performance
        const batchSize = 10;
        for (let i = 0; i < programs.length; i += batchSize) {
            const batch = programs.slice(i, i + batchSize);
            
            const batchResults = await Promise.all(
                batch.map(async (program) => {
                    try {
                        // Create searchable text
                        const text = [
                            program.name,
                            program.description,
                            ...(program.tags || []),
                            program.category
                        ].filter(Boolean).join(' ');
                        
                        // Generate embedding
                        const output = await embedder(text, {
                            pooling: 'mean',
                            normalize: true
                        });
                        
                        const embedding = normalizeEmbedding(output);
                        
                        return {
                            name: program.name,
                            embedding: embedding
                        };
                    } catch (err) {
                        console.warn(`[AI] Failed to generate embedding for ${program.name}:`, err);
                        return null;
                    }
                })
            );
            
            programEmbeddings.push(...batchResults.filter(Boolean));
            
            // Log progress
            const progress = Math.min(100, Math.round(((i + batchSize) / programs.length) * 100));
            console.log(`[AI] Progress: ${progress}%`);
        }
        
        // Save to cache
        saveEmbeddingsToCache(programEmbeddings);
        
        console.log('[AI] All embeddings generated and cached!');
    }
    
    function loadEmbeddingsFromCache() {
        try {
            const cached = localStorage.getItem(CONFIG.storageKeys.embeddings);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch (err) {
            console.warn('[AI] Failed to load cached embeddings:', err);
        }
        return null;
    }
    
    function saveEmbeddingsToCache(embeddings) {
        try {
            localStorage.setItem(CONFIG.storageKeys.embeddings, JSON.stringify(embeddings));
        } catch (err) {
            console.warn('[AI] Failed to save embeddings to cache:', err);
        }
    }
    
    // ============================================
    // Search Functions
    // ============================================
    
    async function performAISearch(query) {
        if (!isAIReady || !embedder || !programEmbeddings) {
            console.warn('[AI] AI not ready, falling back to keyword search');
            return performKeywordSearch(query);
        }
        
        try {
            // Generate query embedding
            const queryOutput = await embedder(query, {
                pooling: 'mean',
                normalize: true
            });
            
            const queryEmbedding = normalizeEmbedding(queryOutput);
            
            // Get all programs
            const programs = window.launcherPrograms || [];
            
            // Calculate similarities
            const results = programs.map((program, index) => {
                const progEmbed = programEmbeddings.find(e => e.name === program.name);
                
                if (!progEmbed) {
                    return { program, similarity: 0 };
                }
                
                const similarity = cosineSimilarity(queryEmbedding, progEmbed.embedding);
                
                return { program, similarity };
            });
            
            // Sort and filter
            const filtered = results
                .filter(r => r.similarity >= CONFIG.minSimilarity)
                .sort((a, b) => b.similarity - a.similarity)
                .slice(0, CONFIG.maxResults);
            
            console.log('[AI] Found', filtered.length, 'results');
            
            return filtered;
            
        } catch (error) {
            console.error('[AI] Search failed:', error);
            return performKeywordSearch(query);
        }
    }
    
    function performKeywordSearch(query) {
        const programs = window.launcherPrograms || [];
        const lowerQuery = query.toLowerCase();
        
        return programs
            .filter(program => {
                const searchText = [
                    program.name,
                    program.description,
                    ...(program.tags || []),
                    program.category
                ].filter(Boolean).join(' ').toLowerCase();
                
                return searchText.includes(lowerQuery);
            })
            .map(program => ({ program, similarity: 1 }))
            .slice(0, CONFIG.maxResults);
    }
    
    // ============================================
    // UI Functions
    // ============================================
    
    function displayAIResults(results, query) {
        if (!results || results.length === 0) {
            elements.aiResultsCount.textContent = `Nie znaleziono programów dla: "${query}"`;
            elements.aiResultsContainer.innerHTML = '<p style="color: var(--text-muted); padding: 20px; text-align: center;">Spróbuj innych słów kluczowych lub przełącz się na tryb zwykły.</p>';
            elements.aiResultsSection?.classList.remove('hidden');
            return;
        }
        
        elements.aiResultsCount.textContent = `Znaleziono ${results.length} programów dla: "${query}"`;
        
        // Render results
        elements.aiResultsContainer.innerHTML = '';
        
        results.forEach(({ program, similarity }) => {
            const card = createProgramCard(program, similarity);
            elements.aiResultsContainer.appendChild(card);
        });
        
        elements.aiResultsSection?.classList.remove('hidden');
    }
    
    function createProgramCard(program, similarity) {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        const scoreBar = similarity < 1 ? `
            <div style="
                height: 4px;
                background: rgba(29, 185, 84, 0.2);
                border-radius: 2px;
                margin-bottom: 12px;
                overflow: hidden;
            ">
                <div style="
                    height: 100%;
                    width: ${(similarity * 100).toFixed(0)}%;
                    background: var(--accent-primary);
                    border-radius: 2px;
                    transition: width 0.5s ease;
                "></div>
            </div>
        ` : '';
        
        card.innerHTML = `
            ${scoreBar}
            <div style="display: flex; gap: 16px; align-items: center;">
                <img src="${program.icon || 'icons/default.png'}" 
                     alt="${program.name}" 
                     class="program-icon"
                     onerror="this.src='icons/default.png'">
                <div class="program-details">
                    <h3 class="program-title">${program.name}</h3>
                    <p class="program-description">${program.description}</p>
                    <div class="buttons">
                        <button class="btn copy-folder-btn" data-path="${program.folderPath || program.localPath}">
                            Skopiuj ścieżkę
                        </button>
                        ${program.details ? `
                            <button class="btn details-btn" data-item-name="${program.name}">
                                Pokaż szczegóły
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Animate in
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
        
        // Add event listeners
        const copyBtn = card.querySelector('.copy-folder-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                copyPathToClipboard(copyBtn);
            });
        }
        
        const detailsBtn = card.querySelector('.details-btn');
        if (detailsBtn) {
            detailsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const event = new CustomEvent('showDetails', {
                    detail: { itemName: detailsBtn.dataset.itemName }
                });
                document.dispatchEvent(event);
            });
        }
        
        return card;
    }
    
    function copyPathToClipboard(button) {
        const path = button.dataset.path;
        if (!path) return;
        
        const fullPathUrl = new URL(path, window.location.href);
        const windowsPath = decodeURI(fullPathUrl.pathname).substring(1).replace(/\//g, '\\');
        
        navigator.clipboard.writeText(windowsPath).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Skopiowano!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
    
    function clearAIResults() {
        elements.aiResultsSection?.classList.add('hidden');
        elements.aiResultsContainer.innerHTML = '';
    }
    
    // ============================================
    // Mode Switching
    // ============================================
    
    function switchMode(mode) {
        currentMode = mode;
        
        // Update button states
        elements.modeButtons.forEach(btn => {
            if (btn.dataset.mode === mode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update hints
        if (mode === 'ai') {
            elements.hintNormal?.classList.add('hidden');
            elements.hintAI?.classList.remove('hidden');
            
            // Initialize AI if not ready
            if (!isAIReady && !isLoading) {
                initializeAI();
            }
        } else {
            elements.hintNormal?.classList.remove('hidden');
            elements.hintAI?.classList.add('hidden');
            clearAIResults();
        }
        
        // Update placeholder
        if (elements.searchBox) {
            if (mode === 'ai') {
                elements.searchBox.placeholder = 'Opisz czego szukasz...';
            } else {
                elements.searchBox.placeholder = 'Szukaj aplikacji...';
            }
        }
    }
    
    // ============================================
    // Event Listeners
    // ============================================
    
    function initializeEventListeners() {
        // Mode toggle buttons
        elements.modeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                switchMode(btn.dataset.mode);
            });
        });
        
        // Search box - intercept when in AI mode
        if (elements.searchBox) {
            elements.searchBox.addEventListener('input', debounce(async (e) => {
                const query = e.target.value.trim();
                
                if (currentMode === 'ai' && query.length > 2) {
                    const results = await performAISearch(query);
                    displayAIResults(results, query);
                } else if (currentMode === 'ai') {
                    clearAIResults();
                }
                // Normal mode is handled by script.js
            }, 300));
        }
        
        // Clear AI search button
        if (elements.clearAISearch) {
            elements.clearAISearch.addEventListener('click', () => {
                clearAIResults();
                if (elements.searchBox) {
                    elements.searchBox.value = '';
                    elements.searchBox.focus();
                }
            });
        }
        
        // Listen for show details events from AI results
        document.addEventListener('showDetails', (e) => {
            const itemName = e.detail.itemName;
            // Trigger original script.js detail view
            const detailBtn = document.querySelector(`[data-item-name="${itemName}"]`);
            if (detailBtn && detailBtn.closest('#app-container')) {
                detailBtn.click();
            }
        });
    }
    
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
    
    // ============================================
    // Initialization
    // ============================================
    
    function init() {
        console.log('[AI Helper] Initializing...');
        
        // Wait for programs to be loaded by script.js
        const checkPrograms = setInterval(() => {
            if (window.launcherPrograms && window.launcherPrograms.length > 0) {
                clearInterval(checkPrograms);
                
                console.log('[AI Helper] Programs loaded:', window.launcherPrograms.length);
                
                // Initialize event listeners
                initializeEventListeners();
                
                // Set initial mode
                switchMode('normal');
                
                console.log('[AI Helper] Ready! AI will load when first needed.');
            }
        }, 100);
        
        // Timeout after 10 seconds
        setTimeout(() => {
            clearInterval(checkPrograms);
            if (!window.launcherPrograms) {
                console.warn('[AI Helper] Programs not loaded, AI search disabled');
            }
        }, 10000);
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();