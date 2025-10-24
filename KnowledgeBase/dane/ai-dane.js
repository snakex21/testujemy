const pageData = {
  featured: [
    { name: "Google Gemini", url: "https://gemini.google.com/", badge: "CHATBOT", description: "Zaawansowany i darmowy model językowy od Google (2.5 Pro)" },
    { name: "LMArena", url: "https://lmarena.ai/?mode=direct", badge: "WIELE MODELI", description: "Testuj dziesiątki modeli AI (czat, obrazy) bez logowania" },
    { name: "ComfyUI", url: "https://github.com/comfyanonymous/ComfyUI", badge: "OBRAZY LOKALNIE", description: "Potężny, modularny interfejs do generowania obrazów (Stable Diffusion)" },
    { name: "Suno", url: "https://suno.com/", badge: "MUZYKA", description: "Generowanie muzyki i kompletnych piosenek na najwyższym poziomie" },
    { name: "Applio", url: "https://applio.org/", badge: "AI COVERS", description: "Kompletne narzędzie do klonowania głosu (RVC, lokalnie)" },
  ],
  sections: [
    {
      id: "chatboty-ai",
      title: "🤖 Chatboty AI",
      subsections: [
        {
          title: "Oficjalne Modele (Cloud-Based)",
          links: [
            { name: "AI Studio / Gemini", url: "https://aistudio.google.com/app/prompts/new_chat", tag: "Google", isStarred: true },
            { name: "Ai2 Playground", url: "https://playground.allenai.org/", tag: "OLMo 2" },
            { name: "Apertus", url: "https://chat.publicai.co/", tag: "70B" },
            { name: "ChatGPT", url: "https://chatgpt.com/", tag: "GPT-5" },
            { name: "Claude", url: "https://claude.ai/", tag: "Claude 4 Sonnet" },
            { name: "DeepSeek", url: "https://chat.deepseek.com/", tag: "DeepSeek-V3.1", isStarred: true },
            { name: "dots.vlm1.inst", url: "https://huggingface.co/spaces/rednote-hilab/dots-vlm1-demo" },
            { name: "Ernie", url: "https://ernie.baidu.com/", tag: "Baidu" },
            { name: "Grok", url: "https://grok.com/", tag: "Grok 3/4", isStarred: true },
            { name: "Kimi", url: "https://www.kimi.com/", tag: "K2-0905", isStarred: true },
            { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", tag: "GPT-5", isStarred: true },
            { name: "MiniMax AI", url: "https://chat.minimax.io/", tag: "Minimax-M1" },
            { name: "Mistral", url: "https://chat.mistral.ai", tag: "Privacy-Focused" },
            { name: "Qwen", url: "https://chat.qwen.ai/", tag: "Qwen3-Max-Preview", isStarred: true },
            { name: "Reka", url: "https://www.reka.ai/", tag: "Flash 3.1" },
            { name: "Solar", url: "https://console.upstage.ai/playground/chat", tag: "No Sign-Up" },
            { name: "StepFun", url: "https://stepfun.ai/" },
            { name: "Z.ai", url: "https://chat.z.ai/", tag: "GLM 4.5", isStarred: true },
          ]
        },
        {
          title: "Wiele Modeli (Cloud-Based)",
          links: [
            { name: "AI Assistant", url: "https://aiassistantbot.pages.dev/", tag: "Wiele modeli" },
            { name: "DuckDuckGo AI", url: "https://duck.ai/", tag: "Bez logowania" },
            { name: "FreePass", url: "https://freepass.ai/", tag: "Gemini 2.5 Pro" },
            { name: "Genspark", url: "https://www.genspark.ai/", tag: "Wiele modeli" },
            { name: "Gradient", url: "https://chat.gradient.network/", tag: "No Sign-Up" },
            { name: "Groq", url: "https://groq.com/", tag: "Kimi K2-0905" },
            { name: "HiveChat", url: "https://ai.wr.do/chat", tag: "Kimi K2" },
            { name: "ISH", url: "https://ish.junioralive.in/", tag: "Wiele modeli" },
            { name: "LMArena", url: "https://lmarena.ai/?mode=direct", tag: "Bez logowania", isStarred: true },
            { name: "NVIDIA NIM", url: "https://build.nvidia.com/", tag: "Bez logowania" },
            { name: "Scira", url: "https://scira.ai/", tag: "AI Search Engine" },
            { name: "Together.ai", url: "https://chat.together.ai/", tag: "DeepSeek V3.1" },
            { name: "Yupp.ai", url: "https://yupp.ai/", tag: "Wiele modeli" },
          ]
        },
        {
          title: "Wyszukiwarki AI",
          links: [
            { name: "Google AI Mode", url: "https://google.com/aimode" },
            { name: "Learn About", url: "https://learning.google.com/experiments/learn-about", tag: "Edukacja" },
            { name: "LMArena (Search)", url: "https://lmarena.ai/?mode=direct&chat-modality=search", tag: "No Sign-Up", isStarred: true },
            { name: "Perplexica", url: "https://github.com/ItzCrazyKns/Perplexica", tag: "Self-Hosted" },
            { name: "Perplexity", url: "https://www.perplexity.ai/", tag: "AI Search Engine", isStarred: true },
          ]
        },
        {
          title: "Chatboty do Dokumentów i Badań",
          links: [
            { name: "AskYourPDF", url: "https://askyourpdf.com/" },
            { name: "Bohrium", url: "https://www.bohrium.com/", tag: "Badania naukowe" },
            { name: "ChatPDF", url: "https://www.chatpdf.com/", tag: "PDF Chatbot" },
            { name: "DocsGPT", url: "https://www.docsgpt.cloud/" },
            { name: "Elicit", url: "https://elicit.com/", tag: "Badania naukowe" },
            { name: "Hyperspace", url: "https://hyper.space/" },
            { name: "NotebookLM", url: "https://notebooklm.google/", tag: "Notatki / Dokumenty", isStarred: true },
            { name: "Onyx", url: "https://www.onyx.app/" },
            { name: "PrivateGPT", url: "https://privategpt.dev/", tag: "Lokalne", isStarred: true },
            { name: "Scinito", url: "https://ekb.scinito.ai/ai/chat" },
            { name: "SciSpace", url: "https://scispace.com/", tag: "Badania naukowe" },
          ]
        },
        {
          title: "Roleplaying Chatboty (Online)",
          links: [
            { name: "4thWall AI", url: "https://beta.4wall.ai/" },
            { name: "AI Dungeon", url: "https://aidungeon.com/" },
            { name: "Character.AI", url: "https://character.ai/", isStarred: true },
            { name: "FictionLab", url: "https://fictionlab.ai/" },
            { name: "FlowGPT", url: "https://flowgpt.com", isStarred: true },
            { name: "JanitorAI", url: "https://janitorai.com/" },
            { name: "WyvernChat", url: "https://app.wyvern.chat/" },
          ]
        },
      ]
    },
    {
        id: "lokalne-ai",
        title: "🖥️ Lokalne AI i Self-Hosting",
        subsections: [
            {
                title: "Frontendy i Aplikacje Desktopowe",
                links: [
                    { name: "ch.at", url: "https://github.com/Deep-ai-inc/ch.at" },
                    { name: "Chatbot UI", url: "https://chatbotui.com" },
                    { name: "Cherry Studio", url: "https://github.com/CherryHQ/cherry-studio" },
                    { name: "GPT4Free", url: "https://github.com/xtekky/gpt4free" },
                    { name: "LobeChat", url: "https://lobechat.com/chat" },
                    { name: "Msty", url: "https://msty.app/", tag: "Run Models Locally" },
                    { name: "Noi", url: "https://noib.app/" },
                    { name: "Open WebUI", url: "https://openwebui.com/", isStarred: true },
                    { name: "SillyTavern", url: "https://docs.sillytavern.app/", tag: "Roleplaying UI", isStarred: true },
                    { name: "tgpt", url: "https://github.com/aandrew-me/tgpt" },
                ]
            },
            {
                title: "Narzędzia do Self-Hostingu LLM",
                links: [
                    { name: "AnythingLLM", url: "https://anythingllm.com/" },
                    { name: "Aphrodite Engine", url: "https://aphrodite.pygmalion.chat/" },
                    { name: "ChatRTX", url: "https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/", tag: "RTX 30+ Only" },
                    { name: "GPT4All", url: "https://www.nomic.ai/gpt4all" },
                    { name: "Jan", url: "https://jan.ai/", tag: "Self-Hosted", isStarred: true },
                    { name: "KoboldCpp", url: "https://github.com/LostRuins/koboldcpp", tag: "API + GUI", isStarred: true },
                    { name: "Leon", url: "https://getleon.ai/" },
                    { name: "LibreChat", url: "https://librechat.ai/" },
                    { name: "llama.cpp", url: "https://github.com/ggerganov/llama.cpp", isStarred: true },
                    { name: "llamafile", url: "https://github.com/Mozilla-Ocho/llamafile", tag: "Single Files" },
                    { name: "LM Studio", url: "https://lmstudio.ai/", tag: "Self-Hosted", isStarred: true },
                    { name: "LoLLMs Web UI", url: "https://github.com/ParisNeo/lollms-webui" },
                    { name: "oobabooga", url: "https://github.com/oobabooga/text-generation-webui", tag: "WebUI", isStarred: true },
                    { name: "Ollama", url: "https://ollama.com/", tag: "CLI / Server" },
                    { name: "Petals", url: "https://petals.dev/" },
                ]
            }
        ]
    },
    {
        id: "generowanie-wideo",
        title: "🎬 Generowanie Wideo",
        links: [
            { name: "AI Studio (Veo 2)", url: "https://aistudio.google.com/generate-video", tag: "Google", isStarred: true },
            { name: "Bing Create", url: "https://www.bing.com/images/create", tag: "Sora" },
            { name: "Dreamina", url: "https://dreamina.capcut.com/ai-tool/home", tag: "150 Monthly" },
            { name: "Eggnog", url: "https://www.eggnog.ai/" },
            { name: "FastVideo", url: "https://fastwan.fastvideo.org/" },
            { name: "FramePack", url: "https://github.com/colinurbs/FramePack-Studio" },
            { name: "Genmo", url: "https://www.genmo.ai/", tag: "30 Monthly" },
            { name: "Hailuo AI", url: "https://hailuoai.video/", tag: "Unlimited" },
            { name: "LMArena", url: "https://discord.com/invite/lmarena" },
            { name: "PixVerse", url: "https://pixverse.ai/", tag: "2 Daily" },
            { name: "Qwen", url: "https://chat.qwen.ai/", tag: "10 Daily" },
            { name: "Vidu", url: "https://www.vidu.studio/", tag: "10 Monthly" },
            { name: "Vivago", url: "https://vivago.ai/", tag: "1 Daily" },
            { name: "Wan AI", url: "https://wan.video/", tag: "Image to Video" },
        ]
    },
    {
        id: "generowanie-obrazow",
        title: "🎨 Generowanie Obrazów",
        subsections: [
            {
                title: "Online Generatory",
                links: [
                    { name: "AI Gallery", url: "https://aigallery.app/" },
                    { name: "AI Studio (Imagen 4)", url: "https://aistudio.google.com/generate-image", tag: "Google", isStarred: true },
                    { name: "AIGazou", url: "https://muryou-aigazou.com/" },
                    { name: "Art Genie", url: "https://artgenie.pages.dev/" },
                    { name: "Bing Create", url: "https://www.bing.com/images/create", tag: "GPT-4o" },
                    { name: "Coze", url: "https://space.coze.cn/", tag: "Seadream 4.0" },
                    { name: "Dreamina", url: "https://dreamina.capcut.com/ai-tool/home", tag: "60 Daily" },
                    { name: "Ernie", url: "https://ernie.baidu.com/" },
                    { name: "FLUX.1 Schnell", url: "https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell", tag: "No Sign-Up", isStarred: true },
                    { name: "Genspark", url: "https://www.genspark.ai/" },
                    { name: "Grok", url: "https://grok.com/", tag: "20/2h", isStarred: true },
                    { name: "ImageFX (Imagen 3)", url: "https://labs.google/fx/tools/image-fx", tag: "Google", isStarred: true },
                    { name: "Imgsys", url: "https://imgsys.org/", tag: "Compare Generators" },
                    { name: "Interactive Scenes", url: "https://lumalabs.ai/interactive-scenes" },
                    { name: "ISH", url: "https://ish.junioralive.in/" },
                    { name: "Loras", url: "https://www.loras.dev/" },
                    { name: "Mage.space", url: "https://www.mage.space/", tag: "Flux Schnell", isStarred: true },
                    { name: "Perchance", url: "https://perchance.org/ai-text-to-image-generator", tag: "Unlimited" },
                    { name: "PigenAI", url: "https://pigenai.onrender.com/", tag: "Imagen 4" },
                    { name: "PixelArtGenerator", url: "https://pixelartgenerator.app/" },
                    { name: "Qwen", url: "https://chat.qwen.ai/", tag: "30/24h", isStarred: true },
                    { name: "Recraft", url: "https://www.recraft.ai/", tag: "30 Daily" },
                    { name: "Remade AI", url: "https://app.remade.ai/", tag: "Multiple Models" },
                    { name: "Reve Image", url: "https://preview.reve.art/", tag: "20 Daily" },
                    { name: "Text2Image", url: "https://taterai.github.io/Text2Image-Generator.html" },
                    { name: "Yupp.ai", url: "https://yupp.ai/", tag: "Google Login" },
                ]
            },
            {
                title: "Lokalne Frontendy do Generowania Obrazów",
                links: [
                    { name: "Amuse", url: "https://www.amuse-ai.com/", tag: "AMD Systems" },
                    { name: "Automatic1111", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", isStarred: true },
                    { name: "biniou", url: "https://github.com/Woolverine94/biniou" },
                    { name: "ComfyUI", url: "https://github.com/comfyanonymous/ComfyUI", isStarred: true },
                    { name: "ComfyUI-Zluda", url: "https://github.com/patientx/ComfyUI-Zluda" },
                    { name: "DiffusionBee", url: "https://diffusionbee.com/", tag: "Mac" },
                    { name: "Easy Diffusion", url: "https://easydiffusion.github.io/" },
                    { name: "Fooocus", url: "https://github.com/lllyasviel/Fooocus", isStarred: true },
                    { name: "InvokeAI", url: "https://invoke-ai.github.io/InvokeAI/", isStarred: true },
                    { name: "Makeayo", url: "https://makeayo.com" },
                    { name: "Mochi Diffusion", url: "https://github.com/MochiDiffusion/MochiDiffusion", tag: "Mac" },
                    { name: "Radiata", url: "https://ddpn08.github.io/Radiata/en/" },
                    { name: "SD WebUI Forge", url: "https://github.com/lllyasviel/stable-diffusion-webui-forge" },
                    { name: "Stability Matrix", url: "https://lykos.ai/", isStarred: true },
                    { name: "StableStudio", url: "https://github.com/Stability-AI/StableStudio" },
                    { name: "Sygil WebUI", url: "https://sygil-dev.github.io/sygil-webui/" },
                ]
            },
            {
                title: "Narzędzia i Poradniki do Obrazów",
                links: [
                    { name: "A Traveler's Guide to the Latent Space", url: "https://sweet-hall-e72.notion.site/A-Traveler-s-Guide-to-the-Latent-Space-85efba7e5e6a40e5bd3cae980f30235f" },
                    { name: "AI Horde", url: "https://stablehorde.net/", tag: "GPU Hoarde" },
                    { name: "Civitai", url: "https://civitai.com/", tag: "SD Model Index", isStarred: true },
                    { name: "Generative AI for Beginners", url: "https://microsoft.github.io/generative-ai-for-beginners/" },
                    { name: "Genie", url: "https://lumalabs.ai/genie", tag: "3D Image Gen" },
                    { name: "Illusion Diffusion", url: "https://huggingface.co/spaces/AP123/IllusionDiffusion", tag: "Artwork Gen" },
                    { name: "ImagePromptGuru", url: "https://imagepromptguru.net/", tag: "Determine Prompts" },
                    { name: "IOPaint", url: "https://www.iopaint.com/", tag: "Image Fill" },
                    { name: "Paper2GUI", url: "https://github.com/Baiyuetribe/paper2gui/blob/main/README_en.md" },
                    { name: "Prompy", url: "https://www.prompy.me/", tag: "Prompt Index", isStarred: true },
                    { name: "SD Dynamic Prompts", url: "https://github.com/adieyal/sd-dynamic-prompts" },
                    { name: "Unstable Diffusion", url: "https://discord.com/invite/unstablediffusion" },
                ]
            }
        ]
    },
    {
        id: "generowanie-audio",
        title: "🎵 Generowanie Audio",
        subsections: [
            {
                title: "Generatory Muzyki i Dźwięku (Online)",
                links: [
                    { name: "AI Jukebox", url: "https://huggingface.co/spaces/enzostvs/ai-jukebox" },
                    { name: "AIVA", url: "https://aiva.ai/" },
                    { name: "audio visual generator", url: "https://fredericbriolet.com/avg/" },
                    { name: "Boomy", url: "https://boomy.com/" },
                    { name: "Eapy", url: "https://home.eapy.io/" },
                    { name: "Fake Music Generator", url: "https://www.fakemusicgenerator.com/" },
                    { name: "Melobytes", url: "https://melobytes.com/en" },
                    { name: "MMAudio", url: "https://hkchengrex.com/MMAudio/", tag: "Audio for Video" },
                    { name: "Mubert", url: "https://mubert.com/" },
                    { name: "MusicFX", url: "https://labs.google/fx/tools/music-fx" },
                    { name: "MusicGen", url: "https://huggingface.co/spaces/facebook/MusicGen", tag: "No Sign-Up" },
                    { name: "Pack Generator", url: "https://output.com/products/pack-generator" },
                    { name: "Sonauto", url: "https://sonauto.ai/", tag: "Unlimited" },
                    { name: "SOUNDRAW", url: "https://soundraw.io/", tag: "No Sign-Up" },
                    { name: "Stable Audio", url: "https://www.stableaudio.com/", tag: "10 Monthly" },
                    { name: "Suno", url: "https://suno.com/", tag: "Muzyka", isStarred: true },
                    { name: "Udio", url: "https://www.udio.com/", tag: "Muzyka" },
                    { name: "Waveformer", url: "https://waveformer.replicate.dev/" },
                    { name: "WolframTones", url: "https://tones.wolfram.com/", tag: "No Sign-Up" },
                    { name: "WOMBO", url: "https://www.wombo.ai/" },
                ]
            },
            {
                title: "Text-to-Speech (TTS) (Online i Lokalne)",
                links: [
                    { name: "AnyVoiceLab", url: "https://anyvoicelab.com/long-form-text-to-speech-converter/" },
                    { name: "Audio-WebUI", url: "https://github.com/gitmylo/audio-webui" },
                    { name: "Bark", url: "https://github.com/suno-ai/bark", tag: "Lokalnie" },
                    { name: "Cartesia", url: "https://play.cartesia.ai/" },
                    { name: "Chatterbox", url: "https://huggingface.co/spaces/ResembleAI/Chatterbox" },
                    { name: "ElevenLabs", url: "https://elevenlabs.io/", tag: "Online", isStarred: true },
                    { name: "EmotiVoice", url: "https://github.com/netease-youdao/EmotiVoice" },
                    { name: "FakeYou", url: "https://fakeyou.com/", tag: "No Sign-Up" },
                    { name: "Fish Audio", url: "https://fish.audio/" },
                    { name: "FreeTTS", url: "https://freetts.com/" },
                    { name: "Google Illuminate", url: "https://illuminate.google.com/" },
                    { name: "Google Speech Gen", url: "https://aistudio.google.com/generate-speech" },
                    { name: "GPT-SoVITS", url: "https://github.com/RVC-Boss/GPT-SoVITS", tag: "Lokalnie" },
                    { name: "Hume", url: "https://www.hume.ai/" },
                    { name: "Kokoro TTS", url: "https://huggingface.co/spaces/hexgrad/Kokoro-TTS" },
                    { name: "Kokoro-82M", url: "https://huggingface.co/hexgrad/Kokoro-82M" },
                    { name: "Kyutai TTS", url: "https://kyutai.org/next/tts" },
                    { name: "LazyPy", url: "https://lazypy.ro/tts/" },
                    { name: "LOVO", url: "https://lovo.ai/" },
                    { name: "Moe TTS", url: "https://huggingface.co/spaces/skytnt/moe-tts" },
                    { name: "NaturalReaders", url: "https://www.naturalreaders.com/online/" },
                    { name: "Ondoku", url: "https://ondoku3.com/en/", tag: "No Sign-Up" },
                    { name: "SoundofText", url: "https://soundoftext.com/" },
                    { name: "Speechma", url: "https://speechma.com/" },
                    { name: "Tortoise TTS", url: "https://github.com/neonbjb/tortoise-tts", tag: "Lokalnie" },
                    { name: "TTS Online", url: "https://www.text-to-speech.online/", tag: "No Sign-Up", isStarred: true },
                    { name: "TTSOpenAI", url: "https://ttsopenai.com/", tag: "OpenAI's Bot" },
                    { name: "Uberduck", url: "https://uberduck.ai/" },
                    { name: "VanillaVoice", url: "https://www.vanillavoice.com/" },
                    { name: "VoiceCraft", url: "https://github.com/jasonppy/VoiceCraft" },
                ]
            },
            {
                title: "Zmiana, Klonowanie Głosu i AI Covers (Lokalnie)",
                links: [
                    { name: "AllVoiceLab", url: "https://www.allvoicelab.com/" },
                    { name: "AnyVoiceLab", url: "https://anyvoicelab.com/voice-cloning/" },
                    { name: "Applio", url: "https://applio.org/", tag: "Polecane", isStarred: true },
                    { name: "Replay", url: "https://www.weights.com/replay" },
                    { name: "RVC V2 GUI", url: "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI", tag: "WebUI", isStarred: true },
                    { name: "Voice Changer", url: "https://github.com/w-okada/voice-changer", tag: "Real-Time", isStarred: true },
                    { name: "Voice Models", url: "https://voice-models.com/", tag: "Modele" },
                    { name: "Weights", url: "https://weights.com/", tag: "Modele" },
                    { name: "Zyphra", url: "https://playground.zyphra.com/audio" },
                ]
            },
            {
                title: "Separacja Audio i Transkrypcja",
                links: [
                    { name: "ezstems", url: "https://ezstems.com/" },
                    { name: "mazmazika", url: "https://www.mazmazika.com/" },
                    { name: "MDX23", url: "https://github.com/jarredou/MVSEP-MDX23-Colab_v2" },
                    { name: "MVSEP", url: "https://mvsep.com/", tag: "Online", isStarred: true },
                    { name: "Music-Source-Separation", url: "https://github.com/jarredou/Music-Source-Separation-Training-Colab-Inference" },
                    { name: "Remove Vocals", url: "https://www.remove-vocals.com/" },
                    { name: "Splitter", url: "https://www.bandlab.com/splitter", tag: "Online" },
                    { name: "Ultimate Vocal Remover", url: "https://colab.research.google.com/github/NaJeongMo/Colaboratory-Notebook-for-Ultimate-Vocal-Remover/blob/main/Vocal%20Remover%205_arch.ipynb" },
                    { name: "UVR5 UI", url: "https://huggingface.co/spaces/Eddycrack864/UVR5-UI" },
                    { name: "vocali", url: "https://vocali.se/en" },
                    { name: "VocalRemover", url: "https://vocalremover.org/", tag: "Online" },
                ]
            }
        ]
    },
    {
        id: "ai-do-kodowania",
        title: "💻 AI do Kodowania",
        links: [
            { name: "AI SDK", url: "https://sdk.vercel.ai/" },
            { name: "Aider", url: "https://aider.chat/", tag: "Terminal" },
            { name: "AnyCoder", url: "https://huggingface.co/spaces/akhaliq/anycoder" },
            { name: "Blackbox", url: "https://www.blackbox.ai/" },
            { name: "Bolt.new", url: "https://bolt.new/" },
            { name: "Cline", url: "https://cline.bot/" },
            { name: "Codacy", url: "https://www.codacy.com/" },
            { name: "Continue", url: "https://continue.dev/" },
            { name: "Cursor", url: "https://rentry.co/FMHYBase64#cursor" },
            { name: "DeepSite", url: "https://huggingface.co/spaces/enzostvs/deepsite" },
            { name: "Denigma", url: "https://denigma.app/" },
            { name: "Devv", url: "https://devv.ai/", tag: "Wyszukiwarka" },
            { name: "Fragments", url: "https://fragments.e2b.dev/" },
            { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
            { name: "GitWit", url: "https://gitwit.dev/" },
            { name: "imgcook", url: "https://imgcook.com" },
            { name: "Llama Coder", url: "https://llamacoder.together.ai/", tag: "Code Generator" },
            { name: "Open Interpreter", url: "https://github.com/OpenInterpreter/open-interpreter", tag: "Run Code Locally" },
            { name: "OpenHands", url: "https://www.all-hands.dev/" },
            { name: "Pieces", url: "https://pieces.app/", tag: "Multi-LLM", isStarred: true },
            { name: "Qodo", url: "https://www.qodo.ai/" },
            { name: "Qwen Code", url: "https://github.com/QwenLM/qwen-code" },
            { name: "Roo Code", url: "https://roocode.com/" },
            { name: "Rork", url: "https://rork.com/" },
            { name: "Seron", url: "https://www.seron.dev/" },
            { name: "Sourcery", url: "https://sourcery.ai/", tag: "Pull Request Reviews" },
            { name: "Supermaven", url: "https://supermaven.com/" },
            { name: "v0", url: "https://v0.dev/", tag: "Text to Site Code" },
            { name: "Windsurf", url: "https://www.windsurf.com/", isStarred: true },
        ]
    },
    {
        id: "narzedzia-do-pisania",
        title: "✍️ Narzędzia do Pisania AI",
        links: [
            { name: "Dreamily", url: "https://dreamily.ai/", tag: "Story Writing" },
            { name: "INK", url: "https://app.inkforall.com/tools" },
            { name: "PerchanceStory", url: "https://perchancestory.com/", tag: "Story Writing" },
            { name: "Quarkle", url: "https://quarkle.ai/", tag: "Writing Assistant" },
            { name: "QuickPen AI", url: "https://quickpenai.com/" },
            { name: "Rytr", url: "https://rytr.me/", tag: "Creative Writing" },
            { name: "Scrip AI", url: "https://scripai.com/", tag: "No Sign-Up" },
            { name: "TextFX", url: "https://textfx.withgoogle.com/", tag: "Creative Writing", isStarred: true },
        ]
    },
    {
        id: "narzedzia-ogolne",
        title: "🛠️ Narzędzia Ogólne AI",
        links: [
            { name: "AI Piracy Resources", url: "https://rentry.org/aipiracyresources" },
            { name: "Awesome ChatGPT (sindresorhus)", url: "https://github.com/sindresorhus/awesome-chatgpt", tag: "Resources", isStarred: true },
            { name: "ChatGPT DeMod", url: "https://github.com/4as/ChatGPT-DeMod" },
            { name: "ChatGPT Exporter", url: "https://greasyfork.org/en/scripts/456055", tag: "Export Chats" },
            { name: "ChatGPT Widescreen", url: "https://chatgptevo.com/widescreen/" },
            { name: "Concierge", url: "https://askconcierge.ai/" },
            { name: "Every ChatGPT GUI", url: "https://github.com/billmei/every-chatgpt-gui", tag: "GUI Index", isStarred: true },
            { name: "Free LLM API Resources", url: "https://github.com/cheahjs/free-llm-api-resources", tag: "API", isStarred: true },
            { name: "GPThemes", url: "https://github.com/itsmartashub/GPThemes" },
            { name: "LLM", url: "https://llm.datasette.io/" },
            { name: "LLM Model VRAM Calculator", url: "https://huggingface.co/spaces/NyxKrage/LLM-Model-VRAM-Calculator" },
            { name: "MassiveMark", url: "https://www.bibcit.com/en/massivemark" },
            { name: "Page Assist", url: "https://github.com/n4ze3m/page-assist", tag: "Extension" },
            { name: "screenpipe", url: "https://screenpi.pe/", tag: "Screen Recorder" },
            { name: "tldraw computer", url: "https://computer.tldraw.com/", tag: "Workflows" },
            { name: "Voice Control", url: "https://voicecontrol.chat/" },
        ]
    },
    {
        id: "prompty-i-poradniki",
        title: "📜 AI Prompty i Poradniki",
        links: [
            { name: "AI Model Bypass", url: "https://github.com/l0gicx/ai-model-bypass?tab=readme-ov-file#-chatgpt", tag: "Prompt Jailbreak", isStarred: true },
            { name: "BlackFriday GPTs Prompts", url: "https://github.com/friuns2/BlackFriday-GPTs-Prompts", tag: "Prompt Directory", isStarred: true },
            { name: "Bot Creation Guide", url: "https://wikia.schneedc.com/bot-creation/intro" },
            { name: "ChatGPT & Bing AI Prompts", url: "https://github.com/yokoffing/ChatGPT-Prompts" },
            { name: "ChatGPT System Prompt", url: "https://github.com/LouisShark/chatgpt_system_prompt", tag: "Prompt Directory" },
            { name: "Chub", url: "https://chub.ai/" },
            { name: "Gandalf", url: "https://gandalf.lakera.ai/", tag: "Prompting Games" },
            { name: "Gobble Bot", url: "https://gobble.bot/" },
            { name: "Jailbreak Listings", url: "https://rentry.org/jb-listing", tag: "Prompt Directory" },
            { name: "L1B3RT4S", url: "https://github.com/elder-plinius/L1B3RT4S", tag: "Jailbreak Prompts", isStarred: true },
            { name: "Leaked Prompts", url: "https://github.com/linexjlin/GPTs" },
            { name: "promptfoo", url: "https://www.promptfoo.dev/" },
            { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai", tag: "Poradnik", isStarred: true },
            { name: "r/ChatGPTJailbreak", url: "https://www.reddit.com/r/ChatGPTJailbreak/", tag: "Community" },
            { name: "RedTeam Arena", url: "https://redarena.ai/" },
            { name: "Tensor Trust", url: "https://tensortrust.ai/", tag: "Prompting Games" },
            { name: "The Big Prompt Library", url: "https://github.com/0xeb/TheBigPromptLibrary" },
        ]
    },
    {
        id: "indeksy-i-katalogi",
        title: "🗂️ Indeksy i Katalogi AI",
        links: [
            { name: "ArtificialStudio", url: "https://app.artificialstudio.ai/tools" },
            { name: "Awesome AI Tools", url: "https://github.com/mahseema/awesome-ai-tools", tag: "AI Directory" },
            { name: "FutureTools", url: "https://www.futuretools.io/?pricing-model=free", tag: "AI Directory", isStarred: true },
            { name: "Google Labs", url: "https://labs.google/", tag: "AI Experiments", isStarred: true },
            { name: "GPT Demo", url: "https://www.gptdemo.net/gpt/search?lg=en&cate=&keywords=&tags=free,&sort=popular" },
            { name: "It's Better With AI", url: "https://itsbetterwithai.com/" },
            { name: "LifeArchitect", url: "https://lifearchitect.ai/models-table/", tag: "LLM Database", isStarred: true },
            { name: "LLM Explorer", url: "https://llm-explorer.com/", tag: "LLM Database", isStarred: true },
            { name: "LLM Pricing", url: "https://docs.google.com/spreadsheets/d/18GHPEBJzDbICmMStPVkNWA_hQHiWmLcqUdEJA1b4MJM/", tag: "Ceny LLM" },
            { name: "LLM Resources Hub", url: "https://llmresourceshub.vercel.app/", tag: "AI Directory" },
            { name: "Perchance", url: "https://perchance.org/generators" },
            { name: "YP for AI", url: "https://www.ypforai.com", tag: "AI Directory" },
        ]
    },
    {
        id: "benchmarki-ai",
        title: "📊 Benchmarki AI",
        subsections: [
            {
                title: "Chatboty",
                links: [
                    { name: "AI Elo", url: "https://aielo.co/", tag: "AI Game Competitions" },
                    { name: "Artificial Analysis", url: "https://artificialanalysis.ai/", tag: "Chatbot Benchmarks", isStarred: true },
                    { name: "EQ-Bench", url: "https://eqbench.com/" },
                    { name: "Kaggle Benchmarks", url: "https://www.kaggle.com/benchmarks" },
                    { name: "LMArena Leaderboard", url: "https://lmarena.ai/leaderboard", tag: "Chatbot Leaderboards", isStarred: true },
                    { name: "LLM Stats", url: "https://llm-stats.com/" },
                    { name: "MathArena", url: "https://matharena.ai/" },
                    { name: "Open VLM Leaderboard", url: "https://huggingface.co/spaces/opencompass/open_vlm_leaderboard" },
                    { name: "OpenLM Arena", url: "https://openlm.ai/chatbot-arena/" },
                    { name: "OpenRouter", url: "https://openrouter.ai/rankings" },
                    { name: "RankedAGI", url: "https://rankedagi.com/" },
                    { name: "SEAL LLM Leaderboards", url: "https://scale.com/leaderboard" },
                    { name: "Simple Bench", url: "https://simple-bench.com/" },
                    { name: "Unified-Bench", url: "https://docs.google.com/spreadsheets/d/1Dy64rbMzx5xqTLPsbTKhpUKQS0mvjns2nIS9BWvOCTU/" },
                    { name: "WildBench", url: "https://huggingface.co/spaces/allenai/WildBench" },
                    { name: "Wolfram LLM Benchmarking Project", url: "https://www.wolfram.com/llm-benchmarking-project/" },
                    { name: "ZeroEval", url: "https://huggingface.co/spaces/allenai/ZeroEval" },
                ]
            },
            {
                title: "Kodowanie AI",
                links: [
                    { name: "AIBenchmarks", url: "https://aibenchmarks.net/" },
                    { name: "Aider LLM Leaderboards", url: "https://aider.chat/docs/leaderboards/" },
                    { name: "Big Code Models Leaderboard", url: "https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard" },
                    { name: "EvalPlus Leaderboard", url: "https://evalplus.github.io/leaderboard.html", tag: "Coding AI", isStarred: true },
                    { name: "LiveCodeBench", url: "https://livecodebench.github.io/leaderboard.html" },
                    { name: "LiveSWEBench", url: "https://liveswebench.ai/", tag: "Software Engineering AI", isStarred: true },
                    { name: "multi-swe-bench", url: "https://github.com/multi-swe-bench/multi-swe-bench" },
                    { name: "SWEBench", url: "https://www.swebench.com/" },
                    { name: "WebDev Arena", url: "https://web.lmarena.ai/" },
                ]
            }
        ]
    },
    {
        id: "uczenie-maszynowe",
        title: "🧠 Uczenie Maszynowe",
        links: [
            { name: "Machine Learning", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/dev-tools#wiki_.25B7_machine_learning" }
        ]
    }
  ],
  infoBoxes: [
    {
        type: 'info',
        title: '💡 Dobre praktyki',
        items: [
            '<strong>Prywatność przede wszystkim:</strong> Do obsługi prywatnych danych używaj modeli działających lokalnie (LM Studio, Jan, Ollama).',
            '<strong>Rejestracja:</strong> Używaj [tymczasowych maili](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools/#wiki_.25B7_temp_mail) lub [aliasów](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools/#wiki_.25B7_email_aliasing) przy rejestracji w serwisach online.',
            '<strong>Jakość odpowiedzi:</strong> Jeśli jeden model nie daje satysfakcjonującej odpowiedzi, spróbuj zadać to samo pytanie innemu (np. przez LMArena).',
            '<strong>Prompt Engineering:</strong> Zobacz poradniki, aby nauczyć się pisać lepsze zapytania i uzyskiwać lepsze wyniki.'
        ]
    },
    {
        type: 'warning',
        title: '⚠️ Bezpieczeństwo i Prywatność',
        items: [
            'Nigdy nie wysyłaj osobistych, poufnych lub wrażliwych informacji do chatbotów działających w chmurze.',
            'Wiele serwisów wykorzystuje Twoje zapytania (prompty) do trenowania swoich modeli.',
            'Omijanie zabezpieczeń (tzw. "jailbreaking") jest wbrew regulaminom większości usług AI. Korzystasz z tego na własne ryzyko.'
        ]
    }
  ]
};