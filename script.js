document.addEventListener('DOMContentLoaded', () => {

    // --- BAZA DANYCH #1: GŁÓWNA LISTA APLIKACJI I NARZĘDZI ---
    const items = [
        {
            name: 'WhoCrashed',
            description: 'Portable - Analizator błędów systemowych (BSOD).',
            category: 'Diagnostyka',
            icon: 'icons/whocrashed.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Analiza błędów systemowych/WhoCrashed',
            tags: ['bsod', 'błędy', 'system', 'crash', 'dump', 'portable']
        },
        {
            name: 'LM Studio',
            description: 'Instalator - Klient do uruchamiania modeli językowych AI.',
            category: 'Aplikacje AI',
            icon: 'icons/lm-studio.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje AI/Narzędzia uruchamiające modele/LM-Studio',
            tags: ['ai', 'llm', 'model', 'językowy', 'instalator'],
details: '<p><a href="lmstudio/mcp_complete_setup.html"  class="btn">Instrukcja Instalacji Wszystkich MCP Serwerów</a></p>'
        },
        {
            name: 'Biblia Detailingu Audi A3',
            description: 'Kompleksowy przewodnik - środki czystości, detailing i serwis.',
            category: 'Auto',
            icon: 'icons/audi.svg',
            type: 'link',
            localPath: 'Auto/audi_środki_czystości.html',
            tags: ['auto', 'audi', 'detailing', 'czyszczenie', 'pielęgnacja', 'serwis', 'a3']
        },
        {
            name: 'Pinokio AI Browser',
            description: 'Instalator - Przeglądarka do automatyzacji modeli AI.',
            category: 'Aplikacje AI',
            icon: 'icons/pinokio.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje AI/Pinokio (Przeglądarka i Automatyzacja Modeli AI)',
            tags: ['ai', 'pinokio', 'browser', 'automatyzacja', 'instalator']
        },
        {
            name: 'VideoProc Converter AI',
            description: 'Instalator - Konwerter wideo z funkcjami AI (v. 6.4).',
            category: 'Aplikacje AI',
            icon: 'icons/videoproc.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje AI/Programy wideo AI/VideoProc Converter AI 6.4',
            tags: ['ai', 'wideo', 'video', 'konwerter', 'upscaling', 'instalator']
        },
        {
            name: 'VirtualBox',
            description: 'Instalator - Aplikacja do wirtualizacji systemów.',
            category: 'Wirtualizacja',
            icon: 'icons/virtualbox.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje do wirtualizacji/VirtualBox',
            tags: ['vm', 'wirtualna', 'maszyna', 'system', 'instalator']
        },
        {
            name: 'Spotube (Klient Spotify)',
            description: 'Dodatek - Alternatywny klient Spotify bez reklam.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/spotify.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Alternatywny klient Spotify',
            tags: ['spotify', 'muzyka', 'spotube', 'bez reklam']
        },
        {
            name: 'Discord (Wtyczki)',
            description: 'Dodatki - Folder z wtyczkami i motywami.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/discord.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Discord',
            tags: ['discord', 'wtyczki', 'plugins', 'betterdiscord', 'motywy']
        },
        {
            name: 'Opera GX',
            description: 'Instalator - Przeglądarka internetowa dla graczy.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/operagx.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Przeglądarki/OperaGx',
            tags: ['przeglądarka', 'internet', 'opera', 'gx', 'gaming', 'instalator']
        },
        {
            name: 'Tor Browser',
            description: 'Portable - Gotowa do użycia przeglądarka Tor.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/tor.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Przeglądarki/Tor Browser',
            tags: ['przeglądarka', 'tor', 'prywatność', 'anonimowość', 'portable']
        },
        {
            name: 'ByClick Downloader',
            description: 'Instalator - Pobieranie filmów z internetu.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/byclick.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Ściąganie filmów z interentu',
            tags: ['youtube', 'downloader', 'pobieranie', 'wideo', 'instalator']
        },
        {
            name: 'Free Download Manager',
            description: 'Instalator - Menedżer pobierania plików.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/fdm.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/Ściąganie z większą prędkością',
            tags: ['fdm', 'downloader', 'pobieranie', 'akcelerator', 'instalator']
        },
        {
            name: 'FreeTube',
            description: 'Instalator - Klient YouTube bez reklam.',
            category: 'Aplikacje Internetowe',
            icon: 'icons/freetube.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Aplikacje Internetowe/YouTube client bez reklam',
            tags: ['youtube', 'klient', 'bez reklam', 'prywatność', 'freetube', 'instalator']
        },
        {
            name: 'Biblioteki DirectX',
            description: 'Instalator bibliotek DirectX (Offline).',
            category: 'Narzędzia Systemowe',
            icon: 'icons/directx.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/DirectX',
            tags: ['directx', 'dx', 'gry', 'biblioteki', 'runtime']
        },
        {
            name: 'Pakiety VCRedist (wszystkie)',
            description: 'Zbiór wszystkich wersji Microsoft Visual C++.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/vcredist.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/DirectX/vcredist (wszystkie vcredisty)',
            tags: ['vcredist', 'visual c++', 'runtime', 'biblioteki', 'msvc']
        },
        {
            name: 'Snappy Driver Installer',
            description: 'Narzędzie do instalacji sterowników offline.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/snappy.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/instalator offline sterowników/snappy install driver(do sterowników) zgraj na inny dysk',
            tags: ['sdi', 'snappy', 'sterowniki', 'offline', 'instalator', 'narzędzie']
        },
        {
            name: 'AMD Software Adrenalin (Ustawienia)',
            description: 'Filtry i inne ustawienia do AMD Adrenalin.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/amd.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Ustawienia do AMD Software Adrenalin (to są ustawienia do amd adrenalin typu filtry i inne ustawienia)',
            tags: ['amd', 'adrenalin', 'ustawienia', 'filtry', 'profile', 'gpu']
        },
        {
            name: 'FPTBIOS',
            description: 'Narzędzie do flashowania BIOS na płytach Intel.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/bios.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/FPTBIOS update biosu na płytach intela (tu nie instalator a gotowy program do modu biosów)',
            tags: ['bios', 'mod', 'flash', 'intel', 'fpt', 'narzędzie'],
            details: `<h3>Flash Programming Tool (FPT)</h3><p>Zaawansowane narzędzie do odczytu i zapisu firmware na płytach głównych z chipsetami Intela. <strong>UWAGA: Używać z najwyższą ostrożnością! Błąd może trwale uszkodzić płytę główną.</strong></p>`
        },
        {
            name: 'MI899 (BIOSy X99)',
            description: 'Program z kolekcją zmodyfikowanych BIOS-ów dla płyt X99.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/mi899.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/mi899 program z biosami do płyt x99',
            tags: ['bios', 'mod', 'x99', 'huananzhi', 'intel', 'narzędzie'],
            details: `<p>Aplikacja zawierająca bazę danych zmodyfikowanych BIOS-ów (np. z odblokowanym Turbo Boost) dla popularnych chińskich płyt na sockecie LGA 2011-3 (X99).</p>`
        },
        {
            name: 'MMTool',
            description: 'Narzędzie do modyfikacji BIOS-ów (mikrokody, moduły).',
            category: 'Narzędzia Systemowe',
            icon: 'icons/MMTOOL.jpg',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/mmtool (modowanie biosów i mikrokody)',
            tags: ['bios', 'mod', 'ami', 'mmtool', 'mikrokod', 'uefi', 'narzędzie'],
            details: `<h3>AMI MMTool</h3><p>Narzędzie do edycji plików BIOS opartych na firmware AMI Aptio, pozwalające na dodawanie/usuwanie modułów, np. aktualizację mikrokodów procesora lub dodanie sterowników NVMe. <strong>UWAGA: Używać z najwyższą ostrożnością!</strong></p>`
        },
        {
            name: 'Libre Hardware Monitor',
            description: 'Portable - Monitorowanie parametrów sprzętowych.',
            category: 'Informacje o Sprzęcie',
            icon: 'icons/libre-hardware-monitor.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Informacje o sprzęcie/Monitorowanie parametrów sprzętowych (librehardwer monitor)',
            tags: ['hardware', 'monitor', 'temperatury', 'czujniki', 'sensory', 'portable'],
            details: `<p>Darmowe narzędzie (fork Open Hardware Monitor) do monitorowania temperatur, napięć, prędkości wentylatorów i obciążenia komponentów komputera.</p>`
        },
        {
            name: 'Thaiphoon Burner',
            description: 'Portable - Odczyt i edycja danych SPD z pamięci RAM.',
            category: 'Informacje o Sprzęcie',
            icon: 'icons/thaiphoon.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Informacje o sprzęcie/Odczyt danych z RAM/Thaiphoon Burner (preinstalowany)',
            tags: ['ram', 'pamięć', 'spd', 'xmp', 'overclocking', 'oc', 'portable'],
            details: `<h3>Thaiphoon Burner</h3><p>Specjalistyczne narzędzie do odczytu, modyfikacji i zapisu danych zawartych w chipie SPD na modułach pamięci RAM. Umożliwia m.in. edycję profili XMP. <strong>Używać z najwyższą ostrożnością!</strong></p>`
        },
        {
            name: 'HWiNFO',
            description: 'Portable (ZIP) - Szczegółowe informacje o sprzęcie.',
            category: 'Informacje o Sprzęcie',
            icon: 'icons/hwinfo.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Informacje o sprzęcie/Szczegółowe informacje o sprzęcie i odczyt sensorów - HWiNFO (2 wersje hwinfo w zipach)',
            tags: ['hardware', 'info', 'diagnostyka', 'czujniki', 'sensory', 'portable'],
            details: `<p>Jeden z najlepszych programów do szczegółowej analizy i monitorowania komponentów komputera w czasie rzeczywistym. W folderze znajdują się dwie wersje.</p>`
        },
        {
            name: 'Ninite Installer',
            description: 'Instalator zbiorczy dla popularnych aplikacji.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/ninite.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Instalatory zbiorcze',
            tags: ['ninite', 'instalator', 'automatyzacja', '7zip', 'blender', 'chrome', 'discord'],
            details: `<p>Gotowy instalator Ninite, który automatycznie pobiera i instaluje w tle wybrane programy w ich najnowszych wersjach, bez toolbarów i dodatkowych śmieci.</p>`
        },
        {
            name: 'Audacity',
            description: 'Instalator - Edytor audio o otwartym kodzie źródłowym.',
            category: 'Multimedia',
            icon: 'icons/audacity.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Multimedia – Edycja i Tworzenie/Audio/Audacity',
            tags: ['audio', 'dźwięk', 'edycja', 'nagrywanie', 'muzyka'],
            details: `<p>Popularny i darmowy program do nagrywania i edycji dźwięku.</p>`
        },
        {
            name: 'FMOD Studio',
            description: 'Portable - Narzędzie do tworzenia dźwięku do gier.',
            category: 'Multimedia',
            icon: 'icons/fmod.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Multimedia – Edycja i Tworzenie/Audio/FMOD Studio 2.01.16 (preinstalowane)',
            tags: ['audio', 'dźwięk', 'gry', 'game dev', 'sound design', 'portable'],
            details: `<p>Profesjonalne środowisko do tworzenia i implementacji interaktywnego dźwięku w grach komputerowych.</p>`
        },
        {
            name: 'Shotcut',
            description: 'Instalator - Darmowy edytor wideo.',
            category: 'Multimedia',
            icon: 'icons/shotcut.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Multimedia – Edycja i Tworzenie/Wideo  Stream/Edytor wideo (Shortcut)',
            tags: ['wideo', 'video', 'edycja', 'montaż', 'filmy'],
            details: `<p>Darmowy i wieloplatformowy edytor wideo o otwartym kodzie źródłowym.</p>`
        },
        {
            name: 'OBS Studio',
            description: 'Instalator - Program do streamowania i nagrywania.',
            category: 'Multimedia',
            icon: 'icons/obs.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Multimedia – Edycja i Tworzenie/Wideo  Stream/OBS',
            tags: ['wideo', 'video', 'stream', 'nagrywanie', 'twitch', 'youtube'],
            details: `<p>Standard w branży streamingu. Darmowe i potężne narzędzie do transmisji na żywo i nagrywania ekranu.</p>`
        },
        {
            name: 'IrfanView',
            description: 'Instalator - Szybka przeglądarka graficzna.',
            category: 'Multimedia',
            icon: 'icons/irfanview.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Multimedia – Edycja i Tworzenie/Zdjęcia/Irfanview',
            tags: ['zdjęcia', 'grafika', 'przeglądarka', 'obraz', 'konwersja'],
            details: `<p>Niezwykle szybka i lekka przeglądarka plików graficznych z podstawowymi funkcjami edycji i konwersji wsadowej.</p>`
        },
        {
            name: 'AIDA64 (Kolekcja)',
            description: 'Portable - Zestaw wersji Engineer i Extreme.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/aida64.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/AIDA64',
            tags: ['aida64', 'diagnostyka', 'benchmark', 'test', 'sprzęt', 'portable'],
            details: `<p>Folder zawiera kolekcję różnych wersji AIDA64 (Engineer, Extreme) do kompleksowej diagnostyki, audytu i testowania wydajności komputera.</p>`
        },
        {
            name: 'LatencyMon',
            description: 'Instalator - Analizator opóźnień DPC.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/latencymon.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/Analizator opóźnień systemowych DPC, przydatny przy problemach z audiowideo (latency mon)',
            tags: ['latency', 'dpc', 'audio', 'wideo', 'dźwięk', 'problemy', 'diagnostyka'],
            details: `<p>Narzędzie do sprawdzania, czy system jest w stanie obsługiwać dźwięk w czasie rzeczywistym bez zacięć i przerw. Niezbędne przy diagnozowaniu problemów z "trzaskami" w audio.</p>`
        },
        {
            name: 'FurMark',
            description: 'Portable - Benchmark i test stabilności GPU.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/furmark.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/Diagnostyka GPU/FurMark (preinstalowany)',
            tags: ['gpu', 'benchmark', 'test', 'stres', 'grafika', 'karta', 'portable'],
            details: `<p>Popularne narzędzie do intensywnego testowania obciążeniowego kart graficznych, często używane do sprawdzania stabilności po podkręceniu.</p>`
        },
        {
            name: 'MSI Kombustor',
            description: 'Instalator - Benchmark i test stabilności GPU od MSI.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/msi.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/Diagnostyka GPU/MSI Kombustor',
            tags: ['gpu', 'benchmark', 'test', 'stres', 'grafika', 'msi', 'kombustor'],
            details: `<p>Narzędzie do testowania wydajności i stabilności kart graficznych, często integrowane z MSI Afterburner.</p>`
        },
        {
            name: 'MemTest86',
            description: 'Portable - Bootowalny tester pamięci RAM.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/memtest.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/Testy CPU i RAM/memtest86 (preinstalowany)',
            tags: ['ram', 'pamięć', 'test', 'diagnostyka', 'błędy', 'bootowalny', 'portable'],
            details: `<p>Standard w testowaniu pamięci RAM. Wersja do uruchomienia z bootowalnego nośnika USB w celu dokładnego sprawdzenia modułów pod kątem błędów.</p>`
        },
        {
            name: 'Prime95',
            description: 'Portable - Test stabilności CPU i RAM.',
            category: 'Narzędzia Diagnostyczne',
            icon: 'icons/prime95.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Diagnostyczne/Testy CPU i RAM/prime95 (preinstalowany)',
            tags: ['cpu', 'procesor', 'ram', 'test', 'stres', 'obciążenie', 'oc', 'portable'],
            details: `<p>Klasyczne narzędzie do testowania stabilności procesora poprzez bardzo intensywne obliczenia. Niezbędne przy sprawdzaniu stabilności po podkręceniu CPU.</p>`
        },
        {
            name: 'DDU (Display Driver Uninstaller)',
            description: 'Portable - Bezpieczne usuwanie sterowników GPU.',
            category: 'Narzędzia do Ekranu',
            icon: 'icons/ddu.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia do Ekranu/Czyszczenie sterowników ekranu/DDU v18.0.0.4 (preinstalowany)',
            tags: ['ddu', 'gpu', 'sterowniki', 'usuwanie', 'czyszczenie', 'nvidia', 'amd', 'intel', 'portable'],
            details: `<h3>Display Driver Uninstaller</h3><p>Niezbędne narzędzie do całkowitego i czystego usuwania sterowników kart graficznych. Zalecane do użycia w trybie awaryjnym przed instalacją nowej wersji sterownika lub zmianą karty.</p>`
        },
        {
            name: 'CRU (Custom Resolution Utility)',
            description: 'Portable - Tworzenie niestandardowych rozdzielczości.',
            category: 'Narzędzia do Ekranu',
            icon: 'icons/cru.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia do Ekranu/Konfiguracja i ustawienia wyświetlacza/CRU (preinstalowany)',
            tags: ['cru', 'rozdzielczość', 'monitor', 'odświeżanie', 'freesync', 'zakres', 'portable'],
            details: `<p>Zaawansowane narzędzie do edycji bloków EDID monitora, co pozwala na tworzenie niestandardowych rozdzielczości, zmianę zakresu FreeSync i inne modyfikacje parametrów wyświetlacza.</p>`
        },
        {
            name: 'NVIDIA G-SYNC Demo',
            description: 'Portable - Demonstracja technologii G-SYNC.',
            category: 'Narzędzia do Ekranu',
            icon: 'icons/nvidia.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia do Ekranu/Testy wyświetlania i synchronizacji/G-SYNC demo (preinstalowany)',
            tags: ['gsync', 'nvidia', 'demo', 'test', 'synchronizacja', 'wahadło', 'portable'],
            details: `<p>Klasyczna demonstracja "wahadła" od NVIDIA, pozwalająca wizualnie sprawdzić działanie technologii G-SYNC, V-Sync i ich braku.</p>`
        },
        {
            name: 'TreeSize Free',
            description: 'Instalator - Analiza użycia miejsca na dysku.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/treesize.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Analiza użycia miejsca na dysku TreeSizeFree',
            tags: ['dysk', 'miejsce', 'analiza', 'rozmiar', 'folder'],
            details: `<p>Szybkie i proste narzędzie, które skanuje dysk i pokazuje, które foldery i pliki zajmują najwięcej miejsca.</p>`
        },
        {
            name: 'WizTree',
            description: 'Portable (ZIP) - Błyskawiczna analiza zajętości dysku.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/wiztree.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Bardzo szybka analiza zajętości miejsca na dysku wiztree_4_25_portable.zip',
            tags: ['dysk', 'miejsce', 'analiza', 'szybko', 'mft', 'portable'],
            details: `<p>Niezwykle szybkie narzędzie do analizy przestrzeni dyskowej, które odczytuje bezpośrednio tablicę MFT (Master File Table) na dyskach NTFS.</p>`
        },
        {
            name: 'CrystalDiskInfo',
            description: 'Portable - Odczyt danych S.M.A.R.T. dysków.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/crystaldiskinfo.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Benchmarki i diagnostyka dysków/crystal disc info',
            tags: ['dysk', 'smart', 'hdd', 'ssd', 'nvme', 'zdrowie', 'diagnostyka', 'portable'],
            details: `<p>Narzędzie do monitorowania stanu zdrowia dysków twardych i SSD poprzez odczyt parametrów S.M.A.R.T.</p>`
        },
        {
            name: 'CrystalDiskMark',
            description: 'Portable - Benchmark wydajności dysków.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/crystaldiskmark.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Benchmarki i diagnostyka dysków/disck mark (preinstalowany)',
            tags: ['dysk', 'benchmark', 'test', 'prędkość', 'szybkość', 'hdd', 'ssd', 'portable'],
            details: `<p>Popularne narzędzie do mierzenia prędkości odczytu i zapisu sekwencyjnego oraz losowego dla dysków twardych i SSD.</p>`
        },
        {
            name: 'HD Tune',
            description: 'Portable - Diagnostyka i benchmark dysków (różne wersje).',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/hdtune.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Benchmarki i diagnostyka dysków/HD Tune (różne wersje)',
            tags: ['dysk', 'benchmark', 'test', 'skan', 'błędy', 'hdd', 'diagnostyka'],
            details: `<p>Klasyczne narzędzie do testowania dysków, oferujące benchmarki, skanowanie w poszukiwaniu błędów i odczyt danych S.M.A.R.T.</p>`
        },
        {
            name: 'Macrorit Disk Expert',
            description: 'Portable (ZIP) - Zarządzanie partycjami.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/macrorit.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Narzędzie do zarządzania partycjami - Macrorit Disk Expert Free Portable mde-free-portable.zip',
            tags: ['dysk', 'partycje', 'zarządzanie', 'format', 'zmiana rozmiaru', 'portable'],
            details: `<p>Darmowe narzędzie do zarządzania partycjami, pozwalające na ich tworzenie, usuwanie, formatowanie i zmianę rozmiaru.</p>`
        },
        {
            name: 'Tenorshare 4DDiG',
            description: 'Instalator - Oprogramowanie do odzyskiwania danych.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/tenorshare.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Odzyskiwanie danych/Tenorshare 4DDiG',
            tags: ['dysk', 'odzyskiwanie', 'dane', 'pliki', 'ratowanie', 'recovery'],
            details: `<p>Instalator komercyjnego oprogramowania do odzyskiwania utraconych danych z różnych nośników.</p>`
        },
        {
            name: 'Wondershare Recoverit',
            description: 'Instalator - Oprogramowanie do odzyskiwania danych.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/recoverit.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Odzyskiwanie danych/Wondershare Recoverit', // Poprawiona ścieżka
            tags: ['dysk', 'odzyskiwanie', 'dane', 'pliki', 'ratowanie', 'recovery']
        },
        {
            name: 'R-Studio Technician',
            description: 'Portable - Zaawansowane odzyskiwanie danych.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/r-studio.png', // Musisz dodać zdjęcie r-studio.png
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Odzyskiwanie Danych/R-Studio',
            tags: ['dysk', 'odzyskiwanie', 'dane', 'pliki', 'ratowanie', 'recovery', 'raw', 'partycje', 'portable'],
            details: `<h3>R-Studio Technician</h3><p>Jeden z najpotężniejszych programów do odzyskiwania danych z uszkodzonych, sformatowanych lub usuniętych partycji. Obsługuje wiele systemów plików i zaawansowane skanowanie w poszukiwaniu utraconych plików.</p>`
        },
        {
            name: 'DMDE (DM Disk Editor)',
            description: 'Portable - Edytor dysku i odzyskiwanie danych.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/dmde.png', // Musisz dodać zdjęcie dmde.png
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Odzyskiwanie Danych/DMDE',
            tags: ['dysk', 'odzyskiwanie', 'dane', 'pliki', 'ratowanie', 'recovery', 'raw', 'raid', 'portable'],
            details: `<h3>DMDE - DM Disk Editor and Data Recovery</h3><p>Potężne, niskopoziomowe narzędzie do pracy z dyskami. Umożliwia wyszukiwanie i odzyskiwanie danych, edycję sektorów dysku oraz rekonstrukcję macierzy RAID. Bardzo skuteczne w trudnych przypadkach.</p>`
        },
        {
            name: 'Samsung Magician',
            description: 'Portable & Instalator - Oprogramowanie do dysków Samsung.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/samsung.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Oprogramowanie producenta/Samsung',
            tags: ['dysk', 'ssd', 'samsung', 'magician', 'diagnostyka', 'firmware'],
            details: `<p>Oficjalne oprogramowanie firmy Samsung do zarządzania dyskami SSD, pozwalające na monitorowanie stanu, aktualizację firmware i optymalizację wydajności.</p>`
        },
        {
            name: 'WinDirStat',
            description: 'Portable - Wizualizacja użycia miejsca na dysku.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/windirstat.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Wizualizacja użycia miejsca na dysku windir stat (wersje na 32 i 64 bitowy pc)',
            tags: ['dysk', 'miejsce', 'analiza', 'wizualizacja', 'treemap'],
            details: `<p>Klasyczne narzędzie, które przedstawia strukturę plików na dysku w formie graficznej mapy (treemap), co ułatwia zlokalizowanie "pożeraczy" miejsca.</p>`
        },
        {
            name: 'Victoria HDD/SSD',
            description: 'Portable (ZIP) - Zaawansowana diagnostyka dysków.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/victoria.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Zaawansowana diagnostyka i testowanie dysków HDD SSD  Victoria537.zip',
            tags: ['dysk', 'hdd', 'ssd', 'test', 'skan', 'błędy', 'remap', 'diagnostyka', 'portable'],
            details: `<h3>Victoria for Windows</h3><p>Potężne, profesjonalne narzędzie do dogłębnej diagnostyki, testowania i drobnych napraw dysków twardych i SSD. Umożliwia m.in. skanowanie powierzchni i remapowanie bad sectorów.</p>`
        },
        {
            name: 'Dev-C++',
            description: 'Instalator - Proste IDE do C/C++.',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/devcpp.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/IDE i kompilatory/Dev C++',
            tags: ['ide', 'c++', 'programowanie', 'kompilator', 'mingw'],
            details: `<p>Lekkie i proste zintegrowane środowisko programistyczne (IDE) dla języków C i C++, często używane do nauki.</p>`
        },
        {
            name: 'IntelliJ IDEA Community',
            description: 'Instalator - IDE do Javy i innych języków JVM.',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/intellij.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/IDE i kompilatory/JetBrains ideaIC-2023.3.exe',
            tags: ['ide', 'java', 'kotlin', 'jetbrains', 'programowanie'],
            details: `<p>Instalator darmowej wersji IntelliJ IDEA, jednego z najpotężniejszych środowisk programistycznych dla Javy i innych języków opartych na JVM.</p>`
        },
        {
            name: 'Visual Studio Code',
            description: 'Instalator - Wszechstronny edytor kodu.',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/vscode.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/IDE i kompilatory/Visual Studio Code',
            tags: ['ide', 'edytor', 'kod', 'programowanie', 'vscode', 'microsoft'],
            details: `<p>Niezwykle popularny, darmowy i rozszerzalny edytor kodu od Microsoft, wspierający praktycznie każdy język programowania dzięki systemowi wtyczek.</p>`
        },
        {
            name: 'Windsurf',
            description: 'Instalator - Edytor (?).',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/default.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/IDE i kompilatory/Windsurf',
            tags: ['ide', 'edytor', 'windsurf'],
            details: `<p>Folder z instalatorem dla Windsurf.</p>`
        },
        {
            name: 'Java Runtime (JRE 8)',
            description: 'Instalator - Środowisko uruchomieniowe Javy.',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/java.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/Języki i runtime/JRE 8u361',
            tags: ['java', 'jre', 'runtime', 'jvm', 'programowanie'],
            details: `<p>Instalator środowiska Java Runtime Environment w wersji 8, wymaganego do uruchamiania aplikacji napisanych w Javie.</p>`
        },
        {
            name: 'dnSpy',
            description: 'Portable - Debugger i dekompilator .NET.',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/dnspy.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/Wsteczna inżynieria/dnSpy (preinstalowany)',
            tags: ['dekompilator', 'debugger', '.net', 'c#', 'reverse engineering', 'portable'],
            details: `<p>Potężne narzędzie do inżynierii wstecznej aplikacji napisanych w technologii .NET. Umożliwia dekompilację, edycję i debugowanie kodu.</p>`
        },
        {
            name: 'AMD APU Tuning Utility',
            description: 'Portable - Tuning i undervolting dla APU AMD.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/AMD APU Tuning Utility.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/CPU i Undervolting/AMD APU Tuning Utility (preinstalowane)',
            tags: ['amd', 'apu', 'ryzen', 'tuning', 'undervolting', 'oc', 'portable'],
            details: `<p>Narzędzie pozwalające na zaawansowaną konfigurację i obniżanie napięcia (undervolting) dla zintegrowanych procesorów AMD APU, często używane w laptopach i handheldach.</p>`
        },
        {
            name: 'PBO2 Tuner',
            description: 'Portable - Undervolting dla Ryzen 5800X3D i innych.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/ryzen.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/CPU i Undervolting/PBO 2 Turner (underwolting ryzen 5800x3d) (preinstalowane)',
            tags: ['pbo', 'ryzen', 'undervolting', '5800x3d', 'amd', 'oc', 'portable'],
            details: `<p>Narzędzie do precyzyjnego ustawiania krzywej Curve Optimizer dla procesorów AMD Ryzen, szczególnie przydatne dla modeli z zablokowanym mnożnikiem jak 5800X3D, w celu obniżenia temperatur i poprawy wydajności.</p>`
        },
        {
            name: 'ThrottleStop',
            description: 'Portable - Zarządzanie throttlingiem i undervolting CPU.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/throttlestop.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/CPU i Undervolting/throtle stop (program do undervoltu i sprawdzania czy jest throtling) (preinstalowane)',
            tags: ['throttling', 'undervolting', 'cpu', 'intel', 'temperatury', 'laptop', 'portable'],
            details: `<p>Zaawansowane narzędzie, głównie dla procesorów Intel, do monitorowania i zapobiegania zjawisku throttlingu (obniżania taktowania z powodu temperatury lub limitów mocy).</p>`
        },
        {
            name: 'Wipe Professional',
            description: 'Instalator + Crack - Czyszczenie śladów aktywności.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/wipe.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Czyszczenie śladów aktywności, optymalizacja prywatności/Wipe Professional 2023.08 + Crack/Wipe Professional 2023.08 + Crack',
            tags: ['prywatność', 'czyszczenie', 'ślady', 'dane', 'bezpieczeństwo'],
            details: `<p>Oprogramowanie do usuwania śladów aktywności użytkownika z komputera w celu ochrony prywatności. W folderze znajduje się instalator wraz z aktywatorem.</p>`
        },
        {
            name: 'O&O ShutUp10++',
            description: 'Portable - Wyłączanie telemetrii w Windows 10/11.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/oo-shutup.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Debloat  system/Narzędzie do wyłączania telemetrii i funkcji szpiegujących w Windows 10 11 OOSU10.exe',
            tags: ['debloat', 'prywatność', 'telemetria', 'windows', 'szpiegowanie', 'o&o'],
            details: `<p>Popularne narzędzie, które w prosty sposób pozwala wyłączyć dziesiątki funkcji związanych ze zbieraniem danych (telemetrią) w systemach Windows 10 i 11.</p>`
        },
        {
            name: 'Windows 10 Debloater',
            description: 'Skrypty PowerShell do optymalizacji i odchudzania Windows.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/powershell.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Debloat  system/Windows10Debloater-master (skrypty do optymalizacji .ps)',
            tags: ['debloat', 'skrypty', 'powershell', 'windows', 'optymalizacja', 'prywatność'],
            details: `<p>Zbiór skryptów PowerShell do usuwania niechcianych, preinstalowanych aplikacji (bloatware) i modyfikacji ustawień systemowych w celu poprawy wydajności i prywatności.</p>`
        },
        {
            name: 'AMD Radeon GPU Optimization Pack',
            description: 'Paczka optymalizacyjna dla kart graficznych AMD.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/amdo.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/GPU/AMD RADEON GPU OPTIMIZATION PACK (jest to paczka optymalizacyjna pod gpu amd)',
            tags: ['amd', 'radeon', 'gpu', 'optymalizacja', 'rejestr', 'tweak'],
            details: `<p>Zestaw modyfikacji (prawdopodobnie plików .reg i skryptów) mających na celu optymalizację działania sterowników i kart graficznych AMD.</p>`
        },
        {
            name: 'Microsoft PC Manager',
            description: 'Instalator - Oficjalne narzędzie do optymalizacji od Microsoft.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/microsoft.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Narzędzie Microsoft do optymalizacji i czyszczenia PC Microsoft PC Manager Installer.exe',
            tags: ['microsoft', 'optymalizacja', 'czyszczenie', 'pc manager', 'narzędzie'],
            details: `<p>Instalator oficjalnego, darmowego narzędzia od Microsoft do podstawowej konserwacji systemu, m.in. czyszczenia plików tymczasowych i zarządzania aplikacjami.</p>`
        },
        {
            name: 'EmptyStandbyList',
            description: 'Narzędzie CLI do czyszczenia pamięci podręcznej RAM.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/ram.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/RAM  Cache  Input Lag/EmptyStandbyList',
            tags: ['ram', 'pamięć', 'cache', 'standby list', 'czyszczenie', 'narzędzie'],
            details: `<p>Małe narzędzie wiersza poleceń, które wymusza opróżnienie listy "Standby" w pamięci RAM, co może zwolnić zasoby i poprawić płynność w niektórych grach.</p>`
        },
        {
            name: 'ISLC (Intelligent Standby List Cleaner)',
            description: 'Portable - Automatyczne czyszczenie pamięci dla mniejszego input lag.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/islc.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/RAM  Cache  Input Lag/ISLC v1.0.2.5(mniejszy input lag)                       (preinstalowane)',
            tags: ['ram', 'pamięć', 'cache', 'standby list', 'input lag', 'gry', 'portable'],
            details: `<p>Popularne narzędzie od twórcy DDU, które automatyzuje proces czyszczenia listy "Standby" w pamięci RAM, co może zredukować przycięcia i input lag w grach.</p>`
        },
        {
            name: 'Mem Reduct',
            description: 'Instalator - Program do redukcji użycia pamięci RAM.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/mem-reduct.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/RAM  Cache  Input Lag/Mem Reduct',
            tags: ['ram', 'pamięć', 'optymalizacja', 'czyszczenie', 'narzędzie'],
            details: `<p>Lekkie narzędzie monitorujące i czyszczące pamięć RAM w celu zwolnienia zasobów systemowych.</p>`
        },
        {
            name: 'DRAM Ryzen Calculator',
            description: 'Portable - Kalkulator timingów RAM dla Ryzen.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/ryzen.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/RAM  Cache  Input Lag/ryzen dram calculator (preinstalowany)',
            tags: ['ram', 'pamięć', 'ryzen', 'dram', 'timingi', 'oc', 'kalkulator', 'portable'],
            details: `<p>Niezbędne narzędzie do podkręcania pamięci RAM na platformach AMD Ryzen. Na podstawie typu kości pamięci oblicza bezpieczne i wydajne ustawienia timingów.</p>`
        },
        {
            name: 'Skrypty Optymalizacyjne PowerShell',
            description: 'Zbiór skryptów .ps do optymalizacji Windows.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/powershell1.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Skrypt PowerShell do usprawnieńoptymalizacji Windows',
            tags: ['skrypty', 'powershell', 'windows', 'optymalizacja', 'tweak'],
            details: `<p>Folder zawierający różne skrypty PowerShell przeznaczone do wprowadzania zaawansowanych zmian i optymalizacji w systemie Windows.</p>`
        },
        {
            name: 'Ultimate Windows Tweaker',
            description: 'Portable (ZIP) - Zestaw narzędzi do modyfikacji Windows.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/uwt.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Universal Windows Tweaker Suite - zestaw narzędzi do tweakowania  UWT5.zip',
            tags: ['tweak', 'windows', 'modyfikacje', 'ustawienia', 'optymalizacja', 'portable'],
            details: `<p>Popularne, lekkie narzędzie oferujące dostęp do setek ukrytych ustawień i modyfikacji systemowych, pozwalających na personalizację i optymalizację Windows.</p>`
        },
        {
            name: 'WinToys',
            description: 'Instalator - Zestaw narzędzi systemowych w nowoczesnym interfejsie.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/wintoys.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/WinToys - Zestaw Narzędzi Systemowych Wintoys Installer.exe',
            tags: ['tweak', 'windows', 'narzędzia', 'optymalizacja', 'czyszczenie'],
            details: `<p>Nowoczesne narzędzie typu "wszystko w jednym" do optymalizacji, czyszczenia i modyfikacji systemu Windows, z interfejsem w stylu Windows 11.</p>`
        },
        {
            name: 'Fan Control',
            description: 'Instalator - Zaawansowane sterowanie wentylatorami.',
            category: 'Optymalizacja Systemu',
            icon: 'icons/fan-control.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Optymalizacja Systemu/Zaawansowane sterowanie wentylatorami  FanControl_219_net_8_0_Installer.exe',
            tags: ['wentylatory', 'fan', 'kontrola', 'krzywa', 'temperatury', 'chłodzenie'],
            details: `<p>Wysoce konfigurowalne oprogramowanie do sterowania prędkością obrotową praktycznie wszystkich wentylatorów w komputerze, na podstawie dowolnych czujników temperatury.</p>`
        },        {
            name: 'Oculus / Meta Software',
            description: 'Instalator oprogramowania dla gogli Oculus/Meta Quest.',
            category: 'Programy do VR',
            icon: 'icons/meta.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do VR/Oculus  Meta (oculus setup)',
            tags: ['vr', 'oculus', 'meta', 'quest', 'pcvr', 'instalator']
        },
        {
            name: 'Android Sideloader (dla VR)',
            description: 'Narzędzie do instalowania gier z zewnątrz na goglach VR.',
            category: 'Programy do VR',
            icon: 'icons/sideloader.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do VR/VR – Gry z zewnętrznych źródeł  AndroidSideloader v2.29.2.exe',
            tags: ['vr', 'quest', 'android', 'sideload', 'gry', 'apk']
        },
        {
            name: 'Hamachi',
            description: 'Instalator - Tworzenie wirtualnych sieci LAN.',
            category: 'Programy Sieciowe',
            icon: 'icons/hamachi.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/LAN  Virtual LAN/Hamachi',
            tags: ['lan', 'vpn', 'gry', 'sieć', 'wirtualna']
        },
        {
            name: 'TCPView',
            description: 'Portable - Monitorowanie połączeń sieciowych TCP/UDP.',
            category: 'Programy Sieciowe',
            icon: 'icons/sysinternals.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Monitorowanie aktywnych połączeń sieciowych TCPUDP - Sysinternals TCPViewPortable_4.19_English_online.paf.exe',
            tags: ['tcp', 'udp', 'sieć', 'połączenia', 'monitor', 'sysinternals', 'portable']
        },
        {
            name: 'TrafficMonitor',
            description: 'Portable (ZIP) - Monitorowanie ruchu sieciowego.',
            category: 'Programy Sieciowe',
            icon: 'icons/traffic-monitor.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Monitorowanie ruchu sieciowego  TrafficMonitor_V1.85.1_x86.zip',
            tags: ['sieć', 'ruch', 'prędkość', 'internet', 'monitor', 'portable']
        },
        {
            name: 'Angry IP Scanner',
            description: 'Instalator - Skaner adresów IP i portów w sieci.',
            category: 'Programy Sieciowe',
            icon: 'icons/ipscan.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Skaner adresów IP i portów w sieci lokalnej - prawdopodobnie Angry IP Scanner  ipscan-3.9.1-setup.exe',
            tags: ['sieć', 'lan', 'ip', 'port', 'skaner', 'narzędzie']
        },
        {
            name: 'Cloudflare WARP',
            description: 'Instalator - Usługa VPN od Cloudflare.',
            category: 'Programy Sieciowe',
            icon: 'icons/cloudflare.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/VPN/Cloudflare WARP Cloudflare_WARP_Release-x64.msi',
            tags: ['vpn', 'prywatność', 'bezpieczeństwo', 'cloudflare', 'warp']
        },
        {
            name: 'UrbanVPN',
            description: 'Instalator - Usługa VPN.',
            category: 'Programy Sieciowe',
            icon: 'icons/urbanvpn.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/VPN/UrbanVPN',
            tags: ['vpn', 'prywatność', 'bezpieczeństwo']
        },
        {
            name: '7-Zip (alternatywny)',
            description: 'Instalator - Potężny i darmowy archiwizer plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/7zip.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Archiwizacja/7zip',
            tags: ['archiwizer', 'zip', 'rar', 'kompresja']
        },
        {
            name: 'NanaZip',
            description: 'Instalator - Nowoczesny archiwizer plików (fork 7-Zip).',
            category: 'Przydatne Narzędzia',
            icon: 'icons/nanazip.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Archiwizacja/Nana Zip Nowoczesny archiwizer plików',
            tags: ['archiwizer', 'zip', 'rar', 'kompresja', 'nowoczesny']
        },
        {
            name: 'Family Tree Heritage',
            description: 'Portable - Tworzenie drzewa genealogicznego.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/family-tree.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Drzewo Geanalogiczne/Family Tree Heritage(drzewo genalogiczne) (preinstalowane)',
            tags: ['drzewo', 'genealogia', 'rodzina', 'historia', 'portable']
        },
        {
            name: 'FocusWriter',
            description: 'Instalator - Edytor tekstu do pisania bez rozpraszaczy.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/focuswriter.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Inne/Edytor tekstu skupiony na pisaniu bez rozpraszaczy (focuswriter)',
            tags: ['tekst', 'edytor', 'pisanie', 'notatnik']
        },
        {
            name: 'FiiNote',
            description: 'Instalator - Alternatywny notatnik.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/fiinote.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Inne/notatnik lepszy od windowsowego (FiiNoteSetup.exe)',
            tags: ['tekst', 'edytor', 'notatki', 'notatnik']
        },
        {
            name: 'Notepads',
            description: 'Instalator - Nowoczesna alternatywa dla Notatnika.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/notepads.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Inne/Nowoczesny edytor tekstu, alternatywa dla Notatnika  Notepads_1.5.6.0_x86_x64_arm64.msixbundle',
            tags: ['tekst', 'edytor', 'notatnik', 'nowoczesny', 'uwp']
        },
        {
            name: 'scrcpy',
            description: 'Portable (ZIP) - Wyświetlanie ekranu Androida na PC.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/scrcpy.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Klonowanie ekranu/SCRPY Wyświetlanie i kontrola ekranu Androida na PC (zipy 32 i 64 bit)',
            tags: ['android', 'klonowanie', 'mirroring', 'ekran', 'telefon', 'adb', 'portable']
        },
        {
            name: 'Spacedesk',
            description: 'Instalator - Użyj tabletu/telefonu jako dodatkowego ekranu.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/spacedesk.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Klonowanie ekranu/Spacedesk aplikacja do klonowania ekranu z telefonu',
            tags: ['ekran', 'monitor', 'klonowanie', 'tablet', 'telefon']
        },
        {
            name: 'Adobe Acrobat Pro',
            description: 'Instalator - Zaawansowany edytor plików PDF.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/acrobat.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/Adobe Acrobat Pro 2024 v24.1.20615 (x64)',
            tags: ['pdf', 'adobe', 'edycja', 'dokumenty']
        },
        {
            name: 'CCleaner Professional',
            description: 'Instalator + Crack - Czyszczenie i optymalizacja systemu.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/ccleaner.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/CCleaner Professional Plus v5.87 + Fix {CracksHash}',
            tags: ['czyszczenie', 'rejestr', 'optymalizacja', 'system']
        },
        {
            name: 'Poprawa jakości dźwięku (FXSound/Dolby)',
            description: 'Narzędzia i presety do poprawy jakości audio.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/audio.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/Poprawa jakości dźwięku',
            tags: ['audio', 'dźwięk', 'jakość', 'fxsound', 'dolby', 'equalizer']
        },
        {
            name: 'Usuwanie Wokalu (LALAL.AI/UVR)',
            description: 'Narzędzia do separacji ścieżek audio.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/vocal-remover.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/program do usuwania wokalu z muzyki',
            tags: ['audio', 'wokal', 'muzyka', 'separacja', 'instrumental']
        },
        {
            name: 'Nomacs',
            description: 'Instalator - Szybka przeglądarka obrazów.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/nomacs.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/Przeglądarka obrazów nomacs-setup-x64 7_8_10_11.msi',
            tags: ['zdjęcia', 'grafika', 'przeglądarka', 'obraz']
        },
        {
            name: 'EarTrumpet',
            description: 'Instalator - Zaawansowana kontrola głośności.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/eartrumpet.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Multimedialne/Zaawansowana kontrola głośności dla aplikacji  EarTrumpet Installer.exe',
            tags: ['dźwięk', 'audio', 'głośność', 'mikser', 'windows']
        },
        {
            name: 'Everything',
            description: 'Portable - Błyskawiczne wyszukiwanie plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/everything.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Błyskawiczne wyszukiwanie plików (32 i 64 bit)',
            tags: ['wyszukiwanie', 'pliki', 'szybko', 'indeksowanie']
        },
        {
            name: 'TranslucentTB',
            description: 'Instalator - Dostosowanie paska zadań.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/translucenttb.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Dostosowanie wyglądu paska zadań  TranslucentTB Installer.exe',
            tags: ['pasek zadań', 'taskbar', 'wygląd', 'personalizacja', 'windows']
        },
        {
            name: 'Total Commander / Double Commander',
            description: 'Dwupanelowy menedżer plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/total-commander.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Dwupanelowy menedżer plików',
            tags: ['pliki', 'menedżer', 'dwa panele', 'total commander']
        },
        {
            name: 'Easy Context Menu',
            description: 'Portable (ZIP) - Edytor menu kontekstowego.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/context-menu.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Edytor menu kontekstowego ec_menu.zip',
            tags: ['menu', 'kontekstowe', 'edycja', 'windows', 'portable']
        },
        {
            name: 'Dism++',
            description: 'Portable (ZIP) - Graficzna nakładka na DISM.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/dism-plus.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Graficzna nakładka na DISM do zarządzania obrazem systemu, czyszczenia, itp Dism++10.1.1002.1B.zip',
            tags: ['dism', 'windows', 'naprawa', 'czyszczenie', 'obraz', 'portable']
        },
        {
            name: 'WingetUI',
            description: 'Instalator - Graficzna nakładka na Winget, Scoop i Chocolatey.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/wingetui.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Graficzna nakładka na menedżer pakietów Winget WingetUI.Installer.exe',
            tags: ['winget', 'scoop', 'chocolatey', 'menedżer', 'pakiety', 'instalator']
        },
        {
            name: 'Windows Repair (Tweaking.com)',
            description: 'Portable (ZIP) - Kompleksowe narzędzie do naprawy Windows.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/tweaking.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Kompleksowe narzędzie do naprawy Windows tweaking.com_windows_repair_aio.zip',
            tags: ['naprawa', 'windows', 'system', 'problemy', 'rejestr', 'portable']
        },
        {
            name: 'File Converter',
            description: 'Instalator - Konwerter plików z menu kontekstowego.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/file-converter.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Konwerter plików z menu kontekstowego FileConverter-2.1-x64-setup.msi',
            tags: ['konwerter', 'pliki', 'menu', 'kontekstowe', 'formaty']
        },
        {
            name: 'Intel Unison',
            description: 'Instalator - Łączenie telefonu z PC.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/unison.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Łączenie telefonu z PC Intel® Unison™ Installer.exe',
            tags: ['intel', 'unison', 'telefon', 'pc', 'synchronizacja', 'pliki']
        },
        {
            name: 'Chocolatey',
            description: 'Instalator - Menedżer pakietów dla Windows.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/chocolatey.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Menedżer pakietów dla Windows chocolatey-2.4.3.0.msi',
            tags: ['chocolatey', 'menedżer', 'pakiety', 'wiersz poleceń', 'cli']
        },
        {
            name: 'PowerRename',
            description: 'Portable - Masowa zmiana nazw plików (część PowerToys).',
            category: 'Przydatne Narzędzia',
            icon: 'icons/powertoys.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Narzędzie do masowej zmiany nazw - część PowerToys (32 i 64 bit)',
            tags: ['zmiana nazwy', 'pliki', 'masowo', 'powertoys', 'narzędzie']
        },
        {
            name: 'Windhawk',
            description: 'Instalator - Modyfikacja i dostosowywanie Windows.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/windhawk.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Narzędzie do modyfikacji i dostosowywania Windows windhawk_setup.exe',
            tags: ['windows', 'modyfikacje', 'tweak', 'personalizacja', 'customizacja']
        },
        {
            name: 'LockHunter',
            description: 'Instalator - Odblokowywanie zablokowanych plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/lockhunter.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Narzędzie do odblokowywania plików używanych przez inne procesy lockhuntersetup_3-4-3.exe',
            tags: ['pliki', 'odblokuj', 'usuwanie', 'procesy', 'narzędzie']
        },
        {
            name: 'AllDup',
            description: 'Instalator - Wyszukiwanie duplikatów plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/alldup.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Narzędzie do wyszukiwania duplikatów plików AllDupSetup.exe',
            tags: ['pliki', 'duplikaty', 'czyszczenie', 'wyszukiwanie']
        },
        {
            name: 'Czkawka',
            description: 'Portable (ZIP) - Wyszukiwanie duplikatów, pustych folderów itp.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/czkawka.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Narzędzie do wyszukiwania duplikatów, pustych folderów, dużych plików itp. - alternatywauzupełnienie AllDup windows_czkawka_gui_46.zip',
            tags: ['pliki', 'duplikaty', 'czyszczenie', 'puste foldery', 'portable']
        },
        {
            name: 'InControl',
            description: 'Portable - Kontrola aktualizacji Windows.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/grc.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/narzędzie od GRC, np. do kontroli aktualizacji - narzędzie systemowebezpieczeństwo incontrol.exe',
            tags: ['grc', 'windows update', 'aktualizacje', 'kontrola', 'bezpieczeństwo', 'portable']
        },
        {
            name: 'Rainmeter',
            description: 'Instalator - Silnik do widżetów i personalizacji pulpitu.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/rainmeter.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Silnik do widżetów i dostosowywania pulpitu Rainmeter-4.5.23.exe',
            tags: ['pulpit', 'widgety', 'skórki', 'personalizacja', 'wygląd']
        },
        {
            name: 'Flow Launcher',
            description: 'Portable (ZIP) - Szybkie uruchamianie aplikacji.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/flow-launcher.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Szybkie uruchamianie aplikacji i wyszukiwanie Flow-Launcher-Portable.zip',
            tags: ['launcher', 'wyszukiwanie', 'uruchamianie', 'produktywność', 'portable']
        },
        {
            name: 'Windows Toolkit',
            description: 'Portable - Tworzenie niestandardowych obrazów ISO Windows.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/windows.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/windows toolkit(program do tworzenia customowego iso) (preinstalowane)',
            tags: ['windows', 'iso', 'custom', 'instalacja', 'obraz', 'portable']
        },
        {
            name: 'Advanced Renamer',
            description: 'Instalator - Zaawansowana zmiana nazw plików.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/advanced-renamer.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Zaawansowane narzędzie do zmiany nazw plików advanced_renamer_setup_4_11.exe',
            tags: ['zmiana nazwy', 'pliki', 'masowo', 'narzędzie']
        },
        {
            name: 'ShareX',
            description: 'Portable (ZIP) - Zaawansowane zrzuty ekranu.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/sharex.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Zaawansowane narzędzie do zrzutów ekranu i udostępniania ShareX-17.0.0-portable.zip',
            tags: ['zrzuty ekranu', 'screenshot', 'nagrywanie', 'gif', 'udostępnianie', 'portable']
        },
        {
            name: 'BCUninstaller',
            description: 'Portable (ZIP) - Zaawansowany deinstalator programów.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/bcuninstaller.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Zaawansowany deinstalator programów BCUninstaller_5.8.3_portable.zip',
            tags: ['deinstalator', 'usuwanie', 'programy', 'czyszczenie', 'rejestr', 'portable']
        },
        {
            name: 'System Informer',
            description: 'Instalator - Zaawansowany menedżer zadań (dawniej Process Hacker).',
            category: 'Przydatne Narzędzia',
            icon: 'icons/system-informer.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Zaawansowany menedżer zadańprocesów, dawniej Process Hacker  systeminformer-3.2.2501-release-setup.exe',
            tags: ['procesy', 'menedżer zadań', 'diagnostyka', 'usługi', 'sieć']
        },
        {
            name: 'Autoruns',
            description: 'Portable - Zarządzanie autostartem (Sysinternals).',
            category: 'Przydatne Narzędzia',
            icon: 'icons/sysinternals.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Narzędzia systemowe Użytkowe/Zarządzanie autostartem - Sysinternals autoruns.exe',
            tags: ['autostart', 'uruchamianie', 'sysinternals', 'diagnostyka', 'portable']
        },
        {
            name: 'Wykrywanie Folderów (.bat)',
            description: 'Skrypt .bat do wykrywania folderów.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/batch.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/Program do wykrywania folderów (jest w .bat)',
            tags: ['skrypt', 'batch', 'bat', 'narzędzie']
        },
        {
            name: '3uTools',
            description: 'Instalator - Zarządzanie urządzeniami Apple (iPhone).',
            category: 'Przydatne Narzędzia',
            icon: 'icons/3utools.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/RGB i sprzęt/3uTools (do modyfikacji iPhone)',
            tags: ['iphone', 'ios', 'apple', 'zarządzanie', 'jailbreak']
        },
        {
            name: 'OpenRGB',
            description: 'Portable - Uniwersalne sterowanie oświetleniem RGB.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/openrgb.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/RGB i sprzęt/OpenRGB Windows 64-bit (oprogramowanie do podświelania rgb) (preinstalowane)',
            tags: ['rgb', 'oświetlenie', 'led', 'sterowanie', 'open source', 'portable']
        },
        {
            name: 'Corsair iCUE',
            description: 'Instalator - Oprogramowanie do sprzętu Corsair.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/corsair.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Przydatne Narzędzia/RGB i sprzęt/Corsair ICUE',
            tags: ['rgb', 'corsair', 'icue', 'wentylatory', 'chłodzenie', 'oprogramowanie']
        },
        {
            name: 'Presety Słuchawek (G Pro X)',
            description: 'Ustawienia equalizera dla słuchawek Logitech G Pro X.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/logitech.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Słuchawki (mam słuchawki g prox i to jest preset na fajny bass)',
            tags: ['audio', 'dźwięk', 'słuchawki', 'logitech', 'g pro x', 'preset', 'equalizer']
        },
        {
            name: 'Inwentarz Sprzętu',
            description: 'Folder z plikami tekstowymi opisującymi posiadany sprzęt PC.',
            category: 'Informacje o Sprzęcie',
            icon: 'icons/inventory.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Sprzęt i konfiguracje (to jest folder gdzie w txt zapisuje mój inwentarz pc sprzętu gpu procesory itp)',
            tags: ['inwentarz', 'sprzęt', 'pc', 'komponenty', 'lista', 'dokumentacja']
        },
        {
            name: 'NTLite',
            description: 'Portable - Modyfikacja obrazów instalacyjnych Windows.',
            category: 'Starsze Wersje Windows',
            icon: 'icons/ntlite.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Starsze wersje Windows – narzędzia i łatki/NTLite (preinstalowane)',
            tags: ['windows', 'iso', 'custom', 'instalacja', 'modyfikacja', 'debloat', 'portable']
        },
        {
            name: 'Windows 7 KernelEx',
            description: 'Instalator - Rozszerzenie jądra dla Windows 7.',
            category: 'Starsze Wersje Windows',
            icon: 'icons/win7.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Starsze wersje Windows – narzędzia i łatki/Windows 7 KexSetup_Release_1_1_2_1428.exe',
            tags: ['windows 7', 'kernelex', 'kompatybilność', 'programy']
        },
        {
            name: 'Niezbędnik Windows XP',
            description: 'Zbiór narzędzi i łatek dla Windows XP.',
            category: 'Starsze Wersje Windows',
            icon: 'icons/winxp.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Starsze wersje Windows – narzędzia i łatki/Windows XP/Niezbędnik Windows Xp',
            tags: ['windows xp', 'narzędzia', 'łatki', 'retro']
        },
        {
            name: 'OneCore API (dla Win XP)',
            description: 'API rozszerzające kompatybilność Windows XP.',
            category: 'Starsze Wersje Windows',
            icon: 'icons/winxp.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Starsze wersje Windows – narzędzia i łatki/Windows XP/OneCoreAPI',
            tags: ['windows xp', 'onecoreapi', 'kompatybilność', 'programy', 'api']
        },
        {
            name: 'Cinebench R15',
            description: 'Portable - Benchmark wydajności CPU (starsza wersja).',
            category: 'Testy i Benchmarki',
            icon: 'icons/cinebench.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki CPU/Cinebench/cinebench r15 (preinstal)',
            tags: ['cpu', 'benchmark', 'test', 'wydajność', 'renderowanie', 'r15', 'portable']
        },
        {
            name: 'Cinebench R23',
            description: 'Portable - Benchmark wydajności CPU (nowsza wersja).',
            category: 'Testy i Benchmarki',
            icon: 'icons/cinebench.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki CPU/Cinebench/cinebench r23 (preinstal)',
            tags: ['cpu', 'benchmark', 'test', 'wydajność', 'renderowanie', 'r23', 'portable']
        },
        {
            name: 'CPU-Z',
            description: 'Portable - Identyfikacja procesora, płyty i RAM.',
            category: 'Testy i Benchmarki',
            icon: 'icons/cpu-z.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki CPU/CPU-Z (preinstal 32 i 64)',
            tags: ['cpu', 'procesor', 'ram', 'płyta główna', 'informacje', 'portable']
        },
        {
            name: '3DMark (Starsze Wersje)',
            description: 'Kolekcja klasycznych benchmarków 3DMark (2001-2011).',
            category: 'Testy i Benchmarki',
            icon: 'icons/3dmark.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki GPU/3D marki 2001-2011',
            tags: ['gpu', 'benchmark', 'test', '3dmark', 'retro', 'gry']
        },
{
    name: 'PCMark (Starsze Wersje 2002-2013)',
    description: 'Kolekcja klasycznych benchmarków PCMark do testów systemowych.',
    category: 'Testy i Benchmarki',
    icon: 'icons/pcmark.png',
    folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki Systemowe (PCMark 2002-2013)',
    tags: ['pcmark', 'benchmark', 'test', 'system', 'wydajność', 'retro', 'kolekcja'],
    details: `<h3>Kolekcja PCMark 2002-2013</h3>
    <p>Zestaw historycznych wersji benchmarku PCMark do testowania ogólnej wydajności komputera:</p>
    <ul>
        <li><strong>PCMark 2002</strong> - Pierwsza wersja, dla Windows 98/2000/XP</li>
        <li><strong>PCMark04</strong> - Era Windows XP</li>
        <li><strong>PCMark05</strong> - Testy CPU i HDD</li>
        <li><strong>PCMark Vantage</strong> - Dla Windows Vista/7</li>
        <li><strong>PCMark 7</strong> - Era Windows 7</li>
        <li><strong>PCMark 8</strong> - Dla Windows 8/8.1</li>
    </ul>
    <p>Każda wersja dostosowana do swojej ery sprzętowej i systemowej.</p>`
},
        {
            name: 'FurMark 2.0',
            description: 'Instalator - Benchmark i test stabilności GPU.',
            category: 'Testy i Benchmarki',
            icon: 'icons/furmark.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Benchmarki GPU/FurMark 2.0',
            tags: ['gpu', 'benchmark', 'test', 'stres', 'grafika', 'karta']
        },
        {
            name: 'GPU-Z',
            description: 'Portable - Szczegółowe informacje o karcie graficznej.',
            category: 'Testy i Benchmarki',
            icon: 'icons/gpu-z.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Diagnostyka i monitorowanie GPU/GPU-Z (preinstal)',
            tags: ['gpu', 'karta graficzna', 'informacje', 'diagnostyka', 'portable']
        },
        {
            name: 'MSI Afterburner',
            description: 'Instalator - Podkręcanie i monitorowanie GPU.',
            category: 'Testy i Benchmarki',
            icon: 'icons/msi-afterburner.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Diagnostyka i monitorowanie GPU/MSI Afterburner',
            tags: ['gpu', 'oc', 'podkręcanie', 'monitoring', 'rtss', 'gry']
        },
        {
            name: 'OCCT',
            description: 'Portable - Kompleksowy test stabilności PC.',
            category: 'Testy i Benchmarki',
            icon: 'icons/occt.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Diagnostyka i monitorowanie GPU/OCCT (preinstal)',
            tags: ['test', 'stres', 'stabilność', 'cpu', 'gpu', 'ram', 'zasilacz', 'portable']
        },
        {
            name: 'VRAM Memory Test (VMT)',
            description: 'Portable - Test pamięci VRAM karty graficznej.',
            category: 'Testy i Benchmarki',
            icon: 'icons/vram.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Diagnostyka i monitorowanie GPU/program do sprawdzania pamięci vram (vmtce)',
            tags: ['vram', 'pamięć', 'gpu', 'test', 'diagnostyka', 'błędy', 'portable']
        },
        {
            name: 'CapFrameX',
            description: 'Instalator - Zaawansowany monitoring wydajności w grach.',
            category: 'Testy i Benchmarki',
            icon: 'icons/capframex.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Monitoring wydajności w grach/CapFrameX',
            tags: ['benchmark', 'gry', 'fps', 'frametime', 'monitoring', 'analiza']
        },
        {
            name: 'RTSS (RivaTuner Statistics Server)',
            description: 'Instalator - Wyświetlanie statystyk na ekranie (OSD).',
            category: 'Testy i Benchmarki',
            icon: 'icons/rtss.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Testy GPU i Benchmarki/Monitoring wydajności w grach/RTSS',
            tags: ['rtss', 'osd', 'monitoring', 'fps', 'gry', 'nakładka']
        },
        {
            name: 'Easy2Boot',
            description: 'Portable - Tworzenie bootowalnych pendrive\'ów multiboot.',
            category: 'Bootowalne Pendrive\'y',
            icon: 'icons/easy2boot.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Tworzenie bootowalnych pendrive’ów/Kreatory multiboot/Easy2Boot',
            tags: ['boot', 'usb', 'pendrive', 'multiboot', 'iso', 'narzędzie', 'portable']
        },
        {
            name: 'Ventoy',
            description: 'Portable - Tworzenie bootowalnych pendrive\'ów (przeciągnij i upuść).',
            category: 'Bootowalne Pendrive\'y',
            icon: 'icons/ventoy.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Tworzenie bootowalnych pendrive’ów/Kreatory multiboot/Ventoy',
            tags: ['boot', 'usb', 'pendrive', 'multiboot', 'iso', 'narzędzie', 'portable']
        },
        {
            name: 'WinSetupFromUSB',
            description: 'Portable - Tworzenie bootowalnych pendrive\'ów Windows/Linux.',
            category: 'Bootowalne Pendrive\'y',
            icon: 'icons/winsetupfromusb.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Tworzenie bootowalnych pendrive’ów/Kreatory multiboot/WinSetupFromUSB',
            tags: ['boot', 'usb', 'pendrive', 'windows', 'instalator', 'portable']
        },
        {
            name: 'YUMI',
            description: 'Portable - Tworzenie bootowalnych pendrive\'ów multiboot.',
            category: 'Bootowalne Pendrive\'y',
            icon: 'icons/yumi.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Tworzenie bootowalnych pendrive’ów/Kreatory multiboot/YUMI',
            tags: ['boot', 'usb', 'pendrive', 'multiboot', 'linux', 'narzędzie', 'portable']
        },
        {
            name: 'Rufus',
            description: 'Portable - Tworzenie bootowalnych pendrive\'ów z ISO.',
            category: 'Bootowalne Pendrive\'y',
            icon: 'icons/rufus.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Tworzenie bootowalnych pendrive’ów/Pojedynczy ISO → USB/Rufus',
            tags: ['boot', 'usb', 'pendrive', 'iso', 'windows', 'instalator', 'portable']
        },
        {
            name: 'Ustawienia do Programów',
            description: 'Zbiór plików konfiguracyjnych i ustawień dla różnych aplikacji.',
            category: 'Narzędzia Systemowe',
            icon: 'icons/settings.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Ustawienia do Programów',
            tags: ['ustawienia', 'konfiguracja', 'profile', 'dane']
        },
        {
            name: 'Trae',
            description: 'VSCode podobny edytor kodu',
            category: 'Narzędzia Programistyczne',
            icon: 'icons/default.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Programistyczne/IDE i kompilatory/Trae',
            tags: ['ide', 'edytor', 'trae'],
            details: `<p>Folder z instalatorem dla Trae.</p>`
        },
        {
            name: 'Instalatory Microsoft Office',
            description: 'Kolekcja instalatorów Office (365, 2016, 2010, 2003).',
            category: 'Windows & Office',
            icon: 'icons/office.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Instalatory Office',
            tags: ['office', 'word', 'excel', 'powerpoint', 'instalator', 'microsoft']
        },
        {
            name: 'Konfiguracja Debloatera (Screenshots)',
            description: 'Zrzuty ekranu z konfiguracji skryptu automatyzującego.',
            category: 'Windows & Office',
            icon: 'icons/screenshot.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/sschneegans.de konfiguracja zdeblotowanego systemu',
            tags: ['debloat', 'windows', 'konfiguracja', 'instrukcja', 'zdjęcia']
        },
        {
            name: 'Uniwersalny Aktywator',
            description: 'Aktywator dla systemów Windows i pakietów Office.',
            category: 'Windows & Office',
            icon: 'icons/activator.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Uniwersalny aktywator Windows & Office',
            tags: ['windows', 'office', 'aktywator', 'kms', 'narzędzie']
        },
        {
            name: 'Windows 11 (Klucze/Aktywator)',
            description: 'Narzędzia i klucze do aktywacji systemu Windows 11.',
            category: 'Windows & Office',
            icon: 'icons/win11.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Win 11',
            tags: ['windows 11', 'klucze', 'aktywacja']
        },
        {
            name: 'Windows 98 SE (Klucze)',
            description: 'Lista kluczy produktu dla systemu Windows 98 SE.',
            category: 'Windows & Office',
            icon: 'icons/win98.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Win 98 SE (klucze)',
            tags: ['windows 98', 'klucze', 'retro']
        },
        {
            name: 'Windows Vista (Klucze)',
            description: 'Lista kluczy produktu dla systemu Windows Vista.',
            category: 'Windows & Office',
            icon: 'icons/win-vista.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Win Vista (klucze)',
            tags: ['windows vista', 'klucze']
        },
        {
            name: 'Windows 10 (Aktywacja)',
            description: 'Narzędzia do aktywacji systemu Windows 10.',
            category: 'Windows & Office',
            icon: 'icons/win10.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Windows 10 (aktywacja bez klucza)',
            tags: ['windows 10', 'aktywacja', 'narzędzie']
        },
        {
            name: 'Windows XP (Klucze i Legalizator)',
            description: 'Klucze i narzędzia do aktywacji systemu Windows XP.',
            category: 'Windows & Office',
            icon: 'icons/winxp.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Windows & Office – Klucze i Aktywatory/Windows XP (klucze i legalizator)',
            tags: ['windows xp', 'klucze', 'aktywacja', 'legalizator', 'retro']
        },
        {
            name: 'Zdjęcia',
            description: 'Folder z kolekcją prywatnych zdjęć.',
            category: 'Foldery Osobiste',
            icon: 'icons/folder-image.png',
            folderPath: '../Multimedia/Zdjęcia',
            tags: ['zdjęcia', 'multimedia', 'osobiste']
        },
        {
            name: 'Muzyka',
            description: 'Folder z kolekcją prywatnej muzyki.',
            category: 'Foldery Osobiste',
            icon: 'icons/folder-music.png',
            folderPath: '../Multimedia/Muzyka',
            tags: ['muzyka', 'multimedia', 'osobiste']
        },
        {
            name: 'Literatura',
            description: 'Folder z e-bookami i inną literaturą.',
            category: 'Foldery Osobiste',
            icon: 'icons/folder-book.png',
            folderPath: '../Multimedia/Literatura',
            tags: ['książki', 'ebook', 'literatura', 'osobiste']
        },
        {
            name: 'Dokumenty',
            description: 'Folder z ważnymi dokumentami.',
            category: 'Foldery Osobiste',
            icon: 'icons/folder-document.png',
            folderPath: '../Dokumenty',
            tags: ['dokumenty', 'praca', 'osobiste']
        },
        {
            name: 'Projekty',
            description: 'Folder z wszystkimi moimi projektami.',
            category: 'Projekty',
            icon: 'icons/folder-project.png',
            folderPath: '../Projekty',
            tags: ['projekty', 'praca', 'kod', 'grafika']
        },
        {
            name: 'Cheat Engine',
            description: 'Instalator - Edytor pamięci i narzędzie do oszukiwania w grach.',
            category: 'Gaming & Mody',
            icon: 'icons/cheat-engine.png',
            folderPath: "../Centrum Gier i Modyfikacji/Cheat Engine  Trainer'y/Cheat Engine",
            tags: ['gry', 'cheat', 'trainer', 'edycja pamięci']
        },
        {
            name: 'WeMod',
            description: 'Instalator - Aplikacja z trainerami do gier.',
            category: 'Gaming & Mody',
            icon: 'icons/wemod.png',
            folderPath: "../Centrum Gier i Modyfikacji/Cheat Engine  Trainer'y/WeMod",
            tags: ['gry', 'cheat', 'trainer', 'mody']
        },
        {
            name: 'DXVK (DX to Vulkan)',
            description: 'Wrapper tłumaczący DirectX 9/10/11 na Vulkan.',
            category: 'Gaming & Mody',
            icon: 'icons/vulkan.png',
            folderPath: '../Centrum Gier i Modyfikacji/ciekawe programy do gier a także emulacja dx na vulkan/emulacja dx na vulkan',
            tags: ['gry', 'vulkan', 'directx', 'dxvk', 'wydajność', 'emulacja']
        },
        {
            name: 'Lossless Scaling',
            description: 'Instalator - Narzędzie do skalowania obrazu i generowania klatek.',
            category: 'Gaming & Mody',
            icon: 'icons/lossless-scaling.png',
            folderPath: '../Centrum Gier i Modyfikacji/ciekawe programy do gier a także emulacja dx na vulkan/Lossless Scaling',
            tags: ['gry', 'skalowanie', 'fsr', 'lsfg', 'wydajność', 'frame generation']
        },
        {
            name: 'LukeZ FSR3 Mod',
            description: 'Mod dodający FSR 3 (Frame Generation) do gier.',
            category: 'Gaming & Mody',
            icon: 'icons/fsr.png',
            folderPath: '../Centrum Gier i Modyfikacji/ciekawe programy do gier a także emulacja dx na vulkan/lukez fsr 3 mod',
            tags: ['gry', 'fsr', 'mody', 'frame generation', 'amd']
        },
        {
            name: 'DLSS Swapper',
            description: 'Portable - Narzędzie do podmiany bibliotek DLSS w grach.',
            category: 'Gaming & Mody',
            icon: 'icons/dlss.png',
            folderPath: '../Centrum Gier i Modyfikacji/ciekawe programy do gier a także emulacja dx na vulkan/Upgrader dlss itp',
            tags: ['gry', 'dlss', 'nvidia', 'aktualizacja', 'wydajność', 'portable']
        },
        {
            name: 'Playnite',
            description: 'Instalator - Agregator bibliotek gier.',
            category: 'Gaming & Mody',
            icon: 'icons/playnite.png',
            folderPath: '../Centrum Gier i Modyfikacji/Launchery i Klienty/Agregator bibliotek gier (PlayniteInstaller.exe)',
            tags: ['gry', 'launcher', 'biblioteka', 'steam', 'gog', 'epic']
        },
        {
            name: 'Launchery Gier',
            description: 'Folder z instalatorami popularnych launcherów (EA, Epic, Rockstar itp.).',
            category: 'Gaming & Mody',
            icon: 'icons/controller.png',
            folderPath: "../Centrum Gier i Modyfikacji/Launchery i Klienty",
            tags: ['gry', 'launcher', 'ea', 'epic', 'ubisoft', 'rockstar', 'xbox', 'minecraft']
        },
        {
            name: 'Mod Organizery',
            description: 'Folder z managerami modów (Vortex, MO2).',
            category: 'Gaming & Mody',
            icon: 'icons/mod-organizer.png',
            folderPath: "../Centrum Gier i Modyfikacji/Mody i Mod Manager'y",
            tags: ['gry', 'mody', 'vortex', 'mo2', 'modding', 'fallout', 'stalker']
        },
        {
            name: 'Narzędzia do Gier (Kolekcja)',
            description: 'Zbiór przydatnych narzędzi: 4GB Patch, Idle Master, SAM, SteamCMD itp.',
            category: 'Gaming & Mody',
            icon: 'icons/tools.png',
            folderPath: '../Centrum Gier i Modyfikacji/Narzędzia do Gier',
            tags: ['gry', 'narzędzia', 'steam', '4gb patch', 'idle master', 'sam', 'osiągnięcia']
        },
        {
            name: 'Savy i Backup',
            description: 'Folder z kopiami zapasowymi zapisów z gier.',
            category: 'Gaming & Mody',
            icon: 'icons/save.png',
            folderPath: '../Centrum Gier i Modyfikacji/Savy  Backup',
            tags: ['gry', 'save', 'zapis', 'backup', 'dsj']
        },
        {
            name: 'Ustawienia do Gier',
            description: 'Folder z plikami konfiguracyjnymi i ustawieniami do gier.',
            category: 'Gaming & Mody',
            icon: 'icons/settings.png',
            folderPath: '../Centrum Gier i Modyfikacji/ustawienia do gier',
            tags: ['gry', 'ustawienia', 'konfiguracja', 'dsj', 'war thunder']
        },
        {
            name: 'AdwCleaner',
            description: 'Portable - Skaner i usuwanie Adware/PUP.',
            category: 'Bezpieczeństwo',
            icon: 'icons/adwcleaner.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Bezpieczeństwo/AdwCleaner',
            tags: ['bezpieczeństwo', 'adware', 'pup', 'malwarebytes', 'czyszczenie', 'przeglądarka', 'portable']
        },
        {
            name: 'ComboFix',
            description: 'Portable - Zaawansowane usuwanie malware (UŻYWAĆ OSTROŻNIE).',
            category: 'Bezpieczeństwo',
            icon: 'icons/combofix.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Bezpieczeństwo/ComboFix',
            tags: ['bezpieczeństwo', 'malware', 'wirus', 'rootkit', 'naprawa', 'zaawansowane'],
            details: `<h3>UWAGA!</h3><p>ComboFix to niezwykle potężne, ale i agresywne narzędzie. Używaj go tylko w ostateczności i gdy wiesz, co robisz. Może uszkodzić system, jeśli zostanie użyty nieprawidłowo.</p>`
        },
        {
            name: 'RKill',
            description: 'Portable - Zatrzymuje aktywne procesy malware.',
            category: 'Bezpieczeństwo',
            icon: 'icons/rkill.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Bezpieczeństwo/RKill',
            tags: ['bezpieczeństwo', 'malware', 'wirus', 'procesy', 'narzędzie', 'portable']
        },
        {
            name: 'Macrium Reflect Free',
            description: 'Instalator - Tworzenie obrazów dysków i backup.',
            category: 'Narzędzia Dyskowe',
            icon: 'icons/macrium.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Narzędzia Dyskowe/Obrazy Dysków i Backup/Macrium_Reflect_Free',
            tags: ['backup', 'obraz dysku', 'klonowanie', 'img', 'partycje']
        },
        {
            name: 'AnyDesk',
            description: 'Instalator/Portable - Narzędzie do zdalnego pulpitu.',
            category: 'Programy Sieciowe',
            icon: 'icons/anydesk.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Zdalny Dostęp i Serwery/AnyDesk',
            tags: ['zdalny pulpit', 'pomoc', 'remote desktop', 'anydesk']
        },
        {
            name: 'TeamViewer',
            description: 'Instalator/Portable - Narzędzie do zdalnego pulpitu.',
            category: 'Programy Sieciowe',
            icon: 'icons/teamviewer.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Zdalny Dostęp i Serwery/TeamViewer',
            tags: ['zdalny pulpit', 'pomoc', 'remote desktop', 'teamviewer']
        },
        {
            name: 'PuTTY',
            description: 'Portable - Klient SSH i Telnet.',
            category: 'Programy Sieciowe',
            icon: 'icons/putty.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Zdalny Dostęp i Serwery/PuTTY (wersja 32 i 64 bit)',
            tags: ['ssh', 'telnet', 'konsola', 'serwer', 'putty', 'portable']
        },
        {
            name: 'WinSCP',
            description: 'Instalator/Portable - Graficzny klient SFTP/FTP.',
            category: 'Programy Sieciowe',
            icon: 'icons/winscp.png',
            folderPath: '../Centrum Narzędzi i Oprogramowania/Programy sieciowe i VPN/Zdalny Dostęp i Serwery/WinSCP',
            tags: ['sftp', 'ftp', 'pliki', 'serwer', 'winscp']
        },
        {
            name: 'YarrList (Lokalna Kopia)',
            description: 'Twoja lokalna, offlineowa kopia zapasowa linków YarrList.',
            category: 'Przydatne Narzędzia', // lub inna kategoria, która Ci pasuje
            icon: 'icons/yarrlist.png', // Musisz znaleźć/stworzyć ikonę dla YarrList
            type: 'link', // Nowy, specjalny typ
            localPath: 'YarrList/index.html' // Ścieżka do lokalnego pliku
        },
        {
            name: 'YarrList (Online)',
            description: 'Oryginalna strona YarrList - sprawdź aktualizacje.',
            category: 'Przydatne Narzędzia',
            icon: 'icons/yarrlist-online.png', // Sugeruję inną ikonę, np. z globusem
            type: 'link',
            externalUrl: 'https://yarrlist.xyz/' // Link do strony online
        },
        {
            name: 'Lokalna Baza Wiedzy',
            description: 'Twoja lokalna kopia YarrList, Megathreadu i Niezbędnika Rozszerzeń.',
            category: 'Zasoby Internetowe',
            icon: 'icons/knowledge-base.png', // Sugeruję nową, ogólną ikonę (np. książki)
            type: 'link',
            localPath: 'KnowledgeBase/index.html' // Nowa ścieżka do zintegrowanego pliku
        },
        {
            name: 'Reddit Piracy Megathread',
            description: 'Kompendium wiedzy i linków z Reddita.',
            category: 'Zasoby Internetowe',
            icon: 'icons/reddit.png',
            type: 'link',
            externalUrl: 'https://www.reddit.com/r/Piracy/wiki/megathread'
        },
        {
            name: 'Champagne Wiki',
            description: 'Kolejna świetna wiki z zasobami.',
            category: 'Zasoby Internetowe',
            icon: 'icons/champagne.png',
            type: 'link',
            externalUrl: 'https://champagne.pages.dev/docs/getting-started/browsers-extensions'
        }
    ];

    // --- BAZA DANYCH #2: WSZYSTKIE STEROWNIKI ---
    const drivers = {
        gpu: {
            title: "Karta Graficzna (GPU)",
            brands: {
                nvidia: {
                    title: "NVIDIA",
                    series: [
                        { name: "Seria 4000 & 5000", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/geforce 4000-5000" },
                        { name: "Seria 2000 & 3000", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/geforce 2000-3000" },
                        { name: "Seria 900 & 1000", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/geforce 900 - 1000" },
                        { name: "Seria 600 & 700", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 600-700" },
                        { name: "Seria 400 & 500", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 400-500" },
                        { name: "Seria 200", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 200" },
                        { name: "Seria 8 & 9", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 8-9" },
                        { name: "Seria 6 & 7", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 6-7" },
                        { name: "Seria 5 (FX)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 5" },
                        { name: "Seria 2-4", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/Geforce 2-4 Series" },
                        { name: "GeForce TNT i starsze", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty NVidia/Stałe sterowniki generacyjne i ustawienia/0. 1 Geforce TNT i starsze" }
                    ]
                },
                amd: {
                    title: "AMD",
                    series: [
                        { name: "RDNA (Navi: RX 5000+)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/1. Navi" },
                        { name: "Polaris & Vega (GCN 4.0/5.0)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/2. GCN Polaris" },
                        { name: "GCN (HD 7000, R7/R9)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/3. GCN (stara seria)" },
                        { name: "Terascale 2 & 3 (HD 5000-6000)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/4. Terascale DX11" },
                        { name: "Terascale 1 (HD 2000-4000)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/5. Terascale DX10" },
                        { name: "Legacy - Seria X & 9000 (ATI)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/6. X i Radeon 9000" },
                        { name: "Legacy - Seria 8000 (ATI)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/7. Radeon 8000" },
                        { name: "Legacy - Seria 7000 (ATI, pre-HD)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty AMD/Stałe sterowniki generacyjne i ustawienia/8. Radeon 7000" }
                    ]
                },
intel: {
  title: "Intel",
  series: [
    { name: "Seria Arc (A i B)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty Intel/Arc A i B" },
    { name: "Integry (11–14 gen)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Karty graficzne/Sterowniki do kart graficznych/Karty Intel/Integry 11 do 14 generacja" }
  ]
}

            }
        },
laptop: {
  title: "Laptopy",
  brands: {
    hp: {
      title: "HP",
      series: [
        { name: "Victus 15", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Laptopy/HP-Victus 15" }
      ]
    }
  }
},

        motherboard: {
            title: "Płyta Główna / BIOS",
            brands: {
                asus: {
                    title: "ASUS",
                    series: [
                        { name: "P9X79-PRO", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/ASUS P9-X79-Pro" }
                    ]
                },
asrock: {
  title: "ASRock",
  series: [
    { name: "B550 Taichi", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/ASRock B550 Taichi" }
  ]
},

                msi: {
                    title: "MSI",
                    series: [
                        { name: "K8 Diamond", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/MSI K8Diamond BIOS" }
                    ]
                },
                machinist: {
                    title: "Machinist",
                    series: [
                        { name: "X99 Series", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/Machinist X99" }
                    ]
                },
                socket_775: {
                    title: "Socket 775 (Różne)",
                    series: [
                        { name: "Kolekcja BIOS/Sterowników", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Płyty główne i BIOS/Płyty 775" }
                    ]
                },
                
            }
        },
        chipset: {
            title: "Chipset",
            brands: {
                amd: {
                    title: "AMD",
                    series: [
                        { name: "Ryzen (Chipset, StoreMI, Master)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Procesory i chipset/AMD Ryzen" }
                    ]
                }
            }
        },
        mouse: {
            title: "Mysz",
            brands: {
                logitech: {
                    title: "Logitech",
                    series: [
                        { name: "Oprogramowanie G Hub", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Myszka Logitech (tutaj jest po prostu instalator ghuba)" }
                    ]
                }
            }
        },
        monitor: {
            title: "Monitor",
            brands: {
                aoc: {
                    title: "AOC",
                    series: [
                        { name: "Model CQ27G2U", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Monitory/Sterowniki AOC CQ27G2U" }
                    ]
                }
            }
        },
        kinect: {
            title: "Kinect",
            brands: {
                microsoft: {
                    title: "Microsoft",
                    series: [
                        { name: "SDK & Developer Toolkit", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Kinect (tutaj jest instalator sterowników kinecta sdk i developertoolkit)" }
                    ]
                }
            }
        },
        network: {
            title: "Sieć (WiFi)",
            brands: {
                generic: {
                    title: "Różne",
                    series: [
                        { name: "Adapter WiFi 7601u", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Audio Bluetooth WiFi/karta wifi 7601u Windows" }
                    ]
                }
            }
        },
        bluetooth: {
            title: "Bluetooth",
            brands: {
                tplink: {
                    title: "TP-Link",
                    series: [
                        { name: "Adapter UB5A", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Audio Bluetooth WiFi/Sterownik do bluetooth od tp-linka ub5a" }
                    ]
                }
            }
        },
        headphones: {
            title: "Słuchawki",
            brands: {
                logitech: {
                    title: "Logitech",
                    series: [
                        { name: "G Pro X (Presety)", folderPath: "../Centrum Narzędzi i Oprogramowania/Archiwum sterowników i narzędzi/Słuchawki logitech g pro x" }
                    ]
                }
            }
        }
    };

    // --- BAZA DANYCH #3: PRZEWODNIK KONFIGURACJI ---
    const setupWorkflow = {
        name: 'Pierwsza Konfiguracja Komputera',
        steps: [
            {
                title: 'Krok 1: Instalatory Zbiorcze (Ninite)',
                description: 'Zainstaluj podstawowy zestaw programów za pomocą przygotowanych instalatorów Ninite.',
                subItems: [
                    { name: 'Pakiet bez narzędzi programistycznych', folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/1. nintinde/programy bez programowania' },
                    { name: 'Pakiet z narzędziami programistycznymi', folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/1. nintinde/programy z programowaniem' },
                    { name: 'Pakiet dla PC testowego', folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/Instalacja automatyczna – PC testowy' }
                ]
            },
            {
                title: 'Krok 2: Debloat Systemu',
                description: 'Uruchom skrypty PowerShell, aby usunąć zbędne komponenty i aplikacje z Windows.',
                folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/2. skrypt do debloata'
            },
            {
                title: 'Krok 3: Dodatkowe Programy',
                description: 'Przejrzyj folder z najczęściej używanymi programami do ewentualnej, ręcznej instalacji.',
                folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/3. programy'
            },
            {
                title: 'Krok 4: Optymalizacja pod Gry',
                description: 'Zastosuj modyfikacje rejestru, plany zasilania i inne tweaki w celu poprawy wydajności w grach.',
                folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/4. optymalizacja kompa pod gry'
            },
            {
                title: 'Krok 5: Personalizacja (Tapeta)',
                description: 'Ustaw swoją ulubioną tapetę, aby zakończyć proces konfiguracji.',
                folderPath: '../Centrum Narzędzi i Oprogramowania/Programy do 1 konfinguracji komputera/5. tapeta'
            }
        ]
    };

    // --- CAŁA LOGIKA APLIKACJI (ZINTEGROWANA) ---
    const appContainer = document.getElementById('app-container');
    const template = document.getElementById('program-card-template');
    const categoryList = document.getElementById('category-list');
    const searchBox = document.getElementById('search-box');
    
    const mainView = document.getElementById('main-view');
    const detailView = document.getElementById('detail-view');
    const workflowView = document.getElementById('workflow-view');
    const detailContent = document.getElementById('detail-content');
    const workflowContent = document.getElementById('workflow-content');
    const backButtons = document.querySelectorAll('.back-btn');
    const helpButton = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const closeModalButton = document.getElementById('close-modal-btn');
    const workflowStartBtn = document.getElementById('workflow-start-btn');

    let currentCategory = 'all';

    function renderItems() {
        appContainer.innerHTML = '';
        const searchTerm = searchBox.value.toLowerCase();
        const filteredItems = items.filter(item => {
            const inCategory = currentCategory === 'all' || item.category === currentCategory;
            const inSearch = item.name.toLowerCase().includes(searchTerm) || 
                             item.description.toLowerCase().includes(searchTerm) ||
                             (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
            return inCategory && inSearch;
        });

        if (filteredItems.length === 0) { appContainer.innerHTML = '<p>Brak pasujących programów.</p>'; return; }

        filteredItems.forEach(item => {
            const cardContent = template.content.cloneNode(true);
            const card = cardContent.querySelector('.program-card'); // Pobieramy element <a> z szablonu
    
            card.querySelector('.program-icon').src = item.icon || 'icons/default.png';
            card.querySelector('.program-title').textContent = item.name;
            card.querySelector('.program-description').textContent = item.description;
            
            const buttonsContainer = card.querySelector('.buttons');
    
            if (item.type === 'link') {
                // Jeśli to link, ustawiamy href na karcie i usuwamy przyciski
                card.href = item.localPath || item.externalUrl;
                card.target = item.externalUrl ? '_blank' : '_self'; // Otwórz linki online w nowej karcie
                buttonsContainer.remove();
            } else {
                // Jeśli to zwykły program, generujemy przyciski
                buttonsContainer.innerHTML = `
                    <button class="btn copy-path-btn copy-folder-btn">Skopiuj ścieżkę</button>
                    <button class="btn details-btn">Pokaż szczegóły</button>
                `;
                card.querySelector('.copy-folder-btn').dataset.path = item.folderPath;
                card.querySelector('.details-btn').dataset.itemName = item.name;
                card.removeAttribute('href'); // Usuwamy atrybut href, żeby karta nie była linkiem
            }
    
            appContainer.appendChild(cardContent);
        });
    }
    
    function renderCategories() {
        const categories = ['Wszystkie', ...new Set(items.map(item => item.category))];
        categoryList.innerHTML = '';
        categories.forEach(categoryName => {
            if (!categoryName) return; // Ignoruj puste kategorie
            const li = document.createElement('li');
            li.textContent = categoryName;
            li.dataset.category = categoryName === 'Wszystkie' ? 'all' : categoryName;
            if (li.dataset.category === 'all') { li.classList.add('active'); }
            categoryList.appendChild(li);
        });
    }

    function showDetailView(itemName) {
        const item = items.find(i => i.name === itemName);
        if (!item) return;
        detailContent.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>` + (item.details || "");
        mainView.classList.add('hidden');
        detailView.classList.remove('hidden');
    }

    function showWorkflowView() {
        workflowContent.innerHTML = `<h1>${setupWorkflow.name}</h1>`;
        setupWorkflow.steps.forEach(step => {
            const stepElement = document.createElement('div');
            stepElement.className = 'workflow-step';
            
            let html = `<h3>${step.title}</h3><p>${step.description}</p>`;
            if (step.folderPath) {
                html += `<button class="btn copy-path-btn" data-path="${step.folderPath}">Skopiuj ścieżkę</button>`;
            }
            if (step.subItems) {
                step.subItems.forEach(sub => {
                    html += `<div class="workflow-subitem"><span>${sub.name}</span><button class="btn copy-path-btn" data-path="${sub.folderPath}">Skopiuj ścieżkę</button></div>`;
                });
            }
            stepElement.innerHTML = html;
            workflowContent.appendChild(stepElement);
        });
        mainView.classList.add('hidden');
        workflowView.classList.remove('hidden');
    }

    function showMainView() {
        detailView.classList.add('hidden');
        workflowView.classList.add('hidden');
        mainView.classList.remove('hidden');
    }

    function copyPathToClipboard(button) {
        const path = button.dataset.path;
        if (!path) return;
        const fullPathUrl = new URL(path, window.location.href);
        const windowsPath = decodeURI(fullPathUrl.pathname).substring(1).replace(/\//g, '\\');
        navigator.clipboard.writeText(windowsPath).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Skopiowano!';
            setTimeout(() => { button.textContent = "Skopiuj ścieżkę"; }, 1500);
        });
    }

    appContainer.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        if (button.classList.contains('copy-path-btn')) {
            copyPathToClipboard(button);
        }
        if (button.classList.contains('details-btn')) {
            showDetailView(button.dataset.itemName);
        }
    });

    workflowContent.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (button && button.classList.contains('copy-path-btn')) {
            copyPathToClipboard(button);
        }
    });
    
    workflowStartBtn.addEventListener('click', showWorkflowView);

    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            // Ta funkcja ukryje wszystkie dodatkowe widoki (szczegóły, przewodnik)
            // i pokaże główną listę.
            showMainView(); 

            // Reszta logiki pozostaje bez zmian
            document.querySelector('#category-list li.active').classList.remove('active');
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderItems();
        }
    });

    backButtons.forEach(btn => btn.addEventListener('click', showMainView));
    searchBox.addEventListener('input', renderItems);
    helpButton.addEventListener('click', () => helpModal.classList.remove('hidden'));
    closeModalButton.addEventListener('click', () => helpModal.classList.add('hidden'));
    helpModal.addEventListener('click', (e) => { if (e.target === helpModal) { helpModal.classList.add('hidden'); } });

    const driverTypeSelect = document.getElementById('driver-type');
    const driverBrandSelect = document.getElementById('driver-brand');
    const driverSeriesSelect = document.getElementById('driver-series');
    const driverResultContainer = document.getElementById('driver-result-container');
    const driverCopyPathBtn = document.getElementById('driver-copy-path-btn');
    const driverSearchBox = document.getElementById('driver-search-box');
    const driverSearchSection = document.getElementById('driver-search-section');
    for (const typeKey in drivers) {
        const option = new Option(drivers[typeKey].title, typeKey);
        driverTypeSelect.add(option);
    }
    function resetSelect(select, defaultText) {
        select.innerHTML = `<option value="">${defaultText}</option>`;
        select.disabled = true;
    }
    driverTypeSelect.addEventListener('change', () => {
        const selectedType = driverTypeSelect.value;
        resetSelect(driverBrandSelect, "Wybierz producenta...");
        resetSelect(driverSeriesSelect, "Wybierz serię/model...");
        driverResultContainer.classList.add('hidden');
        if (selectedType) {
            const brands = drivers[selectedType].brands;
            for (const brandKey in brands) {
                const option = new Option(brands[brandKey].title, brandKey);
                driverBrandSelect.add(option);
            }
            driverBrandSelect.disabled = false;
        }
    });
    driverBrandSelect.addEventListener('change', () => {
        const selectedType = driverTypeSelect.value;
        const selectedBrand = driverBrandSelect.value;
        resetSelect(driverSeriesSelect, "Wybierz serię/model...");
        driverResultContainer.classList.add('hidden');
        if (selectedBrand) {
            const seriesList = drivers[selectedType].brands[selectedBrand].series;
            seriesList.forEach(series => {
                const option = new Option(series.name, series.folderPath);
                driverSeriesSelect.add(option);
            });
            driverSeriesSelect.disabled = false;
        }
    });
    driverSeriesSelect.addEventListener('change', () => {
        const selectedPath = driverSeriesSelect.value;
        if (selectedPath) {
            driverCopyPathBtn.dataset.path = selectedPath;
            driverResultContainer.classList.remove('hidden');
        } else {
            driverResultContainer.classList.add('hidden');
        }
    });
driverCopyPathBtn.addEventListener('click', (e) => {
    copyPathToClipboard(e.target);
});

    // --- SZYBKA WYSZUKIWARKA STEROWNIKÓW ---
    function searchDrivers(searchTerm) {
        if (!searchTerm || searchTerm.trim().length < 2) {
            driverSearchSection.classList.add('hidden');
            return;
        }

        const term = searchTerm.toLowerCase();
        const results = [];

        // Przeszukuj całą bazę sterowników
        for (const typeKey in drivers) {
            const type = drivers[typeKey];
            for (const brandKey in type.brands) {
                const brand = type.brands[brandKey];
                brand.series.forEach(series => {
                    // Sprawdź czy termin pasuje do typu, marki lub serii
                    const matchesType = type.title.toLowerCase().includes(term);
                    const matchesBrand = brand.title.toLowerCase().includes(term);
                    const matchesSeries = series.name.toLowerCase().includes(term);
                    
                    if (matchesType || matchesBrand || matchesSeries) {
                        results.push({
                            type: type.title,
                            brand: brand.title,
                            series: series.name,
                            path: series.folderPath
                        });
                    }
                });
            }
        }

        displayDriverSearchResults(results, searchTerm);
    }

    function displayDriverSearchResults(results, searchTerm) {
        const resultsContainer = driverSearchSection.querySelector('.driver-search-results');
        const titleElement = driverSearchSection.querySelector('.search-section-title');

        if (results.length === 0) {
            titleElement.textContent = `Nie znaleziono sterowników dla: "${searchTerm}"`;
            resultsContainer.innerHTML = '<p style="color: var(--text-muted); padding: 10px;">Spróbuj użyć innych słów kluczowych.</p>';
            driverSearchSection.classList.remove('hidden');
            return;
        }

        titleElement.textContent = `Znaleziono sterowników: ${results.length} (wyszukiwanie: "${searchTerm}")`;
        resultsContainer.innerHTML = '';

        results.forEach(result => {
            const card = document.createElement('div');
            card.className = 'driver-result-card';
            card.innerHTML = `
                <div class="driver-result-info">
                    <strong>${result.type}</strong> → ${result.brand} → ${result.series}
                </div>
                <button class="btn copy-path-btn copy-folder-btn" data-path="${result.path}">Skopiuj ścieżkę</button>
            `;
            resultsContainer.appendChild(card);
        });

        driverSearchSection.classList.remove('hidden');
        
        // Scroll do wyników
        driverSearchSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Event listener dla szybkiego wyszukiwania sterowników
    driverSearchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        
        // Wyczyść menu rozwijane gdy używamy szybkiego wyszukiwania
        if (searchTerm.trim().length > 0) {
            driverTypeSelect.value = '';
            resetSelect(driverBrandSelect, "Wybierz producenta...");
            resetSelect(driverSeriesSelect, "Wybierz serię/model...");
            driverResultContainer.classList.add('hidden');
        }
        
        searchDrivers(searchTerm);
    });

    // Ukryj wyniki wyszukiwania sterowników gdy zmienia się kategoria
categoryList.addEventListener('click', () => {
    driverSearchSection.classList.add('hidden');
    driverSearchBox.value = '';
});

// Event listener dla przycisków "Skopiuj ścieżkę" w wynikach wyszukiwania sterowników
driverSearchSection.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && button.classList.contains('copy-path-btn')) {
        copyPathToClipboard(button);
    }
});

renderCategories();
renderItems();
});