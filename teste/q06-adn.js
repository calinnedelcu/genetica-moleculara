'use strict';
/* Teste grele · Lecția 6 — Structura ADN-ului */

hMS('adn',1,'Despre „dublul helix” al ADN sunt adevărate afirmațiile:',
 [['scheletul fiecărei catene este alcătuit din pentoze și radicali fosfat',1],['„treptele scării” sunt perechi de baze unite prin legături de hidrogen',1],['cele două catene sunt răsucite helicoidal în jurul unui ax',1],['treptele sunt formate din legături fosfodiesterice',0],['„barele laterale ale scării” sunt formate din baze azotate',0],['bazele azotate formează scheletul extern al fiecărei catene',0]],
 'Imaginea scării răsucite: „barele” = cele două catene (schelet de pentoză + fosfat), „treptele” = perechi de baze unite prin legături de H.');
hMS('adn',2,'Alege afirmațiile corecte despre structura ADN:',
 [['Structura primară (I) este dată de legături fosfodiesterice într-o catenă',1],['Structura secundară (II) este dată de legături de hidrogen între cele 2 catene',1],['Cele două catene sunt paralele',0],['Catenele sunt răsucite helicoidal în jurul unui ax',1],['Nucleotidele celor două catene se leagă după mărimea bazelor, nu după complementaritate',0],['Legăturile de H se stabilesc între bazele aceleiași catene',0]],
 'Structura I = o catenă (legături fosfodiesterice); structura II = 2 catene (legături de H, complementaritate), antiparalele și răsucite helicoidal.');
hMS('adn',2,'Despre structura I (primară) a ADN sunt adevărate afirmațiile:',
 [['corespunde unei singure catene de nucleotide',1],['este dată de legăturile fosfodiesterice dintre nucleotidele vecine',1],['se mai numește structură primară',1],['este dată de legăturile de hidrogen dintre baze',0],['implică două catene antiparalele',0],['se pierde la denaturare',0]],
 'Structura I (primară) = o singură catenă, nucleotidele legate prin legături fosfodiesterice. Legăturile de H, cele două catene și antiparalelismul țin de structura II; la denaturare se pierde structura II, nu I.');
hMS('adn',2,'Care afirmații despre structura secundară a ADN sunt adevărate?',
 [['Se stabilește între cele două catene',1],['Implică legături de hidrogen',1],['Se pierde prin denaturare',1],['Implică legături fosfodiesterice între catene',0],['Este prezentă într-o catenă simplă de ARN pe toată lungimea ei',0]],
 'Structura secundară = cele 2 catene unite prin legături de H; dispare la denaturare. O catenă simplă de ARN nu o are pe toată lungimea (poate avea doar regiuni bicatenare).');
hMS('adn',2,'Care dintre următoarele caracteristici țin de structura II (secundară) a ADN?',
 [['existența a două catene',1],['legăturile de hidrogen dintre baze',1],['antiparalelismul catenelor',1],['legăturile fosfodiesterice dintre nucleotidele vecine',0],['succesiunea nucleotidelor într-o singură catenă, ca lanț',0],['scheletul de zahăr și fosfat al unei catene',0]],
 'Structura II presupune două catene (complementare, antiparalele) unite prin legături de H. Lanțul de nucleotide al unei catene, legăturile fosfodiesterice și scheletul de zahăr și fosfat aparțin structurii I.');
hMC('adn',2,'Care este relația dintre structura I și structura II a ADN?',
 'structura II înseamnă două structuri I (două catene) unite între ele prin legături de hidrogen',
 ['structura I înseamnă două catene unite prin legături de hidrogen, iar structura II – o singură catenă','structura II se formează prin legături fosfodiesterice între cele două catene','ambele structuri se bazează pe legături de hidrogen, dar la nivele diferite'],
 'Structura I = o catenă polinucleotidică (legături fosfodiesterice). Structura II = două astfel de catene, antiparalele și complementare, unite prin legături de H.');
hMC('adn',2,'Prin denaturarea ADN se pierde:',
 'structura secundară (II); structura primară (I) rămâne intactă pe fiecare catenă',
 ['structura primară (I), păstrându-se structura secundară (II) a moleculei','ambele structuri, deoarece se rup toate legăturile dintre atomii moleculei','nicio structură nu se pierde: se rup doar legăturile fosfodiesterice din catene'],
 'Denaturarea rupe legăturile de hidrogen dintre catene (structura II). Legăturile fosfodiesterice din fiecare catenă (structura I) nu se rup.');
hMC('adn',2,'Pune în ordine formarea dublului helix: (A) răsucirea în helix; (B) apariția celei de-a doua catene; (C) o singură catenă (structura I); (D) stabilirea legăturilor de hidrogen dintre catene.',
 'C – B – D – A',['C – D – B – A','B – C – D – A','C – B – A – D'],
 'Mai întâi o catenă (structura I), apoi a doua catenă, apoi legăturile de H dintre baze (structura II), iar la final răsucirea în helix.');
hMS('adn',3,'Care afirmații despre cele două catene ale unui ADN bicatenar sunt corecte?',
 [['Sunt antiparalele',1],['Sunt complementare',1],['Sunt identice ca secvență',0],['Sunt unite între ele prin legături fosfodiesterice',0],['Sunt răsucite în jurul unui ax comun',1]],
 'Catenele sunt antiparalele (sensuri de asamblare opuse), complementare (A=T, C≡G), unite prin legături de H și răsucite helicoidal în jurul aceluiași ax. Identice nu sunt, ci complementare.');
hMC('adn',3,'Pe catena 1 a unui ADN sensul de asamblare a nucleotidelor este C3′ → C5′. Pe catena 2 sensul este:',
 'C5′ → C3′ (opus): catenele sunt antiparalele',
 ['tot C3′ → C5′: catenele sunt paralele, cu aceeași orientare','C3′ → C1′: catena 2 se asamblează dinspre fosfat spre bază','nu are un sens definit: catenele sunt independente'],
 'Cele două catene sunt antiparalele: sensurile de asamblare sunt opuse.');
hMC('adn',3,'Dacă o catenă este citită de sus în jos de la 5′ la 3′, catena ei complementară, citită tot de sus în jos, merge de la:',
 'capătul 3′ spre capătul 5′',['capătul 5′ spre capătul 3′','capătul 5′ spre capătul 5′','capătul 3′ spre capătul 3′'],
 'Catenele sunt antiparalele: capătul 5′ al uneia se află în dreptul capătului 3′ al celeilalte.');
hMS('adn',3,'Despre capetele catenelor unui ADN bicatenar sunt adevărate afirmațiile:',
 [['capătul 5′ al unei catene se află în dreptul capătului 3′ al celeilalte',1],['dacă una dintre catene coboară de la 5′ la 3′, cealaltă urcă de la 5′ la 3′',1],['cele două catene au sensuri opuse',1],['capetele 5′ ale ambelor catene se află de aceeași parte a moleculei',0],['catena a doua nu are capăt 3′',0],['cele două catene au același sens de asamblare',0]],
 'Antiparalele = sensuri opuse: capetele 5′ și 3′ sunt așezate invers una față de alta (ca două șosele cu sens unic, una spre nord, alta spre sud).');
hMC('adn',3,'Catena 1 a unui ADN are secvența 5′-GATTACA-3′. Catena complementară (catena 2), scrisă tot de la 5′ la 3′, este:',
 '5′-TGTAATC-3′',
 ['5′-CTAATGT-3′','5′-GATTACA-3′','5′-CUAAUGU-3′'],
 'Complementara literă cu literă este 3′-CTAATGT-5′ (catenele sunt antiparalele); scrisă de la 5′ la 3′ devine 5′-TGTAATC-3′. ADN-ul nu conține uracil.');
hMC('adn',3,'Catena 5′-ACTGA-3′ se împerechează cu o catenă care, citită tot de la 5′ la 3′, este:',
 '5′-TCAGT-3′',['5′-TGACT-3′','5′-UCAGU-3′','5′-ACTGA-3′'],
 'Împerecherea dă 3′-TGACT-5′ (A–T, C–G, T–A, G–C, A–T). Citită de la 5′ la 3′, aceeași catenă este 5′-TCAGT-3′ („se scrie invers”).');
hMC('adn',3,'Catena 3′-AAGCT-5′ se împerechează cu o catenă care, citită de la 5′ la 3′, este:',
 '5′-TTCGA-3′',['5′-AGCTT-3′','5′-UUCGA-3′','5′-TCGAA-3′'],
 'Prima catenă este scrisă de la 3′ la 5′, deci complementara, scrisă în aceeași poziție, se citește de la 5′ la 3′: A–T, A–T, G–C, C–G, T–A ⇒ 5′-TTCGA-3′. În ADN nu apare uracil.');
hMC('adn',2,'După denaturarea unui ADN bicatenar, fiecare dintre cele două monocatene obținute are:',
 'structura I (legături fosfodiesterice între nucleotide), dar nu mai are structura II',
 ['structura II (legături de H cu cealaltă catenă), dar nu mai are structura I','ambele structuri, deoarece fiecare monocatenă conține toate legăturile moleculei inițiale','nicio structură, deoarece nucleotidele se desprind unele de altele'],
 'Denaturarea rupe legăturile de H dintre catene (structura II), dar nu și legăturile fosfodiesterice din fiecare catenă (structura I).');
