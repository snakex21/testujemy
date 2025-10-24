const pageData = {
    featured: {
        title: "⭐ NAJLEPSZE SERWISY - TOP REKOMENDACJE",
        links: [
            {
                name: "Telewizjada",
                url: "https://telewizjada.cc/",
                badge: "POLSKA",
                description: "Najlepsza polska telewizja na żywo",
                isFeatured: true
            },
            {
                name: "TVPass / TheTVApp",
                url: "https://tvpass.org/",
                badge: "GLOBALNE",
                description: "Wiele międzynarodowych kanałów, wysoka jakość",
                isFeatured: true
            },
            {
                name: "NTV Stream",
                url: "https://ntvstream.cx/",
                badge: "AGREGATOR",
                description: "Duży wybór kanałów, również sportowych",
                isFeatured: true
            },
            {
                name: "IPTV-org GitHub",
                url: "https://iptv-org.github.io",
                badge: "PLAYLISTY M3U",
                description: "Ogromna baza darmowych playlist IPTV z całego świata",
                isFeatured: true
            }
        ]
    },
    sections: [
        {
            id: "global-aggregators",
            title: "⭐ Najlepsze Agregatory TV na Żywo (Globalne)",
            count: "30+",
            links: [
                { name: "⭐ TVPass", url: "https://tvpass.org/", tag: "ALL CHANNELS" },
                { name: "⭐ TheTVApp", url: "https://thetvapp.to/", tag: "HD Quality" },
                { name: "⭐ NTV Stream", url: "https://ntvstream.cx/", tag: "Aggregator" },
                { name: "⭐ TV Garden", url: "https://tv.garden/", tag: "Unique Concept" },
                { name: "⭐ EasyWebTV", url: "https://zhangboheng.github.io/Easy-Web-TV-M3u8/routes/countries.html", tag: "M3U8 List" },
                { name: "IPTV Web App", url: "https://iptv-web.app/" },
                { name: "⭐ DaddyLive TV (24/7)", url: "https://daddylivestream.com/24-7-channels.php", tag: "SPORT" },
                { name: "DaddyLive SX (Mirror)", url: "https://daddylive.sx/" },
                { name: "TheDaddy (Mirror)", url: "https://thedaddy.dad/" },
                { name: "DLHD (Mirror)", url: "https://dlhd.click/" },
                { name: "⭐ RgShows Live TV", url: "https://www.rgshows.me/livetv/" },
                { name: "⭐ Heartive Live", url: "https://heartive.pages.dev/live/" },
                { name: "HuHu.to", url: "http://huhu.to/", tag: "Europejski" },
                { name: "Vavoo.to (Mirror)", url: "http://vavoo.to/" },
                { name: "Kool.to (Mirror)", url: "http://kool.to/" },
                { name: "Oha.to (Mirror)", url: "http://oha.to/" },
                { name: "USTVGo", url: "https://ustvgo.click/", tag: "USA HD" },
                { name: "LiveHDTV", url: "https://www.livehdtv.com/" },
                { name: "Globe TV", url: "https://globetv.app/" },
                { name: "CXtv", url: "https://www.cxtvlive.com/" },
                { name: "lmao.love", url: "https://lmao.love/channels/" },
                { name: "Cubik TV", url: "https://cubiktv.com/" },
                { name: "StreamHub", url: "https://thestreamhub.xyz/live_tv" },
                { name: "Rive Live IPTV", url: "https://rivestream.org/iptv" },
                { name: "AlienFlix TV", url: "https://alienflix.net/live" },
                { name: "FreeInterTV", url: "http://www.freeintertv.com/", tag: "4000+ CH" },
                { name: "Global Free TV", url: "https://www.globalfreetv.com/" },
                { name: "VipoTV", url: "https://vipotv.com/" },
                { name: "S7-TV", url: "https://s7-tv.blogspot.com/p/t.html" },
                { name: "DistroTV", url: "https://distro.tv/" },
                { name: "Puffer", url: "https://puffer.stanford.edu/", tag: "San Fran TV" },
                { name: "Funcube", url: "https://funcube.space/", tag: "Random Streams" },
                { name: "CyTube", url: "https://cytu.be/", tag: "Random Streams" },
                { name: "VaughnLive", url: "https://vaughn.live/browse/misc", tag: "Random Streams" },
                { name: "PSP-TV", url: "http://sync.coconono.org", tag: "Random Streams" },
                { name: "Baked", url: "https://baked.live/", tag: "Random Streams" },
                { name: "Channel 99", url: "http://www.pracdev.org/channel99/", tag: "Random Streams" },
                { name: "EXP TV", url: "https://exptv.org/", tag: "Rare/Vintage Media" },
                { name: "YTCH", url: "https://ytch.xyz/", tag: "Random YT TV" },
                { name: "FreeTVz (Mirror)", url: "https://freetvz.com/" }
            ]
        },
        {
            id: "polska",
            title: "🇵🇱 Kanały Polskie (Live TV)",
            count: "3+",
            links: [
                { name: "⭐ Telewizjada", url: "https://telewizjada.cc/", tag: "TOP PL" },
                { name: "TVP Stream", url: "https://www.tvp.pl/stream", tag: "OFICJALNE" },
                { name: "ListaTV", url: "https://listatv.pl/" }
            ]
        },
        {
            id: "usa",
            title: "🇺🇸 Kanały USA (Live TV)",
            count: "20+",
            links: [
                { name: "⭐ USTVGO", url: "https://ustvgo.tv/", tag: "HD" },
                { name: "⭐ Live News Now", url: "https://www.livenewsnow.com/", tag: "News" },
                { name: "CNN Live", url: "https://www.cnn.com/live", tag: "News" },
                { name: "NBC News Now", url: "https://www.nbcnews.com/now", tag: "News" },
                { name: "ABC News Live", url: "https://abcnews.go.com/Live", tag: "News" },
                { name: "CBS News Live", url: "https://www.cbsnews.com/live/", tag: "News" },
                { name: "Fox News Live", url: "https://www.foxnews.com/live", tag: "News" },
                { name: "Bloomberg Live", url: "https://www.bloomberg.com/live", tag: "News" },
                { name: "PBS Live", url: "https://www.pbs.org/livestream/", tag: "News" },
                { name: "Watch News Live", url: "https://watchnewslive.tv/" },
                { name: "The Roku Channel", url: "https://therokuchannel.roku.com/", tag: "Free w/ Ads" },
                { name: "Shout! TV", url: "https://shout-tv.com/", tag: "Free w/ Ads" },
                { name: "Adult Swim", url: "https://www.adultswim.com/videos/", tag: "Free w/ Ads" },
                { name: "Toonami Aftermath", url: "https://www.toonamiaftermath.com/schedule", tag: "Retro Anime/Cartoons" },
                { name: "Xumo Play", url: "https://play.xumo.com/networks", tag: "Free w/ Ads" },
                { name: "Pluto TV", url: "https://pluto.tv/live-tv", tag: "Free w/ Ads" },
                { name: "Pluto TV WebOS (Mirror)", url: "https://app-lgwebos.pluto.tv/live-tv" },
                { name: "XUMO TV (Mirror)", url: "https://www.xumo.tv/" },
                { name: "Tubi Live TV", url: "https://tubi.tv/live", tag: "Free w/ Ads" },
                { name: "Plex Live TV", url: "https://plex.tv/live-tv", tag: "Free w/ Ads" },
                { name: "Plex Watch (Mirror)", url: "https://watch.plex.tv/" },
                { name: "STIRR", url: "https://www.stirr.com/", tag: "Free w/ Ads" },
                { name: "Redbox Free Live TV", url: "https://www.redbox.com/stream-free-live-tv", tag: "Free w/ Ads" },
                { name: "Sling (Limited Free)", url: "https://watch.sling.com/", tag: "Free w/ Ads" }
            ]
        },
        {
            id: "uk",
            title: "🇬🇧 Kanały UK (Live TV)",
            count: "8+",
            links: [
                { name: "⭐ BBC iPlayer", url: "https://www.bbc.co.uk/iplayer/live/bbcone", tag: "UK VPN" },
                { name: "ITV Hub", url: "https://www.itv.com/hub/itv", tag: "UK VPN" },
                { name: "Channel 4", url: "https://www.channel4.com/now", tag: "UK VPN" },
                { name: "Channel 5", url: "https://www.channel5.com/live", tag: "UK VPN" },
                { name: "TVPlayer", url: "https://tvplayer.com/", tag: "UK" },
                { name: "FilmOn TV", url: "https://www.filmon.com/tv/live", tag: "UK/INT" },
                { name: "Sky News Live", url: "https://www.skynews.com/watch-live", tag: "News" },
                { name: "GB News Live", url: "https://www.gbnews.com/live", tag: "News" },
                { name: "TVMucho", url: "https://www.tvmucho.com/", tag: "UK/INT" }
            ]
        },
        {
            id: "europa",
            title: "🌍 Kanały Europejskie (Live TV)",
            count: "15+",
            links: [
                { name: "⭐ ARTE", url: "https://www.arte.tv/en/live/", tag: "FR/DE" },
                { name: "France 24", url: "https://www.france24.com/en/live", tag: "News" },
                { name: "DW English", url: "https://www.dw.com/en/live-tv/channel-english", tag: "NIEMCY" },
                { name: "RAI Play", url: "https://www.raiplay.it/dirette", tag: "WŁOCHY" },
                { name: "RTVE", url: "https://www.rtve.es/play/videos/directo/", tag: "HISZPANIA" },
                { name: "RTP Play", url: "https://www.rtp.pt/play/direto", tag: "PORTUGALIA" },
                { name: "MediathekView", url: "https://mediathekviewweb.de/", tag: "DACH" },
                { name: "NPO Start", url: "https://www.npostart.nl/", tag: "HOLANDIA" },
                { name: "VRT NU", url: "https://www.vrt.be/vrtnu/livestream/", tag: "BELGIA" },
                { name: "SVT Play", url: "https://www.svtplay.se/", tag: "SZWECJA" },
                { name: "DR TV", url: "https://www.dr.dk/drtv", tag: "DANIA" },
                { name: "NRK TV", url: "https://www.nrk.no/tv/direkte", tag: "NORWEGIA" },
                { name: "YLE Areena", url: "https://areena.yle.fi/tv", tag: "FINLANDIA" },
                { name: "HuHu.to", url: "https://huhu.to/", tag: "Europejski" },
                { name: "Vavoo.to (Mirror)", url: "http://vavoo.to/" }
            ]
        },
        {
            id: "azja",
            title: "🌏 Kanały Azjatyckie (Live TV)",
            count: "5+",
            links: [
                { name: "NHK World Japan", url: "https://www3.nhk.or.jp/nhkworld/en/live/", tag: "JAPONIA" },
                { name: "CGTN", url: "https://www.cgtn.com/tv", tag: "CHINY" },
                { name: "NDTV 24x7", url: "https://www.ndtv.com/video/live/channel/ndtv24x7", tag: "INDIE" },
                { name: "Arirang TV", url: "https://www.arirangtv.com/live/", tag: "KOREA PD" },
                { name: "CNA", url: "https://www.channelnewsasia.com/watch", tag: "SINGAPORE" },
                { name: "KCNA", url: "https://kcnawatch.us/korea-central-tv-livestream", tag: "KOREA PN" },
                { name: "YuppTV", url: "https://www.yupptv.com/", tag: "AZJATYCKIE" },
                { name: "Sling International", url: "https://sling.com/international", tag: "AZJATYCKIE" }
            ]
        },
        {
            id: "news",
            title: "📰 Kanały Informacyjne 24/7 (Live)",
            count: "15+",
            links: [
                { name: "⭐ Euronews Live", url: "https://www.euronews.com/live" },
                { name: "⭐ Al Jazeera English", url: "https://www.aljazeera.com/live" },
                { name: "RT Live", url: "https://www.rt.com/on-air/" },
                { name: "TRT World", url: "https://www.trtworld.com/live" },
                { name: "Sky News Live", url: "https://www.youtube.com/channel/UC-yYn6fN_Lq0pI44U0lM_jA", tag: "YouTube" },
                { name: "Fox News Live", url: "https://www.youtube.com/channel/UCupvZG-5bDgK_N8Ym2bNylg", tag: "YouTube" },
                { name: "CNN Live", url: "https://www.youtube.com/channel/UCupvZG-5bDgK_N8Ym2bNylg", tag: "YouTube" },
                { name: "ABC News Live", url: "https://www.youtube.com/channel/UCupvZG-5bDgK_N8Ym2bNylg", tag: "YouTube" },
                { name: "CBS News Live", url: "https://www.youtube.com/channel/UCupvZG-5bDgK_N8Ym2bNylg", tag: "YouTube" },
                { name: "Bloomberg Live", url: "https://www.youtube.com/channel/UC-yYn6fN_Lq0pI44U0lM_jA", tag: "YouTube" },
                { name: "PBS Live", url: "https://www.youtube.com/channel/UC-yYn6fN_Lq0pI44U0lM_jA", tag: "YouTube" },
                { name: "ABC News Australia", url: "https://www.abc.net.au/news/newschannel/" },
                { name: "TV.Jest", url: "https://tv.jest.one/", tag: "News Aggregator" },
                { name: "WorldNews24 (Mirror)", url: "https://worldnews24.tv/" }
            ]
        },
        {
            id: "music",
            title: "🎵 Kanały Muzyczne (Live)",
            count: "10+",
            links: [
                { name: "VEVO", url: "https://www.vevo.com/", tag: "Music Videos" },
                { name: "MTV Live", url: "https://www.mtv.com/live" },
                { name: "VH1", url: "https://www.vh1.com/" },
                { name: "Clubbing TV", url: "https://www.clubbingtv.com/" },
                { name: "Deluxe Music", url: "https://www.deluxemusic.tv/" },
                { name: "Trace TV", url: "https://www.trace.tv/" },
                { name: "Stingray Music", url: "https://www.stingray.com/products/stingray-music/" },
                { name: "RadioU TV", url: "https://www.radiou.com/radiou-tv" }
            ]
        },
        {
            id: "other-channels",
            title: "🌐 Inne Kanały / Nietypowe Strumienie",
            count: "5+",
            links: [
                { name: "SHOWROOM", url: "https://showroom-live.com/", tag: "Live Performance" },
                { name: "TitanTV", url: "https://titantv.com/", tag: "TV Listings" },
                { name: "SFBTV", url: "https://diva.sfsu.edu/collections/sfbatv", tag: "San Fran TV Archive" },
                { name: "HDclump", url: "https://hdclump.com/", tag: "Doc/Cooking/Gardening" },
                { name: "BrokenSilenze", url: "https://www.brokensilenze.net/", tag: "Reality TV" },
                { name: "r/Panelshow", url: "https://www.reddit.com/r/panelshow/", tag: "Panel Shows" },
                { name: "Taskmaster", url: "https://rentry.co/bbbr4cfr", tag: "Full Episodes" },
                { name: "The Silent Library", url: "https://thesilentlibrary.com/", tag: "Japanese Game Shows" },
                { name: "MyRM", url: "https://myrunningman.com/", tag: "Running Man Episodes" },
                { name: "No-Laughing Batsu Game List", url: "https://redd.it/2fgm9p" },
                { name: "TWC Classics", url: "https://twcclassics.com/", tag: "Weather Channel Replays" }
            ]
        },
        {
            id: "iptv-playlists",
            title: "🌐 IPTV Playlisty i M3U",
            count: "20+",
            links: [
                { name: "⭐ IPTV-org GitHub", url: "https://iptv-org.github.io", tag: "8000+ KANAŁÓW" },
                { name: "⭐ Awesome IPTV", url: "https://github.com/iptv-org/awesome-iptv", tag: "Resources" },
                { name: "⭐ FMHY IPTV Playlists", url: "https://rentry.co/fmhybase64#iptv-playlists", tag: "List" },
                { name: "Free IPTV M3U8", url: "https://github.com/Free-TV/IPTV" },
                { name: "Daily IPTV List", url: "https://www.dailyiptvlist.com/" },
                { name: "IPTV Source", url: "https://www.iptvsource.com/" },
                { name: "IPTV Cat", url: "https://iptvcat.com/" },
                { name: "Free IPTV List", url: "https://www.freeiptvlist.com/" },
                { name: "IPTV Sat", url: "https://www.iptvsat.info/" },
                { name: "M3U IPTV", url: "https://www.m3uiptv.com/" },
                { name: "IPTV Gratuit", url: "https://iptvgratuit.com/", tag: "FR" },
                { name: "IPTV Bin", url: "https://www.iptvbin.com/" },
                { name: "IPTV Community", url: "https://iptv.community/", tag: "Forum" },
                { name: "M3U IPTV Browser", url: "https://m3u-ip.tv/browser" },
                { name: "Github IPTV Mirror", url: "https://matthewgall.codes/mirrors/iptv" },
                { name: "XrayUIGroup", url: "https://github.com/MHSanaei/3x-ui", tag: "DIY Network" },
                { name: "TMDB-To-VOD", url: "https://github.com/gogetta69/TMDB-To-VOD-Playlist", tag: "Playlist Gen" },
                { name: "CaberNetwork", url: "https://cabernetwork.github.io/", tag: "IPTV Manager" },
                { name: "SipTV Converter", url: "https://siptv.eu/converter/", tag: "M3U to TXT" },
                { name: "M3U4U", url: "https://m3u4u.com/", tag: "M3U Editor" }
            ]
        },
        {
            id: "iptv-apps",
            title: "📱 Aplikacje IPTV i Odtwarzacze",
            count: "25+",
            links: [
                { name: "⭐ VLC Media Player", url: "https://www.videolan.org/vlc/", tag: "REKOMENDOWANE" },
                { name: "⭐ Kodi + IPTV Addons", url: "https://kodi.tv/", tag: "HTPC" },
                { name: "⭐ IPTVnator", url: "https://github.com/4gray/iptvnator", tag: "DESKTOP/WEB" },
                { name: "IPTVnator Web (Mirror)", url: "https://iptvnator.vercel.app" },
                { name: "Open TV", url: "https://github.com/fredolx/open-tv", tag: "Player" },
                { name: "M3Unator", url: "https://github.com/hasanbeder/M3Unator", tag: "Generate Playlists" },
                { name: "PlaylistEditorTV", url: "https://github.com/Isayso/PlaylistEditorTV", tag: "Editor" },
                { name: "LivePush Player", url: "https://livepush.io/hls-player/index.html", tag: "Web Player" },
                { name: "IPTVPlayer", url: "https://iptvplayer.stream/", tag: "Web Player" },
                { name: "Best Player", url: "https://apps.microsoft.com/detail/9wzdncrdpqsx", tag: "Windows App" },
                { name: "M3u8DL-RE", url: "https://github.com/nilaoda/N_m3u8DL-RE", tag: "Downloader" },
                { name: "M3u8DL-CLI", url: "https://nilaoda.github.io/N_m3u8DL-CLI/", tag: "CLI Downloader" },
                { name: "IPTV Check", url: "https://github.com/peterpt/IPTV-CHECK", tag: "List Checker" },
                { name: "OTT Player", url: "https://ottplayer.es/", tag: "Cross-Platform" },
                { name: "Perfect Player", url: "https://www.perfect-player.com/", tag: "Android/Windows" },
                { name: "GSE Smart IPTV", url: "https://gse-smart-iptv.com/", tag: "ANDROID/iOS" },
                { name: "Jellyfin + Live TV", url: "https://jellyfin.org/", tag: "Media Server" },
                { name: "MPV Player", url: "https://mpv.io/", tag: "Advanced" },
                { name: "SMPlayer", url: "https://www.smplayer.info/", tag: "Player" },
                { name: "PotPlayer", url: "https://potplayer.daum.net/", tag: "Windows Player" },
                { name: "XBMC/Kodi GitHub (Development)", url: "https://github.com/xbmc/xbmc" },
                { name: "Android IPTV Players", url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android/#wiki_.25B7_android_live_tv", tag: "Wiki" }
            ]
        },
        {
            id: "smarttv",
            title: "📺 Smart TV, Android TV i Firestick",
            count: "25+",
            subsections: [
                {
                    id: "smarttv-youtube",
                    title: "YouTube i Ad-Free Clients",
                    links: [
                        { name: "⭐ SmartTube", url: "https://github.com/yuliskov/SmartTube", tag: "ANDROID TV YouTube" },
                        { name: "SmartTube App (Mirror)", url: "https://smarttubeapp.github.io/" },
                        { name: "TizenTube", url: "https://github.com/reisxd/TizenTube", tag: "SAMSUNG Smart TV YouTube" },
                        { name: "TizenBrew (Mirror)", url: "https://github.com/reisxd/TizenBrew" },
                        { name: "TizenTube Cobalt (Alternative)", url: "https://github.com/reisxd/TizenTubeCobalt" },
                        { name: "MuTube", url: "https://github.com/Exaphis/mutube", tag: "Apple TV YouTube" },
                        { name: "Playlet", url: "https://github.com/iBicha/playlet", tag: "Roku YouTube" }
                    ]
                },
                {
                    id: "smarttv-homebrew",
                    title: "Homebrew i Narzędzia Systemowe",
                    links: [
                        { name: "⭐ webOS Homebrew", url: "https://www.webosbrew.org/", tag: "LG TV" },
                        { name: "webOS Homebrew Guide", url: "https://docs.wispy.qzz.io/lg-tv-homebrew/" },
                        { name: "webOS Brew GitHub (Mirror)", url: "https://github.com/webosbrew/" },
                        { name: "KPFire", url: "https://linktr.ee/kpfire", tag: "Firestick Apps" },
                        { name: "webOS Homebrew", url: "https://www.webosbrew.org/", tag: "LG" },
                        { name: "SmartTwitchTV", url: "https://github.com/fgl27/SmartTwitchTV", tag: "Twitch Player" },
                        { name: "FCast", url: "https://fcast.org/", tag: "Cast to TV" },
                        { name: "Go2TV (Mirror)", url: "https://github.com/alexballas/go2tv" },
                        { name: "StreamFire", url: "https://streamfireapp.tv/", tag: "Live TV" },
                        { name: "StreamFire Rentry (Mirror)", url: "https://rentry.co/FMHYBase64#streamfire" },
                        { name: "smart-tv-telegram", url: "https://github.com/andrew-ld/smart-tv-telegram", tag: "Telegram Media" },
                        { name: "ChanSort", url: "https://github.com/PredatH0r/ChanSort", tag: "Channel List Editor" },
                        { name: "Samsung Smart TV Adblock", url: "https://redd.it/gn7fw5", tag: "Guide" },
                        { name: "tvQuickActions", url: "https://rentry.co/FMHYBase64#tvquickactions", tag: "Remote Remapper" },
                        { name: "Awesome Android TV FOSS", url: "https://github.com/Generator/Awesome-Android-TV-FOSS-Apps", tag: "App Index" },
                        { name: "Android TV Guide", url: "https://www.androidtv-guide.com/", tag: "Certified Devices" },
                        { name: "Android TV Devices Spreadsheet (Mirror)", url: "https://docs.google.com/spreadsheets/d/1kdnHLt673EjoAJisOal2uIpcmVS2Defbgk1ntWRLY3E/" },
                        { name: "Android TV Tools v4", url: "https://xdaforums.com/t/tool-all-in-one-tool-for-windows-android-tv-tools-v4.4648239/" },
                        { name: "S0undTV", url: "https://github.com/S0und/S0undTV", tag: "Twitch Player" },
                        { name: "Serenity Android", url: "https://github.com/NineWorlds/serenity-android", tag: "Emby App" },
                        { name: "atvTools", url: "https://rentry.co/FMHYBase64#atvtools", tag: "ADB Commands" },
                        { name: "Projectivy Launcher", url: "https://play.google.com/store/apps/details?id=com.spocky.projengmenu", tag: "Android TV Launcher" },
                        { name: "Projectivy Launcher GitHub", url: "https://github.com/spocky/miproja1/releases" },
                        { name: "Leanback on Fire (Mirror)", url: "https://github.com/tsynik/LeanbackLauncher" },
                        { name: "Launcher Manager", url: "https://xdaforums.com/t/app-firetv-noroot-launcher-manager-change-launcher-without-root.4176349/", tag: "Change Launcher" },
                        { name: "AerialViews", url: "https://github.com/theothernt/AerialViews", tag: "Custom Screensaver" },
                        { name: "YTCast", url: "https://github.com/MarcoLucidi01/ytcast", tag: "Cast YouTube" },
                        { name: "iSponsorBlockTV", url: "https://github.com/dmunozv04/iSponsorBlockTV", tag: "SponsorBlock App" },
                        { name: "Smart TV Piracy Guide", url: "https://redd.it/xa0aya", tag: "Guide" },
                        { name: "Awesome Android TV", url: "https://github.com/Generator/Awesome-Android-TV-FOSS-Apps", tag: "App Index" }
                    ]
                },
                {
                    id: "smarttv-satellite",
                    title: "Strumienie Satelitarne i Techniczne",
                    links: [
                        { name: "SatIndex", url: "https://www.satindex.de/", tag: "Satelita" },
                        { name: "LyngSat", url: "https://www.lyngsat.com/", tag: "Satelita" },
                        { name: "KingOfSat", url: "https://www.kingofsat.net/", tag: "Satelita" },
                        { name: "SatBeams", url: "https://www.satbeams.com/", tag: "Satelita" },
                        { name: "FlySat", url: "https://www.flysat.com/", tag: "Satelita" }
                    ]
                }
            ]
        },
        {
            id: "tools",
            title: "🔧 Narzędzia i Dodatki (Zaawansowane)",
            count: "10+",
            links: [
                { name: "⭐ Streamlink", url: "https://streamlink.github.io/", tag: "CLI Streaming" },
                { name: "Streamlink Twitch GUI", url: "https://github.com/streamlink/streamlink-twitch-gui" },
                { name: "Free-TV GitHub", url: "https://github.com/Hypfer/Free-TV", tag: "M3U8 Scraper" },
                { name: "FMHY Notes: Player Fixes", url: "https://github.com/fmhy/FMHY/wiki/FMHY%E2%80%90Notes.md#sport7", tag: "Guides" },
                { name: "DaddyLive Mirrors", url: "https://daddyny.com/", tag: "Mirrors" },
                { name: "VIP Box Sports Mirrors", url: "https://rentry.co/VIPSportsBox", tag: "Mirrors" },
                { name: "Rive Status & Mirrors", url: "https://rentry.co/rivestream", tag: "Status" },
                { name: "DaddyLive Self-Hosted Proxy", url: "https://rentry.co/FMHYBase64#daddylive-proxy" }
            ]
        }
    ]
};