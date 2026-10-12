'use strict';
/* Teste grele · Lecția 7 — Denaturare și renaturare */

hMC('denat',1,'Care sunt funcțiile ADN-ului enumerate la începutul lecției 7?',
 'denaturarea – renaturarea și replicarea (autocopierea)',
 ['numai replicarea (autocopierea) și sinteza proteinelor','denaturarea, renaturarea și sinteza proteinelor','numai denaturarea și renaturarea, fără replicare'],
 'Funcțiile ADN-ului din curs: 1) denaturarea – renaturarea (lecția 7); 2) replicarea = autocopierea (lecția 8).');
hMS('denat',2,'Alege afirmațiile adevărate despre denaturare și renaturare:',
 [['Denaturarea rupe legăturile de hidrogen dintre catene',1],['Denaturarea rupe legăturile fosfodiesterice',0],['Răcirea bruscă a ADN-ului denaturat duce la renaturare completă',0],['Răcirea lentă permite catenelor complementare să se regăsească',1],['Denaturarea are loc numai la molecule bicatenare',1],['Prin denaturare, dintr-o moleculă bicatenară rezultă 2 molecule monocatenare',1]],
 'Denaturarea (t°C ↑) rupe doar legăturile de H, deci dintr-o moleculă bicatenară rezultă 2 monocatenare. Răcirea lentă duce la renaturare; răcirea bruscă lasă catenele separate.');
hMC('denat',2,'Denaturarea (separarea celor două catene prin încălzire) este posibilă numai la:',
 'molecule bicatenare, deoarece catenele lor sunt unite prin legături de hidrogen',
 ['molecule monocatenare, deoarece catenele lor sunt libere și se pot desface ușor','orice moleculă de acid nucleic, indiferent de numărul ei de catene și de legăturile dintre ele','nucleotide libere, ale căror baze se despart prin încălzire de pentoză'],
 'Denaturarea se datorează structurii bicatenare: t°C ↑ rupe legăturile de H dintre catene. O moleculă monocatenară nu are ce separa.');
hMC('denat',2,'De ce poate fi denaturat un ADN prin simpla încălzire a soluției, fără ca molecula să se descompună în nucleotide?',
 'se rup doar legăturile de hidrogen dintre catene (destul de slabe), nu și legăturile fosfodiesterice din catene',
 ['se rup legăturile fosfodiesterice dintre catene, dar nucleotidele rămân unite prin bazele azotate','legăturile de hidrogen sunt mai puternice decât cele fosfodiesterice, deci se rup ultimele','încălzirea transformă ADN-ul în ARN, care este monocatenar, deci catenele se separă'],
 'Denaturarea afectează doar structura II (legăturile de H dintre catene). Scheletul fiecărei catene (legături fosfodiesterice, structura I) rămâne intact.');
hMC('denat',2,'Două fragmente de ADN au aceeași lungime. X conține 60% perechi C≡G, iar Y conține 30% perechi C≡G (restul A=T). Care se denaturează la temperatură mai mare și de ce?',
 'X, deoarece are mai multe legături de hidrogen de rupt (perechile C≡G au câte 3)',
 ['Y, deoarece perechile A=T sunt mai stabile decât perechile C≡G, având mai multe legături','la aceeași temperatură, deoarece cele două fragmente au aceeași lungime','nu se poate stabili fără a cunoaște secvența exactă a bazelor fiecărui fragment'],
 'C≡G are 3 legături de H, A=T are 2. La aceeași lungime, fragmentul bogat în C≡G are mai multe legături de rupt, deci cere o temperatură mai mare.');
hMC('denat',2,'În cursul încălzirii progresive a unui ADN, primele perechi de baze care se desfac sunt, în general:',
 'perechile A=T, cu 2 legături de hidrogen',
 ['perechile C≡G, cu 3 legături de hidrogen','perechile A=T, cu 3 legături de hidrogen','toate perechile deodată, indiferent de numărul legăturilor'],
 'Perechile A=T (2 legături de H) se desfac înaintea celor C≡G (3 legături de H).');
hMS('denat',2,'Despre rolul perechilor de baze în denaturarea termică sunt adevărate afirmațiile:',
 [['perechile A=T se desfac mai ușor decât perechile C≡G',1],['un fragment bogat în perechi C≡G se denaturează la o temperatură mai mare',1],['perechea C≡G are 3 legături de hidrogen',1],['perechea A=T are 3 legături de hidrogen',0],['un fragment bogat în perechi A=T este mai rezistent la încălzire decât unul bogat în C≡G',0],['la încălzire se rup mai întâi legăturile fosfodiesterice',0]],
 'A=T are 2 legături de H, C≡G are 3: A=T se desface mai ușor, deci un fragment bogat în C≡G rezistă la temperaturi mai mari. Legăturile fosfodiesterice nu se rup la denaturare.');
hMS('denat',3,'Despre renaturare sunt adevărate afirmațiile:',
 [['necesită o răcire lentă',1],['face să se refacă molecula bicatenară',1],['se bazează pe complementaritatea bazelor azotate',1],['presupune sinteza unor catene noi de ADN',0],['presupune refacerea legăturilor fosfodiesterice dintre catene',0],['se produce prin încălzirea soluției',0]],
 'Renaturarea (răcire lentă) = fiecare catenă își regăsește partenera complementară și se refac legăturile de H; nu se sintetizează nimic nou și nu apar legături fosfodiesterice între catene.');
hMC('denat',3,'O probă de ADN este încălzită până la denaturare și apoi răcită foarte lent; altă probă identică este răcită brusc. Care afirmație este corectă?',
 'proba răcită lent regăsește în mare parte molecule bicatenare; cea răcită brusc rămâne preponderent monocatenară',
 ['ambele probe redevin bicatenare în aceeași măsură, deoarece complementaritatea nu depinde de viteza de răcire','proba răcită brusc redevine bicatenară mai bine decât cea răcită lent, deoarece catenele se întâlnesc mai repede','în ambele probe se formează ARN, care înlocuiește catenele distruse prin încălzire'],
 'Renaturarea are nevoie de timp pentru ca bazele complementare să se regăsească; răcirea bruscă o împiedică.');
hMC('denat',3,'Un ADN denaturat este răcit lent și catenele complementare se regăsesc. Ce descrie corect procesul?',
 'se refac legăturile de hidrogen dintre bazele complementare; scheletul fosfodiesteric al catenelor nu s-a rupt',
 ['se refac legăturile fosfodiesterice dintre cele 2 catene, cu ajutorul ADN-polimerazei și al nucleotidelor libere','se sintetizează 2 catene noi, complementare cu cele denaturate, folosind nucleotide din soluție','catenele se transformă în ARN, care se unește cu ADN-ul prin legături de hidrogen'],
 'Renaturarea nu sintetizează nimic nou: catenele existente se potrivesc din nou prin complementaritate.');
hMC('denat',3,'De ce are nevoie renaturarea de o răcire lentă?',
 'pentru ca fiecare catenă să aibă timp să-și găsească partenera complementară și să-și refacă legăturile de H',
 ['pentru ca ADN-polimeraza să aibă timp să sintetizeze catene noi, complementare cu cele vechi','pentru ca legăturile fosfodiesterice dintre cele două catene să se refacă treptat','pentru ca temperatura ridicată să distrugă treptat catenele care nu se potrivesc între ele'],
 'La răcire bruscă catenele nu au timp să se potrivească și rămân monocatenare; la răcire lentă ele își regăsesc partenera și se reface molecula bicatenară.');
hMS('denat',3,'Care dintre următoarele se pot realiza, în cadrul cursului, prin simpla modificare a temperaturii unei soluții de ADN (fără enzime)?',
 [['denaturarea',1],['renaturarea (prin răcire lentă)',1],['menținerea celor 2 molecule monocatenare, prin răcire bruscă după denaturare',1],['replicarea',0],['transcripția',0],['formarea de legături fosfodiesterice noi',0]],
 'Denaturarea și renaturarea sunt procese fizice (t°C ↑ / răcire). Replicarea (ADN-polimeraza) și transcripția (ARN-polimeraza) necesită enzime și nucleotide libere.');
hMC('denat',4,'Se amestecă ADN monocatenar uman cu ADN monocatenar de la specia P (82% renaturare) și de la specia Q (31% renaturare). Concluzia corectă este:',
 'specia P este mai înrudită cu omul decât specia Q',
 ['specia Q este mai înrudită cu omul decât specia P','cele două specii sunt la fel de înrudite cu omul','procentul de renaturare nu are legătură cu înrudirea'],
 'Cu cât secvențele sunt mai asemănătoare, cu atât se renaturează (hibridizează) mai multe zone: înrudire evolutivă (filogenetică) mai mare.');
hMC('denat',4,'Ce reprezintă zonele care NU se renaturează într-un hibrid om–maimuță?',
 'porțiuni cu secvențe de baze necomplementare, diferite între cele două specii',
 ['porțiuni în care legăturile fosfodiesterice s-au rupt în timpul încălzirii','regiuni în care ADN-ul uman s-a transformat în ARN','porțiuni care nu au fost încălzite suficient pentru a se denatura'],
 'Catenele se potrivesc doar acolo unde bazele sunt complementare. Zonele care nu se potrivesc sunt cele în care secvențele diferă.');
hMS('denat',4,'Un cercetător amestecă ADN monocatenar uman, pe rând, cu ADN monocatenar de maimuță (75% renaturare) și cu ADN monocatenar de șoarece (~25% renaturare). Care afirmații sunt corecte?',
 [['Secvențele de baze ale omului seamănă mai mult cu cele ale maimuței decât cu cele ale șoarecelui',1],['Cu ADN-ul de maimuță se formează mai multe zone bicatenare decât cu ADN-ul de șoarece',1],['Zonele bicatenare apar numai acolo unde bazele celor două catene sunt complementare',1],['Procentul de renaturare arată câte legături fosfodiesterice s-au refăcut',0],['Rezultatul arată că șoarecele este mai înrudit cu omul decât maimuța',0]],
 'Procentul de renaturare măsoară cât din ADN s-a potrivit prin complementaritate (legături de H), deci cât de asemănătoare sunt secvențele. Mai mult ⇒ înrudire mai mare: om–maimuță (75%) > om–șoarece (~25%).');
hMC('denat',4,'ADN monocatenar uman este amestecat cu ADN monocatenar de la două specii: X (renaturare 90%) și Y (renaturare 20%). Care afirmație este cea mai probabilă?',
 'X este o specie foarte apropiată evolutiv de om, iar Y este o specie îndepărtată',
 ['Y este o specie foarte apropiată evolutiv de om, iar X este o specie îndepărtată','X și Y sunt la fel de înrudite cu omul, dar au genomuri de mărimi diferite','procentul de renaturare nu depinde de secvențele de baze, ci doar de temperatura de răcire'],
 'Procent mare de renaturare = secvențe foarte asemănătoare = înrudire evolutivă (filogenetică) mare.');
hMC('denat',4,'Pune în ordine etapele stabilirii înrudirii dintre două specii prin hibridizare: (A) se amestecă monocatenele de la cele două specii; (B) se denaturează ADN-ul fiecărei specii; (C) se răcește lent amestecul, iar catenele complementare se asociază; (D) se evaluează procentul de renaturare.',
 'B – A – C – D',['A – B – C – D','B – C – A – D','B – A – D – C'],
 'Mai întâi se obțin monocatenele (denaturare), apoi se amestecă, apoi răcirea lentă permite asocierea catenelor complementare, iar la final se evaluează procentul de renaturare.');
hMC('denat',4,'De ce se amestecă monocatene (și nu molecule bicatenare) de ADN de la cele două specii?',
 'pentru ca monocatenele celor două specii să se poată împerechea acolo unde secvențele lor sunt complementare',
 ['pentru ca monocatenele să fie mai ușor de sintetizat în laborator decât moleculele bicatenare','pentru că moleculele bicatenare nu conțin baze azotate care să se poată împerechea între ele','pentru ca amestecul să conțină mai puține legături fosfodiesterice de rupt la încălzire'],
 'Hibrizii om–maimuță sau om–șoarece se formează între monocatene: acolo unde bazele sunt complementare, catenele de la cele două specii se „lipesc”; în rest rămân bucle.');
hMC('denat',4,'Se amestecă, fără încălzire prealabilă, ADN bicatenar uman cu ADN bicatenar de șoarece. Se vor forma hibrizi om–șoarece?',
 'nu: catenele sunt deja împerecheate; hibrizii se pot forma doar după denaturare, când apar monocatene',
 ['da: catenele celor două specii se schimbă între ele spontan, în orice moleculă bicatenară aflată în soluție','da, dar numai prin legături fosfodiesterice stabilite între catenele celor două specii','nu: ADN-ul de la specii diferite nu se poate împerechea niciodată, indiferent de condiții'],
 'Hibridizarea cere monocatene: mai întâi se separă catenele (denaturare), apoi se amestecă și se răcesc lent.');
hMS('denat',4,'Care sunt aplicații ale denaturării și renaturării (hibridizării) ADN?',
 [['Stabilirea relațiilor de înrudire evolutivă (filogenetică)',1],['Stabilirea paternității sau a maternității',1],['Sinteza proteinelor',0],['Dublarea ADN-ului în etapa S',0]],
 'Aplicațiile din materie: relații de înrudire și stabilirea paternității/maternității. Sinteza proteinelor și autocopierea sunt alte procese.');
hMC('denat',5,'Un test de paternitate arată că ADN-ul presupusului tată nu se potrivește cu al copilului în mai multe zone analizate. Concluzia corectă este:',
 'paternitatea este exclusă: bărbatul nu este tatăl biologic',
 ['este tatăl, cu o probabilitate de 99,80%','ADN-ul s-a denaturat și testul nu poate fi interpretat','este mai degrabă tatăl, dar rezultatul nu e sigur'],
 'Tatăl biologic se potrivește în toate zonele analizate (probabilitate ≈ 99% sau mai mare). Nepotrivirile în mai multe zone exclud paternitatea.');
hMS('denat',5,'Despre stabilirea paternității/maternității prin compararea ADN sunt adevărate afirmațiile:',
 [['se compară ADN-ul copilului cu cel al presupusului părinte',1],['ADN-ul copilului se potrivește mult mai bine cu al părintelui biologic decât cu al altor persoane',1],['la un test de paternitate probabilitatea poate ajunge la ≈ 99% sau mai mult',1],['se bazează pe compararea grupelor sanguine ale persoanelor',0],['se bazează pe numărul de legături fosfodiesterice din ADN',0],['se poate aplica numai pentru paternitate, nu și pentru maternitate',0]],
 'Principiul este același ca la înrudirea dintre specii: cu cât ADN-urile se potrivesc mai bine, cu atât relația este mai apropiată. Se aplică atât paternității, cât și maternității.');
hMC('denat',5,'Care este principiul comun al stabilirii înrudirii dintre specii și al testului de paternitate?',
 'cu cât secvențele ADN sunt mai asemănătoare, cu atât se potrivesc (renaturează) mai multe zone',
 ['ambele se bazează pe ruperea legăturilor fosfodiesterice din ADN, urmată de refacerea lor','ambele măsoară cantitatea de ARN din celulele persoanelor sau speciilor comparate','ambele folosesc replicarea ADN în etapa S pentru a compara moleculele'],
 'Ambele aplicații folosesc denaturarea/renaturarea: gradul de potrivire (hibridizare) al catenelor arată cât de asemănătoare sunt secvențele.');
hMC('denat',3,'Care afirmație despre denaturare și renaturare este corectă?',
 'ambele procese privesc doar legăturile de hidrogen dintre catene: denaturarea le rupe, renaturarea le reface',
 ['renaturarea reface legăturile fosfodiesterice dintre cele 2 catene, pe care denaturarea le rupsese','denaturarea rupe legăturile fosfodiesterice dintre nucleotide, iar renaturarea le reface','denaturarea are loc doar la molecule monocatenare, iar renaturarea doar la cele bicatenare'],
 'Scheletul fiecărei catene (legături fosfodiesterice) rămâne intact; se modifică doar legăturile de H dintre catene.');
