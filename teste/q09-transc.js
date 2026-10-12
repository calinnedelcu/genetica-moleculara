'use strict';
/* Teste grele · Lecția 9 — Structura ARN și transcripția */

hMS('transc',1,'Despre structura ARN sunt adevărate afirmațiile:',
 [['de obicei este monocatenar',1],['este o substanță polinucleotidică',1],['nucleotidele lui conțin bazele A, G, U și C',1],['pentoza nucleotidelor este riboza',1],['nucleotidele vecine sunt legate prin legături fosfodiesterice',1],['pentoza nucleotidelor este dezoxiriboza',0]],
 'ARN: de obicei monocatenar, polinucleotidic; nucleotida = bază (A, G, U, C) + riboză (R) + radical fosfat; nucleotidele se leagă prin legături fosfodiesterice. Se sintetizează prin transcripție.');
hMS('transc',2,'Care dintre următoarele afirmații descriu corect transcripția?',
 [['ARN-polimeraza taie legăturile de hidrogen din molecula de ADN',1],['nucleotidele libere din citoplasmă se așază, prin complementaritate, pe o singură catenă din ADN',1],['intermediar apare un hibrid ADN–ARN și o catenă liberă de ADN',1],['la final hibridul se desface și molecula de ADN se reface',1],['ARN-polimeraza taie legăturile fosfodiesterice din ADN',0],['nucleotidele libere se așază pe ambele catene ale ADN',0],['molecula de ADN este distrusă în urma transcripției',0]],
 'Transcripția = copierea unei catene de ADN în ARN: ARN-polimeraza taie legăturile de H, nucleotide libere se atașează pe baza complementarității doar pe o catenă, apare un hibrid ADN–ARN, apoi hibridul se desface (ARN eliberat) și ADN-ul se reface.');
hMC('transc',2,'Pune în ordine corectă etapele transcripției: (A) hibridul ADN–ARN se desface, iar catena de ARN este eliberată; (B) ARN-polimeraza taie legăturile de hidrogen din ADN; (C) molecula de ADN se reface; (D) nucleotide libere din citoplasmă se așază, prin complementaritate, pe o catenă din ADN, formând un hibrid ADN–ARN.',
 'B – D – A – C',['D – B – A – C','B – D – C – A','B – A – D – C'],
 'Mai întâi se taie legăturile de H (B), apoi nucleotidele ARN se așază pe o catenă de ADN și apare hibridul (D); hibridul se desface și ARN-ul se eliberează (A), iar la final ADN-ul se reface (C).');
hMC('transc',2,'Intermediar, în timpul transcripției, pe lângă hibridul ADN–ARN mai există:',
 'o catenă liberă de ADN (cealaltă catenă, care nu este copiată)',
 ['o catenă liberă de ARN, sintetizată pe cealaltă catenă de ADN','o moleculă de ADN bicatenară, intactă','două molecule de ARN, identice între ele'],
 'Hibridul conține catena de ADN copiată și catena de ARN în formare; cealaltă catenă de ADN rămâne liberă. La final hibridul se desface, iar ADN-ul se reface.');
hMC('transc',2,'Ce se întâmplă cu hibridul ADN–ARN la finalul transcripției?',
 'se desface: catena de ARN se eliberează, iar molecula de ADN se reface',
 ['rămâne stabil, cu ARN-ul atașat permanent de ADN','catena de ADN copiată este degradată și resintetizată prin replicare','ARN-ul se transformă în ADN și se alipește la catena liberă'],
 'ADN-ul servește doar drept model: hibridul se desface, ARN-ul este eliberat, iar ADN-ul revine la forma bicatenară inițială.');
hMC('transc',2,'De ce este monocatenar ARN-ul obținut prin transcripție?',
 'pentru că se copiază o singură catenă de ADN, iar hibridul ADN–ARN se desface, eliberând ARN-ul',
 ['pentru că ARN-polimeraza rupe legăturile fosfodiesterice dintre cele două catene de ARN','pentru că ADN-ul conține o singură catenă în momentul transcripției, cealaltă fiind distrusă','pentru că ARN-ul se sintetizează numai din nucleotide cu uracil, care nu pot forma perechi'],
 'La transcripție se copiază o singură catenă din ADN. Catena de ARN este eliberată din hibrid, deci rezultă o moleculă monocatenară.');
hMC('transc',2,'Catena de ARN eliberată în urma transcripției, comparativ cu catena de ADN copiată, este:',
 'complementară cu ea, cu uracil în loc de timină și riboză în loc de dezoxiriboză',
 ['identică cu ea ca secvență, dar cu uracil în loc de timină','de lungime dublă, deoarece copiază ambele catene ale ADN-ului','complementară cu ea, dar cu aceleași baze și aceeași pentoză ca ADN-ul'],
 'ARN-ul se sintetizează complementar cu catena copiată; el conține uracil (nu timină) și riboză.');
hMC('transc',2,'Presupunem că, într-o regiune de ADN, ar fi copiate ambele catene în același timp. Ce s-ar obține?',
 'două catene de ARN complementare între ele',
 ['o singură catenă de ARN, de lungime dublă','două catene de ARN identice între ele','o moleculă de ADN bicatenar nou'],
 'Cele două catene de ADN sunt complementare; ARN-urile copiate după ele ar fi și ele complementare între ele. De aceea, la transcripție se copiază o singură catenă.');
hMS('transc',2,'Despre hibridul ADN–ARN din transcripție sunt adevărate afirmațiile:',
 [['conține o catenă de ADN și una de ARN',1],['conține perechi A(ADN)–U(ARN)',1],['conține perechi T(ADN)–A(ARN)',1],['conține perechi A(ADN)–T(ARN)',0],['este stabilizat de legături de hidrogen între cele 2 catene',1]],
 'ARN-ul conține uracil, nu timină: A(ADN) se asociază cu U(ARN), iar T(ADN) cu A(ARN). Perechea A–T cu T în ARN nu poate exista.');
hMC('transc',3,'Catena de ADN copiată în transcripție are secvența 3′-TACGCATGG-5′. ARNm obținut, scris de la 5′ la 3′, este:',
 '5′-AUGCGUACC-3′',
 ['5′-ATGCGTACC-3′','5′-CCAUGCGUA-3′','5′-UACGCAUGG-3′'],
 'ARN-ul este complementar cu catena copiată: T→A, A→U, C→G, G→C. Catenele sunt antiparalele, deci 3′-TACGCATGG-5′ dă 5′-AUGCGUACC-3′. În ARN nu există timină.');
hMC('transc',3,'Pe catena de ADN copiată, cu secvența TACGGATC, se sintetizează (aliniat literă cu literă) un ARN cu secvența:',
 'AUGCCUAG',['ATGCCTAG','UACGGAUC','AUGCCUAC'],
 'Regula transcrierii: T→A, A→U, C→G, G→C: TACGGATC → AUGCCUAG. În ARN apare U, nu T.');
hMC('transc',3,'Un fragment de ADN are catenele TACGGA și ATGCCT (complementare). Prin transcripție se obține ARN-ul AUGCCU. Care catenă a fost copiată?',
 'catena TACGGA, deoarece ARN-ul este complementar cu ea',
 ['catena ATGCCT, deoarece seamănă cu ARN-ul obținut','ambele catene, deoarece sunt complementare între ele','nici una, deoarece ARN-ul se sintetizează fără matriță'],
 'ARN-ul este complementar cu catena copiată: T→A, A→U, C→G, G→C, G→C, A→U dă AUGCCU pornind de la TACGGA. Catena ATGCCT seamănă cu ARN-ul (cu T în loc de U) tocmai pentru că este complementara catenei copiate.');
hMC('transc',3,'ARNm-ul AUGGCUCCAUAC s-a sintetizat pe o catenă de ADN cu secvența (aliniată literă cu literă):',
 'TACCGAGGTATG',['ATGGCTCCATAC','UACCGAGGUAUG','TACCGAGGTATC'],
 'ARN-ul este complementar cu catena de ADN copiată: A→T, U→A, G→C, G→C, C→G, U→A, C→G, C→G, A→T, U→A, A→T, C→G ⇒ TACCGAGGTATG.');
hMS('transc',3,'Care dintre transformările următoare sunt corecte la transcriere (catena de ADN copiată → ARN)?',
 [['A → U',1],['T → A',1],['C → G',1],['G → C',1],['A → T',0],['T → U',0],['C → C',0]],
 'Regula transcrierii: A→U, T→A, C→G, G→C. Adenina din ADN nu se leagă cu timina, ci cu uracilul.');
hMC('transc',3,'Conform analogiei din lecție, ADN-ul, ARN-polimeraza și ARN-ul corespund, în ordine, cu:',
 'cartea de bucătărie care nu iese din bibliotecă, fotocopiatorul și fotocopia unei rețete',
 ['fotocopia unei rețete, fotocopiatorul și cartea de bucătărie care nu iese din bibliotecă','fotocopiatorul, cartea de bucătărie care nu iese din bibliotecă și fotocopia unei rețete','cartea de bucătărie care nu iese din bibliotecă, fotocopia unei rețete și fotocopiatorul'],
 'ADN = cartea (nu iese din „bibliotecă” – nucleu); ARN-polimeraza = fotocopiatorul (deschide cartea, copiază o pagină); ARN = copia.');
hMS('transc',4,'Care afirmații sunt adevărate pentru TRANSCRIPȚIE și false pentru REPLICARE?',
 [['Rezultatul este o moleculă de ARN',1],['Intervine ADN-polimeraza',0],['Se copiază o singură catenă din molecula de ADN',1],['Rezultă două molecule bicatenare de ADN',0],['Apare, intermediar, un hibrid ADN–ARN',1],['În produsul final apare uracil',1]],
 'La transcripție se copiază o catenă de ADN în ARN (enzima: ARN-polimeraza), cu hibrid ADN–ARN intermediar și uracil în produs. Două molecule de ADN și ADN-polimeraza țin de replicare.');
hMS('transc',4,'Care afirmații sunt adevărate pentru REPLICARE și false pentru TRANSCRIPȚIE?',
 [['se copiază ambele catene ale ADN',1],['rezultă 2 molecule de ADN, fiecare cu o catenă veche și una nouă',1],['enzima implicată este ADN-polimeraza',1],['în produsul final apare uracil',0],['enzima implicată este ARN-polimeraza',0],['intermediar se formează un hibrid ADN–ARN',0]],
 'Replicarea: ambele catene, 2 molecule de ADN (semiconservativ), ADN-polimeraza, forma λ. La transcripție ADN-ul se reface, nu se dublează, și apare hibridul ADN–ARN.');
hMS('transc',4,'Care afirmații sunt adevărate pentru AMBELE procese (replicare și transcripție)?',
 [['se folosesc nucleotide libere din citoplasmă',1],['nucleotidele se așază pe baza complementarității',1],['se stabilesc legături de hidrogen între o catenă de ADN și catena nou sintetizată',1],['în catena nouă se formează legături fosfodiesterice între nucleotide',1],['enzima implicată este ADN-polimeraza',0],['se obțin molecule de ARN',0],['se copiază ambele catene ale ADN',0]],
 'Comune: nucleotide libere, complementaritate, legături de H între matriță și catena nouă, legături fosfodiesterice în catena nouă. Diferă: enzima, numărul catenelor copiate și produsul.');
hMC('transc',4,'Care este cea mai exactă comparație între replicare și transcripție?',
 'ambele folosesc o catenă de ADN ca model; replicarea copiază ambele catene (rezultă ADN), transcripția una (rezultă ARN)',
 ['ambele produc molecule de ADN bicatenar din nucleotide libere și diferă doar prin enzima care le realizează','ambele copiază ambele catene de ADN, iar diferența constă doar în etapa ciclului celular în care au loc','replicarea folosește nucleotide libere din citoplasmă, iar transcripția folosește aminoacizi liberi ca materie primă'],
 'Replicare: ADN-polimeraza, ambele catene, 2 molecule de ADN (1 veche + 1 nouă). Transcripție: ARN-polimeraza, o catenă, ARN monocatenar; ADN-ul se reface.');
hMC('transc',4,'Care este asocierea corectă proces – etapă intermediară?',
 'replicare – molecula în formă de λ (Y); transcripție – hibrid molecular ADN–ARN',
 ['replicare – hibrid molecular ADN–ARN; transcripție – molecula în formă de λ (Y)','replicare – hibrid ADN–ARN; transcripție – hibrid ADN–ADN','ambele procese – molecula în formă de λ (Y)'],
 'Replicare: molecula ia forma λ (Y). Transcripție: se formează un hibrid molecular ADN–ARN (plus o catenă liberă de ADN).');
hMC('transc',4,'Care este asocierea corectă proces – enzimă – produs?',
 'replicare – ADN-polimeraza – 2 molecule de ADN; transcripție – ARN-polimeraza – o catenă de ARN',
 ['replicare – ARN-polimeraza – 2 molecule de ADN; transcripție – ADN-polimeraza – o catenă de ARN','replicare – ADN-polimeraza – o catenă de ARN; transcripție – ARN-polimeraza – 2 molecule de ADN','replicare – ARN-polimeraza – o catenă de ARN; transcripție – ADN-polimeraza – 2 molecule de ADN'],
 'ADN-polimeraza realizează replicarea (rezultă 2 molecule de ADN identice), iar ARN-polimeraza transcripția (rezultă o catenă de ARN monocatenar).');
hMC('transc',5,'După modelul transcripției se sintetizează:',
 'toate tipurile de ARN din celulă (ARNm, ARNt, ARNr)',
 ['numai ARNm, celelalte tipuri provenind din proteine','numai ARNm și ARNt, ARNr fiind sintetizat prin replicare','ARN și proteine, în același proces'],
 'Același model (transcripția) stă la baza sintezei mai multor tipuri de ARN: toate ARN-urile celulare – ARNm, ARNt, ARNr.');
hMC('transc',2,'În ce procese se stabilesc legături de hidrogen între o catenă de ADN și o catenă nou sintetizată?',
 'atât la replicare, cât și la transcripție',['numai la replicare, nu și la transcripție','numai la transcripție, nu și la replicare','la niciunul dintre cele două procese'],
 'La replicare: între catena veche și cea nouă de ADN. La transcripție: între catena de ADN copiată și ARN (hibrid ADN–ARN).');
