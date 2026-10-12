'use strict';
/* Teste grele · Lecția 2 — Griffith și Avery */

hMS('griffith',1,'Despre pneumococii folosiți de Griffith sunt adevărate afirmațiile:',
 [['sunt bacterii care pot provoca pneumonie',1],['tipul RII este nevirulent și formează colonii rugoase (aspre)',1],['tipul SIII este virulent și formează colonii netede',1],['tipul RII este virulent și formează colonii netede',0],['tipul SIII este nevirulent și formează colonii rugoase',0],['„virulent” înseamnă „incapabil să îmbolnăvească”',0]],
 'RII = nevirulent, colonii rugoase (R = rugos → rămâne viu); SIII = virulent, colonii netede (S = smooth/neted → sfârșit). Virulent = capabil să îmbolnăvească.');
hMS('griffith',2,'În care dintre situațiile următoare șoarecele injectat <b>TRĂIEȘTE</b>?',
 [['RII vii',1],['SIII vii',0],['SIII omorâte prin căldură',1],['RII vii + SIII omorâte prin căldură',0],['RII omorâte + SIII omorâte prin căldură (nicio bacterie vie)',1],['RII vii + SIII vii',0]],
 'Trăiește când în organism nu ajung bacterii virulente active: RII vii (nevirulente), SIII omorâte sau un amestec de bacterii moarte. Moare când există SIII vii sau când RII vii sunt transformate de ADN-ul de la SIII omorâte (experimentul 4).');
hMC('griffith',2,'Rezultatul experimentului 4 este surprinzător doar în raport cu alte două experimente, în care componentele amestecului au fost injectate separat. Care sunt acestea?',
 'experimentele 1 și 3 (RII vii, respectiv SIII omorâte prin căldură)',
 ['experimentele 1 și 2 (RII vii, respectiv SIII vii)','experimentele 2 și 3 (SIII vii, respectiv SIII omorâte prin căldură)','experimentele 2 și 4 (SIII vii, respectiv amestecul RII + SIII omorâte)'],
 'Șoarecii au murit doar în experimentul 2 (SIII vii). Componentele amestecului din experimentul 4 sunt exact cele din experimentele 1 și 3, care erau inofensive separat – de aceea rezultatul este surprinzător.');
hMC('griffith',2,'De ce este necesar experimentul 3 (SIII omorâte prin căldură, injectate singure) pentru a interpreta corect experimentul 4?',
 'arată că bacteriile SIII omorâte nu omoară singure șoarecele, deci moartea din experimentul 4 are altă explicație',
 ['arată că bacteriile RII devin virulente prin simpla încălzire, înainte de a fi injectate în șoarece','arată că bacteriile SIII omorâte pot fi cultivate pe un mediu de cultură, ca cele vii','arată că șoarecii sunt rezistenți la orice bacterii moarte, de orice tip, indiferent de boală'],
 'Experimentul 3 este „martorul” experimentului 4: dacă bacteriile SIII omorâte nu ucid singure șoarecele, moartea din experimentul 4 trebuie explicată prin altceva – transferul unui „ceva” de la ele la RII.');
hMS('griffith',2,'Care concluzii sunt susținute de rezultatele experimentelor 1–4?',
 [['Bacteriile SIII omorâte prin căldură nu mai îmbolnăvesc singure șoarecele (experimentul 3)',1],['Bacteriile RII vii nu îmbolnăvesc singure șoarecele (experimentul 1)',1],['În experimentul 4 Griffith a demonstrat că substanța transformantă este ADN-ul',0],['Un caracter ereditar (virulența) poate trece de la bacterii moarte la bacterii vii',1],['Căldura distruge definitiv orice informație ereditară din celulă',0]],
 'Experimentele 1 și 3 arată că RII și SIII omorâte nu omoară singure șoarecele; experimentul 4 arată că virulența poate fi transferată. Identificarea ADN-ului ca substanță transformantă aparține lui Avery (1944), iar căldura nu a distrus „ceva” (ADN-ul).');
hMC('griffith',2,'În experimentul 4, bacteriile care provoacă pneumonia și omoară șoarecele provin din:',
 'bacterii RII vii, devenite virulente prin primirea ADN-ului de la bacteriile SIII omorâte',
 ['bacterii SIII omorâte, care au revenit la viață după injectarea în șoarece','bacterii RII vii, care sunt virulente prin natura lor, ca și bacteriile SIII','bacterii SIII omorâte, care produc o toxină ce ucide șoarecele după injectare'],
 'Bacteriile SIII au fost omorâte și nu mai pot îmbolnăvi. Moartea șoarecelui se datorează bacteriilor RII care, prin transformare genetică, au devenit virulente (SIII).');
hMS('griffith',2,'Despre componența amestecurilor injectate sunt adevărate afirmațiile:',
 [['În experimentul 1 nu este prezentă nicio bacterie SIII',1],['În experimentul 3 sunt prezente bacterii SIII, dar omorâte',1],['În experimentul 4 sunt vii atât bacteriile RII, cât și bacteriile SIII',0],['În experimentul 4 sunt vii bacteriile RII',1],['În experimentul 2 bacteriile injectate sunt vii',1],['În experimentul 3 bacteriile injectate pot provoca pneumonie',0]],
 'Exp. 1: RII vii. Exp. 2: SIII vii. Exp. 3: SIII omorâte. Exp. 4: RII vii + SIII omorâte (SIII nu sunt vii!). Bacteriile omorâte nu mai pot provoca pneumonie.');
hMC('griffith',3,'Bacterii SIII omorâte prin căldură sunt tratate cu o enzimă care distruge ADN-ul, apoi amestecate cu bacterii RII vii și injectate șoarecilor. Dacă ADN-ul este substanța care produce transformarea, rezultatul așteptat este:',
 'șoarecii trăiesc: fără ADN nu mai are loc transformarea, iar bacteriile RII rămân nevirulente',
 ['șoarecii mor, ca în experimentul 4, deoarece bacteriile RII vii sunt oricum capabile să provoace pneumonie','șoarecii mor, dar mai lent, deoarece o parte din ADN rămâne activ după tratamentul cu enzimă','nu se poate prevedea nimic, deoarece enzima distruge și bacteriile RII vii din amestec'],
 'Dacă „ceva” = ADN și el este distrus, bacteriile RII nu mai primesc informația care le face virulente. Rămân doar RII nevirulente (ca în experimentul 1), deci șoarecii trăiesc.');
hMC('griffith',3,'Aceleași bacterii SIII omorâte prin căldură sunt tratate acum cu o enzimă care distruge proteinele, dar nu și ADN-ul, apoi amestecate cu bacterii RII vii și injectate. Conform concluziei lui Avery, rezultatul este:',
 'șoarecii mor: ADN-ul rămâne intact și transformă bacteriile RII în bacterii virulente',
 ['șoarecii trăiesc: proteinele sunt substanța care transformă bacteriile RII în bacterii virulente','șoarecii trăiesc: orice enzimă adăugată în amestec anulează fenomenul de transformare','șoarecii mor, dar numai dacă amestecul conține și bacterii SIII vii'],
 'Substanța care trece de la bacteriile moarte la cele vii este ADN-ul. Distrugerea proteinelor nu împiedică transformarea, deci RII devin virulente și șoarecii mor.');
hMC('griffith',3,'Din șoarecele mort în experimentul 4 se cultivă pe mediu bacteriile vii din organism. Care rezultat arată că a avut loc transformarea genetică?',
 'apar colonii netede (SIII, virulente), deși printre bacteriile vii injectate nu exista niciun SIII',
 ['apar numai colonii rugoase (RII), ca în injecția inițială, dar în număr mai mare','nu apare nicio colonie, deoarece moartea șoarecelui distruge toate bacteriile din organism','nu se poate trage nicio concluzie, deoarece toate bacteriile din cadavru sunt moarte'],
 'În amestec erau vii doar bacterii RII (rugoase, nevirulente). Dacă apar colonii netede (SIII), înseamnă că unele RII au primit informația ereditară de la bacteriile SIII moarte.');
hMC('griffith',3,'Ce observație arată că transformarea este ereditară (durabilă) și nu doar o „acoperire” temporară a bacteriilor RII cu substanțe de la SIII?',
 'urmașii bacteriilor transformate, cultivați mai departe, formează colonii netede și rămân virulenți',
 ['bacteriile transformate supraviețuiesc în organismul șoarecelui mai mult decât bacteriile RII obișnuite','bacteriile SIII omorâte prin căldură își reiau diviziunea în organismul șoarecelui după injectare','șoarecele rămâne rezistent la o a doua injecție cu bacterii RII nevirulente, injectate ulterior'],
 'Ereditar = se transmite la descendenți. Dacă urmașii bacteriilor transformate rămân SIII (colonii netede, virulenți), informația primită a devenit parte din materialul genetic al bacteriei.');
hMC('griffith',3,'De ce concluzia „substanța transformantă este ADN-ul” nu putea fi formulată doar pe baza experimentelor lui Griffith (1928)?',
 'amestecul omorât conținea toate componentele celulei, iar experimentele nu arătau care dintre ele a trecut la RII',
 ['căldura distruge complet ADN-ul, așa că bacteriile omorâte nu mai puteau transmite nicio informație ereditară','Griffith nu a observat nicio modificare ereditară la bacteriile RII, deci nu avea ce explica','în experimentul 4 au murit și șoarecii injectați cu RII, deci rezultatele nu erau concludente'],
 'Griffith a arătat că „ceva” trece de la SIII moarte la RII. Că acest „ceva” este ADN-ul a explicat abia Avery, în 1944.');
hMS('griffith',3,'Despre fenomenul de transformare genetică sunt adevărate afirmațiile:',
 [['Presupune trecerea ADN-ului de la bacterii moarte la bacterii vii',1],['A fost explicat de Avery în 1944',1],['Face ca bacteria RII să capete caracterul virulent',1],['A fost observat de Griffith în 1944',0],['Presupune pierderea ADN-ului bacteriei vii',0]],
 'Griffith a observat fenomenul în 1928; Avery l-a explicat în 1944: ADN-ul trece de la bacteriile moarte la RII, care devin virulente. Bacteria vie nu își pierde ADN-ul propriu.');
hMC('griffith',3,'Care dintre următoarele rezultate ar contrazice ipoteza că ADN-ul este substanța transformantă?',
 'extractul de SIII tratat cu o enzimă care distruge ADN-ul transformă în continuare bacteriile RII în virulente',
 ['extractul de SIII tratat cu o enzimă care distruge proteinele transformă în continuare bacteriile RII','extractul de SIII tratat cu o enzimă care distruge ADN-ul nu mai transformă bacteriile RII','bacteriile RII vii, injectate singure, nu provoacă moartea șoarecelui'],
 'Dacă transformarea continuă și după distrugerea ADN-ului, ADN-ul nu poate fi substanța responsabilă. Celelalte rezultate sunt exact cele așteptate dacă ADN-ul este substanța transformantă.');
hMS('griffith',3,'În care dintre situațiile următoare moare șoarecele injectat (conform experimentelor lui Griffith și concluziei lui Avery)?',
 [['SIII vii',1],['RII vii',0],['SIII omorâte prin căldură',0],['RII vii + SIII omorâte prin căldură',1],['RII vii + SIII omorâte prin căldură, în prealabil tratate cu o enzimă care distruge ADN-ul',0],['RII vii + SIII omorâte prin căldură, în prealabil tratate cu o enzimă care distruge ARN-ul',1]],
 'Moare când ajung în organism bacterii virulente: SIII vii, sau RII transformate de ADN-ul de la SIII omorâte. Dacă ADN-ul este distrus, transformarea nu mai are loc și șoarecele trăiește. Distrugerea ARN-ului nu schimbă nimic, pentru că ADN-ul este cel care transformă.');
hMC('griffith',1,'Care dintre următoarele perechi an – om – contribuție este corectă?',
 '1928 – Griffith – a observat că RII + SIII omorâte ucide șoarecii; 1944 – Avery – a explicat că ADN-ul trece de la bacteriile moarte la RII',
 ['1928 – Avery – a observat că RII + SIII omorâte ucide șoarecii; 1944 – Griffith – a explicat că ADN-ul trece de la bacteriile moarte la RII','1928 – Griffith – a demonstrat că ADN-ul este substanța transformantă; 1944 – Avery – a observat că amestecul ucide șoarecii','1944 – Griffith – a observat transformarea; 1928 – Avery – a descoperit pneumococii virulenți'],
 'Griffith (1928) = experimentul cu pneumococi și șoareci; Avery (1944) = explicația: „ceva” trecut de la cadavrele omorâte prin căldură la RII este molecula de ADN ⇒ transformare genetică.');
hMS('griffith',3,'Despre „ceva-ul” care trece de la bacteriile SIII omorâte la bacteriile RII sunt adevărate afirmațiile:',
 [['este molecula de ADN (Avery, 1944)',1],['trece de la bacteriile moarte la cele vii',1],['transformă bacteriile RII în tipul virulent',1],['este distrus complet de căldură',0],['este o proteină',0],['nu se transmite descendenților bacteriei transformate',0]],
 'Avery a arătat că „ceva-ul” este ADN-ul. Căldura omoară bacteriile, dar ADN-ul lor nu dispare complet; informația primită se transmite și descendenților (transformare ereditară).');
hMS('griffith',3,'Care observații sunt compatibile cu producerea transformării genetice (RII → SIII)?',
 [['în cultura din șoarecele mort apar colonii netede',1],['descendenții bacteriilor transformate rămân virulenți',1],['moartea șoarecelui injectat cu RII vii + SIII omorâte',1],['bacteriile SIII omorâte prin căldură se divid după injectare',0],['moartea unui șoarece injectat numai cu bacterii RII vii',0],['bacteriile SIII omorâte provoacă pneumonie dacă sunt injectate singure',0]],
 'Transformarea înseamnă că RII primesc ADN de la SIII omorâte și devin SIII: colonii netede, virulență, moștenită de descendenți. Bacteriile omorâte nu se divid și nu provoacă boală.');
hMC('griffith',3,'Ce înseamnă „transformare genetică”?',
 'trecerea ADN-ului dintr-o bacterie în alta, cu schimbarea caracterelor bacteriei care îl primește',
 ['transformarea ADN-ului în ARN în interiorul aceleiași bacterii, cu schimbarea caracterelor ei','omorârea bacteriilor virulente prin încălzire, urmată de trecerea lor într-un alt organism','trecerea bacteriilor dintr-un șoarece în altul, cu apariția pneumoniei la al doilea'],
 'Transformarea genetică = ADN trece de la o bacterie (aici SIII omorâte) la alta (RII vii), iar aceasta își schimbă caracterele (devine virulentă).');
hMC('griffith',3,'Un cercetător încălzește bacteriile RII până le omoară, apoi le amestecă cu bacterii SIII vii și injectează amestecul unui șoarece. Rezultatul este:',
 'șoarecele moare, din cauza bacteriilor SIII vii (virulente); nu este nevoie de nicio transformare',
 ['șoarecele trăiește, deoarece bacteriile RII omorâte inhibă acțiunea bacteriilor SIII vii','șoarecele trăiește, deoarece pneumonia se declanșează numai în prezența bacteriilor RII vii','șoarecele moare numai prin transformare, deoarece bacteriile RII omorâte devin virulente'],
 'Bacteriile SIII vii sunt virulente prin ele însele (ca în experimentul 2). Transformarea ar cere bacterii RII vii care să primească ADN, dar aici RII sunt moarte.');
hMC('griffith',3,'Ce spune lecția despre efectul căldurii asupra bacteriilor SIII?',
 'le omoară, dar ADN-ul lor nu a dispărut complet',
 ['le omoară și distruge complet ADN-ul lor','nu le omoară, ci doar le face nevirulente','le omoară, dar păstrează intacte doar proteinele lor'],
 'Bacteriile SIII omorâte prin căldură nu mai pot îmbolnăvi, dar ADN-ul lor nu a dispărut complet – de aceea poate trece la bacteriile RII vii.');
hMC('griffith',3,'Pune în ordine corectă pașii transformării din experimentul 4: (A) bacteria RII devine SIII; (B) ADN-ul iese din bacteriile SIII moarte; (C) descendenții moștenesc caracterul; (D) bacteria RII preia un fragment de ADN.',
 'B – D – A – C',['D – B – A – C','B – A – D – C','B – D – C – A'],
 'ADN-ul iese din bacteriile moarte (B), o bacterie RII vie preia un fragment (D), devine SIII (A), iar descendenții ei moștenesc caracterul (C).');
hMC('griffith',3,'Cine și când a explicat rezultatul experimentului 4, și ce a arătat?',
 'Avery, în 1944: de la cadavrele omorâte prin căldură a trecut molecula de ADN la tipul RII',
 ['Griffith, în 1928: de la cadavrele omorâte prin căldură a trecut molecula de ADN la tipul RII','Avery, în 1928: proteinele bacteriilor SIII au trecut la tipul RII','Griffith, în 1944: bacteriile RII au revenit la viață ca bacterii SIII'],
 'Griffith a făcut experimentul (1928); Avery l-a explicat (1944): ADN ⇒ transformare genetică.');
