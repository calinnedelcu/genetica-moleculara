'use strict';
/* Teste grele · Recapitulare mixtă — întrebări care leagă mai multe capitole */

hMS('mix',0,'Care dintre următoarele afirmații despre legături sunt adevărate?',
 [['Legăturile fosfodiesterice se formează și la replicare, și la transcripție',1],['Legăturile de hidrogen se rup la denaturare și se refac la renaturare',1],['La replicare, legăturile de hidrogen se stabilesc între catena veche și catena nouă',1],['Legăturile fosfodiesterice se rup la denaturare',0],['Hibridul ADN–ARN este stabilizat de legături fosfodiesterice între cele două catene',0]],
 'Fosfodiesterice = în aceeași catenă (se formează în orice catenă nouă, de ADN sau ARN) și nu se rup la denaturare. Hidrogen = între catene (replicare, transcripție, renaturare; se rup la denaturare).');
hMS('mix',0,'Care sunt trăsături comune ADN și ARN?',
 [['Nucleotidele lor sunt formate din bază azotată, pentoză și radical fosfat',1],['Ambele conțin adenină, guanină și citozină',1],['Nucleotidele vecine dintr-o catenă sunt legate prin legături fosfodiesterice',1],['Ambele conțin dezoxiriboză',0],['Ambele sunt, în mod obișnuit, bicatenare',0]],
 'Comune: structura nucleotidei, bazele A, G, C și legăturile fosfodiesterice. Diferă: pentoza (dezoxiriboză/riboză), a patra bază (T/U) și, de obicei, numărul de catene (2/1).');
hMS('mix',0,'Care dintre următoarele procese folosesc complementaritatea bazelor azotate?',
 [['replicarea',1],['transcripția',1],['renaturarea',1],['recunoașterea codonului din ARNm de către anticodonul din ARNt',1],['răcirea bruscă a ADN-ului denaturat (catenele rămân separate)',0],['formarea legăturilor fosfodiesterice dintre nucleotide',0]],
 'Replicarea, transcripția, renaturarea (și hibridizarea) și recunoașterea codon–anticodon se bazează pe împerecherea complementară a bazelor (A–T/U, C–G). Denaturarea doar rupe legăturile de H dintre catene, iar legăturile fosfodiesterice leagă nucleotide vecine, nu baze complementare.');
hMS('mix',0,'Care dintre următoarele procese NU produc o catenă NOUĂ de acid nucleic?',
 [['Replicarea',0],['Transcripția',0],['Denaturarea',1],['Renaturarea',1]],
 'Replicarea produce catene noi de ADN, transcripția produce o catenă nouă de ARN. Denaturarea separă, iar renaturarea reunește catene deja existente.');
hMS('mix',0,'Care dintre următoarele structuri conțin legături fosfodiesterice?',
 [['o catenă de ADN',1],['ARNm',1],['ARNt',1],['o nucleotidă liberă',0],['un aminoacid liber',0],['legătura A=T dintre două baze',0]],
 'Legăturile fosfodiesterice leagă nucleotidele vecine dintr-o catenă (ADN sau ARN, inclusiv ARNt). O nucleotidă liberă are un singur fosfat și nu este legată de alta.');
hMS('mix',0,'Care dintre următoarele conțin uracil?',
 [['ARNm',1],['ARNt',1],['catena de ARN dintr-un hibrid ADN–ARN',1],['o catenă de ADN',0],['catena de ADN copiată în transcripție',0],['nucleotida TDP',0]],
 'Uracilul este specific ARN-ului. ADN-ul (inclusiv catena copiată) conține timină, nu uracil.');
hMS('mix',0,'Care dintre următoarele conțin dezoxiriboză?',
 [['o catenă de ADN',1],['catena de ADN dintr-un hibrid ADN–ARN',1],['nucleotida TDP',1],['ARNm',0],['nucleotida URP',0],['ARNr',0]],
 'Dezoxiriboza (D) este pentoza ADN-ului (nucleotide ADP, GDP, CDP, TDP). ARN-ul conține riboză (R).');
hMC('mix',0,'Într-o celulă se găsește o moleculă monocatenară, cu uracil și riboză, de lungime variabilă, care poartă informația copiată din ADN pentru sinteza unei proteine. Este:',
 'ARN mesager',['ARN de transfer','ARN ribozomal','ADN monocatenar'],
 'ARNm este monocatenar, de lungime variabilă, și copiază informația genetică din ADN pentru sinteza proteică. ARNt are aspect de frunză de trifoi și anticodon; ARNr intră în alcătuirea ribozomilor.');
hMC('mix',0,'Dacă o catenă de ADN și o catenă de ARN sunt complementare și se asociază, ce moleculă se formează?',
 'un hibrid ADN–ARN, cu perechi A(ADN)–U(ARN), T(ADN)–A(ARN), C–G, G–C',
 ['un ADN bicatenar, cu perechi A–T','un ARN bicatenar, cu perechi A–U în ambele catene','o moleculă monocatenară, deoarece ADN-ul și ARN-ul nu se pot împerechea'],
 'Hibridul ADN–ARN apare la transcripție: ARN-ul se așază pe catena de ADN copiată prin complementaritate; baza A din ADN se leagă de U din ARN.');
hMS('mix',0,'Care dintre moleculele următoare sunt bicatenare?',
 [['o moleculă-fiică rezultată din replicare',1],['ADN-ul reformat după răcire lentă (renaturare)',1],['ARNm eliberat la sfârșitul transcripției',0],['monocatenele obținute prin răcire bruscă după denaturare',0],['fiecare dintre cele 2 molecule rezultate prin denaturare',0]],
 'Replicarea dă 2 molecule bicatenare de ADN, iar renaturarea reface molecula bicatenară. ARNm eliberat este monocatenar, iar denaturarea și răcirea bruscă lasă molecule monocatenare.');
hMS('mix',0,'Un elev scrie: „În replicare, ARN-polimeraza taie legăturile fosfodiesterice, iar în final se obțin două molecule de ARN.” Care dintre corecturile următoare sunt necesare?',
 [['ARN-polimeraza trebuie înlocuită cu ADN-polimeraza',1],['„legăturile fosfodiesterice” trebuie înlocuite cu „legăturile de hidrogen”',1],['„două molecule de ARN” trebuie înlocuit cu „două molecule de ADN”',1],['„în replicare” trebuie înlocuit cu „în transcripție”',0],['„două molecule” trebuie înlocuit cu „o singură moleculă”',0],['nu este necesară nicio corectură',0]],
 'Corect: ADN-polimeraza (nu ARN-polimeraza) taie legăturile de H (nu pe cele fosfodiesterice), iar la final rezultă 2 molecule de ADN (nu de ARN). Procesul este chiar replicarea și rezultă două molecule, nu una.');
hMS('mix',0,'Citește propozițiile despre procese și molecule. Conform cursului, care dintre ele conțin o GREȘEALĂ?',
 [['Prin transcripție se obține o moleculă de ADN',1],['Anticodonul se află pe ARNm',1],['Uracilul se găsește în ADN în locul timinei',1],['Replicarea are loc în etapa S a interfazei',0],['Legăturile de hidrogen dintre catene se rup la denaturare',0],['ADN-polimeraza taie legăturile de hidrogen în replicare',0]],
 'Transcripția produce ARN; anticodonul este pe ARNt (codonul – pe ARNm); uracilul este în ARN (nu în ADN). Celelalte afirmații sunt corecte.');
hMS('mix',0,'Citește propozițiile despre experimente și structuri. Care dintre ele conțin o GREȘEALĂ?',
 [['Timina se găsește în ARN',1],['ARNt este bicatenar pe toată lungimea',1],['În experimentul 3 al lui Griffith șoarecii mor',1],['Catena nouă din replicare conține legături fosfodiesterice între nucleotide',0],['Denaturarea se datorează structurii bicatenare a ADN',0],['Avery a explicat în 1944 fenomenul de transformare genetică',0]],
 'Timina este în ADN; ARNt este monocatenar cu regiuni bicatenare; în experimentul 3 (SIII omorâte) șoarecii trăiesc. Celelalte afirmații sunt corecte.');
hMC('mix',0,'Aceeași catenă veche de ADN, TTAGC, servește ca model: o dată la replicare și o dată la transcripție. Catena nouă din replicare și ARN-ul din transcripție sunt, respectiv (aliniate):',
 'AATCG și AAUCG',['AATCG și AATCG','AAUCG și AAUCG','UUAGC și AATCG'],
 'Replicare (ADN): A–T, T–A, A–T, G–C, C–G ⇒ AATCG. Transcripție (ARN): aceeași complementară, dar cu uracil în loc de timină ⇒ AAUCG.');
hMS('mix',0,'Care procese ar fi afectate dacă s-ar bloca formarea legăturilor fosfodiesterice?',
 [['replicarea',1],['transcripția',1],['denaturarea',0],['renaturarea',0]],
 'La replicare și transcripție se sintetizează catene noi, în care nucleotidele se leagă prin legături fosfodiesterice. Denaturarea și renaturarea implică doar legăturile de H dintre catene.');
hMS('mix',0,'Care procese ar fi afectate dacă s-ar bloca formarea legăturilor de hidrogen dintre baze?',
 [['replicarea',1],['transcripția',1],['renaturarea',1],['denaturarea',0]],
 'Replicarea (veche–nouă), transcripția (hibrid ADN–ARN) și renaturarea se bazează pe formarea legăturilor de H. Denaturarea, dimpotrivă, rupe aceste legături.');
