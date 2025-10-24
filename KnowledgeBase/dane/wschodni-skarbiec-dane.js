// Plik: dane/wschodni-skarbiec-dane.js

const pageData = {
    featured: {
        title: "⭐ TOP REKOMENDACJE - WSCHODNI SKARBIEC",
        links: [
            { name: "HiAnime (dawniej Zoro)", url: "https://hianime.to/", badge: "STREAMING ANIME", description: "Jedna z najlepszych stron do streamingu anime z napisami i dubbingiem." },
            { name: "MangaDex", url: "https://mangadex.org/", badge: "CZYTANIE MANGI", description: "Najlepsza strona do czytania mangi, wspierająca tłumaczy." },
            { name: "Nyaa.si", url: "https://nyaa.si/", badge: "TORRENTY", description: "Największy publiczny tracker torrentów dla anime, mangi i muzyki." },
            { name: "Mihon (dawniej Tachiyomi)", url: "https://mihon.app/", badge: "APLIKACJA ANDROID", description: "Najlepsza aplikacja do czytania mangi i komiksów na Androida." }
        ]
    },
    sections: [
        {
            id: "pl-anime",
            title: "🇵🇱 Polskie Strony Anime",
            links: [
                { name: "Anime Odcinki", url: "https://anime-odcinki.pl/" },
                { name: "AnimeDesu", url: "https://animedesu.pl/" },
                { name: "AnimeSub.info", url: "http://animesub.info/" },
                { name: "Desu-Online", url: "https://desu-online.pl/" },
                { name: "Docchi", url: "https://docchi.pl/" },
                { name: "FrixySubs", url: "https://frixysubs.pl/", tag: "Fansub" },
                { name: "Fumetsu", url: "https://fumetsu.pl/", tag: "Fansub" },
                { name: "Grupa Mirai", url: "https://www.grupa-mirai.pl/", tag: "Fansub" },
                { name: "Nana Subs", url: "https://nanasubs.com/", tag: "Fansub" },
                { name: "OgladajAnime", url: "https://ogladajanime.pl/", tag: "Najpopularniejsza" },
                { name: "Shinden", url: "https://shinden.pl/", tag: "Społeczność + Streaming" }
            ]
        },
        {
            id: "streaming-anime",
            title: "🎬 Streaming Anime",
            subsections: [
                {
                    title: "Top Rekomendacje",
                    links: [
                        { name: "⭐ All Manga", url: "https://allmanga.to/", tag: "Sub/Dub/Manga" },
                        { name: "⭐ AnimeKai", url: "https://animekai.to/home", tag: "Hard Subs/Dub" },
                        { name: "⭐ animepahe", url: "https://animepahe.ru/", tag: "Hard Subs/Dub/Kompresja" },
                        { name: "⭐ HiAnime", url: "https://hianime.to/", tag: "Sub/Dub" },
                        { name: "⭐ KickAssAnime", url: "https://kaa.to/", tag: "Sub/Dub" },
                        { name: "⭐ Miruro", url: "https://www.miruro.com/", tag: "Hard Subs/Dub/Czyste UI" }
                    ]
                },
                {
                    title: "Pozostałe Strony",
                    links: [
                        { name: "123anime", url: "https://123anime.info/", tag: "Sub/Dub" },
                        { name: "AniHQ", url: "https://anihq.to/", tag: "Sub/Dub" },
                        { name: "AnimeHub", url: "https://animehub.ac/", tag: "Sub/Dub" },
                        { name: "Anime Nexus", url: "https://anime.nexus/", tag: "Sub/Dub" },
                        { name: "AnimeNoSub", url: "https://animenosub.to/", tag: "RAW" },
                        { name: "AnimeOnsen", url: "https://animeonsen.xyz/", tag: "Sub/720p" },
                        { name: "AnimeParadise", url: "https://www.animeparadise.moe/", tag: "Sub/Dub" },
                        { name: "AnimeRealms", url: "https://www.animerealms.org/", tag: "Sub/Dub" },
                        { name: "AnimeStream", url: "https://anime.uniquestream.net/", tag: "Sub/720p" },
                        { name: "AnimeZ", url: "https://animeyy.com/", tag: "Sub/Dub" },
                        { name: "Anify", url: "https://anify.to/", tag: "Sub/Dub/Agregator" },
                        { name: "Aninow", url: "https://aninow.tv/", tag: "Sub/Dub" },
                        { name: "Anixl", url: "https://anixl.to/", tag: "Sub/Dub" },
                        { name: "AniZone", url: "https://anizone.to/", tag: "Sub" },
                        { name: "Anoboye", url: "https://anoboye.com/", tag: "Sub" },
                        { name: "Gojo (Animetsu)", url: "https://gojo.to/", tag: "Sub/Dub" },
                        { name: "HiCartoons", url: "https://hicartoon.to/", tag: "TV/Movies" },
                        { name: "KimCartoon", url: "https://kimcartoon.si/", tag: "TV" },
                        { name: "KissAnime", url: "https://kissanime.com.ru/", tag: "Sub/Dub" },
                        { name: "KissCartoon", url: "https://kisscartoon.nz/", tag: "TV" },
                        { name: "otakuu", url: "https://otakuu.se/", tag: "Sub/Dub" },
                        { name: "Rive", url: "https://rivestream.org/", tag: "Sub/Dub" },
                        { name: "TamilToon", url: "https://tamiltoon.net/", tag: "TV/Movies/Anime" },
                        { name: "TAnime", url: "https://tanime.tv/", tag: "Sub/Dub" },
                        { name: "Watch Cartoon Online", url: "https://www.watchcartoononline.com/", tag: "TV/Movies/Anime" },
                        { name: "WCO", url: "https://www.wco.tv/", tag: "TV/Movies/Anime" }
                    ]
                },
                {
                    title: "Donghua (Chińskie Animacje)",
                    links: [
                        { name: "AnimeKhor", url: "https://animekhor.org/", tag: "Donghua/Sub" },
                        { name: "AnimeXin", url: "https://animexin.dev/", tag: "Donghua/Sub" },
                        { name: "CKSub", url: "https://cksub.org/", tag: "Donghua/Sub" },
                        { name: "Crimson Subs", url: "https://crimsonfansubs.com/", tag: "Donghua/Sub" },
                        { name: "LMANIME", url: "https://lmanime.com/", tag: "Donghua/Sub" },
                        { name: "Lucifer Donghua", url: "https://luciferdonghua.in/", tag: "Donghua/Sub" },
                        { name: "MyAnime", url: "https://myanime.live/", tag: "Donghua/Sub" }
                    ]
                }
            ]
        },
        {
            id: "czytanie-online",
            title: "📖 Manga i Webtoony (Manhwa, Manhua)",
            subsections: [
                {
                    title: "Top Rekomendacje",
                    links: [
                        { name: "⭐ BATO", url: "https://bato.to/", tag: "Multi-język" },
                        { name: "⭐ ComicK", url: "https://comick.io/", tag: "Premium UI" },
                        { name: "⭐ MangaDex", url: "https://mangadex.org/", tag: "Najlepsza" },
                        { name: "⭐ MangaFire", url: "https://mangafire.to/", tag: "Szybka" }
                    ]
                },
                {
                    title: "Agregatory Mangi",
                    links: [
                        { name: "18Kami", url: "https://18kami.com/", tag: "18+" },
                        { name: "AllManga", url: "https://allmanga.to/manga" },
                        { name: "FanFox", url: "https://fanfox.net/" },
                        { name: "Kagane", url: "https://kagane.org/" },
                        { name: "KissManga", url: "https://kissmanga.dev/" },
                        { name: "MangaBuddy", url: "https://mangabuddy.com/" },
                        { name: "MangaClash", url: "https://mangaclash.com/" },
                        { name: "MangaFast", url: "https://mangafast.net/" },
                        { name: "MangaFreak", url: "https://mangafreak.net/" },
                        { name: "MangaHere", url: "https://mangahere.cc/" },
                        { name: "MangaHub", url: "https://mangahub.io/" },
                        { name: "MangaInn", url: "https://mangainn.net/" },
                        { name: "MangaJar", url: "https://mangajar.com/" },
                        { name: "MangaKakalot", url: "https://mangakakalot.gg/", tag: "Popularna" },
                        { name: "MangaKatana", url: "https://mangakatana.com/" },
                        { name: "MangaNato", url: "https://readmanganato.com/" },
                        { name: "MangaOwl", url: "https://mangaowl.net/" },
                        { name: "MangaPanda", url: "https://mangapanda.onl/" },
                        { name: "MangaPark.io", url: "https://mangapark.io/" },
                        { name: "MangaPill", url: "https://mangapill.com/" },
                        { name: "MangaRead", url: "https://www.mangaread.org/" },
                        { name: "MangaReader.to", url: "https://mangareader.to/" },
                        { name: "MangaSee123", url: "https://mangasee123.com/" },
                        { name: "Mangago", url: "https://mangago.me/" },
                        { name: "NineManga", url: "https://ninemanga.com/" },
                        { name: "ReadManga", url: "https://readmanga.live/" },
                        { name: "WeebCentral", url: "https://weebcentral.com/" }
                    ]
                },
                {
                    title: "Manhwa i Manhua",
                    links: [
                        { name: "ManhuaFast", url: "https://manhuafast.com/" },
                        { name: "ManhuaHot", url: "https://manhuahot.com/" },
                        { name: "ManhuaPlus", url: "https://manhuaplus.com/" },
                        { name: "ManhuaScan", url: "https://manhuascan.io/" },
                        { name: "ManhuaUS", url: "https://manhuaus.com/" },
                        { name: "Manhwa18", url: "https://manhwa18.net/", tag: "18+" },
                        { name: "ManhwaClan", url: "https://manhwaclan.com/" },
                        { name: "ManhwaTop", url: "https://manhwatop.com/" },
                        { name: "MangaTX", url: "https://mangatx.to/" },
                        { name: "Toonily", url: "https://toonily.com/", tag: "Najpopularniejsza" },
                        { name: "TopManhua", url: "https://topmanhua.com/" },
                        { name: "WEBTOON", url: "https://www.webtoons.com/en/", tag: "Oficjalne" },
                        { name: "ZinManga", url: "https://zinmanga.com/" }
                    ]
                },
                {
                    title: "Grupy Skanlacyjne",
                    links: [
                        { name: "AlphaScans", url: "https://alphascans.org/" },
                        { name: "AquaManga", url: "https://aquamanga.com/" },
                        { name: "AsuraScans", url: "https://www.asurascans.com/", tag: "Premium" },
                        { name: "DrakeScans", url: "https://drakescans.com/" },
                        { name: "Flame Scans", url: "https://flamescans.org/" },
                        { name: "Immortal Updates", url: "https://immortalupdates.com/" },
                        { name: "Luminous Scans", url: "https://luminousscans.com/" },
                        { name: "NightScans", url: "https://nightscans.net/" },
                        { name: "OmegaScans", url: "https://omegascans.com/" },
                        { name: "Reaper Scans", url: "https://reaperscans.com/" },
                        { name: "Reset Scans", url: "https://reset-scans.com/" },
                        { name: "RizzComic", url: "https://rizzcomic.com/" },
                        { name: "TempleToons", url: "https://templetoons.com/" },
                        { name: "TheBlankScans", url: "https://theblankscans.com/" },
                        { name: "Void Scans", url: "https://voidscans.com/" },
                        { name: "xCaliBR Scans", url: "https://xcalibrscans.com/" },
                        { name: "ZeroScans", url: "https://zeroscans.com/" }
                    ]
                }
            ]
        },
        {
            id: "serwisy-ogolne",
            title: "🌍 Serwisy Ogólne (Filmy, Seriale, Anime)",
            subsections: [
                {
                    title: "Streaming",
                    links: [
                        { name: "⭐ BEECH", url: "https://beech.watch/" },
                        { name: "⭐ Cineby", url: "https://www.cineby.app/" },
                        { name: "⭐ CinemaOS", url: "https://cinemaos.live/" },
                        { name: "⭐ Filmex", url: "https://filmex.to/" },
                        { name: "⭐ Flixer", url: "https://flixer.su/" },
                        { name: "⭐ NEPU", url: "https://nepu.to/" },
                        { name: "⭐ P-Stream", url: "https://pstream.mov/" },
                        { name: "⭐ Qstream", url: "https://qstream.pages.dev/" },
                        { name: "⭐ SpenFlix", url: "https://watch.spencerdevs.xyz/" },
                        { name: "⭐ VeloraTV", url: "https://veloratv.ru/" },
                        { name: "⭐ Vidbox", url: "https://vidbox.to/" },
                        { name: "⭐ XPrime", url: "https://xprime.tv/" },
                        { name: "⭐ yFlix", url: "https://yflix.to/" },
                        { name: "HollyMovieHD", url: "https://hollymoviehd.cc/" },
                        { name: "Levidia", url: "https://www.levidia.ch/" },
                        { name: "ProjectFreeTV", url: "https://projectfreetv.sx/" },
                        { name: "ShowBox", url: "https://www.showbox.media/" },
                        { name: "SoaPy", url: "https://soapy.to/" },
                        { name: "Willow", url: "https://willow.arlen.icu/" }
                    ]
                },
                {
                    title: "Pobieranie (DDL)",
                    links: [
                        { name: "⭐ 1Shows", url: "https://www.1shows.ru/" },
                        { name: "⭐ Pahe", url: "https://pahe.ink/" },
                        { name: "⭐ VegaMovies", url: "https://vegamovies.gmbh/" }
                    ]
                }
            ]
        },
        {
            id: "pobieranie-i-torrenty",
            title: "💾 Pobieranie i Torrenty",
            subsections: [
                {
                    title: "Torrenty",
                    links: [
                        { name: "Anime Tosho", url: "https://animetosho.org/", tag: "DDL + Torrent" },
                        { name: "bakabt", url: "https://bakabt.me/", tag: "Sub/Dub/Private" },
                        { name: "Hayase", url: "https://hayase.watch/", tag: "Torrent Streaming App" },
                        { name: "Nyaa", url: "https://nyaa.si/", tag: "Główny" },
                        { name: "ShanaProject", url: "https://www.shanaproject.com/", tag: "Sub" },
                        { name: "Tokyo Toshokan", url: "https://www.tokyotosho.info/?cat=7", tag: "Manga" },
                        { name: "TokyoTosho", url: "https://www.tokyotosho.info/", tag: "Anime" }
                    ]
                },
                {
                    title: "Direct Download (DDL)",
                    links: [
                        { name: "anime7.download", url: "https://anime7.download/", tag: "Sub" },
                        { name: "Anime-Sharing", url: "https://www.anime-sharing.com/", tag: "Forum" },
                        { name: "Anime2Enjoy", url: "https://www.anime2enjoy.com/", tag: "Sub" },
                        { name: "AnimeDDL", url: "https://www.animeddl.xyz/", tag: "Sub/Dub" },
                        { name: "AnimeOut", url: "https://www.animeout.xyz/", tag: "Sub" },
                        { name: "ChauThanh", url: "https://chauthanh.info/" },
                        { name: "Chiby", url: "https://www.animechiby.com/", tag: "Sub" },
                        { name: "hi10anime", url: "https://hi10anime.com/", tag: "Sub/High Quality" },
                        { name: "Kayoanime", url: "https://kayoanime.com/", tag: "Sub/Dub" },
                        { name: "nibl", url: "https://nibl.co.uk/", tag: "XDCC" },
                        { name: "NoobSubs", url: "https://www.noobsubs.com/" },
                        { name: "Tokyo Insider", url: "https://www.tokyoinsider.com/", tag: "Sub/Dub/Bulk DL" }
                    ]
                }
            ]
        },
        {
            id: "aplikacje",
            title: "📱 Aplikacje, Czytniki i Serwery",
            subsections: [
                {
                    title: "Android",
                    links: [
                        { name: "Aniyomi", url: "https://aniyomi.org/", tag: "Anime+Manga" },
                        { name: "EhViewer", url: "https://github.com/FooIbar/EhViewer" },
                        { name: "Kotatsu", url: "https://kotatsu.app/" },
                        { name: "LNReader", url: "https://github.com/LNReader/lnreader", tag: "Light Novels" },
                        { name: "Mihon", url: "https://mihon.app/", tag: "Najlepsza" },
                        { name: "Neko", url: "https://github.com/CarlosEsco/Neko", tag: "MangaDex" }
                    ]
                },
                {
                    title: "iOS",
                    links: [
                        { name: "Mangayomi", url: "https://github.com/kodjodevf/mangayomi", tag: "iOS/Android" },
                        { name: "Paperback", url: "https://paperback.moe/", tag: "iOS" }
                    ]
                },
                {
                    title: "Desktop",
                    links: [
                        { name: "AnymeX", url: "https://anymex.vercel.app/", tag: "Streaming App" },
                        { name: "HakuNeko", url: "https://hakuneko.download/", tag: "Download App" },
                        { name: "Komikku", url: "https://github.com/komikku-app/komikku", tag: "Linux" },
                        { name: "Miru", url: "https://miru.js.org/en/", tag: "Streaming" },
                        { name: "Seanime", url: "https://seanime.app/", tag: "Biblioteka/Streaming" },
                        { name: "Shiru", url: "https://github.com/RockinChaos/Shiru", tag: "Torrent Streaming" },
                        { name: "Taiga", url: "https://taiga.moe/", tag: "Tracking Program" }
                    ]
                },
                {
                    title: "Serwery Mediów (Self-hosted)",
                    links: [
                        { name: "Cubari", url: "https://cubari.moe/", tag: "Proxy Reader" },
                        { name: "Kaizoku", url: "https://github.com/oae/kaizoku" },
                        { name: "Kavita Reader", url: "https://www.kavitareader.com/" },
                        { name: "Komga", url: "https://komga.org/", tag: "Media Server" },
                        { name: "Mango Server", url: "https://github.com/hkalexling/Mango" },
                        { name: "Marvin", url: "https://github.com/anansi-project/marvin" },
                        { name: "Stremio Manga", url: "https://github.com/Stremio/stremio-manga" },
                        { name: "Suwayomi Server", url: "https://github.com/Suwayomi/Suwayomi-Server" },
                        { name: "Tanoshi", url: "https://github.com/faldez/tanoshi" }
                    ]
                }
            ]
        },
        {
            id: "bazy-danych-i-sledzenie",
            title: "📊 Bazy Danych i Śledzenie",
            links: [
                { name: "ACDB", url: "https://www.animecharactersdatabase.com/", tag: "Postacie" },
                { name: "AniDB", url: "https://anidb.net/" },
                { name: "AniList", url: "https://anilist.co/", tag: "Anime/Manga" },
                { name: "Anime-Planet", url: "https://www.anime-planet.com/" },
                { name: "Anisearch", url: "https://www.anisearch.com/" },
                { name: "Goodreads Manga", url: "https://www.goodreads.com/genres/manga" },
                { name: "Kenmei", url: "https://www.kenmei.co/" },
                { name: "Kitsu", url: "https://kitsu.io/" },
                { name: "Kurozora", url: "https://kurozora.app/" },
                { name: "LibraryThing", url: "https://www.librarything.com/" },
                { name: "MangaBaka", url: "https://mangabaka.dev/" },
                { name: "Manga Codex", url: "https://mangacodex.com/" },
                { name: "Mangaki", url: "https://mangaki.fr/" },
                { name: "MangaUpdates", url: "https://www.mangaupdates.com/" },
                { name: "MyAnimeList", url: "https://myanimelist.net/", tag: "Anime/Manga" },
                { name: "Simkl", url: "https://simkl.com/" },
                { name: "Spin.moe", url: "https://spin.moe/" },
                { name: "VNDB", url: "https://vndb.org/", tag: "Visual Novel" }
            ]
        },
        {
            id: "przewodniki-i-spolecznosci",
            title: "💡 Przewodniki i Społeczności",
            links: [
                { name: "Anime News Network", url: "https://www.animenewsnetwork.com/" },
                { name: "AnimeFillerList", url: "https://www.animefillerlist.com/", tag: "Przewodnik po fillerach" },
                { name: "Chiaki", url: "https://chiaki.site/" },
                { name: "Fansub Cartel", url: "https://index.fansubcar.tel/", tag: "Indeks Fansubów" },
                { name: "Manga Discord", url: "https://discord.gg/manga" },
                { name: "r/AnimePiracy Wiki", url: "https://www.reddit.com/r/animepiracy/wiki/index" },
                { name: "r/manga", url: "https://www.reddit.com/r/manga/" },
                { name: "r/mangapiracy", url: "https://www.reddit.com/r/mangapiracy/" },
                { name: "r/manhwa", url: "https://www.reddit.com/r/manhwa/" },
                { name: "r/VisualNovel Recs", url: "https://sites.google.com/view/rvisualnovels-recs/", tag: "Visual Novel" },
                { name: "SeaDex", url: "https://releases.moe/", tag: "Przewodniki jakości" },
                { name: "The Index", url: "https://theindex.moe/", tag: "Biblioteka Anime" },
                { name: "The Wiki", url: "https://thewiki.moe/" },
                { name: "TheBiem", url: "https://thebiem.com/" },
                { name: "watch_order", url: "https://www.reddit.com/r/anime/wiki/watch_order", tag: "Kolejność oglądania" },
                { name: "Wotaku Wiki", url: "https://wotaku.wiki/", tag: "Ogólny Przewodnik" }
            ]
        },
        {
            id: "light-novels",
            title: "📖 Light Novels",
            links: [
                { name: "JNovels", url: "https://jnovels.com/" },
                { name: "Just Light Novels", url: "https://www.justlightnovels.com/" },
                { name: "Light Novel Pub", url: "https://lightnovelpub.com/" },
                { name: "Light Novel World", url: "https://www.lightnovelworld.com/" },
                { name: "Novel Updates", url: "https://www.novelupdates.com/" },
                { name: "Read Light Novel", url: "https://www.readlightnovel.org/" },
                { name: "Royal Road", url: "https://www.royalroad.com/" },
                { name: "ScribbleHub", url: "https://www.scribblehub.com/" },
                { name: "WebNovel", url: "https://www.webnovel.com/" },
                { name: "WuxiaWorld", url: "https://www.wuxiaworld.com/" }
            ]
        },
        {
            id: "narzedzia-i-skrypty",
            title: "🛠️ Narzędzia, Skrypty i Rozszerzenia",
            links: [
                { name: "anime-dl", url: "https://github.com/gabelluardo/anime-dl", tag: "CLI" },
                { name: "AniSkip Extension", url: "https://github.com/aniskip/aniskip-extension", tag: "Pomiń Intro" },
                { name: "Anime Skip", url: "https://anime-skip.com/", tag: "Pomiń Intro Online" },
                { name: "CBZ Manager", url: "https://github.com/Belphemur/CBZManager" },
                { name: "Comic-DL", url: "https://github.com/Xonshiz/comic-dl", tag: "CLI" },
                { name: "HiAnime Enhancements", url: "https://greasyfork.org/en/scripts/506340", tag: "Userscript" },
                { name: "Kindle Comic Converter", url: "https://kcc.iosphe.re/" },
                { name: "kitsuneko", url: "https://kitsunekko.net/", tag: "Napisy" },
                { name: "Manga Bot", url: "https://mangabot.github.io/" },
                { name: "trace.moe", url: "https://trace.moe/", tag: "Wyszukiwarka obrazem" }
            ]
        },
        {
            id: "artbooki-i-ilustracje",
            title: "🎨 Artbooki i Ilustracje",
            links: [
                { name: "AllPornComic", url: "https://allporncomic.com/" },
                { name: "ArtStation", url: "https://www.artstation.com/" },
                { name: "Danbooru", url: "https://danbooru.donmai.us/" },
                { name: "DeviantArt", url: "https://www.deviantart.com/" },
                { name: "Gelbooru", url: "https://gelbooru.com/" },
                { name: "Konachan", url: "https://konachan.com/" },
                { name: "Pixiv", url: "https://www.pixiv.net/" },
                { name: "Safebooru", url: "https://safebooru.org/", tag: "SFW" },
                { name: "Sankaku Complex", url: "https://sankakucomplex.com/" },
                { name: "Yande.re", url: "https://yande.re/" },
                { name: "Zerochan", url: "https://www.zerochan.net/" }
            ]
        },
        {
            id: "raw-oryginaly",
            title: "🇯🇵 RAW - Japońskie Oryginały",
            links: [
                { name: "CMOA", url: "https://www.cmoa.jp/", tag: "Japanese", type: "official" },
                { name: "Comic Walker", url: "https://comic-walker.com/", tag: "Oficjalne", type: "official" },
                { name: "KLManga", url: "https://klmanga.com/" },
                { name: "LHScan", url: "https://lhscan.net/" },
                { name: "Manga Raw Club", url: "https://manga-raw.club/" },
                { name: "Manga1000", url: "https://manga1000.com/" },
                { name: "Manga1001", url: "https://manga1001.top/" },
                { name: "MangaPro", url: "https://mangapro.top/" },
                { name: "RawDevart", url: "https://rawdevart.com/" },
                { name: "RawLazy", url: "https://rawlazy.com/" },
                { name: "Rawkuma", url: "https://rawkuma.com/", tag: "Najpopularniejsza" },
                { name: "SenManga RAW", url: "https://raw.senmanga.com/" },
                { name: "Syosetu", url: "https://syosetu.com/", tag: "Web Novels", type: "official" },
                { name: "Weloma", url: "https://weloma.art/" }
            ]
        },
        {
            id: "oficjalne-zrodla",
            title: "✅ Oficjalne i Legalne Źródła",
            links: [
                { name: "AnimeThemes", url: "https://animethemes.moe/", tag: "Openings/Endings" },
                { name: "Crunchyroll", url: "https://www.crunchyroll.com/videos/anime", tag: "Anime" },
                { name: "Crunchyroll Manga", url: "https://www.crunchyroll.com/comics/manga" },
                { name: "MANGA Plus", url: "https://mangaplus.shueisha.co.jp/", tag: "Shueisha" },
                { name: "VIZ Shonen Jump", url: "https://www.viz.com/shonenjump" }
            ]
        },
        {
            id: "adult-18",
            title: "🔞 Treści 18+ (Tylko dla dorosłych)",
            links: [
                { name: "3Hentai", url: "https://3hentai.net/" },
                { name: "8Muses", url: "https://8muses.com/" },
                { name: "9hentai", url: "https://9hentai.to/" },
                { name: "ASMHentai", url: "https://asmhentai.com/" },
                { name: "E-Hentai", url: "https://e-hentai.org/" },
                { name: "ExHentai", url: "https://exhentai.org/", tag: "Sad Panda" },
                { name: "Hentai2Read", url: "https://hentai2read.com/" },
                { name: "HentaiEra", url: "https://hentaiera.com/" },
                { name: "HentaiFox", url: "https://hentaifox.com/" },
                { name: "HentaiHere", url: "https://hentaihere.com/" },
                { name: "HentaiNexus", url: "https://hentainexus.com/" },
                { name: "HentaiRead", url: "https://hentairead.com/" },
                { name: "Hitomi.la", url: "https://hitomi.la/" },
                { name: "IMHentai", url: "https://imhentai.xxx/" },
                { name: "MultPorn", url: "https://multporn.net/" },
                { name: "nhentai", url: "https://nhentai.net/" },
                { name: "nhentai.to", url: "https://nhentai.to/" },
                { name: "Pururin", url: "https://pururin.to/" },
                { name: "Tsumino", url: "https://tsumino.com/" }
            ]
        }
    ]
};