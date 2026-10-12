'use strict';
/* Teste grele · Lecția 3 — Acizii nucleici: ADN și ARN */

hMS('acizi',1,'Despre acizii nucleici sunt adevărate afirmațiile:',
 [['ADN înseamnă acid dezoxiribonucleic, iar ARN – acid ribonucleic',1],['sunt substanțe polinucleotidice',1],['se formează prin polimerizarea nucleotidelor',1],['molecula de ADN este cel mai mare polimer natural din lumea vie',1],['ARN este cel mai mare polimer natural din lumea vie',0],['sunt polimeri formați din aminoacizi',0]],
 'ADN = acid dezoxiribonucleic, ARN = acid ribonucleic; ambele sunt polinucleotide, formate prin polimerizarea nucleotidelor. Cel mai mare polimer natural din lumea vie este molecula de ADN.');
hMS('acizi',2,'O nucleotidă este alcătuită din:',
 [['o bază azotată',1],['o pentoză (zahăr cu 5 atomi de carbon)',1],['un radical fosfat',1],['un aminoacid',0],['un acid gras',0],['o hexoză (zahăr cu 6 atomi de carbon)',0]],
 'Nucleotida = bază azotată + zahăr (pentoză) + radical fosfat (P). Aminoacizii și acizii grași aparțin altor clase de molecule; pentoza are 5 atomi de carbon, nu 6.');
hMC('acizi',2,'Dacă o nucleotidă TDP este desfăcută în cele 3 componente ale ei, se obțin:',
 'timină, dezoxiriboză și fosfat',
 ['timină, riboză și fosfat','uracil, dezoxiriboză și fosfat','adenină, dezoxiriboză și fosfat'],
 'T = timină, D = dezoxiriboză, P = fosfat. Timina este specifică ADN-ului și apare numai împreună cu dezoxiriboza.');
hMS('acizi',3,'Despre bazele azotate <b>purinice</b> sunt adevărate afirmațiile:',
 [['sunt adenina (A) și guanina (G)',1],['au în moleculă două inele',1],['au, în plus față de inelul de 6 atomi, un inel de 5 atomi lipit de el',1],['sunt citozina, timina și uracilul',0],['au un singur inel',0],['se găsesc numai în ADN',0]],
 'Purinice = A și G, cu două inele (6 + 5 atomi), prezente în ADN și ARN. Bazele C, T, U sunt pirimidinice (un singur inel). Mnemonic: Ag = argint pur → purinice = A, G.');
hMS('acizi',3,'Despre bazele azotate <b>pirimidinice</b> sunt adevărate afirmațiile:',
 [['sunt citozina, timina și uracilul',1],['au un singur inel, cu 6 atomi (4 de carbon și 2 de azot)',1],['timina se găsește numai în ADN',1],['uracilul se găsește numai în ARN',1],['citozina se găsește numai în ADN',0],['au câte două inele',0]],
 'Pirimidinice = C, T, U (mnemonic: CUT), cu un singur inel. Timina – doar ADN; uracilul – doar ARN; citozina – și în ADN, și în ARN.');
hMS('acizi',3,'Alege afirmațiile adevărate:',
 [['Timina este o bază pirimidinică',1],['Nucleotida TDP conține dezoxiriboză',1],['Uracilul face parte din nucleotidele ADN-ului',0],['Adenina este o bază pirimidinică',0],['Bazele purinice au două inele în moleculă',1],['Citozina se găsește doar în ARN',0]],
 'Pirimidinice: C, T, U (un inel). Purinice: A, G (două inele). TDP = timină + dezoxiriboză + fosfat (ADN). Uracilul este doar în ARN; citozina este și în ADN, și în ARN.');
hMC('acizi',3,'Care dintre grupurile următoare conține DOAR baze pirimidinice?',
 'citozina, timina, uracilul',
 ['adenina, guanina, citozina','adenina, timina, uracilul','guanina, citozina, uracilul'],
 'Pirimidinice: C, T, U. Adenina și guanina sunt purinice.');
hMC('acizi',3,'Inelul pirimidinic este format din:',
 '6 atomi: 4 de carbon și 2 de azot',
 ['6 atomi: 2 de carbon și 4 de azot','5 atomi: 4 de carbon și 1 de azot','6 atomi: 5 de carbon și 1 de azot'],
 'Inelul pirimidinic are 6 atomi: 4 de carbon și 2 de azot. Purinele mai au, în plus, un inel de 5 atomi lipit de el.');
hMC('acizi',3,'Prin ce se deosebesc, ca structură, bazele purinice de cele pirimidinice?',
 'purinele au, în plus față de inelul de 6 atomi, un al doilea inel (de 5 atomi) lipit de el',
 ['pirimidinele au două inele lipite, iar purinele un singur inel, de 6 atomi','purinele conțin atomi de fosfor în inel, iar pirimidinele conțin numai carbon și azot','purinele sunt specifice ADN-ului, iar pirimidinele sunt specifice ARN-ului'],
 'Purine (A, G): două inele. Pirimidine (C, T, U): un inel. De aceea purinele sunt „mai mari”, iar perechea purină–pirimidină are mereu aceeași lățime.');
hMC('acizi',3,'Care dintre următoarele combinații bază – pentoză NU poate exista într-o nucleotidă (la nivelul acestui capitol)?',
 'uracil + dezoxiriboză',
 ['adenină + riboză','timină + dezoxiriboză','citozină + riboză'],
 'Uracilul este specific ARN-ului (cu riboză), iar dezoxiriboza este specifică ADN-ului (cu timină).');
hMS('acizi',4,'Care afirmații despre pentoze sunt adevărate?',
 [['Dezoxiriboza se găsește doar în ADN',1],['Riboza se găsește și în ADN',0],['Pentoza are 5 atomi de carbon',1],['Baza azotată se leagă de pentoză la C1′',1],['Radicalul fosfat se leagă de baza azotată',0]],
 'Pentoză = zahăr cu 5 atomi de carbon; baza azotată se leagă la C1′, iar fosfatul la C5′ (nu de bază). Riboza este doar în ARN.');
hMC('acizi',4,'Prin ce se deosebesc riboza și dezoxiriboza?',
 'la C2′: riboza are o grupare OH, dezoxiriboza doar un atom de H',
 ['la C5′: riboza are radical fosfat, iar dezoxiriboza nu are','la C1′: riboza leagă baza azotată, iar dezoxiriboza nu o leagă','prin numărul de atomi de carbon: riboza are 5, dezoxiriboza 4'],
 'Ambele sunt pentoze (5 atomi de C). Singura diferență: la C2′ riboza are OH, iar dezoxiriboza doar H („dez-oxi” = fără un atom de oxigen).');
hMC('acizi',4,'Ce înseamnă „dezoxi” în numele „dezoxiriboză”?',
 'lipsește un atom de oxigen: la C2′ există doar H, în loc de OH',
 ['lipsește un atom de carbon din pentoză: C5′ nu mai există','lipsește radicalul fosfat de la C5′, înlocuit de un H','lipsește baza azotată de la C1′, înlocuită de un OH'],
 'Dezoxiriboza = riboza „fără un oxigen” (la C2′ are H în loc de OH).');
hMS('acizi',5,'Care dintre următoarele afirmații despre ADN și ARN sunt adevărate?',
 [['ADN conține bazele A, G, C și T',1],['ARN conține bazele A, G, C și U',1],['ADN este de obicei bicatenar',1],['ARN conține dezoxiriboză',0],['ADN conține uracil',0],['ARN este de obicei bicatenar',0]],
 'ADN: dezoxiriboză, A, G, C, T, de obicei bicatenar. ARN: riboză, A, G, C, U, de obicei monocatenar.');
hMS('acizi',5,'Care afirmații sunt adevărate pentru ADN, dar false pentru ARN (în mod obișnuit)?',
 [['Conține timină',1],['Este de obicei bicatenar',1],['Conține riboză',0],['Conține uracil',0],['Are legături fosfodiesterice între nucleotide',0]],
 'Timina și structura bicatenară sunt specifice ADN-ului. Riboza și uracilul sunt ale ARN-ului; legăturile fosfodiesterice există în ambele.');
hMS('acizi',5,'Care afirmații sunt adevărate pentru ARN, dar false pentru ADN (în mod obișnuit)?',
 [['Conține uracil',1],['Pentoza este riboza',1],['Este de obicei monocatenar',1],['Conține timină',0],['Conține bazele A, G și C',0]],
 'Uracilul, riboza și structura monocatenară caracterizează ARN-ul. Timina este specifică ADN-ului, iar A, G, C se găsesc în ambele.');
hMC('acizi',5,'Analiza unui acid nucleic arată: 30% A, 20% G, 25% C și 25% U. Cea mai potrivită concluzie este:',
 'ARN monocatenar (conține U, iar A ≠ U și G ≠ C)',
 ['ADN bicatenar (A și U sunt baze complementare)','ARN bicatenar pe toată lungimea (conține U)','ADN monocatenar (A ≠ U și G ≠ C)'],
 'Uracilul apare doar în ARN. Într-un ARN bicatenar ar fi A = U și G = C; aici nu sunt egale, deci molecula este monocatenară.');
hMC('acizi',5,'Analiza unui acid nucleic arată: 28% A, 28% T, 22% G și 22% C. Care este cea mai probabilă interpretare?',
 'ADN, cel mai probabil bicatenar (A = T și G = C)',
 ['ARN bicatenar (A = U și G = C)','ADN monocatenar (conține timină)','ARN monocatenar (A = T și G = C)'],
 'Conține timină, deci este ADN; A = T și G = C sunt egalitățile specifice moleculei bicatenare (complementaritate).');
hMC('acizi',5,'O analiză indică: 30% A, 30% U, 20% G, 20% C. Ce se poate afirma CU CERTITUDINE?',
 'este ARN (conține uracil), dar compoziția singură nu arată dacă e mono- sau bicatenar',
 ['este ARN bicatenar, deoarece A = U și G = C, ceea ce demonstrează complementaritatea','este ADN bicatenar, deoarece procentele bazelor perechi sunt egale (A = U, G = C)','este ARN monocatenar, pentru că ARN-ul este întotdeauna monocatenar, indiferent de compoziție'],
 'Uracilul arată că este ARN. ARN-ul este „de obicei” monocatenar, nu „întotdeauna”; egalitățile A = U și G = C pot fi întâmplătoare, deci nu dovedesc singure că molecula e bicatenară.');
hMS('acizi',6,'Folosind notația din curs (prima literă = baza azotată, a doua = pentoza: D sau R, a treia = P de la fosfat), care dintre coduri reprezintă nucleotide din lista cursului (cele din ADN sau din ARN)?',
 [['TDP',1],['UDP',0],['CRP',1],['GRP',1],['TRP',0],['ADP',1]],
 'D = dezoxiriboză (ADN), R = riboză (ARN). Timina apare doar cu D (TDP), uracilul doar cu R (URP). UDP și TRP asociază baza cu pentoza „greșită”.');
hMC('acizi',6,'Ce reprezintă literele din codul CRP?',
 'C = citozină, R = riboză, P = fosfat',
 ['C = carbon, R = riboză, P = purină','C = citozină, R = radical, P = pirimidină','C = catenă, R = ARN, P = polimerizare'],
 'Numele nucleotidei este un cod din 3 litere: baza (C = citozină) + pentoza (R = riboză) + fosfatul (P). CRP = nucleotidă de ARN cu citozină.');
hMS('acizi',6,'Care dintre următoarele nucleotide aparțin ARN-ului (în notația din curs)?',
 [['URP',1],['ARP',1],['GRP',1],['TDP',0],['CDP',0],['GDP',0]],
 'ARN: ARP, URP, CRP, GRP (pentoza R = riboză). ADN: ADP, GDP, CDP, TDP (pentoza D = dezoxiriboză).');
hMC('acizi',6,'Câte tipuri diferite de nucleotide există în total în ADN și ARN la un loc, dacă o nucleotidă se definește prin baza azotată și pentoza ei (plus fosfatul)?',
 '8',['5','6','4'],
 'ADN: 4 nucleotide (A, G, C, T, fiecare cu dezoxiriboză). ARN: 4 nucleotide (A, G, C, U, fiecare cu riboză). Chiar dacă A, G și C apar în ambii acizi, nucleotidele diferă prin pentoză ⇒ 8 tipuri, nu 5.');
hMC('acizi',6,'Prin ce se deosebesc nucleotidele ADP și ARP (în notația din curs)?',
 'prin pentoză: ADP are dezoxiriboză, ARP are riboză (baza și fosfatul sunt aceleași)',
 ['prin bază: ADP conține adenină, iar ARP conține uracil, la aceeași pentoză','prin fosfat: ADP are doi radicali fosfat, iar ARP unul singur, la aceeași bază','prin nicio componentă: sunt două denumiri ale aceleiași nucleotide, folosite în ADN și în ARN'],
 'ADP = adenină + D + P (ADN); ARP = adenină + R + P (ARN). Adenina apare în ambii acizi; se schimbă doar pentoza.');
hMC('acizi',6,'Ce se schimbă la trecerea de la nucleotida TDP la nucleotida URP?',
 'baza (T → U) și pentoza (D → R); fosfatul rămâne',
 ['doar baza (T → U); pentoza și fosfatul rămân aceleași','doar pentoza (D → R); baza și fosfatul rămân aceleași','baza (T → U) și fosfatul (P → R); pentoza rămâne aceeași'],
 'TDP (ADN) = timină + dezoxiriboză + fosfat; URP (ARN) = uracil + riboză + fosfat. Se schimbă și baza, și pentoza.');
hMS('acizi',7,'Pentru a construi o nucleotidă de ADN care conține baza T (timina), se folosesc piesele:',
 [['radical fosfat (P)',1],['dezoxiriboză',1],['timină',1],['riboză',0],['uracil',0],['citozină',0]],
 'Nucleotida TDP = fosfat + dezoxiriboză + timină. Riboza și uracilul sunt componente ale nucleotidelor de ARN.');
