'use strict';
/* Teste grele · Lecția 10 — Tipurile de ARN */

hMS('arn',1,'Care dintre următoarele au ARN drept material genetic (ARN viral)?',
 [['virusul mozaicului tutunului (VMT)',1],['virusul gripal',1],['bacteriofagii (în exemplele din curs)',1],['ribozomul',0],['pneumococul SIII',0]],
 'ARN viral = materialul genetic al unor virusuri (bacteriofagi, VMT, virusul gripal). Ribozomul conține ARNr, dar nu este material genetic; pneumococul este bacterie, cu ADN.');
hMS('arn',1,'Despre cele două mari categorii de ARN (viral și celular) sunt adevărate afirmațiile:',
 [['ARN viral este materialul genetic al unor virusuri',1],['ARN celular include ARNm, ARNt și ARNr',1],['ARNm, ARNt și ARNr sunt tipuri de ARN viral',0],['virusul mozaicului tutunului are ADN ca material genetic',0],['ARN viral este un tip de ARN ribozomal',0]],
 'ARN viral = informația ereditară a unor virusuri este scrisă în ARN, nu în ADN. ARN celular = ARNm, ARNt și ARNr, din celule.');
hMS('arn',2,'Care afirmații despre ARN mesager sunt adevărate?',
 [['Este monocatenar',1],['Are lungime variabilă',1],['Copiază informația genetică din ADN',1],['Este bicatenar pe cea mai mare parte a lungimii',0],['Intră în alcătuirea ribozomilor',0]],
 'ARNm este monocatenar, de lungime variabilă, copiază informația genetică din ADN pentru sinteza proteică. În alcătuirea ribozomilor intră ARNr.');
hMC('arn',2,'Care asociere ARN – rol este corectă?',
 'ARNm – copiază informația genetică din ADN; ARNt – transferă aminoacizi la locul sintezei proteice; ARNr – intră în alcătuirea ribozomilor',
 ['ARNm – transferă aminoacizi la locul sintezei proteice; ARNt – copiază informația genetică din ADN; ARNr – intră în alcătuirea ribozomilor','ARNm – intră în alcătuirea ribozomilor; ARNt – transferă aminoacizi la locul sintezei proteice; ARNr – copiază informația genetică din ADN','ARNm – transferă aminoacizi la locul sintezei proteice; ARNt – intră în alcătuirea ribozomilor; ARNr – copiază informația genetică din ADN'],
 'ARNm = „mesagerul”, ARNt = „camionul” (aduce aminoacizi), ARNr = „fabrica” (face parte din ribozom).');
hMC('arn',2,'Care dintre următoarele asocieri tip de ARN – caracteristică este INCORECTĂ?',
 'ARNm – conține anticodon',
 ['ARNt – aspect de frunză de trifoi','ARNr – intră în alcătuirea ribozomilor','ARNm – lungime variabilă'],
 'Anticodonul se află pe ARNt; ARNm conține codoni.');
hMS('arn',2,'Care ARN-uri prezintă regiuni bicatenare?',
 [['ARNm',0],['ARNt',1],['ARNr',1],['ARN solubil',1]],
 'ARNt (= ARN solubil) este monocatenar cu regiuni bicatenare („frunză de trifoi”); ARNr prezintă regiuni bicatenare; ARNm este monocatenar.');
hMC('arn',2,'Care este ordinea corectă a fluxului informației în celulă, conform cursului?',
 'ADN →(transcripție)→ ARNm →(ribozom + ARNt)→ proteină',
 ['ARNm →(transcripție)→ ADN →(ribozom + ARNt)→ proteină','ADN →(replicare)→ ARNm →(ribozom + ARNt)→ proteină','proteină →(transcripție)→ ARNm →(ribozom + ARNt)→ ADN'],
 'ADN →(transcripție)→ ARNm →(ribozom + ARNt)→ proteină. Cele trei ARN-uri celulare lucrează împreună: ARNm duce mesajul, ARNt aduce aminoacizii, ARNr formează ribozomul.');
hMS('arn',3,'Despre ARN de transfer (ARNt) sunt adevărate afirmațiile:',
 [['este monocatenar, cu regiuni bicatenare',1],['are aspect de frunză de trifoi',1],['are un anticodon',1],['transferă aminoacizi în citoplasmă la locul sintezei proteice',1],['se mai numește ARN solubil',1],['este bicatenar pe toată lungimea',0]],
 'ARNt (= ARN solubil): monocatenar cu regiuni bicatenare, aspect de frunză de trifoi, are anticodon și transferă aminoacizii la locul sintezei proteice.');
hMC('arn',3,'De ce apar regiuni bicatenare într-un ARNt, deși este o singură catenă?',
 'catena se pliază, iar în unele porțiuni bazele se împerechează complementar (A–U, C–G)',
 ['molecula are, de fapt, două catene care se unesc complet în timpul transcripției','în unele porțiuni, ARNt se leagă de o catenă de ADN, formând perechi A–T','ARNt conține, în unele zone, perechi A=T între bazele aceleiași catene'],
 'ARNt este o singură catenă care se pliază: în unele porțiuni bazele se împerechează (A–U, C–G) – regiuni bicatenare (tulpini); celelalte porțiuni sunt bucle monocatenare.');
hMS('arn',3,'Despre structura ARNt („frunza de trifoi”) sunt adevărate afirmațiile:',
 [['tulpinile sunt regiuni bicatenare',1],['buclele sunt porțiuni monocatenare',1],['în regiunile bicatenare bazele se împerechează A–U și C–G',1],['bazele din bucle nu se împerechează între ele',1],['regiunile bicatenare conțin perechi A=T',0],['anticodonul are 4 baze',0]],
 'Tulpini = regiuni bicatenare (A–U, C–G); bucle = porțiuni monocatenare, ale căror baze nu se împerechează între ele. Anticodonul are 3 baze; în ARN nu există timină.');
hMC('arn',3,'Un ARNt are anticodonul UAG. Codonul de pe ARNm cu care se asociază este:',
 'AUC',['UAG','ATC','TAG'],
 'Anticodon și codon sunt complementari: U–A, A–U, G–C ⇒ AUC. În ARN nu există timină, deci ATC și TAG nu sunt posibile.');
hMC('arn',3,'Codonul UUG din ARNm este recunoscut de un ARNt cu anticodonul:',
 'AAC',['AAG','TTG','UUG'],
 'Complementar cu UUG este AAC (U–A, U–A, G–C). TTG conține timină, iar UUG ar fi identic cu codonul.');
hMC('arn',3,'Un fragment de ARNm conține, în ordine, codonii AUG – CCU – UAC. Succesiunea anticodonilor din ARNt care îi recunosc este:',
 'UAC – GGA – AUG',
 ['TAC – GGA – ATG','AUG – CCU – UAC','AUG – GGA – UAC'],
 'Anticodon și codon sunt complementari: A–U, U–A, G–C, C–G. AUG → UAC, CCU → GGA, UAC → AUG. În ARN nu există timină.');
hMC('arn',3,'Care dintre următoarele anticodoane NU poate exista pe un ARNt?',
 'TAC',['UAC','GCA','ACU'],
 'Anticodonul face parte din ARN; ARN-ul nu conține timină (T), ci uracil (U). TAC are T, deci nu poate fi pe un ARNt.');
hMS('arn',3,'Despre codon și anticodon sunt adevărate afirmațiile:',
 [['Codonul este o grupare de 3 baze din ARNm',1],['Anticodonul este o grupare de 3 baze din ARNt',1],['Codonul și anticodonul sunt complementare',1],['Anticodonul se află pe ARNm',0],['Codonul și anticodonul pot conține timină',0]],
 'Codonul (ARNm) și anticodonul (ARNt) sunt complementare: A–U, G–C. Fiind ARN, nu conțin timină.');
hMC('arn',3,'Prin ce se deosebește ARNt de ARNm?',
 'ARNt are regiuni bicatenare (aspect de frunză de trifoi) și un anticodon',
 ['ARNt are lungime variabilă și copiază informația genetică din ADN','ARNt este bicatenar pe toată lungimea, iar ARNm este monocatenar','ARNt conține timină, iar ARNm conține uracil'],
 'ARNt = monocatenar cu regiuni bicatenare, are anticodon și transferă aminoacizi; ARNm este monocatenar, de lungime variabilă.');
hMS('arn',4,'Despre ribozom sunt adevărate afirmațiile:',
 [['Este format dintr-o subunitate mică și una mare',1],['ARNm se atașează de subunitatea mică',1],['Dimensiunea lui este de ordinul sutelor de angstromi (150–250 Å)',1],['Este alcătuit numai din ARNm',0],['ARNr intră în alcătuirea lui',1],['Este locul în care ADN-ul se autocopiază',0]],
 'Ribozom = subunitate mică + subunitate mare (ARNr și proteine), 150–250 Å; ARNm se atașează de subunitatea mică. Autocopierea ADN-ului este replicarea, nu are loc în ribozom.');
hMC('arn',4,'Ribozomul este alcătuit din:',
 'două subunități (una mică și una mare), formate din ARN ribozomal și proteine',
 ['o singură subunitate mare, formată din ARN mesager și proteine','două subunități, formate numai din ARN de transfer, fără proteine','două subunități, formate din ADN și proteine, ca și cromozomul'],
 'Ribozomul are două subunități, mică și mare, făcute din ARNr și proteine. ARNm trece prin ribozom, iar ARNt aduc aminoacizii.');
hMC('arn',4,'Care este rolul ARN ribozomal (ARNr)?',
 'intră în alcătuirea ribozomilor (rol în sinteza ribozomilor)',
 ['copiază informația genetică din ADN pentru sinteza proteică','transferă aminoacizi la locul sintezei proteice','este materialul genetic al virusurilor'],
 'ARNr: regiuni bicatenare; intră în alcătuirea ribozomilor – rol în sinteza ribozomilor.');
hMC('arn',4,'Un angstrom (Å) este egal cu:',
 '10⁻¹⁰ m (0,1 nm)',['10⁻⁹ m (1 nm)','10⁻⁶ m (1 µm)','10⁻¹² m (0,001 nm)'],
 '1 Å = 10⁻¹⁰ m = 0,1 nm. Ribozomul, de 150–250 Å, măsoară aproximativ 15–25 nm.');
hMS('arn',4,'„Mica fabrică de proteine”: care afirmații sunt corecte?',
 [['ARNm se atașează de subunitatea mică a ribozomului',1],['ARNt aduce aminoacizii potriviți',1],['aminoacidul adus de ARNt intră în lanț (proteina în formare)',1],['ribozomul avansează de-a lungul ARNm',1],['ADN-ul trece prin ribozom',0],['subunitatea mare a ribozomului se atașează de ADN',0]],
 'ADN →(transcripție)→ ARNm; ARNm se atașează de subunitatea mică; ARNt aduc aminoacizii; ribozomul avansează pe ARNm, iar aminoacizii se leagă în lanț.');
hMC('arn',4,'Pune în ordine etapele „micii fabrici de proteine”: (A) aminoacidul intră în lanț; (B) ARNm se atașează de subunitatea mică a ribozomului; (C) ribozomul avansează de-a lungul ARNm; (D) ARNt aduce un aminoacid.',
 'B – D – A – C',['D – B – A – C','B – A – D – C','B – D – C – A'],
 'ARNm se atașează de subunitatea mică (B), ARNt aduce aminoacidul (D), aminoacidul intră în lanț (A), apoi ribozomul avansează (C) și ciclul continuă.');
hMS('arn',5,'Care dintre următoarele asocieri tip de ARN – structură/rol sunt corecte?',
 [['ARN viral – material genetic al unor virusuri',1],['ARNm – monocatenar, lungime variabilă',1],['ARNt – regiuni bicatenare, are anticodon',1],['ARNr – intră în alcătuirea ribozomilor',1],['ARNr – transferă aminoacizi la ribozom',0],['ARNm – conține anticodon',0]],
 'Tabelul recapitulativ: viral = material genetic; ARNm = monocatenar, lungime variabilă; ARNt = frunză de trifoi, anticodon, transferă aminoacizi; ARNr = intră în alcătuirea ribozomilor.');
hMS('arn',5,'Care afirmații sunt adevărate?',
 [['Toate tipurile de ARN din celulă se sintetizează prin transcripție',1],['ARNr este monocatenar fără nicio regiune bicatenară',0],['ARNt este bicatenar pe toată lungimea',0],['ARN viral poate fi material genetic',1],['ARNm are aceeași lungime pentru toate genele',0]],
 'Toate ARN-urile celulare (m, t, r) se obțin prin transcripție după modelul ADN → ARN. ARNr și ARNt au regiuni bicatenare, dar nu sunt complet bicatenari; ARNm are lungime variabilă.');
hMC('arn',3,'Un ARNt este încălzit moderat, suficient cât să se desfacă regiunile lui bicatenare. Ce legături se rup?',
 'legăturile de hidrogen dintre bazele complementare din regiunile bicatenare; scheletul fosfodiesteric rămâne intact',
 ['legăturile fosfodiesterice din regiunile bicatenare, în timp ce bazele rămân împerecheate între ele','toate legăturile dintre nucleotide, ARNt-ul transformându-se în nucleotide libere dispersate în soluție','nicio legătură nu se rupe: regiunile bicatenare ale ARNt nu pot fi desfăcute prin încălzire'],
 'La fel ca la denaturarea ADN: se rup doar legăturile de H (A–U, C–G), nu scheletul fosfodiesteric al catenei.');
