'use strict';
/* ===== Date: întrebări, flashcard-uri, perechi ===== */
const TOPICS = {
  intro:'Introducere', griffith:'Griffith & Avery', acizi:'Acizi nucleici', catena:'Catena polinucleotidică',
  compl:'Complementaritate', adn:'Structura ADN', denat:'Denaturare / renaturare', repl:'Replicare',
  transc:'Transcripție', arn:'Tipuri de ARN'
};
let _qid = 0;
const QUESTIONS = [];
// Q(topic, întrebare, răspuns corect, [greșite], explicație)
const Q  = (topic,q,ok,wrong,why) => QUESTIONS.push({id:++_qid,topic,q,ok,wrong,why});
// TF(topic, afirmație, adevărată?, explicație)
const TF = (topic,q,truth,why) => QUESTIONS.push({id:++_qid,topic,q,tf:true,truth,why});

/* --- intro --- */
Q('intro',"Ce studiază genetica?","Ereditatea și variabilitatea",["Doar bolile ereditare","Structura celulei","Evoluția speciilor"],"Genetica studiază ereditatea și variabilitatea.");
Q('intro',"Ereditatea constă în…","transmiterea caracterelor ereditare de la părinți la urmași",["diferențele dintre indivizii unei specii","modificarea ADN-ului prin căldură","apariția virusurilor noi"],"Ereditatea = transmiterea caracterelor (anatomice, morfologice, fiziologice, biochimice) de la părinți la urmași.");
Q('intro',"Variabilitatea constă în…","capacitatea indivizilor unei specii de a se deosebi între ei",["capacitatea de a copia ADN-ul","transmiterea caracterelor la urmași","asemănarea perfectă dintre frați"],"Variabilitate = diferențe între indivizi; nu există doi indivizi identici.");
TF('intro',"Într-o specie pot exista doi indivizi perfect identici (din cauza ereditării).",false,"Fals: variabilitatea face ca să nu existe doi indivizi identici.");
Q('intro',"Care NU este un tip de caracter ereditar?","Caractere economice",["Caractere anatomice","Caractere fiziologice","Caractere biochimice"],"Tipurile sunt: anatomice, morfologice, fiziologice, biochimice.");

/* --- griffith --- */
Q('griffith',"Cine a făcut în 1928 experimentul cu pneumococi și șoareci?","Griffith",["Avery","Watson","Mendel"],"Bacteriologul Griffith, în 1928.");
Q('griffith',"Pneumococii RII sunt…","nevirulenți, cu colonii rugoase (aspre)",["virulenți, cu colonii netede","virulenți, cu colonii rugoase","nevirulenți, cu colonii netede"],"RII = nevirulenți → colonii rugoase. (R = Rugos, Rămâne în viață)");
Q('griffith',"Pneumococii SIII sunt…","virulenți, cu colonii netede",["nevirulenți, cu colonii netede","virulenți, cu colonii rugoase","nevirulenți, cu colonii rugoase"],"SIII = virulenți → colonii netede. (S = Smooth/neted, Sfârșit)");
Q('griffith',"Ce se întâmplă cu un șoarece injectat cu SIII vii?","Moare",["Trăiește","Trăiește, dar se îmbolnăvește ușor","Devine imun"],"SIII sunt virulenți → șoarecele face pneumonie și moare.");
Q('griffith',"Ce se întâmplă cu un șoarece injectat cu SIII omorâți prin căldură?","Trăiește",["Moare","Moare după 3 zile","Se transformă în pneumococ"],"Bacteriile moarte nu mai pot îmbolnăvi.");
Q('griffith',"Șoarece + RII vii + SIII omorâți prin căldură → ?","Moare",["Trăiește","Trăiește, dar cu colonii rugoase","Nu se știe"],"Surpriza experimentului: ADN-ul de la SIII morți a transformat RII în virulenți.");
Q('griffith',"Cine a explicat în 1944 rezultatul experimentului lui Griffith?","Avery",["Griffith","Watson","Pasteur"],"Avery: la cadavrele omorâte prin căldură molecula de ADN a trecut la tipul RII.");
Q('griffith',"Fenomenul prin care ADN-ul trece de la SIII la RII se numește…","transformare genetică",["replicare","transcripție","denaturare"],"Transformare genetică.");
Q('griffith',"Ce moleculă a trecut de la bacteriile SIII moarte la RII?","ADN",["ARN","Proteine","Lipide"],"Molecula de ADN.");

/* --- acizi nucleici --- */
Q('acizi',"ADN este…","acid dezoxiribonucleic",["acid ribonucleic","acid dezoxiribozic","aminoacid nucleic"],"ADN = acid dezoxiribonucleic; ARN = acid ribonucleic.");
Q('acizi',"Acizii nucleici se formează prin polimerizarea…","nucleotidelor",["aminoacizilor","glucozei","bazelor azotate libere"],"Sunt substanțe polinucleotidice.");
Q('acizi',"Care este cel mai mare polimer natural din lumea vie?","Molecula de ADN",["Molecula de ARN","Hemoglobina","Celuloza"],"Molecula de ADN.");
Q('acizi',"O nucleotidă este formată din…","bază azotată + pentoză + radical fosfat",["bază azotată + aminoacid + fosfat","pentoză + aminoacid + lipid","două baze azotate + fosfat"],"Bază azotată, zahăr (pentoză), radical fosfat (P).");
Q('acizi',"Care sunt bazele purinice?","Adenina și guanina",["Citozina și timina","Timina și uracilul","Citozina și uracilul"],"Purinice: A, G. (Ag = argint pur → PURinice)");
Q('acizi',"Care sunt bazele pirimidinice?","Citozina, timina, uracilul",["Adenina, guanina","Adenina, timina","Guanina, citozina"],"Pirimidinice: C, T, U. (CUT)");
Q('acizi',"Baza azotată prezentă DOAR în ADN este…","timina",["uracilul","citozina","adenina"],"Timina (T) — doar în ADN.");
Q('acizi',"Baza azotată prezentă DOAR în ARN este…","uracilul",["timina","guanina","citozina"],"Uracilul (U) — doar în ARN.");
Q('acizi',"Pentoza din ADN este…","dezoxiriboza",["riboza","glucoza","fructoza"],"Dezoxiriboza (D) — doar în ADN.");
Q('acizi',"Pentoza din ARN este…","riboza",["dezoxiriboza","glicerolul","galactoza"],"Riboza (R) — doar în ARN.");
Q('acizi',"Care bază azotată se găsește și în ADN, și în ARN?","Citozina",["Timina","Uracilul","Nicio bază"],"A, G, C sunt în ambele; T doar în ADN; U doar în ARN.");
Q('acizi',"Care dintre următoarele este o nucleotidă de ARN (cod bază-pentoză-fosfat)?","URP",["TDP","UDP","TRP"],"URP = uracil + riboză + fosfat. TDP = timină + dezoxiriboză + fosfat (ADN).");
Q('acizi',"Care dintre următoarele este o nucleotidă de ADN?","CDP",["URP","ARP","GRP"],"CDP = citozină + dezoxiriboză + fosfat.");

/* --- catena --- */
Q('catena',"Nucleotidele dintr-o catenă se leagă prin legături…","fosfodiesterice",["de hidrogen","peptidice","ionice"],"Legături fosfodiesterice, prin intermediul radicalului fosfat.");
Q('catena',"Legătura fosfodiesterică unește…","C5′ al unei pentoze cu C3′ al pentozei vecine, prin fosfat",["C1′ cu C1′ prin baza azotată","două baze azotate prin hidrogen","C3′ cu C3′ direct"],"Fosfatul face puntea între C5′ al unei pentoze și C3′ al celei vecine.");
Q('catena',"Baza azotată se leagă de pentoză la carbonul…","C1′",["C3′","C5′","C4′"],"Baza este la C1′; fosfatul la C5′.");
Q('catena',"Radicalul fosfat al unei nucleotide se leagă de carbonul…","C5′",["C1′","C2′","C4′"],"Fosfatul se leagă la C5′.");
TF('catena',"În mod obișnuit ADN este bicatenar, iar ARN monocatenar.",true,"ADN – bicatenar (de obicei); ARN – monocatenar (de obicei).");

/* --- complementaritate --- */
Q('compl',"Adenina se împerechează în ADN cu…","timina",["citozina","guanina","uracilul"],"A = T (2 legături de H).");
Q('compl',"Într-o regiune bicatenară de ARN, adenina se împerechează cu…","uracilul",["timina","guanina","citozina"],"A = U în ARN.");
Q('compl',"Câte legături de hidrogen se formează între citozină și guanină?","3",["2","1","4"],"C ≡ G: trei legături.");
Q('compl',"Câte legături de hidrogen se formează între adenină și timină?","2",["3","1","4"],"A = T: două legături.");
TF('compl',"Într-o moleculă de ADN, o bază purinică se leagă întotdeauna de una pirimidinică.",true,"Purină ↔ pirimidină: A–T și G–C.");
Q('compl',"Catena complementară pentru ATCG (în ADN) este…","TAGC",["UAGC","ATCG","CGAT"],"A→T, T→A, C→G, G→C.");
Q('compl',"Catena complementară pentru AUGC într-o regiune bicatenară de ARN este…","UACG",["TACG","AUGC","UAGC"],"A→U, U→A, G→C, C→G.");
Q('compl',"Într-un ADN bicatenar 20% din baze sunt adenină. Cât % este timină?","20%",["30%","40%","80%"],"A = T → 20%.");
Q('compl',"Într-un ADN bicatenar 20% din baze sunt adenină. Cât % este guanină?","30%",["20%","40%","60%"],"A + T = 40% → rămân 60% pentru G + C → G = 30%.");
Q('compl',"Un fragment de ADN are 3 perechi A=T și 2 perechi C≡G. Câte legături de H are?","12",["10","13","9"],"3×2 + 2×3 = 12.");

/* --- structura ADN --- */
Q('adn',"Cele două catene ale ADN sunt…","răsucite helicoidal în jurul unui ax",["drepte și paralele","legate prin legături fosfodiesterice","unite doar la capete"],"ADN = moleculă bicatenară, răsucită helicoidal în jurul unui ax.");
Q('adn',"Ce leagă cele 2 catene ale ADN între ele?","Legături de hidrogen",["Legături fosfodiesterice","Legături peptidice","Legături ionice"],"Structura II = 2 catene unite prin legături de H.");
Q('adn',"Structura I a ADN este dată de…","o catenă cu nucleotide legate fosfodiesteric",["cele 2 catene legate prin H","ribozomi","pliurile ARN"],"Structura I (primară) = monocatenară; structura II (secundară) = bicatenară.");
Q('adn',"Din punct de vedere al sensului de ansamblare a nucleotidelor, cele două catene ale ADN sunt…","antiparalele",["paralele","identice","necomplementare"],"Pe o catenă sensul de ansamblare e C3′→C5′, pe cealaltă C5′→C3′.");
Q('adn',"Nucleotidele de pe cele 2 catene se leagă pe principiul…","complementarității bazelor azotate",["mărimii nucleotidelor","încărcării electrice a fosfatului","numărului de carboni"],"A=T, C≡G.");

/* --- denaturare --- */
Q('denat',"Denaturarea ADN constă în…","separarea celor 2 catene (ruperea legăturilor de H) la încălzire",["ruperea legăturilor fosfodiesterice","dublarea moleculei","transformarea ADN în ARN"],"Se obțin 2 molecule monocatenare.");
Q('denat',"Denaturarea ADN se datorează structurii…","bicatenare",["monocatenare","triplu helicoidale","circulare"],"Doar o moleculă bicatenară (cu legături de H) se poate denatura.");
Q('denat',"Ce se obține prin denaturarea unei molecule de ADN?","2 molecule monocatenare",["2 molecule bicatenare","nucleotide libere","o moleculă de ARN"],"Din 1 moleculă bicatenară → 2 monocatenare.");
Q('denat',"Care este rezultatul răcirii LENTE a ADN-ului denaturat?","Renaturare (refacerea moleculei bicatenare)",["Rămâne monocatenar","Se distruge ADN-ul","Se transformă în ARN"],"Răcire lentă → renaturare; răcire bruscă → catenele rămân separate.");
Q('denat',"Amestecând ADN monocatenar de om cu ADN de maimuță se obține 75% hibridizare, iar cu șoarece ~25%. Concluzia?","Omul e mai înrudit cu maimuța decât cu șoarecele",["Omul e mai înrudit cu șoarecele","Nu există nicio legătură","Maimuța e înrudită cu șoarecele"],"Cu cât renaturarea/hibridizarea e mai mare, cu atât înrudirea (filogenetică) e mai mare.");
Q('denat',"Care este o aplicație a hibridizării ADN?","Stabilirea relațiilor filogenetice și a paternității/maternității",["Sinteza proteinelor","Împărțirea celulei","Formarea ribozomilor"],"Relații de înrudire + paternitate/maternitate.");

/* --- replicare --- */
Q('repl',"Replicarea ADN se mai numește…","autocopiere",["transcripție","traducere","transformare"],"Replicare = autocopiere.");
Q('repl',"În ce etapă a ciclului celular se realizează replicarea?","Etapa S (sinteză) din interfază",["Diviziunea celulară","Etapa G2 din interfază","Profază"],"Se realizează în interfază, în etapa S (sinteză).");
Q('repl',"Replicarea se desfășoară după modelul…","semiconservativ",["conservativ","dispersiv","întâmplător"],"Semiconservativ.");
Q('repl',"Ce enzimă intervine în replicare?","ADN-polimeraza",["ARN-polimeraza","Amilaza","Ribozomul"],"ADN-polimeraza.");
Q('repl',"Ce face ADN-polimeraza la începutul replicării?","Taie pas cu pas legăturile de hidrogen dintre cele 2 catene",["Taie legăturile fosfodiesterice","Sintetizează ARN","Unește cele 2 molecule"],"Rupe legăturile de H; molecula ia forma literei λ (Y).");
Q('repl',"Ce legături se formează între catena veche și catena nouă?","De hidrogen",["Fosfodiesterice","Peptidice","Covalente simple C–C"],"H între veche și nouă; fosfodiesterice în catena nouă, între nucleotide.");
Q('repl',"Ce legături se formează între nucleotidele catenei noi?","Fosfodiesterice",["De hidrogen","Ionice","Nu se formează"],"Fosfodiesterice.");
Q('repl',"La final, replicarea produce…","2 molecule identice, fiecare cu o catenă veche și una nouă",["2 molecule cu catene doar noi","1 moleculă dublă","1 moleculă veche + 1 moleculă doar nouă"],"De aceea se numește semiconservativ.");
Q('repl',"De ce modelul se numește „semiconservativ”?","Fiecare moleculă-fiică păstrează o catenă veche (matriță)",["Se păstrează jumătate din celulă","Se păstrează doar jumătate din nucleotide","Jumătate din molecule dispar"],"Jumătate din fiecare moleculă nouă este veche.");
Q('repl',"Ce formă are molecula de ADN în plină replicare?","Litera λ (Y)",["Inel închis","Cerc","Spirală dublă nedesfăcută"],"Cele două catene desfăcute formează un „Y”.");
Q('repl',"Ce explică procesul de replicare?","Menținerea aceleiași informații ereditare în toate celulele unui organism",["Apariția mutațiilor","Sinteza proteinelor","Moartea celulelor"],"Fiecare celulă primește ADN identic.");

/* --- transcripție --- */
Q('transc',"Sinteza ARN se realizează prin…","transcripție",["replicare","traducere","denaturare"],"Transcripție (copiere).");
Q('transc',"Ce enzimă intervine în transcripție?","ARN-polimeraza",["ADN-polimeraza","Lipaza","Catalaza"],"ARN-polimeraza taie legăturile de H din molecula de ADN.");
Q('transc',"În transcripție se copiază…","o catenă din molecula de ADN",["ambele catene","o proteină","un ribozom"],"Nucleotidele libere se atașează pe o singură catenă de ADN.");
Q('transc',"Ce structură intermediară se formează în transcripție?","Hibrid molecular ADN–ARN",["Hibrid ARN–proteină","ADN triplu","ARN bicatenar"],"Hibridul ADN–ARN se desface ulterior: se eliberează ARN, ADN se reface.");
Q('transc',"Ce se întâmplă cu ADN după transcripție?","Molecula de ADN se reface",["Se distruge","Se transformă în ARN","Se dublează"],"Hibridul se desface, ARN se eliberează, ADN se reface.");
Q('transc',"Dacă catena sens (matrița) este TACGGA, ARN-ul transcris este…","AUGCCU",["ATGCCT","UACGGU","AUGCCT"],"T→A, A→U, C→G, G→C. Atenție: în ARN nu există T!");
Q('transc',"În ARN, timina din ADN este înlocuită de…","uracil",["adenină","citozină","guanină"],"U în loc de T.");
TF('transc',"ARN-ul rezultat din transcripție este, de obicei, monocatenar.",true,"ARN este în mod obișnuit monocatenar.");

/* --- ARN --- */
Q('arn',"Cele două mari tipuri de ARN după locul unde se găsesc sunt…","viral și celular",["mesager și transfer","ribozomal și solubil","nuclear și mitocondrial"],"Tipuri de ARN: viral și celular.");
Q('arn',"ARN viral reprezintă…","materialul genetic al unor virusuri",["un tip de ribozom","un tip de proteină","materialul genetic al bacteriilor"],"Ex.: bacteriofagi, VMT (virusul mozaicului tutunului), virusul gripal.");
Q('arn',"Care este un exemplu de virus cu ARN ca material genetic?","Virusul mozaicului tutunului (VMT)",["Bacteria E. coli","Pneumococul SIII","Drojdia de bere"],"VMT, virusul gripal, unii bacteriofagi.");
Q('arn',"ARN mesager (ARNm) are rolul de a…","copia informația genetică din ADN pentru sinteza proteică",["transporta aminoacizi","forma ribozomii","replica ADN"],"ARNm: monocatenar, lungime variabilă.");
Q('arn',"ARN de transfer (ARNt) are rolul de a…","transfera aminoacizi în citoplasmă la locul sintezei proteice",["copia informația genetică","forma ribozomii","rupe legăturile de H"],"ARNt = ARN solubil.");
Q('arn',"Ce aspect are ARNt?","De frunză de trifoi (monocatenar cu regiuni bicatenare)",["Dublu helix perfect","Bastonaș drept fără pliuri","Inel"],"Monocatenar, dar cu regiuni bicatenare → „frunză de trifoi”.");
Q('arn',"Anticodonul se găsește în…","ARNt",["ARNm","ADN","ribozom"],"Anticodonul din ARNt se atașează de codonul corespunzător din ARNm.");
Q('arn',"Anticodonul ARNt pentru codonul AUC din ARNm este…","UAG",["TAG","AUC","CUA"],"A–U, U–A, C–G → UAG. (Nu TAG: în ARN nu există T.)");
Q('arn',"ARN ribozomal (ARNr) intră în alcătuirea…","ribozomilor",["nucleului","mitocondriilor","membranei celulare"],"ARNr prezintă regiuni bicatenare și intră în alcătuirea ribozomilor.");
Q('arn',"Ribozomul este format din…","o subunitate mică și o subunitate mare",["o singură catenă de ARN","două catene de ADN","trei subunități egale"],"Subunitate mică + subunitate mare (150–250 Å); ARNm se atașează de ea.");
Q('arn',"ARN solubil este un alt nume pentru…","ARN de transfer",["ARN mesager","ARN ribozomal","ARN viral"],"ARN de transfer / solubil = ARNt.");
TF('arn',"ARNm este bicatenar și are lungime fixă.",false,"ARNm este monocatenar și are lungime variabilă.");

/* --- întrebări adăugate --- */
Q('intro',"Care dintre următoarele este un caracter biochimic?","grupa sanguină",["culoarea blănii","numărul de membre","ritmul cardiac"],"Grupa sanguină ține de substanțele din organism (biochimic). Culoarea = morfologic, membrele = anatomic, ritmul cardiac = fiziologic.");
Q('acizi',"Inelul pirimidinic conține…","4 atomi de carbon și 2 de azot",["2 atomi de carbon și 4 de azot","5 atomi de carbon și 1 de azot","6 atomi de carbon"],"Inelul pirimidinic are 6 atomi: 4 C și 2 N.");
Q('acizi',"Bazele purinice (A, G) au în moleculă…","două inele unite",["un singur inel","trei inele","niciun inel"],"Purinice = 2 inele; pirimidinice (C, T, U) = un singur inel.");
Q('acizi',"Nucleotida URP conține…","uracil, riboză și fosfat",["timină, riboză și fosfat","uracil, dezoxiriboză și fosfat","adenină, riboză și fosfat"],"U = uracil, R = riboză, P = fosfat → nucleotidă de ARN.");
TF('acizi',"Radicalul fosfat este prezent doar în nucleotidele de ADN.",false,"Fosfatul face parte din nucleotidele ambelor acizi nucleici.");
Q('catena',"Câte legături fosfodiesterice are o catenă formată din 6 nucleotide?","5",["6","7","4"],"Între 6 nucleotide consecutive se formează 5 legături.");
Q('catena',"Capătul 5′ al unei catene de acid nucleic are…","un radical fosfat liber",["o grupare OH liberă","o bază azotată liberă","o legătură de hidrogen liberă"],"5′ = fosfat liber (la C5′); 3′ = OH liber (la C3′).");
Q('compl',"Complementara secvenței TACG (în ADN) este…","ATGC",["TACG","UACG","CGTA"],"T→A, A→T, C→G, G→C.");
TF('compl',"Perechea C≡G se desface mai ușor decât A=T.",false,"C≡G are 3 legături de H (mai greu de desfăcut), A=T are doar 2.");
Q('adn',"Pe o catenă a ADN sensul de ansamblare este C5′→C3′. Pe cealaltă catenă este…","C3′→C5′",["tot C5′→C3′","C1′→C5′","nu există un sens"],"Catenele sunt antiparalele: au sensuri opuse.");
TF('adn',"Structura II a ADN este dată de legăturile fosfodiesterice dintre nucleotide.",false,"Legăturile fosfodiesterice dau structura I (în interiorul unei catene); structura II e dată de legăturile de H dintre catene.");
Q('denat',"Răcirea BRUSCĂ a unui ADN denaturat duce la…","rămânerea celor 2 molecule monocatenare",["renaturare completă","distrugerea legăturilor fosfodiesterice","formarea de ARN"],"Răcire lentă → renaturare; răcire bruscă → catenele rămân separate.");
Q('denat',"Ce legături se rup la denaturarea ADN?","legăturile de hidrogen dintre cele 2 catene",["legăturile fosfodiesterice dintre nucleotide","legăturile dintre bază și zahăr","legăturile peptidice"],"Se rup legăturile de H; scheletul fosfodiesteric al fiecărei catene rămâne întreg.");
TF('denat',"Cu cât procentul de renaturare dintre ADN-ul a două specii este mai mare, cu atât speciile sunt mai înrudite.",true,"Aplicație: relații de înrudire (filogenetică). Om–maimuță 75% > om–șoarece ~25%.");
Q('repl',"Ciclul celular este alcătuit din…","interfază și diviziune celulară",["profază și metafază","replicare și transcripție","G1 și G2"],"Ciclul celular = interfază + diviziune celulară (replicarea are loc în etapa S a interfazei).");
Q('repl',"Rolul catenei vechi în fiecare moleculă-fiică este de…","matriță (model)",["enzimă","nucleotidă liberă","ribozom"],"Catena veche a avut rol de model sau de matriță pentru sinteza celei noi.");
Q('transc',"Catena de ADN din care se copiază ARN-ul se numește…","catena sens",["catena antiparalelă","catena fiică","catena liberă"],"Catena copiată se numește „catena sens” (s.n. = se numește).");
Q('transc',"După modelul transcripției se sintetizează…","toate tipurile de ARN din celulă (ARNm, ARNt, ARNr)",["doar ARNm","doar proteine","doar ADN"],"ARNm, ARNt, ARNr — toate ARN-urile din celulă se sintetizează după modelul transcripției (ARN-ul viral al unor virusuri provine din alt proces).");
TF('transc',"În transcripție se copiază ambele catene ale ADN.",false,"Doar o singură catenă din molecula de ADN.");
Q('transc',"Ce rămâne după transcripție, în afară de moleculă de ARN?","molecula de ADN refăcută",["două molecule noi de ADN","ADN fragmentat","un hibrid ADN–ARN"],"Hibridul se desface, ARN se eliberează, iar molecula de ADN se reface.");
Q('arn',"Care ARN intră în alcătuirea ribozomilor?","ARNr",["ARNm","ARNt","ARN viral"],"ARN ribozomal.");
Q('arn',"Din câte baze este format un anticodon?","3",["2","4","1"],"Anticodonul și codonul sunt tripleți de baze.");
TF('arn',"ARNt este bicatenar pe toată lungimea lui.",false,"ARNt este monocatenar cu regiuni bicatenare (frunză de trifoi).");

/* --- întrebări adăugate (2) --- */
Q('griffith',"Ce boală provoacă pneumococii virulenți (SIII) șoarecilor?","pneumonie",["tuberculoză","gripă","diabet"],"Pneumococii provoacă pneumonie: șoarecii injectați cu SIII fac pneumonie și mor.");
Q('griffith',"În explicația lui Avery, „ceva” care a trecut de la cadavrele SIII la tipul RII este…","ADN-ul",["o proteină","ARN-ul","un lipid"],"De la cadavrele SIII a trecut „ceva” (ADN) la tipul RII ⇒ transformare genetică.");
Q('adn',"Structura primară a ADN este dată de…","o singură catenă, cu nucleotide legate prin legături fosfodiesterice",["cele 2 catene unite prin legături de H","răsucirea helicoidală în jurul unui ax","complementaritatea bazelor"],"Structura primară (= structura I) = structura monocatenară.");
Q('adn',"Structura secundară a ADN este dată de…","cele 2 catene între care se stabilesc legături de hidrogen",["o singură catenă de nucleotide","legăturile fosfodiesterice","legăturile peptidice"],"Structura secundară (= structura II) = cele 2 catene unite prin legături de H.");
Q('compl',"O moleculă de ADN conține 1800 de nucleotide, dintre care 15% adenină. Câte nucleotide de citozină conține?","630",["270","315","900"],"A = T = 15% ⇒ G + C = 70% ⇒ C = 35% ⇒ 35% din 1800 = 630.");
Q('compl',"Aceeași moleculă (1800 de nucleotide, 15% A): câte perechi A=T („leg. =”) are?","270",["540","630","1170"],"A = 15% din 1800 = 270 ⇒ 270 perechi A=T.");
Q('compl',"Aceeași moleculă: câte perechi C≡G („leg. ≡”) are?","630",["270","1260","315"],"C = G = 630 ⇒ 630 perechi C≡G.");
Q('compl',"Aceeași moleculă: câte legături de hidrogen sunt în total?","2430",["1890","540","1800"],"270·2 + 630·3 = 540 + 1890 = 2430.");
TF('compl',"Într-un ADN bicatenar cu 15% adenină, procentul de guanină este 35%.",true,"A + T = 30% ⇒ G + C = 70% ⇒ G = C = 35%.");
Q('denat',"Ce se poate stabili comparând procentul de renaturare dintre ADN-ul a două specii?","relații de înrudire evolutivă (filogenetică)",["vârsta speciilor","numărul de cromozomi","dieta speciilor"],"În funcție de procentul de renaturare: relații de înrudire evolutivă (filogenetică). Om–maimuță 75%, om–șoarece ~25%.");
Q('transc',"Care este „catena liberă” care apare în timpul transcripției?","catena de ADN care nu a fost copiată",["o catenă nouă de ARN","o catenă de proteină","hibridul ADN–ARN"],"Intermediar: hibrid ADN–ARN + o catenă liberă de ADN; apoi ARN se eliberează și ADN se reface.");
Q('arn',"1 Å (angstrom) este egal cu…","10⁻¹⁰ m",["10⁻⁶ m","10⁻⁹ m","10⁻³ m"],"1 Å = 10⁻¹⁰ m; ribozomul are 150–250 Å (15–25 nm).");
Q('arn',"ARN ribozomal (ARNr)…","intră în alcătuirea ribozomilor",["transportă aminoacizii","copiază informația genetică din ADN","este materialul genetic al virusurilor"],"ARNr: regiuni bicatenare; intră în alcătuirea ribozomilor; rol în sinteza ribozomilor.");

/* ===== Flashcard-uri ===== */
const CARDS = [
 ["Genetica","Studiază ereditatea și variabilitatea.","intro"],
 ["Ereditatea","Transmiterea caracterelor (anatomice, morfologice, fiziologice, biochimice) de la părinți la urmași.","intro"],
 ["Variabilitatea","Capacitatea indivizilor unei specii de a se deosebi între ei (nu există 2 indivizi identici).","intro"],
 ["Pneumococi RII","Nevirulenți → colonii rugoase (aspre).","griffith"],
 ["Pneumococi SIII","Virulenți → colonii netede.","griffith"],
 ["Experimentul lui Griffith (1928)","Șoarece + RII → trăiește; + SIII → face pneumonie și moare; + SIII omorâți prin căldură → trăiește; + RII + SIII omorâți → MOARE.","griffith"],
 ["Avery (1944)","A explicat experimentul: molecula de ADN a trecut de la SIII (omorâți) la RII → transformare genetică.","griffith"],
 ["Transformare genetică","Trecerea ADN de la un tip de bacterie la altul, ceea ce schimbă caracterele (RII devine virulent).","griffith"],
 ["ADN","Acid dezoxiribonucleic. Polinucleotidă, de obicei bicatenară.","acizi"],
 ["ARN","Acid ribonucleic. Polinucleotidă, de obicei monocatenară.","acizi"],
 ["Cel mai mare polimer natural din lumea vie","Molecula de ADN.","acizi"],
 ["Nucleotida","Bază azotată + pentoză (zahăr) + radical fosfat (P).","acizi"],
 ["Baze purinice","Adenina (A) și guanina (G). Mnemonic: Ag = argint PUR.","acizi"],
 ["Baze pirimidinice","Citozina (C), timina (T), uracilul (U). Mnemonic: CUT.","acizi"],
 ["Bazele din ADN","A, G, C, T","acizi"],
 ["Bazele din ARN","A, G, C, U","acizi"],
 ["Pentoza din ADN","Dezoxiriboza (D).","acizi"],
 ["Pentoza din ARN","Riboza (R).","acizi"],
 ["Nucleotide de ADN","ADP, GDP, CDP, TDP (bază–dezoxiriboză–fosfat).","acizi"],
 ["Nucleotide de ARN","ARP, URP, CRP, GRP (bază–riboză–fosfat).","acizi"],
 ["Legătura fosfodiesterică","Leagă nucleotidele într-o catenă: între C5′ al unei pentoze și C3′ al pentozei vecine, prin radicalul fosfat.","catena"],
 ["Unde se leagă baza azotată?","La C1′ al pentozei.","catena"],
 ["Complementaritate în ADN","A = T (2 legături de H); C ≡ G (3 legături de H).","compl"],
 ["Complementaritate în ARN (regiuni bicatenare)","A = U; C ≡ G.","compl"],
 ["Regula purină – pirimidină","O bază purinică se leagă mereu de una pirimidinică.","compl"],
 ["Structura I a ADN","O catenă: nucleotide legate prin legături fosfodiesterice.","adn"],
 ["Structura II a ADN","2 catene legate prin legături de H, răsucite helicoidal în jurul unui ax.","adn"],
 ["Catene antiparalele","Pe una sensul e C3′→C5′, pe cealaltă C5′→C3′.","adn"],
 ["Denaturarea ADN","Separarea celor 2 catene (încălzire) → 2 molecule monocatenare. Se datorează structurii bicatenare.","denat"],
 ["Renaturarea ADN","Refacerea moleculei bicatenare, prin răcire lentă.","denat"],
 ["Hibridizare om–maimuță / om–șoarece","75% vs 25% → omul e mai înrudit cu maimuța (relații filogenetice).","denat"],
 ["Aplicații ale denaturării/renaturării","Relații de înrudire (filogenie); stabilirea paternității/maternității.","denat"],
 ["Replicarea","= autocopierea ADN. Singura moleculă care se autocopiază. În interfază, etapa S (sinteză).","repl"],
 ["Modelul semiconservativ","Fiecare moleculă-fiică = 1 catenă veche (matriță) + 1 catenă nouă.","repl"],
 ["ADN-polimeraza","Enzima replicării: taie pas cu pas legăturile de H dintre catene.","repl"],
 ["Forma ADN în replicare","Litera λ (Y).","repl"],
 ["Legături în replicare","H între catena veche și cea nouă; fosfodiesterice între nucleotidele catenei noi.","repl"],
 ["Importanța replicării","Menține aceeași informație ereditară în toate celulele unui organism.","repl"],
 ["Transcripția","Sinteza ARN (copiere) pe o catenă a ADN.","transc"],
 ["ARN-polimeraza","Enzima transcripției: taie legăturile de H din ADN.","transc"],
 ["Hibrid ADN–ARN","Intermediar la transcripție; apoi se desface: ARN eliberat, ADN refăcut.","transc"],
 ["Tipuri de ARN","Viral și celular (ARNm, ARNt, ARNr).","arn"],
 ["ARN viral","Material genetic la unele virusuri: bacteriofagi, VMT, virusul gripal.","arn"],
 ["ARNm","Monocatenar, lungime variabilă. Copiază informația genetică din ADN pentru sinteza proteică.","arn"],
 ["ARNt (solubil)","Monocatenar cu regiuni bicatenare (frunză de trifoi). Transferă aminoacizi la locul sintezei proteice.","arn"],
 ["Anticodon","Triplet de baze din ARNt, se atașează de codonul corespunzător din ARNm.","arn"],
 ["ARNr","Are regiuni bicatenare; intră în alcătuirea ribozomilor.","arn"],
 ["Ribozom","Subunitate mică + subunitate mare (150–250 Å). Locul sintezei proteice.","arn"],
 ["20% A într-un ADN bicatenar → ?","T = 20%, iar G = C = 30%.","compl"],
 ["Inelul pirimidinic","Inel de 6 atomi: 4 carbon + 2 azot.","acizi"],
 ["Capetele unei catene","5′ = fosfat liber · 3′ = OH liber. Catena se citește de la 5′ spre 3′.","catena"],
 ["Catena sens","Catena de ADN care se copiază în transcripție (s.n. = se numește „catena sens”).","transc"],
 ["Catenă liberă de ADN","În transcripție: catena de ADN necopiată, deplasată din hibrid (cealaltă jumătate a bulei).","transc"],
 ["Ciclul celular","Interfază + diviziune celulară. Replicarea are loc în etapa S a interfazei.","repl"],
 ["Tipurile de ARN din celulă","După modelul transcripției se sintetizează mai multe tipuri de ARN — toate cele din celulă: ARNm, ARNt, ARNr.","transc"],
 ["Viruși cu ARN","Bacteriofagi, VMT (virusul mozaicului tutunului), virusul gripal.","arn"],
 ["Structura primară a ADN","= structura I: o singură catenă, nucleotide legate prin legături fosfodiesterice.","adn"],
 ["Structura secundară a ADN","= structura II: cele 2 catene unite prin legături de H, răsucite helicoidal în jurul unui ax.","adn"],
 ["Problemă tip: N nucleotide, x% A","A = T = x%; G = C = (100 − 2x)/2 %. Perechi A=T („leg. =”) = x%·N; perechi C≡G („leg. ≡”) = G%·N. Legături H totale = 2·(A=T) + 3·(C≡G). Ex.: N = 1800, 15% A ⇒ C = 35% = 630; 270 „=” și 630 „≡”.","compl"],
 ["1 Å (angstrom)","10⁻¹⁰ m. Ribozom: 150–250 Å = 15–25 nm.","arn"],
 ["Pneumococii SIII și șoarecele","Șoarecele face pneumonie și moare.","griffith"],
 ["Avery: „ceva” (ADN)","De la cadavrele SIII a trecut „ceva” (ADN) la RII ⇒ transformare genetică.","griffith"],
 ["Filogenie și renaturare","Cu cât procentul de renaturare e mai mare, cu atât înrudirea evolutivă (filogenetică) e mai mare. Om–maimuță 75%, om–șoarece ~25%.","denat"],
];

/* ===== Perechi pentru jocul „Potrivește” ===== */
const PAIRS = [
 ["RII","nevirulent, colonii rugoase"],["SIII","virulent, colonii netede"],["Avery","transformare genetică (1944)"],
 ["Griffith","experimentul cu pneumococi (1928)"],["Purinice","A și G"],["Pirimidinice","C, T, U"],
 ["Dezoxiriboza","pentoza din ADN"],["Riboza","pentoza din ARN"],["Timina","bază doar în ADN"],["Uracilul","bază doar în ARN"],
 ["A = T","2 legături de H"],["C ≡ G","3 legături de H"],["Fosfodiesterică","leagă nucleotidele în aceeași catenă"],
 ["Legătură de H","leagă cele 2 catene ale ADN"],["Replicare","autocopiere, etapa S"],["Semiconservativ","1 catenă veche + 1 nouă"],
 ["ADN-polimeraza","enzima replicării"],["ARN-polimeraza","enzima transcripției"],["Transcripție","sinteza ARN"],
 ["ARNm","copiază informația din ADN"],["ARNt","frunză de trifoi, anticodon"],["ARNr","alcătuiește ribozomii"],
 ["Denaturare","separarea catenelor ADN"],["Renaturare","refacerea ADN bicatenar"],["Hibrid ADN–ARN","intermediar în transcripție"],
 ["Catena sens","catena de ADN copiată în ARN"],["Interfaza","include etapa S (replicare)"],["Anticodon","în ARNt; se potrivește cu codonul"],["Codon","în ARNm"],
 ["Capătul 5′","fosfat liber"],["Capătul 3′","OH liber"],["VMT","virusul mozaicului tutunului"],["Subunitate mică","se atașează ARNm"],
 ["Structura primară","o catenă, legături fosfodiesterice"],["Structura secundară","2 catene, legături de H"],["1 Å","10⁻¹⁰ m"],["Catena liberă","catena de ADN necopiată (transcripție)"],
];
