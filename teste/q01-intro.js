'use strict';
/* Teste grele · Lecția 1 — Ce este genetica? */

hMS('intro',2,'Care dintre următoarele caractere sunt <b>fiziologice</b>?',
 [['ritmul cardiac',1],['grupa sanguină',0],['viteza digestiei',1],['culoarea ochilor',0],['temperatura corpului',1],['numărul de camere ale inimii',0]],
 'Fiziologic = felul în care funcționează organismul (ritm cardiac, digestie, temperatură). Grupa sanguină este biochimică, culoarea ochilor – morfologică (aspect exterior), numărul camerelor inimii – anatomic (structura corpului).');
hMS('intro',2,'Care dintre următoarele sunt caractere <b>biochimice</b>?',
 [['tipul de hemoglobină',1],['grupa sanguină',1],['o enzimă produsă de celule',1],['forma urechilor',0],['prezența coloanei vertebrale',0]],
 'Biochimice = substanțele din organism (hemoglobina, grupa sanguină, enzimele). Forma urechilor este morfologică (aspect exterior), iar prezența coloanei vertebrale – anatomică (structura corpului).');
hMS('intro',2,'Care dintre următoarele sunt caractere <b>anatomice</b>?',
 [['numărul de membre',1],['numărul de camere ale inimii',1],['prezența coloanei vertebrale',1],['înălțimea corpului',0],['ritmul cardiac',0],['tipul de hemoglobină',0]],
 'Anatomic = structura corpului (câte membre, câte camere are inima, dacă există coloană vertebrală). Înălțimea corpului este morfologică (aspect exterior), ritmul cardiac – fiziologic, tipul de hemoglobină – biochimic.');
hMC('intro',2,'Asociază, în ordine, caracterele cu tipul lor: prezența coloanei vertebrale – forma urechilor – viteza digestiei – o enzimă produsă de celule.',
 'anatomic – morfologic – fiziologic – biochimic',
 ['morfologic – anatomic – fiziologic – biochimic','anatomic – morfologic – biochimic – fiziologic','anatomic – fiziologic – morfologic – biochimic'],
 'Coloana vertebrală = anatomic (structura corpului); forma urechilor = morfologic (aspect exterior); viteza digestiei = fiziologic (funcționare); o enzimă = biochimic (substanță din organism).');
hMC('intro',2,'Asociază, în ordine, caracterele cu tipul lor: înălțimea corpului – ritmul cardiac – numărul de camere ale inimii – tipul de hemoglobină.',
 'morfologic – fiziologic – anatomic – biochimic',
 ['anatomic – fiziologic – morfologic – biochimic','morfologic – anatomic – fiziologic – biochimic','morfologic – fiziologic – biochimic – anatomic'],
 'Înălțimea = aspect exterior (morfologic); ritmul cardiac = funcționare (fiziologic); camerele inimii = structură internă (anatomic); hemoglobina = substanță (biochimic).');
hMC('intro',2,'Care dintre perechile caracter – tip de caracter este <b>GREȘITĂ</b>?',
 'numărul de camere ale inimii – caracter morfologic (aspect exterior)',
 ['grupa sanguină – caracter biochimic (substanțe din organism)','ritmul cardiac – caracter fiziologic (funcționare)','culoarea blănii – caracter morfologic (aspect exterior)'],
 'Numărul camerelor inimii ține de structura internă a corpului, deci este caracter anatomic, nu morfologic (aspect exterior: culoare, formă, mărime).');
hMS('intro',2,'Care dintre următoarele caractere NU sunt nici anatomice, nici morfologice (adică sunt fiziologice sau biochimice)?',
 [['viteza digestiei',1],['tipul de hemoglobină',1],['forma urechilor',0],['numărul de membre',0],['o enzimă produsă de celule',1],['culoarea blănii',0]],
 'Viteza digestiei = fiziologic; tipul de hemoglobină și enzimele = biochimice. Forma urechilor și culoarea blănii sunt morfologice, iar numărul de membre – anatomic.');
hMC('intro',1,'Un elev afirmă: „Frații au multe caractere ereditare comune, deci între ei nu există variabilitate.” Care este corectura corectă?',
 'Variabilitatea înseamnă că nu există doi indivizi identici, chiar și când au caractere moștenite de la aceiași părinți',
 ['Frații sunt întotdeauna identici, deoarece ereditatea explică toate caracterele lor și nu lasă loc variației','Variabilitatea apare numai între indivizi aparținând unor specii diferite, nu între frați','Ereditatea și variabilitatea sunt același proces, privit din două părți, deci frații nu pot diferi'],
 'Ereditatea explică asemănările (transmiterea caracterelor de la părinți la urmași), iar variabilitatea explică diferențele: într-o specie nu există doi indivizi identici.');
hMS('intro',1,'Care dintre afirmații sunt corecte?',
 [['Ereditatea explică asemănările dintre părinți și urmași',1],['Variabilitatea explică de ce nu există doi indivizi identici într-o specie',1],['Variabilitatea înseamnă transmiterea caracterelor de la părinți la urmași',0],['Genetica studiază numai bolile ereditare',0],['Un caracter biochimic (de exemplu grupa sanguină) poate fi ereditar',1]],
 'Ereditatea = transmiterea caracterelor (anatomice, morfologice, fiziologice, biochimice) de la părinți la urmași; variabilitatea = capacitatea indivizilor unei specii de a se deosebi. Genetica studiază ereditatea ȘI variabilitatea, nu doar bolile.');
hMC('intro',1,'Completează corect: „Ereditatea explică …, iar variabilitatea explică …”.',
 'asemănările dintre părinți și urmași; diferențele dintre indivizii aceleiași specii',
 ['diferențele dintre părinți și urmași; asemănările dintre indivizii aceleiași specii','asemănările dintre indivizii din specii diferite; diferențele dintre indivizii aceleiași specii','transmiterea caracterelor de la urmași la părinți; transmiterea lor între indivizi din specii diferite'],
 'Ereditate = „seamănă cu părinții” (transmiterea caracterelor la urmași). Variabilitate = „nu sunt copii la indigo”: indivizii aceleiași specii se deosebesc între ei.');
hMS('intro',3,'Care dintre situațiile următoare ilustrează <b>variabilitatea</b>?',
 [['doi pui din aceeași ceată au blana de culori diferite',1],['toți puii unei pisici au patru picioare și coadă',0],['într-o specie nu există doi indivizi perfect identici',1],['din pisici se nasc pisici, nu câini',0],['doi frați au grupe sanguine diferite',1],['puii primesc de la părinți caracterele ereditare',0]],
 'Variabilitate = diferențele dintre indivizi (culoarea blănii, grupa sanguină, „nu există doi identici”). Faptul că puii au patru picioare și coadă sau că din pisici se nasc pisici ține de ereditate (planul speciei).');
hMS('intro',3,'Care dintre situațiile următoare ilustrează <b>ereditatea</b>?',
 [['puii unei pisici au, ca și părinții, două urechi și coadă',1],['doi frați nu sunt niciodată identici',0],['din semințele de floarea-soarelui cresc tot plante de floarea-soarelui',1],['un pui are blana de altă culoare decât frații lui',0],['urmașii preiau de la părinți caracterele ereditare',1],['fiecare individ dintr-o specie se deosebește de ceilalți',0]],
 'Ereditate = asemănarea cu părinții și cu specia (două urechi, coadă, „din pisici se nasc pisici”). Diferențele dintre frați sau dintre indivizi țin de variabilitate.');
hMC('intro',1,'Care dintre formulări definește ereditatea așa cum apare în curs?',
 'transmiterea caracterelor anatomice, morfologice, fiziologice și biochimice de la părinți la urmași',
 ['transmiterea de la părinți la urmași numai a caracterelor morfologice, vizibile exterior','capacitatea indivizilor unei specii de a se deosebi între ei, astfel încât nu există doi identici','apariția la urmași a unor caractere complet noi, pe care părinții nu le au deloc'],
 'Ereditatea acoperă toate cele 4 tipuri de caractere. Capacitatea de a se deosebi este variabilitatea.');
hMS('intro',3,'În „laboratorul de pui” (doi părinți → patru pui), ce observații sunt corecte?',
 [['toți puii au același „plan al speciei” – aceasta ilustrează ereditatea',1],['niciun pui nu este identic cu altul – aceasta ilustrează variabilitatea',1],['fiecare pui are caractere din toate cele 4 tipuri (anatomice, morfologice, fiziologice, biochimice)',1],['dacă doi pui ar fi identici, aceasta ar fi o dovadă a variabilității',0],['variabilitatea apare numai între pui din specii diferite',0],['„planul speciei” (ereditatea) este cel care face puii să difere între ei',0]],
 'Ereditate = puii seamănă cu părinții și între ei ca plan al speciei; variabilitate = totuși niciunul nu e identic cu altul. Doi indivizi identici ar contrazice variabilitatea, nu ar dovedi-o.');
hMC('intro',1,'Doi frați au aceeași grupă sanguină. Ce concluzie este corectă?',
 'nu contrazice variabilitatea: indivizii diferă în ansamblul caracterelor lor, nu neapărat prin fiecare caracter',
 ['contrazice variabilitatea, deoarece frații ar trebui să difere prin toate caracterele lor ereditare','dovedește că frații sunt identici, deoarece au un caracter biochimic comun','arată că grupa sanguină nu este un caracter ereditar, ci unul dobândit'],
 'Variabilitatea spune că nu există doi indivizi identici (în ansamblu). Doi indivizi pot avea unele caractere la fel, fără ca aceasta să-i facă identici.');
hMS('intro',1,'Care dintre afirmațiile următoare sunt <b>FALSE</b>?',
 [['Genetica studiază numai ereditatea',1],['Variabilitatea este transmiterea caracterelor de la părinți la urmași',1],['Ereditatea și variabilitatea sunt două aspecte diferite studiate de genetică',0],['Doi indivizi identici într-o specie sunt un exemplu de variabilitate',1],['Caracterele ereditare sunt de patru tipuri',0],['Grupa sanguină este un caracter anatomic',1]],
 'Genetica studiază ereditatea ȘI variabilitatea. Variabilitatea nu este transmiterea caracterelor (aceea e ereditatea), iar doi indivizi identici ar contrazice variabilitatea. Grupa sanguină este caracter biochimic.');
hMS('intro',2,'Care dintre afirmațiile despre caracterele ereditare sunt corecte?',
 [['se transmit de la părinți la urmași',1],['pot fi anatomice, morfologice, fiziologice sau biochimice',1],['grupa sanguină este un exemplu de caracter ereditar',1],['sunt exclusiv caractere vizibile cu ochiul liber',0],['sunt doar cele morfologice',0],['se transmit de la urmași la părinți',0]],
 'Caracterele ereditare sunt de 4 tipuri; unele (de exemplu cele biochimice: grupa sanguină, hemoglobina, enzimele) nu se văd cu ochiul liber. Se transmit de la părinți la urmași.');
hMC('intro',3,'Un pui de pisică are, ca și părinții lui, patru picioare și coadă, dar culoarea blănii diferă de cea a fraților lui. Cum se interpretează aceste observații?',
 'patru picioare și coadă – ereditate (planul speciei); culoarea diferită a blănii – variabilitate',
 ['patru picioare și coadă – variabilitate; culoarea diferită a blănii – ereditate','ambele observații ilustrează ereditatea, deoarece puiul seamănă cu părinții și cu frații lui','ambele observații ilustrează variabilitatea, deoarece puiul diferă de părinții și de frații lui'],
 'Planul speciei (patru picioare, coadă) se transmite de la părinți la urmași ⇒ ereditate. Faptul că frații se deosebesc între ei (blana) ⇒ variabilitate.');
hMS('intro',2,'Care dintre asocierile următoare tip de caracter – ce descrie sunt corecte?',
 [['anatomice – structura corpului (organe, schelet)',1],['morfologice – aspectul exterior (formă, culoare, mărime)',1],['fiziologice – modul în care funcționează organismul',1],['biochimice – substanțele din organism (grupa sanguină, enzime)',1],['anatomice – modul în care funcționează organismul',0],['fiziologice – structura și organele corpului',0]],
 'Anatomice = structura corpului; morfologice = aspect exterior; fiziologice = funcționare; biochimice = substanțe. Asocierile „anatomice – funcționare” și „fiziologice – structură” sunt inversate.');
hMS('intro',2,'Care dintre următoarele sunt caractere <b>morfologice</b>?',
 [['forma urechilor',1],['culoarea blănii',1],['înălțimea corpului',1],['ritmul cardiac',0],['numărul de camere ale inimii',0],['o enzimă produsă de celule',0]],
 'Morfologic = aspect exterior (formă, culoare, mărime). Ritmul cardiac este fiziologic, numărul camerelor inimii – anatomic, o enzimă – biochimic.');

// --- catena
