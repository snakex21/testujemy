const pageData = {
    featured: [
        { name: "uBlock Origin", url: "https://github.com/gorhill/uBlock", badge: "ADBLOCK", description: "Najlepszy bloker reklam dla przeglądarek, otwarte źródło" },
        { name: "Mullvad VPN", url: "https://mullvad.net/en", badge: "VPN PŁATNY", description: "Polecany do torrentów i maksymalnej prywatności (bez logów)" },
        { name: "Tor Browser", url: "https://www.torproject.org/", badge: "PRZEGLĄDARKA", description: "Dla anonimowego przeglądania internetu" },
        { name: "Privacy Guides", url: "https://www.privacyguides.org/", badge: "PORADNIK", description: "Obszerny przewodnik edukacyjny po prywatności" },
        { name: "Malwarebytes", url: "https://www.malwarebytes.com/", badge: "ANTYWIRUS", description: "Sprawdzony program antywirusowy i antymalware" },
    ],
    sections: [
        {
            id: "adblocking",
            title: "🛡️ Blokowanie Reklam (Adblocking)",
            infoBox: {
                title: "💡 Uwaga",
                items: [
                    "Nie uruchamiaj wielu ogólnych blokerów reklam jednocześnie (np. uBlock Origin i AdGuard), aby uniknąć problemów.",
                    "Łączenie ogólnych blokerów z narzędziami takimi jak SponsorBlock jest w porządku.",
                    "Jeśli napotkasz problemy ze stroną, spróbuj tymczasowo wyłączyć AdBlocker."
                ]
            },
            subsections: [
                {
                    title: "Blokery Przeglądarkowe",
                    links: [
                        { name: "AdBlock", url: "https://getadblock.com/" },
                        { name: "Adblock Plus", url: "https://adblockplus.org/" },
                        { name: "AdBlocker Ultimate", url: "https://github.com/AdBlocker-Ultimate/AdBlocker-Ultimate-for-Browsers" },
                        { name: "AdGuard Browser Extension", url: "https://github.com/AdguardTeam/AdguardBrowserExtension", isStarred: true },
                        { name: "AdGuard PopupBlocker Script", url: "https://github.com/AdguardTeam/PopupBlocker" },
                        { name: "AdNauseam (Klika reklamy)", url: "https://adnauseam.io/" },
                        { name: "Anti-Adblock Killer", url: "https://github.com/reek/anti-adblock-killer" },
                        { name: "BehindTheOverlay", url: "https://github.com/NicolaeNMV/BehindTheOverlay", tag: "Ukrywa nakładki" },
                        { name: "BilibiliSponsorBlock", url: "https://github.com/hanydd/BilibiliSponsorBlock" },
                        { name: "Discord Adblock", url: "https://github.com/CroissantDuNord/discord-adblock" },
                        { name: "Disblock Origin", url: "https://codeberg.org/AllPurposeMat/Disblock-Origin", tag: "Discord Ads" },
                        { name: "Fair AdBlocker", url: "https://standsapp.org/" },
                        { name: "FuckFuckAdblock", url: "https://github.com/bogachenko/fuckfuckadblock" },
                        { name: "Ghostery (Tracker blocker)", url: "https://www.ghostery.com/" },
                        { name: "I Don't Care About Cookies", url: "https://www.i-dont-care-about-cookies.eu/" },
                        { name: "I Still Don't Care About Cookies (Fork)", url: "https://github.com/OhMyGuus/I-Still-Dont-Care-About-Cookies" },
                        { name: "MinerBlock (Blokuje cryptominig)", url: "https://github.com/xd4rker/MinerBlock" },
                        { name: "Nano Defender (Anti-Adblock Defuser)", url: "https://github.com/LiCybora/NanoDefenderFirefox" },
                        { name: "No Coin (Anti-Miner)", url: "https://github.com/keraf/NoCoin" },
                        { name: "NoCoin Filter List", url: "https://github.com/hoshsadiq/adblock-nocoin-list" },
                        { name: "PopUpOFF", url: "https://popupoff.org/" },
                        { name: "Popup Blocker (strict)", url: "https://github.com/schomery/popup-blocker" },
                        { name: "Popupblocker All", url: "https://addons.mozilla.org/en-US/firefox/addon/popupblockerall/" },
                        { name: "SponsorBlock", url: "https://sponsor.ajay.app/", tag: "YouTube Ads", isStarred: true },
                        { name: "SponsorBlock Bookmarklet", url: "https://github.com/mchangrh/sb.js" },
                        { name: "uBlock Origin", url: "https://github.com/gorhill/uBlock", tag: "Polecane", isStarred: true },
                        { name: "uBlock Origin Resources Library", url: "https://github.com/uBlockOrigin/uBlock-issues/wiki/Resources-Library" },
                        { name: "uBO Lite (mv3)", url: "https://github.com/uBlockOrigin/uBOL-home" },
                        { name: "uBO-Extra (Chromium)", url: "https://github.com/gorhill/uBO-Extra" }
                    ]
                },
                {
                    title: "Listy Filtrów i Hosty",
                    links: [
                        { name: "1Hosts (Lite/Pro/Xtra)", url: "https://github.com/badmojr/1Hosts" },
                        { name: "AdGuard Filters", url: "https://github.com/AdguardTeam/AdguardFilters" },
                        { name: "Dan Pollock's Hosts", url: "https://someonewhocares.org/hosts/" },
                        { name: "EasyList", url: "https://easylist.to/" },
                        { name: "Fanboy's Lists", url: "https://www.fanboy.co.nz/" },
                        { name: "FilterLists", url: "https://filterlists.com/", tag: "Katalog" },
                        { name: "FMHY Filterlist", url: "https://github.com/fmhy/FMHYFilterlist", tag: "Unsafe Sites" },
                        { name: "Hagezi Blocklists", url: "https://github.com/hagezi/dns-blocklists", tag: "Kolekcja" },
                        { name: "LegitimateURLShortener", url: "https://github.com/DandelionSprout/adfilt/blob/master/LegitimateURLShortener.txt", tag: "Query Parameter Cleaning", isStarred: true },
                        { name: "Polish Annoyance Filters", url: "https://github.com/FiltersHeroes/PolishAnnoyanceFilters" },
                        { name: "Polskie Filtry (MajkiIT)", url: "https://github.com/MajkiIT/polish-ads-filter" },
                        { name: "Steven Black's Hosts", url: "https://github.com/StevenBlack/hosts" }
                    ]
                },
                {
                    title: "DNS Blokujące Reklamy (Publiczne i Self-Hosted)",
                    links: [
                        { name: "AdGuard DNS", url: "https://adguard-dns.io/", tag: "Darmowe" },
                        { name: "AdGuard Home", url: "https://adguard.com/en/adguard-home/overview.html", tag: "Self-Hosted", isStarred: true },
                        { name: "Blocky", url: "https://0xerr0r.github.io/blocky/latest/", tag: "Self-Hosted" },
                        { name: "CleanBrowsing DNS", url: "https://cleanbrowsing.org/" },
                        { name: "Control D", url: "https://controld.com/free-dns", tag: "Konfigurowalne" },
                        { name: "DNS.Watch", url: "https://dns.watch/" },
                        { name: "DNSCrypt", url: "https://dnscrypt.info/", tag: "Szyfrowanie" },
                        { name: "LibreDNS", url: "https://libredns.gr/", tag: "No Log" },
                        { name: "Mullvad DNS", url: "https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/", tag: "Filtering", isStarred: true },
                        { name: "NextDNS", url: "https://nextdns.io", tag: "Konfigurowalne" },
                        { name: "OpenDNS", url: "https://www.opendns.com/" },
                        { name: "Phishing Army", url: "https://phishing.army/" },
                        { name: "Pi-Hole", url: "https://pi-hole.net/", tag: "Self-Hosted", isStarred: true },
                        { name: "Quad9 DNS (9.9.9.9)", url: "https://www.quad9.net/" },
                        { name: "RethinkDNS", url: "https://rethinkdns.com/" },
                        { name: "Technitium", url: "https://technitium.com/dns", tag: "Self-Hosted DNS Server" },
                        { name: "The Firebog", url: "https://firebog.net/", tag: "Pi-hole lists" },
                        { name: "Tiarap", url: "https://github.com/hiddify/tiarap" },
                        { name: "YogaDNS", url: "https://yogadns.com/", tag: "Windows Client" }
                    ]
                },
                {
                    title: "Mobilne Blokery Reklam",
                    links: [
                        { name: "AdAway", url: "https://adaway.org/", tag: "Android (Root)" },
                        { name: "AdGuard for Android", url: "https://adguard.com/en/adguard-android/overview.html" },
                        { name: "AdGuard for iOS", url: "https://adguard.com/en/adguard-ios/overview.html" },
                        { name: "Blokada", url: "https://blokada.org/", tag: "Android/iOS" },
                        { name: "Brave Browser", url: "https://brave.com/download/", tag: "Built-in blocker" },
                        { name: "DNS66", url: "https://github.com/julian-klode/dns66", tag: "Android No-Root" },
                        { name: "NetGuard", url: "https://www.netguard.me/", tag: "Android Firewall" },
                        { name: "RethinkDNS + Firewall", url: "https://github.com/celzero/rethink-app", tag: "Android" }
                    ]
                },
                {
                    title: "Blokery dla Platform (YouTube, Spotify, Twitch, Discord)",
                    links: [
                        { name: "BlockTheSpot", url: "https://github.com/mrpond/BlockTheSpot", tag: "Spotify Windows" },
                        { name: "Discord Adblock", url: "https://github.com/CroissantDuNord/discord-adblock" },
                        { name: "Disblock Origin", url: "https://codeberg.org/AllPurposeMat/Disblock-Origin", tag: "Discord Ads" },
                        { name: "Purple AdBlock", url: "https://github.com/saucenaopls/Purple-adblock", tag: "Twitch" },
                        { name: "SponsorBlock", url: "https://sponsor.ajay.app/", tag: "YouTube Ads", isStarred: true },
                        { name: "SpotX", url: "https://github.com/SpotX-Official/SpotX", tag: "Spotify Mod" },
                        { name: "Twitch Ad Solutions", url: "https://github.com/pixeltris/TwitchAdSolutions" },
                        { name: "Twitch AdSkip", url: "https://github.com/twitchAdSkip/twitchAdSkip" },
                        { name: "uYou+", url: "https://github.com/uYouPlus/uYouPlus", tag: "iOS YouTube" },
                        { name: "YTLitePlus", url: "https://github.com/YTLitePlus/YTLitePlus", tag: "iOS YouTube" }
                    ]
                }
            ]
        },
        {
            id: "antivirus",
            title: "🚨 Antywirus i Anti-Malware",
            subsections: [
                {
                    title: "Antywirusy i Narzędzia Systemowe",
                    links: [
                        { name: "AdwCleaner", url: "https://www.malwarebytes.com/adwcleaner/", tag: "Anti-Adware", isStarred: true },
                        { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/forums/" },
                        { name: "ConfigureDefender", url: "https://github.com/AndyFul/ConfigureDefender", tag: "Windows Defender" },
                        { name: "ESET", url: "https://rentry.co/FMHYBase64#eset", tag: "Antivirus", isStarred: true },
                        { name: "ID Ransomware", url: "https://id-ransomware.malwarehunterteam.com/", tag: "Identification" },
                        { name: "Malwarebytes", url: "https://www.malwarebytes.com/", tag: "Antivirus", isStarred: true },
                        { name: "No More Ransom", url: "https://www.nomoreransom.org/en/decryption-tools.html", tag: "Ransomware Decryption" },
                        { name: "Telemetry.md", url: "https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89", tag: "Disable Windows Telemetry" }
                    ]
                },
                {
                    title: "Sandboxy i Maszyny Wirtualne",
                    links: [
                        { name: "Cuckoo", url: "https://cuckoo.cert.ee/", tag: "Online Sandbox" },
                        { name: "Dangerzone", url: "https://dangerzone.rocks/", tag: "Safe PDFs" },
                        { name: "Sandboxie Plus", url: "https://sandboxie-plus.com/", tag: "Sandbox Environment" },
                        { name: "SquareX", url: "https://public.sqrx.com/web", tag: "Browser Sandbox" },
                        { name: "Triage", url: "https://tria.ge/", tag: "Online Sandbox", isStarred: true },
                        { name: "Windows Sandbox", url: "https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview", tag: "VM Sandbox" }
                    ]
                },
                {
                    title: "Skanery Plików i Analiza Malware",
                    links: [
                        { name: "Farbar", url: "https://www.bleepingcomputer.com/download/farbar-recovery-scan-tool/", tag: "Local File Scanner" },
                        { name: "Filescan.io", url: "https://www.filescan.io/", tag: "Online File Scanner" },
                        { name: "Grype", url: "https://github.com/anchore/grype" },
                        { name: "Hybrid Analysis", url: "https://hybrid-analysis.com/", tag: "Online Sandbox", isStarred: true },
                        { name: "Jotti", url: "https://virusscan.jotti.org/en", tag: "Online File Scanner" },
                        { name: "Manalyzer", url: "https://manalyzer.org/", tag: "PE File Scanner" },
                        { name: "Microsoft Safety Scanner", url: "https://learn.microsoft.com/en-us/defender-endpoint/safety-scanner-download", tag: "On-demand AV" },
                        { name: "pyWhat", url: "https://github.com/bee-san/pyWhat" },
                        { name: "VirusTotal", url: "https://www.virustotal.com/", tag: "Online File Scanner", isStarred: true },
                        { name: "Winitor", url: "https://www.winitor.com/", tag: "EXE Malware Assessment" },
                        { name: "YARA", url: "https://virustotal.github.io/yara/", tag: "Malware Identification" }
                    ]
                },
                {
                    title: "Sprawdzanie Wiarygodności Stron",
                    links: [
                        { name: "FMHY LinkSafe Guard", url: "https://greasyfork.org/en/scripts/488855-fmhy-linksafe-guard" },
                        { name: "FMHY SafeGuard", url: "https://greasyfork.org/en/scripts/456388-fmhy-safeguard" },
                        { name: "IsLegitSite", url: "https://www.islegitsite.com/" },
                        { name: "ScamAdviser", url: "https://www.scamadviser.com/" },
                        { name: "Talos", url: "https://talosintelligence.com/" },
                        { name: "Trend Micro", url: "https://global.sitesafety.trendmicro.com/", isStarred: true },
                        { name: "URL Void", url: "https://www.urlvoid.com/", isStarred: true },
                        { name: "URLScan", url: "https://urlscan.io/", isStarred: true },
                        { name: "ZScaler", url: "https://zulu.zscaler.com/" }
                    ]
                }
            ]
        },
        {
            id: "privacy-general",
            title: "🔒 Prywatność (Ogólna)",
            subsections: [
                {
                    title: "Systemy Operacyjne Zorientowane na Prywatność",
                    links: [
                        { name: "HiddenVM", url: "https://github.com/aforensics/HiddenVM", tag: "VirtualBox for TailsOS" },
                        { name: "Qubes OS", url: "https://www.qubes-os.org/", tag: "Security OS", isStarred: true },
                        { name: "Tails", url: "https://tails.net/", tag: "Linux Live OS", isStarred: true },
                        { name: "Whonix", url: "https://www.whonix.org/", tag: "VM OS", isStarred: true }
                    ]
                },
                {
                    title: "Indeksy i Przewodniki Prywatności",
                    links: [
                        { name: "AvoidTheHack", url: "https://avoidthehack.com/", tag: "Educational Blog" },
                        { name: "Defensive Computing Checklist", url: "https://defensivecomputingchecklist.com/" },
                        { name: "Digital Defense", url: "https://digital-defense.io/", tag: "Personal Checklist" },
                        { name: "EncryptedList", url: "https://encryptedlist.xyz/", tag: "Encrypted Services" },
                        { name: "Hostux", url: "https://hostux.network/", tag: "Privacy Tools" },
                        { name: "Ken Harris", url: "https://cyber.kenharris.io/", tag: "Educational Guide" },
                        { name: "Lissy93's Awesome Privacy", url: "https://awesome-privacy.xyz/", tag: "App Lists" },
                        { name: "No Trace", url: "https://www.notrace.how/", tag: "Educational Guide", isStarred: true },
                        { name: "OPSEC guide", url: "https://whos-zycher.github.io/opsec-guide/" },
                        { name: "pluja's Awesome Privacy", url: "https://pluja.github.io/awesome-privacy/", tag: "App Lists" },
                        { name: "Privacy Guides", url: "https://www.privacyguides.org/", tag: "Educational Guide", isStarred: true },
                        { name: "Privacy Not Included", url: "https://www.mozillafoundation.org/en/privacynotincluded/", tag: "Product Ratings" },
                        { name: "Privacy Settings", url: "https://github.com/StellarSand/privacy-settings", tag: "Setting Guides" },
                        { name: "PrivSec", url: "https://privsec.dev/", tag: "Educational Guide" },
                        { name: "Surveillance Self-Defense", url: "https://ssd.eff.org/", tag: "Educational Guide", isStarred: true },
                        { name: "The Hitchhiker’s Guide", url: "https://anonymousplanet.org/", tag: "Online Anonymity", isStarred: true },
                        { name: "The New Oil", url: "https://thenewoil.org/", tag: "Educational Guide", isStarred: true }
                    ]
                },
                {
                    title: "Sieć i Bezpieczeństwo Połączeń",
                    links: [
                        { name: "DNSveil", url: "https://msasanmh.github.io/DNSveil/", tag: "DNS Client", isStarred: true },
                        { name: "Fort", url: "https://github.com/tnodir/fort", tag: "Firewall" },
                        { name: "I2P", url: "https://geti2p.net/en/", tag: "Encrypted Private Network" },
                        { name: "Safing Portmaster", url: "https://safing.io/", tag: "Network Monitor / Firewall", isStarred: true },
                        { name: "Simplewall", url: "https://github.com/henrypp/simplewall", tag: "Firewall" },
                        { name: "WFC", url: "https://www.binisoft.org/wfc.php", tag: "Firewall" },
                        { name: "XrayUIGroup", url: "https://github.com/MHSanaei/3x-ui", tag: "DIY Privacy Network" }
                    ]
                },
                {
                    title: "Prywatność Web i Przeglądarek",
                    links: [
                        { name: "arkenfox", url: "https://github.com/arkenfox/user.js", tag: "Firefox Privacy Tweak", isStarred: true },
                        { name: "Brave Browser", url: "https://brave.com/", tag: "Privacy Chromium" },
                        { name: "DNS Jumper", url: "https://www.sordum.org/7952/dns-jumper-v2-2/" },
                        { name: "Encrypted SNI", url: "https://www.cloudflare.com/ssl/encrypted-sni/", tag: "Cloudflare Check" },
                        { name: "Google Alt List", url: "https://www.techspot.com/article/2752-all-google-alternatives/", tag: "Alternatywy Google" },
                        { name: "JustDeleteMe", url: "https://justdeleteme.xyz/", tag: "Usuwanie kont", isStarred: true },
                        { name: "LibreWolf", url: "https://librewolf.net/", tag: "Privacy-Focused Firefox" },
                        { name: "mat2", url: "https://0xacab.org/jvoisin/mat2", tag: "Remove Metadata" },
                        { name: "Mullvad Browser", url: "https://mullvad.net/en/browser", tag: "Tor Fork", isStarred: true },
                        { name: "OpenPhish", url: "https://openphish.com/", tag: "Report Phishing" },
                        { name: "PeerTube", url: "https://joinpeertube.org/", tag: "Decentralized Video" },
                        { name: "Phoenix", url: "https://github.com/celenityy/Phoenix", tag: "Firefox Privacy Tweak" },
                        { name: "PrivacySpy", url: "https://privacyspy.org/", tag: "Privacy Policies", isStarred: true },
                        { name: "ToS;DR", url: "https://tosdr.org/", tag: "Terms of Service", isStarred: true },
                        { name: "Tor Browser", url: "https://www.torproject.org/", tag: "Onion-Routed", isStarred: true }
                    ]
                },
                {
                    title: "Prywatność Haseł i 2FA",
                    links: [
                        { name: "2FA Directory", url: "https://2fa.directory/", tag: "2FA Support List", isStarred: true },
                        { name: "2FAS", url: "https://2fas.com/", tag: "2FA Android, iOS" },
                        { name: "Aegis", url: "https://getaegis.app/", tag: "2FA Android", isStarred: true },
                        { name: "AuthMe", url: "https://authme.levminer.com/", tag: "2FA Desktop" },
                        { name: "Authenticator", url: "https://authenticator.cc/", tag: "2FA Browser Ext" },
                        { name: "Bitwarden", url: "https://bitwarden.com/", tag: "Password Manager" },
                        { name: "Ente Auth", url: "https://ente.io/auth/", tag: "2FA All Platforms", isStarred: true },
                        { name: "KeePassXC", url: "https://keepassxc.org/", tag: "Password Manager" },
                        { name: "Sentinel", url: "https://getsentinel.io/", tag: "2FA Mac, Android, iOS" },
                        { name: "Stratum", url: "https://stratumauth.com", tag: "2FA Android", isStarred: true },
                        { name: "VaultWarden", url: "https://github.com/dani-garcia/vaultwarden", tag: "Self-Hosted Bitwarden" }
                    ]
                },
                {
                    title: "Szyfrowane Komunikatory",
                    links: [
                        { name: "Berty", url: "https://berty.tech/", tag: "Android, iOS" },
                        { name: "Briar", url: "https://briarproject.org/", tag: "Android P2P", isStarred: true },
                        { name: "Cwtch", url: "https://docs.cwtch.im", tag: "Tor P2P" },
                        { name: "Jami", url: "https://jami.net/", tag: "All Platforms" },
                        { name: "Keybase", url: "https://keybase.io/", tag: "All Platforms" },
                        { name: "Matrix", url: "https://matrix.org/", tag: "Decentralized" },
                        { name: "qTox", url: "https://qtox.github.io/", tag: "All Platforms" },
                        { name: "Ricochet Refresh", url: "https://www.ricochetrefresh.net/", tag: "Desktop" },
                        { name: "Session", url: "https://getsession.org/", tag: "All Platforms" },
                        { name: "Signal", url: "https://signal.org/", tag: "All Platforms", isStarred: true },
                        { name: "SimpleX", url: "https://simplex.chat/", tag: "All Platforms", isStarred: true },
                        { name: "Status", url: "https://status.app/", tag: "Android, iOS" },
                        { name: "Tox", url: "https://tox.chat/", tag: "All Platforms" },
                        { name: "Wire", url: "https://wire.com/en/download/", tag: "All Platforms" }
                    ]
                },
                {
                    title: "Prywatność E-mail",
                    links: [
                        { name: "Disroot", url: "https://disroot.org/en/services/email", tag: "Encrypted Email" },
                        { name: "DNMX", url: "https://dnmx.cc/", tag: "Onion-Based Email" },
                        { name: "Email Aliasing", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_email_aliasing", tag: "Aliasowanie" },
                        { name: "Email Privacy Tester", url: "https://www.emailprivacytester.com/" },
                        { name: "Mailvelope", url: "https://mailvelope.com/", tag: "PGP Encryption" },
                        { name: "Proton Mail", url: "https://proton.me/mail", tag: "Encrypted Email", isStarred: true },
                        { name: "Temp Mail Sites", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_temp_mail", tag: "Jednorazowe maile" },
                        { name: "Tuta", url: "https://tuta.com/", tag: "Encrypted Email" }
                    ]
                },
                {
                    title: "Monitorowanie Wycieków Danych",
                    links: [
                        { name: "BreachDirectory", url: "https://breachdirectory.org", tag: "Search Engine" },
                        { name: "Have I Been Pwned?", url: "https://haveibeenpwned.com/", tag: "Email Breaches", isStarred: true },
                        { name: "HIBP Passwords", url: "https://haveibeenpwned.com/Passwords", tag: "Password Breach Check", isStarred: true },
                        { name: "Intelligence X", url: "https://intelx.io/", tag: "Password Breach Check" },
                        { name: "Leak Lookup", url: "https://leak-lookup.com/", tag: "Search Engine" },
                        { name: "Mozilla Monitor", url: "https://monitor.mozilla.org/", tag: "Data Breach Check" },
                        { name: "psbdmp", url: "https://psbdmp.ws/", tag: "Password Breach Check" },
                        { name: "ScatteredSecrets", url: "https://scatteredsecrets.com/", tag: "Password Breach Check" },
                        { name: "Snusbase", url: "https://snusbase.com/", tag: "Search Engine" }
                    ]
                },
                {
                    title: "Fingerprinting i Śledzenie",
                    links: [
                        { name: "AnonymousRedirect", url: "https://adguardteam.github.io/AnonymousRedirect/", tag: "Anonymize Links" },
                        { name: "BrowserLeaks", url: "https://browserleaks.com/", tag: "IP Leak Test" },
                        { name: "browserrecon", url: "https://www.computec.ch/projekte/browserrecon/?s=scan", tag: "Tracking Test" },
                        { name: "CanvasBlocker", url: "https://github.com/kkapsner/CanvasBlocker", tag: "Anti-Fingerprinting", isStarred: true },
                        { name: "ClearURLs", url: "https://docs.clearurls.xyz", tag: "Remove Tracking" },
                        { name: "Cover Your Tracks", url: "https://coveryourtracks.eff.org/", tag: "Tracking Test" },
                        { name: "CreepJS", url: "https://abrahamjuliot.github.io/creepjs", tag: "Fingerprinting Test", isStarred: true },
                        { name: "Device Info", url: "https://www.deviceinfo.me/", tag: "Tracking Test" },
                        { name: "JShelter", url: "https://jshelter.org/", tag: "Prevent Fingerprinting" },
                        { name: "PersonalData", url: "https://personaldata.info/", tag: "Tracking Test" },
                        { name: "Simple Opt Out", url: "https://simpleoptout.com/", tag: "Turn off Targeted Ads" },
                        { name: "TZP", url: "https://arkenfox.github.io/TZP/tzp.html", tag: "Fingerprinting Test" },
                        { name: "webkay", url: "https://webkay.robinlinus.com/", tag: "Fingerprinting Test" }
                    ]
                },
                {
                    title: "Prywatne Wyszukiwarki",
                    links: [
                        { name: "Brave Search", url: "https://search.brave.com/", tag: "Independent", isStarred: true },
                        { name: "DuckDuckGo", url: "https://start.duckduckgo.com/", tag: "Metasearch", isStarred: true },
                        { name: "FMHY Searx", url: "https://searx.fmhy.net/", tag: "Metasearch", isStarred: true },
                        { name: "Fuck Off Google", url: "https://search.fuckoffgoogle.net/", tag: "Searx Instance" },
                        { name: "Mojeek", url: "https://mojeek.com/", tag: "Independent" },
                        { name: "SearXNG", url: "https://docs.searxng.org/", tag: "Self-Hosted" },
                        { name: "searx.space", url: "https://searx.space/", tag: "Metasearch", isStarred: true },
                        { name: "Startpage", url: "https://www.startpage.com/", tag: "Google Based" },
                        { name: "YaCy", url: "https://yacy.net/", tag: "Decentralized P2P" }
                    ]
                },
                {
                    title: "Narzędzia do Ochrony Danych",
                    links: [
                        { name: "GnuPG", url: "https://gnupg.org/" },
                        { name: "W10Privacy", url: "https://www.w10privacy.de/" },
                        { name: "YourDigitalRights", url: "https://yourdigitalrights.org/" }
                    ]
                }
            ]
        },
        {
            id: "vpn",
            title: "🌐 VPN (Wirtualne Sieci Prywatne)",
            infoBox: {
                title: "💡 Uwaga",
                items: [
                    "Poza WARP, zazwyczaj najlepiej jest używać płatnego VPN, szczególnie jeśli zależy Ci na prywatności lub prędkości.",
                    "Darmowe VPN-y są najbardziej przydatne do odblokowywania stron internetowych."
                ]
            },
            subsections: [
                {
                    title: "Polecane Płatne VPN (dla Prywatności i Torrentów)",
                    links: [
                        { name: "AirVPN", url: "https://airvpn.org/", tag: "Port Forwarding", isStarred: true },
                        { name: "AzireVPN", url: "https://www.azirevpn.com/" },
                        { name: "Cryptostorm", url: "https://cryptostorm.is/" },
                        { name: "IVPN", url: "https://www.ivpn.net/", tag: "No Logging" },
                        { name: "Mozilla VPN", url: "https://www.mozilla.org/en-US/products/vpn/" },
                        { name: "Mullvad VPN", url: "https://mullvad.net/", tag: "Bez logów", isStarred: true },
                        { name: "OVPN", url: "https://www.ovpn.com/" },
                        { name: "Perfect Privacy", url: "https://www.perfect-privacy.com/" },
                        { name: "Proton VPN", url: "https://protonvpn.com", tag: "Darmowy Plan", isStarred: true }
                    ]
                },
                {
                    title: "Darmowe VPN (z Ograniczeniami)",
                    links: [
                        { name: "CalyxVPN", url: "https://calyx.net/vpn" },
                        { name: "FreeVPN.org", url: "https://www.freevpn.org/" },
                        { name: "Lantern", url: "https://lantern.io/", tag: "Anti-Censorship" },
                        { name: "PrivadoVPN", url: "https://privadovpn.com/software", tag: "10GB Monthly" },
                        { name: "Psiphon", url: "https://www.psiphon.ca/", tag: "Anti-Censorship" },
                        { name: "RiseupVPN", url: "https://riseup.net/en/vpn", tag: "Unlimited", isStarred: true },
                        { name: "Speedify", url: "https://speedify.com/", tag: "2GB Free" },
                        { name: "Urban VPN", url: "https://www.urban-vpn.com/" },
                        { name: "VPN Gate", url: "https://www.vpngate.net/", tag: "Academic Project" },
                        { name: "VPNBook", url: "https://www.vpnbook.com/" },
                        { name: "WARP (Cloudflare)", url: "https://one.one.one.one/", tag: "Unlimited", isStarred: true },
                        { name: "Windscribe", url: "https://windscribe.com", tag: "10GB Monthly", isStarred: true }
                    ]
                },
                {
                    title: "Narzędzia i Konfiguracja VPN",
                    links: [
                        { name: "Amnezia", url: "https://amnezia.org/", tag: "Self-Hosted VPN" },
                        { name: "Gluetun", url: "https://github.com/qdm12/gluetun", tag: "Docker VPN" },
                        { name: "Headscale", url: "https://github.com/juanfont/headscale", tag: "Self-Hosted" },
                        { name: "Nebula", url: "https://github.com/slackhq/nebula", tag: "Self-Hosted" },
                        { name: "NetBird", url: "https://netbird.io/", tag: "Secure Network VPN", isStarred: true },
                        { name: "Outline", url: "https://getoutline.org/", tag: "Self-Hosted" },
                        { name: "Pritunl", url: "https://pritunl.com/", tag: "VPN Server" },
                        { name: "Tailscale", url: "https://tailscale.com/", tag: "Secure Network VPN", isStarred: true },
                        { name: "tinc VPN", url: "https://www.tinc-vpn.org/", tag: "VPN Tunnel" },
                        { name: "VPN Binding Guide", url: "https://docs.wispy.qzz.io/vpn-binding/", tag: "Torrent Client", isStarred: true },
                        { name: "VPN Hotspot", url: "https://github.com/Mygod/VPNHotspot", tag: "Share VPN" },
                        { name: "WGDashboard", url: "https://wgdashboard.dev/", tag: "WireGuard Manager" },
                        { name: "WireGuard", url: "https://www.wireguard.com/", tag: "VPN Tunnel", isStarred: true },
                        { name: "WireHole", url: "https://github.com/IAmStoxe/wirehole", tag: "WireGuard + Adblocking" },
                        { name: "ZeroTier", url: "https://www.zerotier.com/", tag: "Secure Network VPN", isStarred: true }
                    ]
                },
                {
                    title: "Testy i Porównania VPN",
                    links: [
                        { name: "BrowserLeaks", url: "https://browserleaks.com/", tag: "IP Leak Test" },
                        { name: "Comparitech VPN", url: "https://www.comparitech.com/vpn/" },
                        { name: "DNS Leak Test", url: "https://www.dnsleaktest.com/" },
                        { name: "Fast.com", url: "https://fast.com/" },
                        { name: "IPLeak.net", url: "https://ipleak.net/", tag: "Leak Test" },
                        { name: "Privacy Guides VPN", url: "https://www.privacyguides.org/vpn/" },
                        { name: "RestorePrivacy", url: "https://restoreprivacy.com/" },
                        { name: "Speedtest.net", url: "https://www.speedtest.net/" },
                        { name: "Techlore Chart", url: "https://techlore.tech/vpn", tag: "VPN Comparison", isStarred: true },
                        { name: "That One Privacy Site", url: "https://thatoneprivacysite.xyz/" },
                        { name: "VPNpro", url: "https://vpnpro.com/" },
                        { name: "VPN Relationships", url: "https://kumu.io/Windscribe/vpn-relationships", tag: "Map", isStarred: true }
                    ]
                }
            ]
        },
        {
            id: "proxy-anticensorship",
            title: "🔗 Proxy i Antycenzura",
            subsections: [
                {
                    title: "Aplikacje Proxy",
                    links: [
                        { name: "Censor Tracker", url: "https://github.com/censortracker/censortracker", tag: "Proxy Extension" },
                        { name: "FoxyProxy", url: "https://getfoxyproxy.org/", tag: "Proxy Extension" },
                        { name: "Hiddify", url: "https://hiddify.com/", tag: "Multi-Protocol Client" },
                        { name: "Nginx Proxy Manager", url: "https://nginxproxymanager.com", tag: "Self-Hosted" },
                        { name: "Proxifier", url: "https://www.proxifier.com/", tag: "Add Proxy to Apps" },
                        { name: "Scramjet", url: "https://docs.titaniumnetwork.org/proxies/scramjet/", tag: "Open Source Web Proxy" },
                        { name: "SmartProxy", url: "https://github.com/salarcode/SmartProxy", tag: "Proxy Extension" },
                        { name: "Snowflake", url: "https://snowflake.torproject.org/", tag: "Tor Proxy Ext" },
                        { name: "Titanium Network", url: "https://titaniumnetwork.org/services/", tag: "Proxy Developer" },
                        { name: "v2rayN", url: "https://github.com/2dust/v2rayN", tag: "V2Ray / Shadowsocks Client", isStarred: true },
                        { name: "wireproxy", url: "https://github.com/whyvl/wireproxy", tag: "WireGuard as Proxy" }
                    ]
                },
                {
                    title: "Strony Proxy",
                    links: [
                        { name: "4everproxy", url: "https://www.4everproxy.com/" },
                        { name: "Blockaway", url: "https://www.blockaway.net/" },
                        { name: "CroxyProxy", url: "https://www.croxyproxy.com/" },
                        { name: "Delusionz", url: "https://delusionz.xyz/" },
                        { name: "Google Translate", url: "https://translate.google.com/", tag: "Proxy Method" },
                        { name: "Hideip.co", url: "https://www.hideip.co/" },
                        { name: "Holy Unblocker", url: "https://holyunblocker.org/" },
                        { name: "Phantom", url: "https://phantom.lol/" },
                        { name: "ProxyOf2", url: "https://proxyof2.com/" },
                        { name: "ProxyPal", url: "https://proxypal.net/" },
                        { name: "Proxyium", url: "https://proxyium.com/" },
                        { name: "Reflect4", url: "https://reflect4.me/" },
                        { name: "SSLSecureProxy", url: "https://www.sslsecureproxy.com/" }
                    ]
                },
                {
                    title: "Antycenzura (DPI Circumvention)",
                    links: [
                        { name: "Censorship Bypass Guide", url: "https://censordex.fr.to/", isStarred: true },
                        { name: "FreeSocks", url: "https://freesocks.org/", tag: "Shadowsocks Proxies" },
                        { name: "GoodbyeDPI", url: "https://github.com/ValdikSS/GoodbyeDPI/", tag: "DPI Circumvention", isStarred: true },
                        { name: "Green Tunnel", url: "https://github.com/SadeghHayeri/GreenTunnel", tag: "DPI Circumvention" },
                        { name: "Hi!Load VPN", url: "https://t.me/hlvpnbot", tag: "Censorship Resistant" },
                        { name: "Hysteria", url: "https://v2.hysteria.network/", tag: "Speed-Focused Proxy" },
                        { name: "Lantern", url: "https://lantern.io/", tag: "Anti-Censorship Proxy" },
                        { name: "No Thought is a Crime", url: "https://ntc.party/", tag: "Discussion", isStarred: true },
                        { name: "PowerTunnel", url: "https://github.com/krlvm/PowerTunnel", tag: "DPI Circumvention" },
                        { name: "Project X", url: "https://github.com/XTLS/Xray-core", tag: "Anti-Censorship Client" },
                        { name: "Psiphon", url: "https://psiphon.ca/", tag: "Anti-Censorship Proxy" },
                        { name: "Shadowsocks", url: "https://shadowsocks.org/", tag: "Simple Proxy" },
                        { name: "sing-box", url: "https://sing-box.sagernet.org/", tag: "Anti-Censorship Client", isStarred: true },
                        { name: "zapret", url: "https://github.com/bol-van/zapret", tag: "DPI Circumvention", isStarred: true }
                    ]
                }
            ]
        },
        {
            id: "os-privacy",
            title: "💻 Prywatność i Adblocking dla Systemów Operacyjnych",
            links: [
                { name: "Android Adblocking", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_android_adblocking" },
                { name: "Android Privacy", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_privacy_.2F_anti-censorship" },
                { name: "iOS Adblocking / Privacy", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_ios_adblocking" },
                { name: "Linux Adblocking / Privacy", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/linux#wiki_.25B7_adblock_.2F_privacy" },
                { name: "Mac Adblock / Privacy", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/linux#wiki_.25B7_mac_adblock_.2F_privacy" }
            ]
        }
    ],
    infoBoxes: [
        {
            type: 'info',
            title: '💡 Wskazówki Ogólne',
            items: [
                'Dla najlepszej ochrony używaj kombinacji: solidnego blokera przeglądarkowego (uBlock Origin), DNS blokującego reklamy (np. AdGuard DNS/NextDNS), oraz dla zwiększonej anonimowości rozważ VPN (Mullvad, Proton VPN) lub Tor Browser.',
                'Zawsze testuj swoje połączenie na stronach typu <a href="https://ipleak.net/">ipleak.net</a> lub <a href="https://www.dnsleaktest.com/">dnsleaktest.com</a>, aby upewnić się, że nie ma wycieków.',
                'Przy rejestracji w nowych serwisach rozważ użycie <a href="https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_temp_mail">tymczasowych maili</a> lub <a href="https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/internet-tools#wiki_.25B7_email_aliasing">aliasów</a> dla lepszej ochrony prywatności.',
                'Regularnie sprawdzaj <a href="https://haveibeenpwned.com/">Have I Been Pwned?</a>, aby monitorować, czy Twoje dane nie wyciekły.'
            ]
        },
        {
            type: 'warning',
            title: '⚠️ Ostrzeżenia i Bezpieczeństwo',
            items: [
                'Nie ufaj darmowym VPN-om do wrażliwych działań (np. torrenty) – wiele z nich zbiera i sprzedaje dane użytkowników.',
                'Unikaj używania wielu blokerów reklam jednocześnie w przeglądarce, aby zapobiec konfliktom i psuciu stron.',
                'Zawsze pobieraj oprogramowanie i rozszerzenia z oficjalnych źródeł. Sprawdzaj uprawnienia, których wymagają aplikacje.',
                'Bądź świadomy fingerprintingu – przeglądarki i urządzenia mogą być unikalnie identyfikowane. Stosuj rozszerzenia takie jak CanvasBlocker.',
                'Nigdy nie klikaj w podejrzane linki. Zawsze sprawdzaj je za pomocą narzędzi do sprawdzania stron (np. URL Void).'
            ]
        }
    ]
};