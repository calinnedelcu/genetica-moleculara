'use strict';
/* Teste grele · Lecția 4 — O catenă de nucleotide */

hMS('catena',1,'Despre numărul de catene și structura moleculelor sunt adevărate afirmațiile:',
 [['ADN este, de obicei, bicatenar',1],['ARN este, de obicei, monocatenar',1],['o catenă este un lanț de nucleotide',1],['cele două catene ale ADN sunt răsucite una în jurul celeilalte',1],['ADN are, în mod obișnuit, o singură catenă',0],['ARN este, în mod obișnuit, bicatenar',0]],
 'ADN – bicatenar (de obicei), două catene răsucite una în jurul celeilalte; ARN – monocatenar (de obicei). Catena = lanț de nucleotide.');
hMC('catena',1,'Un fragment liniar de ADN bicatenar este scos din celulă. Câte capete 5′ și câte capete 3′ are în total?',
 '2 capete 5′ și 2 capete 3′',
 ['1 capăt 5′ și 1 capăt 3′','2 capete 5′ și 1 capăt 3′','4 capete 5′ și niciun capăt 3′'],
 'Fiecare catenă are un capăt 5′ (fosfat liber) și un capăt 3′ (OH liber). Molecula bicatenară are 2 catene, deci 2 capete 5′ și 2 capete 3′.');
hMS('catena',2,'Despre pentoza unei nucleotide sunt adevărate afirmațiile:',
 [['atomii ei de carbon se numerotează C1′ – C5′',1],['baza azotată se leagă la C1′',1],['radicalul fosfat al nucleotidei se leagă la C5′',1],['semnul ′ îi deosebește pe acești atomi de atomii bazei azotate',1],['baza azotată se leagă la C5′',0],['radicalul fosfat se leagă la C1′',0]],
 'Baza azotată – la C1′; fosfatul – la C5′; C3′ este locul prin care se face legătura cu nucleotida vecină. Semnul ′ („prim”) deosebește atomii pentozei de atomii bazei.');
hMC('catena',2,'În ce loc al pentozei se leagă baza azotată și în ce loc radicalul fosfat al unei nucleotide?',
 'baza azotată la C1′, radicalul fosfat la C5′',
 ['baza azotată la C5′, radicalul fosfat la C1′','baza azotată la C3′, radicalul fosfat la C5′','baza azotată la C1′, radicalul fosfat la C3′'],
 'Baza este la C1′, fosfatul la C5′; C3′ este locul prin care se face legătura cu fosfatul nucleotidei vecine.');
hMC('catena',2,'Ce arată semnul „prim” (′) din notațiile C1′, C2′, … C5′?',
 'că este vorba de atomii de carbon ai pentozei, nu de cei din baza azotată',
 ['că este vorba de atomii unei a doua catene de acid nucleic','că atomul respectiv aparține radicalului fosfat, nu pentozei','că atomul respectiv este un izotop al carbonului din baza azotată'],
 'Atomii pentozei se numerotează C1′–C5′; semnul ′ îi deosebește de atomii din baza azotată (numerotați fără prim).');
hMS('catena',3,'Care afirmații despre legătura fosfodiesterică sunt adevărate?',
 [['Se stabilește între C5′ al unei pentoze și C3′ al pentozei vecine, prin intermediul radicalului fosfat',1],['Unește cele două catene ale unei molecule de ADN',0],['Este prezentă și în moleculele de ARN',1],['Se rupe la denaturarea ADN',0],['Se formează între bazele azotate complementare',0],['Se formează în catena nouă în timpul replicării',1]],
 'Legătura fosfodiesterică leagă nucleotide vecine din aceeași catenă (ADN și ARN). Între catene sunt legături de hidrogen, care se rup la denaturare.');
hMC('catena',3,'În reprezentarea din lecție a legăturii dintre două nucleotide vecine, succesiunea de atomi dintre cele două pentoze este:',
 'C3′ – O – P – O – C5′',
 ['C3′ – P – C5′','C1′ – O – P – O – C1′','C3′ – O – O – C5′'],
 'Fosfatul (P) face „puntea” între C3′ al primei pentoze și C5′ al celei următoare, prin câte un atom de oxigen: două legături ester ⇒ „fosfo-di-ester”.');
hMC('catena',3,'De ce legătura dintre două nucleotide vecine se numește „fosfo-di-ester”?',
 'radicalul fosfat este legat prin legături ester de două pentoze vecine (C5′ și C3′)',
 ['radicalul fosfat este legat de două baze azotate vecine (una din fiecare catenă)','legătura este formată din doi atomi de fosfor, uniți între ei printr-un atom de oxigen','radicalul fosfat este legat și de pentoza, și de baza aceleiași nucleotide, prin două legături'],
 '„Fosfo” = grupa fosfat; „di-ester” = două legături ester, câte una cu fiecare pentoză vecină (C3′ și C5′).');
hMC('catena',3,'Care este diferența dintre legătura fosfodiesterică și legătura de hidrogen, ca loc în moleculă?',
 'fosfodiesterica leagă nucleotide vecine din aceeași catenă; cea de hidrogen leagă baze complementare din catene diferite',
 ['fosfodiesterica leagă baze din catene diferite; cea de hidrogen leagă nucleotide vecine din aceeași catenă','amândouă leagă numai baze azotate complementare, aflate în catene diferite ale moleculei','amândouă se stabilesc numai între pentozele nucleotidelor vecine din aceeași catenă'],
 'Legăturile fosfodiesterice formează scheletul fiecărei catene; legăturile de H țin împreună cele două catene (structura secundară).');
hMS('catena',3,'Care afirmații despre capetele unei catene de acid nucleic sunt adevărate?',
 [['Capătul 5′ are un radical fosfat liber',1],['Capătul 3′ are o grupare OH liberă',1],['Cele două capete ale catenei sunt identice',0],['Capătul 5′ are o grupare OH liberă',0],['O catenă liniară are un capăt 5′ și un capăt 3′',1]],
 'Catena este „orientată”: 5′ (fosfat liber) și 3′ (OH liber).');
hMC('catena',3,'Despre catena 5′-ACT-3′ este corectă afirmația:',
 'nucleotida cu A are fosfat liber (capătul 5′), iar cea cu T are OH liber la C3′ (capătul 3′)',
 ['nucleotida cu A are OH liber la C3′, iar cea cu T are fosfatul liber la C5′','ambele capete ale catenei au câte un radical fosfat liber, la C5′','catena nu are capete libere, deoarece toate nucleotidele ei sunt legate între ele'],
 'Capătul 5′ (aici A) are un radical fosfat liber; capătul 3′ (aici T) are o grupare OH liberă. Între cele 3 nucleotide există 2 legături fosfodiesterice.');
hMS('catena',4,'Despre secvența 5′-ACT-3′ (3 nucleotide, în aceeași catenă) sunt adevărate afirmațiile:',
 [['conține 2 legături fosfodiesterice',1],['începe cu un capăt 5′ (fosfat liber)',1],['se termină cu un capăt 3′ (OH liber)',1],['conține 3 legături fosfodiesterice',0],['conține legături de hidrogen între nucleotidele ei',0],['este bicatenară',0]],
 'Trei nucleotide legate în lanț au 2 legături fosfodiesterice. Legăturile de H apar doar între catene (în structura II); aici avem o singură catenă (structura I).');
hMC('catena',3,'Sensul 5′ → 3′ al unei catene înseamnă că:',
 'se citește de la capătul cu fosfat liber (5′) spre capătul cu OH liber (3′)',
 ['se citește de la capătul cu OH liber spre capătul cu fosfat liber','se citește de la o catenă la cealaltă, peste legăturile de hidrogen','se citește de la baza azotată spre fosfat, în aceeași nucleotidă'],
 'Catena se citește de la 5′ (fosfat liber) spre 3′ (OH liber).');
hMC('catena',3,'Despre legăturile din interiorul unei singure catene de ARN este adevărat că:',
 'nucleotidele vecine sunt legate prin legături fosfodiesterice, la fel ca în ADN',
 ['nucleotidele vecine sunt legate prin legături de hidrogen, deoarece ARN-ul este monocatenar','nucleotidele vecine sunt legate prin legături peptidice','nu există legături între nucleotide, ele fiind unite prin bazele azotate'],
 'Legăturile dintre nucleotidele unei catene (ADN sau ARN) sunt fosfodiesterice. Monocatenar nu înseamnă „fără legături”.');
hMS('catena',3,'Care dintre următoarele atomi/grupări sunt implicate direct în legătura fosfodiesterică?',
 [['C5′ al unei pentoze',1],['C3′ al pentozei vecine',1],['radicalul fosfat',1],['C1′ al pentozei',0],['baza azotată',0],['gruparea OH de la C2′',0]],
 'Legătura fosfodiesterică implică C5′ al unei pentoze, fosfatul și C3′ al pentozei vecine. C1′ este locul bazei, iar OH de la C2′ distinge riboza de dezoxiriboză.');
hMS('catena',3,'Care dintre afirmațiile despre legătura fosfodiesterică sunt <b>FALSE</b>?',
 [['unește C1′ al unei pentoze cu C1′ al pentozei următoare',1],['se stabilește între baze azotate complementare',1],['se rupe la încălzirea moderată a ADN-ului bicatenar',1],['unește nucleotide vecine din aceeași catenă',0],['se găsește și în ARN',0],['implică un radical fosfat',0]],
 'Legătura fosfodiesterică unește C5′ al unei pentoze cu C3′ al pentozei vecine, prin fosfat, în aceeași catenă (ADN și ARN). Între baze complementare se stabilesc legături de H, iar încălzirea moderată (denaturarea) rupe doar legăturile de H.');
hMC('catena',3,'Care dintre următoarele legături NU se găsește în interiorul unei singure catene de ADN?',
 'legătura de hidrogen dintre două baze azotate',
 ['legătura fosfodiesterică dintre nucleotide vecine','legătura dintre pentoză și radicalul fosfat','legătura dintre pentoză și baza azotată'],
 'În interiorul unei catene: baza – pentoză (C1′), pentoză – fosfat (C5′) și legăturile fosfodiesterice dintre nucleotide vecine. Legăturile de H unesc baze din catene diferite.');
hMS('catena',3,'Despre o catenă de ARN sunt adevărate afirmațiile:',
 [['are un capăt 5′ și un capăt 3′',1],['nucleotidele ei vecine sunt legate prin legături fosfodiesterice',1],['în mod obișnuit, molecula are o singură catenă',1],['între nucleotidele vecine se stabilesc legături de hidrogen',0],['nu are capete libere',0]],
 'Catena de ARN (monocatenară de obicei) are capete 5′ (fosfat liber) și 3′ (OH liber); nucleotidele vecine sunt legate prin legături fosfodiesterice, nu de hidrogen.');
hMC('catena',3,'În catena 5′-GCAT-3′, nucleotida care conține baza T are liberă:',
 'gruparea OH de la C3′ a pentozei',
 ['radicalul fosfat de la C5′ al pentozei','baza azotată, care nu se leagă de nicio altă componentă','o legătură de hidrogen cu nucleotida precedentă'],
 'T este ultima nucleotidă a catenei (capătul 3′): are OH liber la C3′. Radicalul fosfat liber este la capătul 5′ (aici, nucleotida cu G).');

// --- adn
