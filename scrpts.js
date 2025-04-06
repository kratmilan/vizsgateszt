fetch("opre.txt")
const opre = [
    ["Az NT ütemezője a kernel módban, egy darab ütemező modulban található?", "H"],
    ["A tároló méretét megnövelve a FAT mérete nem arányosan növekszik?", "H"],
    ["Az exokernel gyakorlatilag rendszer rutinkönyvtárat jelent?", "I"],
    ["A monitor programszerkezetben két feltételváltozó és két művelet van?", "H"],
    ["A biztonsági másolat egy adott állomány dupla(esetleg többszörös) tárolása, az eredeti állománnyal egyező tárhelyen?", "H"],
    ["Informatikai szempontból a 'random' a 'sequence' ellentéte?", "I"],
    ["Egy folyamathoz több IOCB is tartozhat?", "I"],
    ["A gyorsító tár gyorsabb, mint az egyik hozzá kapcsolódó, gyorsítandó tár?", "I"],
    ["A független folyamatok jellemzően aszinkron működésűek?", "I"],
    ["Az átlátszóság azt jelenti, hogy egy szolgáltatás igénybevétele független a szolgáltatás fizikai helyétől, illetve a szolgáltatást biztosító hardvertől és szoftvertől?", "I"],
    ["A Windows NT ha lehetősége van rá, szálütemezést használ?", "H"],
    ["Az operációs rendszer közvetlenül kommunikál a hardverrel?", "H"],
    ["A Disc Interleaving optimális logikai sáv sorrendet jelent?", "H"],
    ["Az operációs rendszer szintjén egy Windows NT szálat egy ún executive szál blokk (ETHREAD) reprezentál?", "I"],
    ["A UNIX kernel módban preemptív ütemezést használ, de user módban nem preemptív ütemezést használ?", "H"],
    ["Az egyidejűség esetén a folyamatoknak be kell várniuk egymást?", "I"],
    ["Az NT virtuális tárkezelése lapszervezést használ?", "I"],
    ["Az NTFS írási folyamata hat lépésből áll?", "H"],
    ["Indirekt kommunikáció esetén jellemző a portok használata?", "H"],
    ["A MAR írni vagy olvasni kívánt memória címét tartalmazza?", "I"],
    ["Az igény szerinti lapozás csak a laphibát megszüntető lapot teszi át RAM-ba?", "I"],
    ["Az FCFS preemptív algoritmus?", "H"],
    ["A trójai programok képesek 'önálló' akciókra, a felhasználó közreműködése nélkül is bejuthatnak a rendszerbe?", "H"],
    ["A szabályzás zárt hatásláncú folyamat?", "I"],
    ["A Master File Table nem más, mint logikai clusterek sorozata?", "H"],
    ["A linux különböző verzióira a monolitikus vagy a hibrid kernel jellemző?", "I"],
    ["A deklaratív programozás két fő iránya a logikai és a funkcionális programozás?", "I"],
    ["Az UNIX user módban preemptív ütemezést használ, kernel módban viszont nem preemptív ütemezést használ?", "I"],
    ["A Round-Robin algoritmus túl hosszú időszelet esetén FCFS jellegűvé válik?", "I"],
    ["Indirekt kommunikáció esetén a folyamatok közvetlenül nevezik meg egymást?", "H"],
    ["Az NT ütemezése szál alapú, prioritásvezérelt és preemptív?", "I"],
    ["A KERNEL réteg egyik alapvető feladata az LPC szolgáltatás megvalósítása?", "H"],
    ["A Second Chance lapcsere nem használ reference bitet?", "H"],
    ["A vírusok - a férgekkel ellentétben - képesek 'önálló' akcióra, a felhasználó közreműködése nélkül is tudnak terjedni?", "H"],
    ["A kölcsönös kizárás a nem megosztható erőforrások esetében nem küszöbölhető ki?", "I"],
    ["Láncolt lista esetén egy blokk sérülése a tárolt adat elvesztését okozhatja?", "I"],
    ["Az FCFS nem preemptív algoritmus?", "I"],
    ["A Commit az NT memóriafoglalásának első lépése?", "H"],
    ["Az igény szerinti lapozás nem csak a laphibát megszüntető lapot teszi a RAM-ba?", "H"],
    ["Az intel i7 CPU esetében a Memory Controller területarányosan sok magnyi részt foglal el?", "I"],
    ["A verem egy szálra jellemző elem?", "I"],
    ["A ferritgyűrűs tár olvasás művelete összetetteb az írásnál műveletnél?", "I"],
    ["A LED lézer technológia esetén a lapméret növelése jelentős készülékméret növekedést eredményez?", "I"],
    ["A kritikus szakaszba a belépést csak szoftveres úton engedélyezhetjük?", "H"],
    ["Az NT ütemezője a kernel kódjában szétszórva található?", "I"],
    ["A PCB processzor szintű adatokat is tartalmaz?", "I"],
    ["Az NTFS Metadata azoknak az adatoknak a gyűjteménye, amelyek egy fájlrendszer kezeléséhez, illetve a benne tárolt fájlok eléréshez szükségesek?", "I"],
    ["Az NTDLL DLL a user mód legalsó rétege?", "I"],
    ["Egy elosztott rendszer minden gépe egyértelműen azonosítható és címezhető?", "H"],
    ["A LED lézer technológia esetén a lapméret nem eredményez jelentős készülékméret növekedést?", "H"],
    ["A 'Spooling' technológia háttértárat igényel?", "I"],
    ["A HPFS jellemzője a magic number?", "H"],
    ["A MAR tartalmazza az írni vagy olvasni kívánt memória címét nem tartalmazza?", "H"],
    ["Az összes EXT file rendszer használja a naplózást?", "H"],
    ["Az SJF algoritmus prioritásos és preemptív?", "H"],
    ["A monitorok programszerkezetben egy feltételváltozó és 2 művelet van?", "I"],
    ["A Logical Cluster a lemezen található clusterek azonosítására szolgál?", "H"],
    ["Az EREW PRAM gyakorlatilag a RAM modellhez hasonló működést produkál?", "I"],
    ["Hibrid kernel pl: Unixra jellemző?", "H"],
    ["A memória védelme alatt azt értjük, hogy az osztott elérésű memórián kívül se a folyamatok se az operációs rendszer ne legyen képes módosítani egy másik folyamat címtartományába tartozó memóriaterületet?", "I"],
    ["Az előretekintő lapozás becslésen alapul?", "I"],
    ["NT alapú rendszerekben minden szál alacsony prioritással kezdi futását?", "H"],
    ["Hálózati operációs rendszerek átlátszóságot biztosítanak?", "H"],
    ["A plug-and-play kezelő a Windows 2000 óta része a rendszernek?", "I"],
    ["A spooling technológia nem igényel háttértárat?", "H"],
    ["A virtuális memória méretének az operatív tár mérete szab határt?", "I"],
    ["Az UFS jellemzője a naplózás?", "H"],
    ["A RAM jelentése „Véletlen hozzáférésű Memória”?", "H"],
    ["AZ AMD K-6 processzor 64 bites szervezésű?", "H"],
    ["Egy HDD jellemzően rendelkezik FirmWare-el?", "I"],
    ["A POST a FirmWare egyik szolgáltatása?", "I"],
    ["A szabályzás nyílt hatásláncú folyamat?", "H"],
    ["A RAM jelentése 'tetszőleges hozzáférésű memória'?", "I"],
    ["Az Intel Core processzor család 32 bites szervezésű?", "H"],
    ["SWAP nem alkalmas a várakozási idő elviselhető szinten tartására?", "I"],
    ["Láncolt lista esetén külső tördelődés nem lép fel?", "I"],
    ["Mikrokernel pl: a Windows rendszerekre jellemző?", "H"],
    ["A maszkolható megszakítások végrehajtása nem prioritásfüggő?", "H"],
    ["A PCB folyamatvezérlési adatokat nem tartalmaz?", "H"],
    ["A Windows kernel user módban is preemptív ütemezést használ?", "I"],
    ["A *dll fájlok a programok igényei szerint töltődnek be a memóriába?", "I"],
    ["A HRR algoritmus nem használ öregítést?", "H"],
    ["Az SMQ jobban kezeli a kiéheztetést mint az MFQ?", "H"],
    ["A Szemafor három műveletet használ?", "I"],
    ["Az CRCW PRAM tekinthető a klasszikus PRAM modellnek (-CRCW PRAM: mindent enged párhuzamosan)?", "I"],
    ["A TestAndSet független a PRAM modell műveleti sorrendjétől?", "H"],
    ["Egy folyamathoz több PCB is tartozhat?", "H"],
    ["Az UNIX kernel és user módban is preemptív ütemezést használ?", "H"],
    ["A laphiba azt jelenti, hogy a keresett lap nem található a RAM-ban?", "I"],
    ["A SMQ nem mentes a kiéheztetéstől?", "I"],
    ["A szálak közvetlenül, saját igény alapján jutnak erőforrásokhoz?", "H"],
    ["A készülék kezelő réteg jellemzően használ IRQ-t és DMA-t?", "I"],
    ["A globális változók szálra jellemző elemek?", "H"],
    ["RAM modell esetén a memória rekeszenként címezhető?", "I"],
    ["A Szemafor három változót használ?", "H"],
    ["A HAL réteg a használt CPU típusától függ?", "I"],
    ["A számítógép hálózatok egyik fontos jellemzője az átlátszóság?", "H"],
    ["A rövid távú ütemező nem kell, hogy egyfolytában a memóriában legyen?", "H"],
    ["A Szemafor egy változót használ?", "I"],
    ["Az RR (Round Robin) preemptív algoritmus?", "I"],
    ["A mentésnél jellemzően nem cél a keresés biztosítása?", "I"],
    ["A JFS jellemzője a naplózás?", "I"],
    ["Az együttműködés főleg a user folyamatokra jellemző?", "H"],
    ["A versengés a user folyamatokra jellemző?", "I"],
    ["Az NT ütemezője a kernel kódjában szétszórva található?", "I"],
    ["RP a RAM sor címzési idejét mutatja meg?", "H"],
    ["Az EEPROM blokkonként is törölhető?", "H"],
    ["A ROM csak egyszer írható?", "I"],
    ["Egy HDD jellemzően rendelkezik BIOS-sal?", "H"],
    ["Az Intel i3,i5, i7 processzor családok 32 bites szervezésűek?", "H"],
    ["A TestAndSet független a PRAM modell műveleti sorrendjétől?", "H"],
    ["Ütemezést kiváltó esemény lehet, amikor a futó folyamat várakozni kényszerül?", "I"],
    ["A objektumkezelő a kernel réteg egyik komponense?", "I"],
    ["Az FCFS nem primitív algoritmus?", "I"],
    ["Ütemezést kiváltó esemény lehet amikor a futó folyamat várakozni kényszerül?", "I"],
    ["Egy folyamathoz egy PCB tartozik?", "I"],
    ["Az assembly utasítások számokból állnak?", "H"],
    ["Az LPC a folyamatok közötti kommunikációt biztosítja gyors üzenettovábbítással?", "I"],
    ["A blokkok szektorokból állnak?", "H"],
    ["A mentésnél jellemzően cél a keresés biztosítása?", "H"],
    ["A Virtual Cluster az egy fájlhoz tartozó clusterek sorszáma?", "H"],
    ["Az NTDLL DLL a kernel mód legalsó rétege?", "H"],
    ["Elosztott fájlrendszer esetén a fájlok állapottere csak uniform lehet?", "H"],
    ["Az utasításszámláló nem szükségszerű eleme egy szálnak?", "H"],
    ["Hibrid kernel pl: az OS X-re jellemző?", "H"],
    ["A Szemafor a szinkronizációs problémák univerzális eszköze?", "I"],
    ["A Master File Table nem más, mint a fájl rekordok sorozata?", "I"],
    ["A Reserve az NT memóriafoglalásának első lépése?", "I"],
    ["Az igény szerinti lapozás csak a laphibát megszüntető lapot teszi át a RAM-ba?", "I"],
    ["Az NT alapú rendszerekben egy szálnak az ütemezés során 6 féle állapota lehet?", "H"],
    ["Az indexelt tárolást takarékos helygazdálkodás jellemzi?", "H"],
    ["A HRR algoritmus nem használ öregítést?", "H"],
    ["A hosszú távú ütemező gyorsabb, mint a középtávú ütemező?", "H"],
    ["A MAR írni és olvasni kívánt memória tartalmát tartalmazza?", "H"],
    ["A HAL réteg feladata többek közt a multiprocesszor ütemezés?", "H"],
    ["A RAM jelentése 'Tetszőleges Hozzáférésű Memória'?", "I"],
    ["A Resident Monitor a memóriát több részre osztva kezeli?", "I"],
    ["Preemptív ütemezés esetén a kiosztott futási jog elvehető?", "I"],
    ["A Round-Robin algoritmus jellemzője a konvoj hatás?", "H"],
    ["A SJF algoritmus fő szempontja a hosszú löketidő?", "H"],
    ["A SMQ mentes a kiéheztetéstől?", "H"],
    ["A nehéz súlyú folyamat képes szálakra bomlani?", "H"],
    ["A farmer-worker modellt az adóoldali port jellemzi?", "I"],
    ["A csoportkommunikációt több adó oldali folyamat jellemzi?", "H"],
    ["A 'Spooling' technológia nem igényel háttértárat?", "H"],
    ["A Resident Monitor egy hardver komponens?", "H"],
    ["A preemptív ütemezés esetén a kiosztott futási jog nem vehető el?", "H"],
    ["A közép távú ütemező nem kapcsolatos a háttértárral?", "H"],
    ["A Round-Robin nem preemptív algoritmus?", "H"],
    ["A könnyű súlyú folyamatok szálai osztoznak az erőforrásokon?", "I"],
    ["A folyamatok változásához csak egy veremtárra van szükség?", "H"],
    ["Az EREW PRAM tekinthető a klasszikus PRAM modellnek?", "H"],
    ["A kliens-szerver modellt a vevőoldali port jellemzi?", "I"]
  ];
let answered = []
let currentIndex
let szamlalo = 0
let correctAnswers=0
function nextQuestion() {
    const revealbox= document.querySelector(".nextbox");
    const oldRev = revealbox.querySelector(".reveal");
    if (oldRev) {
        revealbox.removeChild(oldRev);
    }
    const container = document.querySelector("#question");
    const oldDiv = container.querySelector(".auto");
    if (oldDiv) {
        container.removeChild(oldDiv);
    }
    do {
        currentIndex = Math.floor(Math.random() * (opre.length));
    }  while ((answered.includes(currentIndex)));
    answered.push(currentIndex);
    szamlalo++;
    let question = opre[currentIndex][0];
    const div = document.createElement("div");
    div.className = "auto";
    div.textContent = question;
    container.appendChild(div);
    const headerContainer= document.querySelector("#header");
    const oldCounter = headerContainer.querySelector(".counter");
    if (oldCounter) {
        headerContainer.removeChild(oldCounter);
    }
    const currentCounter = document.createElement("div");
    currentCounter.className= "counter";
    currentCounter.textContent = `${szamlalo}/25`;
    headerContainer.appendChild(currentCounter)
    
}
function reveal(answer) {
    const revealbox= document.querySelector(".nextbox")
    const oldRev = revealbox.querySelector(".reveal");
    if (oldRev) {
        revealbox.removeChild(oldRev)
    }
    const div = document.createElement("div")
    if (opre[currentIndex][1]=="I") {
        div.textContent = "A helyes valasz: IGAZ";
    }
    else {
         div.textContent = "A helyes valasz: HAMIS";
    } 
    div.className="reveal"
    revealbox.appendChild(div);

    if (answer==opre[currentIndex][1]) {correctAnswers++}
}

const btn = document.querySelector("#next");
btn.onclick = () => nextQuestion();

const reveal1 = document.querySelector(".True")
reveal1.onclick = () => reveal("I");
const reveal2 = document.querySelector(".False")
reveal2.onclick = () => reveal("H");


