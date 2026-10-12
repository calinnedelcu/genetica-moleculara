'use strict';
/* ===== Acoperire: lista completă a punctelor din materie ===== */
/* [text, număr secțiune în lecție] */
const COVER=[
 {l:'intro',items:[
  ['Genetica studiază ereditatea și variabilitatea',1],
  ['Ereditatea = transmiterea caracterelor ereditare (anatomice, morfologice, fiziologice, biochimice) de la părinți la urmași',1],
  ['Variabilitatea = capacitatea indivizilor unei specii de a se deosebi între ei (nu există 2 indivizi identici)',1],
  ['Cele 4 tipuri de caractere ereditare: anatomice, morfologice, fiziologice, biochimice',2]]},
 {l:'griffith',items:[
  ['1928 – bacteriologul Griffith; pneumococi: nevirulenți – RII → colonii rugoase (aspre); virulenți – SIII → colonii netede',1],
  ['Experimentul: șoareci + RII → trăiesc · + SIII → pneumonie, mor · + SIII omorâți prin căldură → trăiesc · + RII + SIII omorâți prin căldură → mor',2],
  ['1944 – Avery: de la cadavrele omorâte prin căldură a trecut „ceva” (molecula de ADN) la tipul RII ⇒ transformare genetică',3]]},
 {l:'acizi',items:[
  ['ADN = acid dezoxiribonucleic · ARN = acid ribonucleic',1],
  ['Substanțe polinucleotidice, formate prin polimerizarea nucleotidelor',1],
  ['Molecula de ADN = cel mai mare polimer natural din lumea vie',1],
  ['Nucleotida = bază azotată + zahăr (pentoză) + radical fosfat (P)',2],
  ['Baze purinice: adenina (A), guanina (G) · pirimidinice: citozina (C), timina (T), uracilul (U)',3],
  ['A, G, C sunt în ADN și ARN; timina – doar în ADN; uracilul – doar în ARN',3],
  ['Inelul pirimidinic: 4 atomi de carbon + 2 atomi de azot',3],
  ['Pentoze: dezoxiriboza (D) – doar în ADN · riboza (R) – doar în ARN',4],
  ['Nucleotide de ADN: ADP, GDP, CDP, TDP · de ARN: ARP, URP, CRP, GRP (bază + pentoză + fosfat)',6]]},
 {l:'catena',items:[
  ['ADN – bicatenar (de obicei) · ARN – monocatenar (de obicei)',1],
  ['Pentoza: carbonii C1′–C5′; baza azotată se leagă la C1′, radicalul fosfat la C5′',2],
  ['Într-o catenă nucleotidele se leagă prin legături fosfodiesterice: între C5′ al unei pentoze și C3′ al pentozei următoare, prin radicalul fosfat',3],
  ['Capetele unei catene: 5′ (fosfat liber) și 3′ (OH liber)',3]]},
 {l:'compl',items:[
  ['În ADN, o bază purinică se leagă de una pirimidinică (și invers) prin legături de H: A=T, T=A · C≡G, G≡C',1],
  ['În ARN (regiuni bicatenare): A=U, U=A · C≡G, G≡C',1],
  ['A=T are 2 legături de H; C≡G are 3 legături de H',1],
  ['Într-un ADN bicatenar A = T și G = C (procente)',4],
  ['Problemă tip: N nucleotide și x% A ⇒ % C, numărul de legături „=” și „≡”',5]]},
 {l:'adn',items:[
  ['ADN = moleculă bicatenară; cele 2 catene sunt răsucite helicoidal în jurul unui ax',1],
  ['Structura I (primară): o catenă, nucleotide legate prin legături fosfodiesterice',2],
  ['Structura II (secundară): 2 catene între care se stabilesc legături de H',2],
  ['Nucleotidele celor 2 catene se leagă pe principiul complementarității bazelor azotate (A=T, T=A, C≡G, G≡C)',2],
  ['Catene antiparalele: pe una sensul de asamblare este C3′→C5′, pe cealaltă C5′→C3′',3]]},
 {l:'denat',items:[
  ['Funcțiile ADN: denaturarea – renaturarea · replicarea (autocopierea)',1],
  ['Denaturarea se datorează structurii bicatenare: t°C ↑ ⇒ 1 moleculă bicatenară → 2 molecule monocatenare',2],
  ['Răcire lentă ⇒ renaturare (se reface molecula bicatenară) · răcire bruscă ⇒ rămân 2 molecule monocatenare',3],
  ['Aplicații: monocatene de ADN de la 2 specii ⇒ procent de renaturare ⇒ relații de înrudire evolutivă (filogenetică)',4],
  ['om + maimuță → 75% · om + șoarece → ~25%',4],
  ['Stabilirea paternității / maternității (≈ 99%)',5]]},
 {l:'repl',items:[
  ['Replicare = autocopiere; molecula de ADN este singura moleculă care se autocopiază',1],
  ['Se realizează în interfaza ciclului celular, în etapa S (sinteză); ciclul celular = interfază + diviziune celulară',1],
  ['Se desfășoară după modelul semiconservativ',2],
  ['Enzima ADN-polimeraza taie pas cu pas legăturile de hidrogen dintre cele 2 catene',3],
  ['În plin proces de replicare molecula de ADN are forma literei λ',3],
  ['La capetele libere ale catenelor se atașează nucleotide din citoplasmă, pe baza complementarității',3],
  ['Se stabilesc legături de H între catena veche și cea nouă și legături fosfodiesterice între nucleotidele catenei noi; procesul se desfășoară pas cu pas',3],
  ['Rezultă 2 molecule de ADN identice, fiecare cu o catenă veche (model / matriță) și una nouă ⇒ semiconservativ',2],
  ['Replicarea explică menținerea aceleiași informații ereditare în toate celulele unui organism',3]]},
 {l:'transc',items:[
  ['ARN: de obicei monocatenar, polinucleotidic',1],
  ['Nucleotida de ARN: baze azotate A, G, U, C + riboză (R) + radical fosfat; legături fosfodiesterice între nucleotide',1],
  ['Sinteza ARN = transcripție (copiere), utilizând molecula de ADN',1],
  ['ARN-polimeraza taie legăturile de H din molecula de ADN',2],
  ['Nucleotidele libere din citoplasmă se atașează pe baza complementarității doar de o catenă din ADN (catena sens)',2],
  ['Intermediar se formează un hibrid molecular ADN–ARN și o catenă liberă de ADN',2],
  ['Hibridul se desface: se eliberează catena de ARN, iar molecula de ADN se reface („ADN original”)',2],
  ['După acest model se sintetizează mai multe tipuri de ARN — toate tipurile de ARN din celulă (ARNm, ARNt, ARNr)',5]]},
 {l:'arn',items:[
  ['Tipuri de ARN: viral și celular',1],
  ['ARN viral = materialul genetic al virusurilor (bacteriofagi, VMT – virusul mozaicului tutunului, virusul gripal)',1],
  ['ARN mesager (ARNm): monocatenar, lungime variabilă; copiază informația genetică din ADN pentru sinteza proteică',2],
  ['ARN de transfer / solubil (ARNt): monocatenar cu regiuni bicatenare (frunză de trifoi)',3],
  ['ARNt are anticodon (se potrivește cu codonul corespunzător din ARNm) – ex.: UAG',3],
  ['Rolul ARNt: transferă aminoacizii în citoplasmă la locul sintezei proteice',3],
  ['ARN ribozomal (ARNr): regiuni bicatenare; intră în alcătuirea ribozomilor; rol în sinteza ribozomilor',4],
  ['Ribozomul: ARNm, subunitate mică, subunitate mare; dimensiune 150–250 Å (1 Å = 10⁻¹⁰ m)',4]]}
];
const EXTRAS=[
 'Structurile chimice ale bazelor (A, G, C, T, U) și ale perechilor A–T, G–C, A–U, cu legăturile de H (lecțiile 3 și 5)',
 'Detaliul de la C2′: OH (riboză) față de H (dezoxiriboză) (lecțiile 3 și 4)',
 'De ce „fosfo-di-ester” și sensul 5′→3′ al catenei (lecția 4)',
 'Faptul că perechile A=T se desfac înaintea celor C≡G la încălzire (lecția 7)',
 'Etapele G1 și G2 ale interfazei (lecția 8)',
 '„Mica fabrică de proteine”: traducerea cu ribozom și ARNt (lecția 10)',
 'Jocurile, quiz-ul, testele grele pe capitole (cu harta capitolelor stăpânite), flashcard-urile și foaia rezumat'
];
VIEWS.acoperire={
  title:'Acoperire',
  html(){
    const total=COVER.reduce((s,p)=>s+p.items.length,0);
    const lno=id=>LESSONS.findIndex(l=>l.id===id)+1, ltitle=id=>(LESSONS.find(l=>l.id===id)||{}).title;
    return `
    <header class="lesson-hero" style="--ac1:#8b5cf6;--ac2:#ec4899"><div class="lh-top"><div class="lh-ico">${icon('book')}</div><div><h1>Acoperire: tot ce trebuie să știi</h1><p>Lista completă a punctelor din materie, fiecare legat de lecția unde îl găsești.</p></div></div>
      <div class="lh-meta"><span>${COVER.length} lecții</span><span>${total} puncte ✓</span></div></header>
    ${COVER.map(p=>`<div class="card"><h3 style="margin-top:0">Lecția ${lno(p.l)} — ${ltitle(p.l)}</h3>
      <ul class="cov-list">${p.items.map(([t,s])=>`<li><span class="ok">✓</span><span>${t}</span><a class="go" href="#/l/${p.l}/${s}">§${s}</a></li>`).join('')}</ul></div>`).join('')}
    <h2>În plus (bonus)</h2>
    <div class="card"><ul style="margin:0;padding-left:20px">${EXTRAS.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
  },
  init(){}
};
