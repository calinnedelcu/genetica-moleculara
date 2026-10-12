'use strict';
/* Teste grele · Lecția 5 — Complementaritatea bazelor */

hMS('compl',1,'Care dintre perechile următoare pot exista într-un ADN bicatenar?',
 [['A=T (2 legături de H)',1],['T=A (2 legături de H)',1],['G≡C (3 legături de H)',1],['A≡T (3 legături de H)',0],['A=G (2 legături de H)',0],['C=G (2 legături de H)',0]],
 'În ADN: A=T și T=A (2 legături de H), C≡G și G≡C (3 legături de H). A≡T are număr greșit de legături; A–G ar uni două purine; C=G are 2 legături în loc de 3.');
hMS('compl',1,'Care dintre perechile următoare pot exista într-o regiune bicatenară de ARN?',
 [['A=U (2 legături de H)',1],['U=A (2 legături de H)',1],['C≡G (3 legături de H)',1],['A=T (2 legături de H)',0],['U≡A (3 legături de H)',0],['G=C (2 legături de H)',0]],
 'În ARN: A=U și U=A (2 legături), C≡G și G≡C (3 legături). ARN-ul nu conține timină; perechea A–U are 2 legături, iar G–C are 3.');
hMC('compl',1,'De ce se leagă întotdeauna o bază purinică de una pirimidinică (A–T, G–C)?',
 'o purină (2 inele) plus o pirimidină (1 inel) dau mereu aceeași lățime a „treptei”, iar legăturile de H se potrivesc doar astfel',
 ['două purine ar încăpea alături, dar s-ar respinge între ele din cauza sarcinilor electrice ale bazelor azotate','pirimidinele sunt bazele mari, iar purinele cele mici, așa că ele nu pot sta alături din lipsă de spațiu în helix','legăturile fosfodiesterice dintre catene impun, prin geometria lor, împerecherea purină – pirimidină în fiecare treaptă'],
 'Perechile A–T și G–C au mereu aceeași lățime (purină + pirimidină) și permit formarea legăturilor de H (2, respectiv 3).');
hMC('compl',1,'Care dintre perechile de baze necesită mai multă energie pentru a fi desfăcută și de ce?',
 'C≡G, deoarece este menținută de 3 legături de hidrogen',
 ['A=T, deoarece este menținută de 3 legături de hidrogen','C≡G, deoarece este menținută de 2 legături de hidrogen','nu există nicio diferență: ambele perechi au același număr de legături'],
 'C≡G are 3 legături de H („mai strânsă”), A=T are 2. De aceea perechile A=T se desfac mai ușor la încălzire.');
hMS('compl',1,'Despre legăturile de hidrogen dintre bazele azotate sunt adevărate afirmațiile:',
 [['A=T are 2 legături de hidrogen',1],['C≡G are 3 legături de hidrogen',1],['A=U (în ARN) are 2 legături de hidrogen',1],['numărul liniuțelor din semn (=, ≡) arată numărul legăturilor de H',1],['unesc nucleotidele vecine din aceeași catenă',0],['în ADN se formează între bazele aceleiași catene',0]],
 'Numărul de liniuțe din semn = numărul legăturilor de H. Legăturile de H unesc baze complementare din catene diferite; nucleotidele vecine dintr-o catenă sunt unite prin legături fosfodiesterice.');
hMS('compl',2,'Despre perechile de baze „la microscop” sunt adevărate afirmațiile:',
 [['legăturile de H se formează între atomii de azot (N) și de oxigen (O) ai celor două baze',1],['perechea A–T se ține cu 2 legături de H',1],['perechea G–C se ține cu 3 legături de H',1],['perechea A–U din ARN se ține cu 2 legături de H',1],['legăturile de H se formează între atomii de carbon ai bazelor',0],['perechea G–C se ține cu 2 legături de H',0]],
 'Legăturile de hidrogen se formează între atomii de N și O ai celor două baze: A–T cu 2, G–C cu 3, A–U (ARN) cu 2.');
hMC('compl',3,'Sub catena de ADN ATCGGA (aliniată literă cu literă), catena complementară este:',
 'TAGCCT',['UAGCCU','ATCGGA','TAGGCT'],
 'Se aplică regula A–T, T–A, C–G, G–C, literă cu literă: A→T, T→A, C→G, G→C, G→C, A→T = TAGCCT. În ADN nu există uracil.');
hMC('compl',3,'Într-o regiune bicatenară de ARN, sub catena AUGCCU (aliniată literă cu literă), catena complementară este:',
 'UACGGA',['TACGGA','UAGCCU','AUGCCU'],
 'În ARN: A–U, U–A, G–C, C–G: A→U, U→A, G→C, C→G, C→G, U→A = UACGGA. Nu apare timină.');
hMC('compl',1,'Într-un hibrid ADN–ARN, catena de ADN are secvența ATGCA (aliniată). Catena de ARN potrivită este:',
 'UACGU',['TACGT','AUGCA','UAGCU'],
 'A(ADN)–U(ARN), T–A, G–C, C–G, A–U ⇒ UACGU. ARN-ul nu conține timină.');
hMS('compl',4,'Într-un ADN bicatenar în care adenina reprezintă x% (x diferit de 25), sunt adevărate afirmațiile:',
 [['timina reprezintă x%',1],['guanina și citozina au același procent',1],['A + G = 50%',1],['citozina reprezintă x%',0],['A + T = 50%',0],['G + C = 2x%',0]],
 'A = T = x% și G = C = (100 − 2x)/2 %. Purinele (A + G) = pirimidinele (T + C) = 50%. Dacă x ≠ 25, nici C = x, nici A + T = 50%, nici G + C = 2x.');
hMC('compl',4,'Care dintre egalitățile următoare este valabilă în ORICE ADN bicatenar?',
 'A + G = T + C',['A + T = G + C','A = C','G = T'],
 'Purinele (A + G) sunt egale ca număr cu pirimidinele (T + C): fiecare pereche conține una de fiecare tip. A + T = G + C este valabilă doar la unele molecule; A = C și G = T nu sunt valabile în general.');
hMS('compl',4,'Care dintre următoarele analize de compoziție (procente de baze) pot aparține unui ADN <b>bicatenar</b>?',
 [['A 30% · T 30% · G 20% · C 20%',1],['A 25% · T 25% · G 25% · C 25%',1],['A 40% · T 20% · G 20% · C 20%',0],['A 35% · T 35% · G 15% · C 15%',1],['A 20% · U 20% · G 30% · C 30%',0]],
 'La ADN bicatenar A = T și G = C, iar uracilul lipsește. A 40 / T 20 încalcă A = T; ultima analiză conține uracil, deci nu este ADN.');
hMS('compl',4,'Care dintre analizele de mai jos pot aparține unui <b>ARN</b>?',
 [['A 25% · U 25% · G 25% · C 25%',1],['A 30% · T 30% · G 20% · C 20%',0],['A 22% · U 38% · G 15% · C 25%',1],['A 20% · U 20% · G 30% · C 30%',1],['A 15% · U 15% · T 20% · G 25% · C 25%',0]],
 'ARN conține uracil și nu conține timină. Nu e obligatoriu A = U sau G = C (ARN-ul este de obicei monocatenar), deci a treia analiză este posibilă. Analizele cu timină nu pot aparține ARN-ului.');
hMC('compl',4,'Analiza unui ADN arată: 35% A, 15% T, 25% G și 25% C. Cea mai bună interpretare este:',
 'molecula nu respectă A = T, deci nu este bicatenară (fără catenă complementară pe toată lungimea)',
 ['analiza este sigur greșită, deoarece într-un ADN trebuie să fie A = T întotdeauna','molecula este ARN, deoarece în ea cantitatea de A diferă de cea de T','molecula este bicatenară, deoarece G = C, iar egalitatea A = T nu este obligatorie'],
 'La ADN bicatenar A = T și G = C. Dacă A ≠ T, molecula nu are catena complementară pe toată lungimea. Nu este ARN, deoarece nu conține uracil.');
hMC('compl',4,'De ce, într-un ADN bicatenar, procentul de adenină este egal cu cel de timină?',
 'fiecare adenină dintr-o catenă se leagă de o timină din catena complementară (la fel guanina de citozină)',
 ['fiindcă adenina și timina au același număr de inele și aceeași mărime în moleculă','fiindcă legăturile fosfodiesterice dintre nucleotide impun același număr de baze de fiecare tip','fiindcă adenina se transformă în timină și invers, la răcirea moleculei'],
 'A=T și C≡G sunt perechi: fiecare A din moleculă are un T în față, deci A = T și G = C (ca număr, deci și ca procente).');
hMS('compl',5,'Într-un ADN bicatenar de N nucleotide, în care adenina reprezintă x% din nucleotide, sunt adevărate afirmațiile:',
 [['numărul perechilor A=T este egal cu numărul nucleotidelor de adenină',1],['numărul total de perechi de baze este N/2',1],['numărul total de legături de H este 2 × (perechi A=T) + 3 × (perechi C≡G)',1],['numărul perechilor A=T este egal cu numărul nucleotidelor de adenină plus cel al nucleotidelor de timină',0],['perechile C≡G au câte 2 legături de H',0],['numărul perechilor C≡G este egal cu numărul nucleotidelor de guanină plus cel al celor de citozină',0]],
 'Fiecare A formează o pereche cu un T: perechile A=T = numărul de A. Perechi de baze în total = N/2. Legături de H: 2 pentru fiecare A=T și 3 pentru fiecare C≡G.');
hMC('compl',1,'Care dintre perechile următoare NU poate apărea într-o regiune bicatenară de ARN?',
 'A=T',['A=U','C≡G','G≡C'],
 'ARN-ul nu conține timină: partenera adeninei din ARN este uracilul (A=U).');
hMS('compl',1,'Care dintre perechile următoare se pot forma într-un hibrid ADN–ARN?',
 [['A (ADN) – U (ARN)',1],['T (ADN) – A (ARN)',1],['A (ADN) – T (ARN)',0],['C (ADN) – G (ARN)',1],['U (ADN) – A (ARN)',0],['G (ADN) – C (ARN)',1]],
 'ARN-ul nu conține timină, iar ADN-ul nu conține uracil. Perechi posibile: A(ADN)–U(ARN), T(ADN)–A(ARN), C(ADN)–G(ARN), G(ADN)–C(ARN).');
hMC('compl',4,'O catenă de ADN are 30% A, 20% T, 25% G și 25% C. Catena ei complementară are:',
 '20% A, 30% T, 25% G, 25% C',
 ['30% A, 20% T, 25% G, 25% C (aceeași compoziție)','25% A, 25% T, 25% G, 25% C','20% A, 30% U, 25% G, 25% C'],
 'Fiecare A din prima catenă se împerechează cu un T în catena complementară, și fiecare T cu un A; la fel G cu C. Deci procentul de T din catena complementară = procentul de A din prima catenă (30%), iar procentul de A din catena complementară = procentul de T din prima (20%). Rezultat: 20% A, 30% T, 25% G, 25% C. ADN-ul nu conține uracil.');
hMS('compl',1,'Despre complementaritatea bazelor azotate sunt adevărate afirmațiile:',
 [['poate exista între o catenă de ADN și una de ARN',1],['se realizează între o bază purinică și una pirimidinică',1],['în ADN, adenina este complementară cu timina',1],['în ARN, adenina este complementară cu timina',0],['două baze purinice pot forma o pereche stabilă',0],['în ADN, guanina este complementară cu uracilul',0]],
 'Purină–pirimidină, prin legături de H: A–T (ADN), A–U (ARN), C–G. Între ADN și ARN se formează hibrizi (A–U, T–A, C–G, G–C). Timina nu există în ARN, iar uracilul nu există în ADN.');
