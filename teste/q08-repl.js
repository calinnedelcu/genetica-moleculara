'use strict';
/* Teste grele · Lecția 8 — Replicarea ADN (autocopierea) */

hMS('repl',1,'Alege afirmațiile adevărate despre replicare:',
 [['Are loc în etapa S a interfazei',1],['În modelul semiconservativ fiecare moleculă-fiică are 2 catene noi',0],['În catena nouă se formează legături fosfodiesterice între nucleotide',1],['Între catena veche și cea nouă se stabilesc legături de hidrogen',1],['ADN este singura moleculă care se autocopiază',1],['Se desfășoară în timpul diviziunii celulare, nu în interfază',0]],
 'Replicarea (autocopierea) are loc în interfază, în etapa S. Fiecare moleculă-fiică are o catenă veche (matriță) și una nouă.');
hMS('repl',1,'Despre ciclul celular și momentul replicării sunt adevărate afirmațiile:',
 [['ciclul celular este alcătuit din interfază și diviziune celulară',1],['etapa S (sinteză) face parte din interfază',1],['replicarea ADN are loc în etapa S',1],['replicarea ADN are loc în timpul diviziunii celulare',0],['etapa S face parte din diviziunea celulară',0],['replicarea are loc după ce celula s-a divizat',0]],
 'Ciclul celular = interfază + diviziune celulară. Autocopierea ADN se realizează în interfază, în etapa S (sinteză), deci ÎNAINTE de diviziune.');
hMC('repl',1,'De ce trebuie ca replicarea să aibă loc ÎNAINTE ca celula să se dividă?',
 'pentru ca fiecare celulă-fiică să primească ADN complet, identic cu cel al celulei-mamă',
 ['pentru ca ADN-ul să poată fi transformat în ARN chiar în timpul diviziunii celulare','pentru ca celula-mamă să-și piardă o parte din ADN înainte de diviziune, ca să-l împartă','pentru ca ADN-ul să fie împărțit între celulele-fiice fără să mai fie copiat deloc'],
 'Replicarea dublează ADN-ul în interfază, ca ambele celule-fiice să primească ADN complet. Astfel se menține aceeași informație ereditară în toate celulele unui organism.');
hMC('repl',1,'Conform cursului, care dintre moleculele următoare este singura care se autocopiază?',
 'molecula de ADN',
 ['molecula de ARN, deoarece este monocatenară','proteinele, deoarece conțin informația ereditară','ribozomii, deoarece conțin ARN ribozomal'],
 'ADN-ul este singura moleculă care se autocopiază (replicare), în interfază, în etapa S.');
hMS('repl',1,'Care dintre următoarele participă direct la replicarea ADN?',
 [['molecula de ADN-mamă (catenele vechi, drept matriță)',1],['enzima ADN-polimeraza',1],['nucleotide libere din citoplasmă',1],['enzima ARN-polimeraza',0],['aminoacizii',0],['moleculele de ARNt',0]],
 'La replicare: catenele vechi (model), ADN-polimeraza (taie legăturile de H) și nucleotidele libere din citoplasmă. ARN-polimeraza este enzima transcripției; aminoacizii și ARNt participă la sinteza proteinelor.');
hMS('repl',1,'Despre etapele interfazei, în modelul simplificat din lecție (bonus), sunt adevărate afirmațiile:',
 [['în G1 celula are o moleculă de ADN',1],['replicarea ADN are loc în etapa S',1],['în G2 celula are 2 molecule identice de ADN',1],['în G1 celula are 2 molecule de ADN',0],['diviziunea celulară are loc înainte de etapa S',0],['în G2 celula are o singură moleculă de ADN',0]],
 'G1: o moleculă de ADN (celula crește); S: replicarea; G2: 2 molecule identice, pregătite pentru diviziune; apoi diviziunea, în care fiecare celulă-fiică primește câte una.');
hMC('repl',2,'Dacă replicarea ar fi CONSERVATIVĂ (nu semiconservativă), dintr-o moleculă-mamă ar rezulta:',
 'o moleculă cu ambele catene vechi și o moleculă cu ambele catene noi',
 ['două molecule, fiecare cu câte o catenă veche și una nouă, ca în modelul semiconservativ','două molecule cu ambele catene noi, molecula-mamă fiind degradată','o singură moleculă tetracatenară, cu două catene vechi și două catene noi'],
 'Modelul real este semiconservativ: fiecare moleculă-fiică păstrează o catenă veche. Modelul conservativ ar păstra molecula-mamă intactă și ar crea una complet nouă.');
hMC('repl',2,'Ce înseamnă că replicarea este „semiconservativă”?',
 'fiecare moleculă-fiică păstrează (conservă) jumătate din mamă: o catenă veche, alături de una nouă',
 ['jumătate dintre moleculele-fiice sunt identice cu molecula-mamă, iar jumătate sunt diferite','se copiază numai jumătate din lungimea moleculei-mamă, cealaltă jumătate rămânând necopiată','replicarea are loc numai în jumătate din celulele organismului, restul păstrându-și ADN-ul'],
 'Semi = jumătate; conservativ = păstrat. Din molecula-mamă (2 catene vechi) rezultă 2 molecule identice, fiecare cu o catenă veche (model/matriță) și una nou sintetizată.');
hMC('repl',2,'După mai multe replicări consecutive ale unei molecule de ADN, cele 2 catene inițiale (vechi) se găsesc:',
 'în două molecule diferite, câte una în fiecare, alături de câte o catenă nouă',
 ['în toate moleculele rezultate, câte una în fiecare, alături de catene noi','în nicio moleculă, pentru că sunt înlocuite la fiecare replicare','într-o singură moleculă, care păstrează ambele catene vechi și le conservă intacte'],
 'Fiecare catenă veche servește drept matriță și rămâne în câte o moleculă; toate celelalte molecule sunt formate din catene noi.');
hMC('repl',2,'După 2 replicări consecutive ale unei molecule de ADN se obțin 4 molecule. Dintre acestea:',
 '2 conțin câte o catenă veche și una nouă, iar 2 conțin numai catene noi',
 ['toate 4 conțin câte o catenă veche și câte o catenă nouă','1 conține ambele catene vechi, iar celelalte 3 conțin numai catene noi','toate 4 conțin numai catene noi, nicio catenă veche nemaifiind păstrată'],
 'Cele 2 catene vechi rămân în câte o moleculă (fiecare cu o catenă nouă); celelalte 2 molecule sunt formate numai din catene noi.');
hMS('repl',2,'După 3 replicări consecutive ale unei molecule de ADN, care afirmații sunt adevărate?',
 [['Catenele inițiale (vechi) se găsesc în două molecule diferite',1],['Majoritatea moleculelor rezultate conțin numai catene noi',1],['Fiecare moleculă conține câte o catenă veche',0],['Moleculele care conțin o catenă veche mai conțin și una nouă',1],['Nicio moleculă nu mai conține catenă veche',0]],
 'Din 8 molecule, doar 2 păstrează câte o catenă veche (alături de una nouă); celelalte 6 conțin numai catene noi.');
hMC('repl',2,'De ce cele 2 molecule-fiice sunt identice între ele și cu molecula-mamă?',
 'pentru că fiecare catenă veche impune, prin complementaritate, secvența catenei noi',
 ['pentru că ADN-polimeraza alege nucleotidele la întâmplare, dar în număr egal','pentru că ambele molecule-fiice primesc aceeași catenă veche','pentru că nucleotidele libere se leagă între ele înainte de a ajunge la matriță'],
 'Catena veche este matrița: A cere T, C cere G. Moleculele-fiice primesc catene vechi diferite (complementare), dar fiecare catenă nouă este determinată de matrița ei.');
hMC('repl',3,'Pune în ordine corectă etapele replicării: (A) rezultă 2 molecule de ADN identice; (B) nucleotide libere din citoplasmă se așază, prin complementaritate, la capetele libere ale catenelor; (C) ADN-polimeraza taie pas cu pas legăturile de hidrogen dintre cele 2 catene; (D) se stabilesc legături de hidrogen între catena veche și cea nouă, iar în catena nouă se formează legături fosfodiesterice.',
 'C – B – D – A',['B – C – D – A','C – D – B – A','C – B – A – D'],
 'Mai întâi se desfac catenele (C), apoi nucleotidele libere se așază prin complementaritate (B), apar legăturile de H veche–nouă și fosfodiesterice în catena nouă (D); la final există 2 molecule identice (A).');
hMS('repl',3,'Care dintre următoarele legături se rup sau se formează în timpul replicării?',
 [['se rup legăturile de H dintre catenele vechi',1],['se formează legături de H între catena veche și cea nouă',1],['se formează legături fosfodiesterice în catena nouă',1],['se rup legăturile fosfodiesterice din catenele vechi',0],['se formează legături fosfodiesterice între catena veche și cea nouă',0],['se formează legături de H între nucleotidele vecine ale catenei noi',0]],
 'Se rup doar legăturile de H dintre catenele vechi (structura II). Se formează: legături de H veche–nouă (între baze complementare) și legături fosfodiesterice între nucleotidele vecine ale catenei noi.');
hMS('repl',3,'O moleculă de ADN aflată în plin proces de replicare are forma literei λ (Y). Care afirmații sunt adevărate?',
 [['În partea încă nedesfăcută, cele două catene vechi rămân unite prin legături de hidrogen',1],['În fiecare „braț”, catena veche este unită cu una nou sintetizată prin legături de hidrogen',1],['Cele două brațe sunt unite între ele prin legături fosfodiesterice',0],['În catenele noi, nucleotidele vecine sunt legate prin legături fosfodiesterice',1],['Forma λ apare deoarece ARN-polimeraza copiază o singură catenă',0]],
 'Forma λ = o parte încă dublu-catenară (legături de H între catenele vechi) și două „brațe” în care fiecare catenă veche și-a primit catena nouă (legături de H veche–nouă, legături fosfodiesterice în cea nouă). Enzima replicării este ADN-polimeraza.');
hMS('repl',3,'Despre enzima ADN-polimeraza (formularea din curs) sunt adevărate afirmațiile:',
 [['taie legăturile de hidrogen dintre cele 2 catene ale ADN',1],['acționează pas cu pas, nu pe toată molecula deodată',1],['prin acțiunea ei, molecula de ADN ia forma literei λ',1],['taie legăturile fosfodiesterice din interiorul catenelor',0],['este enzima care realizează transcripția',0],['taie legăturile de hidrogen simultan pe toată lungimea moleculei',0]],
 'ADN-polimeraza taie pas cu pas legăturile de H dintre catene (de aici forma λ). Legăturile fosfodiesterice nu se rup, iar transcripția este realizată de ARN-polimeraza.');
hMC('repl',3,'La ce se atașează nucleotidele libere din citoplasmă în timpul replicării?',
 'la capetele libere ale catenelor vechi, desfăcute, pe baza complementarității',
 ['la capetele libere ale ARN-ului mesager, pe baza complementarității','la riboza catenelor vechi, prin legături de hidrogen','la ribozomi, unde se formează catenele noi'],
 'Nucleotidele din citoplasmă se așază, pe baza complementarității (A–T, C–G), la capetele libere ale catenelor vechi, care servesc drept matriță.');
hMC('repl',3,'Dacă nucleotidele s-ar așeza pe catenele vechi la întâmplare, fără să respecte complementaritatea, ce s-ar întâmpla cu informația ereditară?',
 'moleculele-fiice ar avea secvențe diferite de ale mamei, iar informația ereditară nu s-ar menține',
 ['moleculele-fiice ar fi identice cu molecula-mamă, deoarece catena veche este conservată în ele','nu s-ar schimba nimic, deoarece ADN-polimeraza corectează orice greșeală de împerechere','molecula-mamă nu s-ar mai putea desface în catene, iar replicarea nu ar începe'],
 'Complementaritatea garantează că fiecare catenă nouă copiază fidel matrița. Fără ea, replicarea nu ar mai menține aceeași informație ereditară în toate celulele.');
hMC('repl',3,'O celulă nu mai are în citoplasmă nucleotide libere. Ce se întâmplă cu replicarea?',
 'nu se pot forma catene noi, deci molecula de ADN nu poate fi dublată',
 ['replicarea continuă normal, deoarece nucleotidele pot fi luate chiar din catenele vechi','se sintetizează catene noi de ADN, dar numai din ribonucleotide aflate în nucleu','replicarea continuă normal, deoarece catenele noi se pot forma din aminoacizi liberi'],
 'Catenele noi se construiesc din nucleotide libere din citoplasmă. Fără ele, deși catenele vechi pot fi desfăcute, nu se mai formează catene noi.');
hMC('repl',1,'Dacă ADN-ul unei celule nu s-ar replica înainte de diviziune, celulele-fiice ar primi:',
 'cantități insuficiente de ADN și informație ereditară incompletă',
 ['ADN în cantitate dublă și informație ereditară completă','ARN în loc de ADN, ca material genetic al celulei-fiice','exact aceeași cantitate de ADN, fără nicio consecință asupra informației ereditare'],
 'Replicarea asigură menținerea aceleiași informații ereditare în toate celulele unui organism.');
hMC('repl',1,'O substanță blochează etapa S a ciclului celular. Care este consecința directă?',
 'ADN-ul nu se mai autocopiază, deci celula nu are cum să intre în diviziune cu ADN dublat',
 ['celula nu mai poate transcrie ARN, deoarece transcripția are loc doar în etapa S','celula își dublează ADN-ul în etapa G2, în locul etapei S','diviziunea celulară are loc înaintea interfazei'],
 'Etapa S este cea în care are loc replicarea (autocopierea ADN).');
hMC('repl',3,'O celulă are ADN-polimeraza, dar îi lipsește ARN-polimeraza. Care proces este afectat direct?',
 'transcripția (sinteza ARN după o matriță de ADN); replicarea nu este afectată direct',
 ['replicarea (autocopierea ADN); transcripția nu este afectată direct','ambele procese, deoarece ADN-ul nu mai poate fi desfăcut în catene','denaturarea ADN, care nu mai poate avea loc fără ARN-polimerază'],
 'ADN-polimeraza este enzima replicării, iar ARN-polimeraza este enzima transcripției.');
hMS('repl',4,'O moleculă-mamă de ADN, cu catenele ACTCTGAG și TGAGACTC, se replică. Care afirmații sunt adevărate?',
 [['cele două molecule-fiice au aceleași perechi de baze ca molecula-mamă',1],['cele două molecule-fiice sunt identice între ele',1],['fiecare moleculă-fiică conține o catenă veche și una nouă',1],['una dintre moleculele-fiice conține două catene vechi',0],['una dintre moleculele-fiice conține două catene noi',0],['moleculele-fiice au perechi de baze diferite de ale mamei',0]],
 'Semiconservativ: fiecare fiică = 1 catenă veche (matriță) + 1 catenă nouă, complementară ei; deci ambele fiice sunt identice cu mama și între ele.');
hMC('repl',4,'Pe catena veche ACTCTGAG se sintetizează, prin replicare, o catenă nouă. Aliniată literă cu literă, aceasta este:',
 'TGAGACTC',['UGAGACUC','ACTCTGAG','TGAGAGTC'],
 'Se aplică A–T, C–G, T–A, G–C: ACTCTGAG → TGAGACTC. În ADN nu apare uracilul.');
