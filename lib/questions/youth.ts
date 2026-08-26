import type { Category } from "./types";

// Test Tineri (15–25 ani) — 39 de întrebări, 8 categorii.
// Transcris integral din brief-ul tehnic (secțiunea 7A).

export const YOUTH_TEST_INSTRUCTIONS =
  "Nu există răspunsuri corecte sau greșite. Alege varianta care descrie cel mai bine cum ești tu de obicei — nu cum ai vrea să fii, nu ce crezi că e de așteptat. Cu cât ești mai sincer, cu atât raportul va fi mai precis și mai util.";

export const YOUTH_TEST_DURATION = "15–20 minute";

export const YOUTH_CATEGORIES: Category[] = [
  {
    id: "cat1",
    title: "Cine ești — Caracter & Valori",
    questions: [
      {
        id: "1.1",
        kind: "single",
        prompt:
          "Ești martor la o situație în care cineva din grupul tău e tratat nedrept. Ce faci de obicei?",
        options: [
          { value: "A", label: "Intervin imediat și spun clar că nu e corect, chiar dacă e incomod" },
          { value: "B", label: "Vorbesc cu persoana afectată după aceea, să știe că o susțin" },
          { value: "C", label: "Caut o modalitate să schimb situația pe termen lung, nu doar momentan" },
          { value: "D", label: "Analizez situația mai întâi să fiu sigur că am dreptate, apoi acționez" },
        ],
      },
      {
        id: "1.2",
        kind: "single",
        prompt: "Oamenii care te cunosc bine spun că te caracterizează cel mai bine:",
        options: [
          { value: "A", label: "Creativitatea — mereu găsești soluții sau idei la care alții nu se gândesc" },
          { value: "B", label: "Perseverența — nu renunți chiar și când e greu" },
          { value: "C", label: "Empatia — înțelegi cum se simt ceilalți și îți pasă sincer" },
          { value: "D", label: "Curiozitatea — vrei mereu să înțelegi cum funcționează lucrurile" },
          { value: "E", label: "Umorul și energia — știi să aduci bucurie în orice context" },
        ],
      },
      {
        id: "1.3",
        kind: "ranking",
        prompt: "Pune în ordinea importanței pentru tine (1 = cel mai important):",
        items: [
          { value: "libertate", label: "Să fiu liber să fac ce îmi doresc" },
          { value: "altruism", label: "Să ajut și să fac bine celor din jurul meu" },
          { value: "recunoastere", label: "Să reușesc și să fiu recunoscut" },
          { value: "creatie", label: "Să creez ceva nou și original" },
          { value: "stabilitate", label: "Să am stabilitate și siguranță" },
        ],
      },
      {
        id: "1.4",
        kind: "single",
        prompt:
          "Ai de dus la capăt un proiect important, dar apar obstacole neașteptate. Cum reacționezi de obicei?",
        options: [
          { value: "A", label: "Caut rapid o altă cale și mă adaptez — nu mă blochez în problema inițială" },
          { value: "B", label: "Mă concentrez, lucrez metodic și nu mă opresc până nu găsesc soluția" },
          { value: "C", label: "Cer ajutorul cuiva de încredere — nu am nicio problemă să fac asta" },
          { value: "D", label: "Analizez ce a mers prost, învăț din asta și reiau cu o abordare nouă" },
        ],
      },
      {
        id: "1.5",
        kind: "single",
        prompt: "Oamenii vin la tine cel mai des pentru:",
        options: [
          { value: "A", label: "Idei și soluții creative — știu că găsesc ceva nou" },
          { value: "B", label: "Sfaturi și o perspectivă înțeleaptă" },
          { value: "C", label: "Suport emoțional — să se simtă ascultați și înțeleși" },
          { value: "D", label: "Motivație — îi ajuți să continue când vor să renunțe" },
          { value: "E", label: "Umor și energie bună — știu că vor ieși mai veseli" },
        ],
      },
    ],
  },
  {
    id: "cat2",
    title: "Cum gândești — Stil Cognitiv",
    questions: [
      {
        id: "2.1",
        kind: "single",
        prompt: "Trebuie să înveți ceva complet nou și complex. Cum preferi?",
        options: [
          { value: "A", label: "Urmăresc un video, o prezentare vizuală sau o diagramă" },
          { value: "B", label: "Ascult o explicație, un podcast sau o discuție live" },
          { value: "C", label: "Citesc un articol, o carte sau îmi iau notițe detaliate" },
          { value: "D", label: "Încerc direct — practic, greșesc, repet până îmi iese" },
        ],
      },
      {
        id: "2.2",
        kind: "single",
        prompt: "Când rezolvi o problemă, de obicei:",
        options: [
          { value: "A", label: "Caut răspunsul corect urmând pași logici, pas cu pas" },
          { value: "B", label: "Generez mai multe idei posibile, chiar și neobișnuite, și aleg după" },
          { value: "C", label: "Mai întâi explorez mai multe variante, apoi aleg cea mai logică" },
        ],
      },
      {
        id: "2.3",
        kind: "single",
        prompt: "Preferi mai degrabă să:",
        options: [
          { value: "A", label: "Ai instrucțiuni clare și un plan bine definit înainte de a începe" },
          { value: "B", label: "Ai libertate totală să explorezi și să decizi tu cum abordezi" },
        ],
      },
      {
        id: "2.4",
        kind: "single",
        prompt: "Lucrezi mai bine:",
        options: [
          { value: "A", label: "Singur, fără distrageri, în liniște deplină" },
          { value: "B", label: "Împreună cu alții — energia grupului mă motivează" },
          { value: "C", label: "Depinde — singur pentru gândire profundă, cu alții pentru generarea ideilor" },
        ],
      },
    ],
  },
  {
    id: "cat3",
    title: "Ce te aprinde — Interese & Pasiuni",
    questions: [
      {
        id: "3.1",
        kind: "top-n-ordered",
        n: 2,
        prompt:
          "Dacă ai o zi complet liberă, care activitate te atrage cel mai mult? Alege primele 2, în ordine.",
        options: [
          { value: "A", label: "Construiești sau repari ceva cu mâinile (sport fizic, grădinărit, mecanic, gătit)" },
          { value: "B", label: "Cercetezi, citești sau rezolvi un puzzle complex (știință, analiză, descoperire)" },
          { value: "C", label: "Creezi ceva (muzică, desen, scriere, design, fotografie)" },
          { value: "D", label: "Petreci timp cu oameni, îi asculți sau ajuți (voluntariat, conversații, socializare)" },
          { value: "E", label: "Convingi, prezinți, conduci sau lansezi un proiect (negociere, leadership, vânzare)" },
          { value: "F", label: "Organizezi, planifici sau pui în ordine (baze de date, liste, sisteme)" },
        ],
      },
      {
        id: "3.2",
        kind: "single",
        prompt: "Imaginează-ți jobul tău ideal. Cum arată mediul de lucru?",
        options: [
          { value: "A", label: "În aer liber sau cu activitate fizică regulată" },
          { value: "B", label: "Într-un laborator, bibliotecă sau birou de cercetare" },
          { value: "C", label: "Într-un studio creativ — muzică, artă, design, conținut" },
          { value: "D", label: "Cu oameni — pacienți, elevi, clienți, în contact direct constant" },
          { value: "E", label: "Conduc o echipă, fac prezentări, negociez și iau decizii" },
          { value: "F", label: "Cu cifre, sisteme și procese — ordine și precizie" },
        ],
      },
      {
        id: "3.3",
        kind: "single",
        prompt: "Despre ce subiecte poți vorbi ore întregi, fără să te saturi?",
        options: [
          { value: "A", label: "Tehnologie, știință, cum funcționează lucrurile" },
          { value: "B", label: "Artă, muzică, film, design, cultură" },
          { value: "C", label: "Oameni, relații, psihologie, societate" },
          { value: "D", label: "Business, bani, strategie, leadership" },
          { value: "E", label: "Natură, animale, sport, activități în aer liber" },
          { value: "F", label: "Organizare, sisteme, date, procese eficiente" },
        ],
      },
      {
        id: "3.4",
        kind: "single",
        prompt: "Dacă ai alege un proiect — la școală sau în viața ta — ce tip ai prefera?",
        options: [
          { value: "A", label: "Să construiești sau să repari ceva concret, care funcționează" },
          { value: "B", label: "Să cercetezi o problemă complexă și să ajungi la un răspuns nou" },
          { value: "C", label: "Să creezi ceva original și expresiv — vizual, muzical sau narativ" },
          { value: "D", label: "Să organizezi o acțiune care ajută direct alți oameni" },
          { value: "E", label: "Să lansezi o inițiativă sau să convingi pe alții de o idee" },
          { value: "F", label: "Să creezi un sistem, o bază de date sau un plan extrem de detaliat" },
        ],
      },
      {
        id: "3.5",
        kind: "single",
        prompt: "Ce rezultat te-ar face să simți că munca ta a contat cu adevărat?",
        options: [
          { value: "A", label: "Am creat ceva care funcționează și poate fi folosit concret" },
          { value: "B", label: "Am înțeles ceva nou și am contribuit la cunoaștere" },
          { value: "C", label: "Am creat ceva frumos sau emoționant care rămâne" },
          { value: "D", label: "Am schimbat viața cuiva în bine — direct, concret" },
          { value: "E", label: "Am condus o echipă spre un rezultat important" },
          { value: "F", label: "Am creat un sistem care funcționează perfect, de la sine" },
        ],
      },
      {
        id: "3.6",
        kind: "pair-choice-group",
        prompt: "Alege varianta care ți se potrivește mai bine în fiecare pereche:",
        pairs: [
          { id: "3.6a", prompt: "", optionA: "Practic și concret", optionB: "Teoretic și conceptual" },
          { id: "3.6b", prompt: "", optionA: "Creator de conținut", optionB: "Organizator de conținut" },
          { id: "3.6c", prompt: "", optionA: "Să convingi și să conduci", optionB: "Să ajuți și să sprijini" },
        ],
      },
    ],
  },
  {
    id: "cat4",
    title: "Cum simți — Stare de Bine & Emoții",
    note: "Gândește-te la ultimele 2 săptămâni. Scală: 0 = Niciodată · 1 = Rareori · 2 = Câteodată · 3 = Mai mult de jumătate din timp · 4 = Aproape tot timpul · 5 = Tot timpul",
    questions: [
      {
        id: "4.1",
        kind: "scale-slider",
        prompt: "Am simțit bucurie și bună-dispoziție.",
        min: 0,
        max: 5,
        minLabel: "Niciodată",
        maxLabel: "Tot timpul",
      },
      {
        id: "4.2",
        kind: "scale-slider",
        prompt: "M-am simțit calm și relaxat.",
        min: 0,
        max: 5,
        minLabel: "Niciodată",
        maxLabel: "Tot timpul",
      },
      {
        id: "4.3",
        kind: "scale-slider",
        prompt: "M-am simțit activ și plin de energie.",
        min: 0,
        max: 5,
        minLabel: "Niciodată",
        maxLabel: "Tot timpul",
      },
      {
        id: "4.4",
        kind: "scale-slider",
        prompt: "M-am trezit odihnit și reconfortat.",
        min: 0,
        max: 5,
        minLabel: "Niciodată",
        maxLabel: "Tot timpul",
      },
      {
        id: "4.5",
        kind: "scale-slider",
        prompt: "Ziua mea a inclus lucruri care m-au interesat.",
        min: 0,
        max: 5,
        minLabel: "Niciodată",
        maxLabel: "Tot timpul",
      },
      {
        id: "4.6",
        kind: "single",
        prompt:
          "Te-ai certat cu un prieten apropiat sau cu un frate/soră. Cum reacționezi de obicei?",
        options: [
          { value: "A", label: "Îmi exprim imediat ce simt, chiar dacă e intens — nu pot reține" },
          {
            value: "B",
            label: "Mă retrag și mă calmez, înainte să vorbesc — nu vreau să spun lucruri pe care le voi regreta",
          },
          { value: "C", label: "Încerc mai întâi să înțeleg perspectiva lui/ei, înainte să spun ce simt eu" },
          {
            value: "D",
            label: "Caut imediat o soluție practică — prefer să rezolvăm problema, nu să analizăm emoțiile",
          },
        ],
      },
    ],
  },
  {
    id: "cat5",
    title: "Cum înveți — Relația cu Educația",
    questions: [
      {
        id: "5.1",
        kind: "single",
        prompt: "Ce te motivează cel mai mult să înveți sau să muncești bine?",
        options: [
          { value: "A", label: "Curiozitatea — vreau sincer să știu și să înțeleg" },
          { value: "B", label: "Rezultatele — note bune, recunoaștere, aprecierea celorlalți" },
          { value: "C", label: "Aplicarea — văd că e util și că pot folosi ce am învățat în viața reală" },
          { value: "D", label: "Provocarea — vreau să dovedesc că pot mai mult decât se așteaptă" },
        ],
      },
      {
        id: "5.2",
        kind: "single",
        prompt: "Profesorul îți corectează o lucrare cu multe observații critice. Cum reacționezi de obicei?",
        options: [
          { value: "A", label: "Accept feedback-ul și îl folosesc imediat — e exact ce am nevoie ca să mă îmbunătățesc" },
          { value: "B", label: "Mă apăr inițial, dar reconsider și integrez ulterior" },
          { value: "C", label: "Mă descurajez, chiar dacă știu că e util — îmi ia timp să revin" },
          { value: "D", label: "Mă simt motivat — vreau să dovedesc că pot face mai bine data viitoare" },
        ],
      },
      {
        id: "5.3",
        kind: "single",
        prompt: "Unde și cum înveți cel mai bine?",
        options: [
          { value: "A", label: "Singur, în liniște, fără distrageri, cu propriul ritm" },
          { value: "B", label: "Discutând cu alții, explicând sau dezbătând — conversația mă ajută să înțeleg" },
          { value: "C", label: "Când am libertate să explorez singur un subiect care mă interesează" },
          { value: "D", label: "Când cineva structurează bine materialul și îl explică pas cu pas, cu exemple" },
        ],
      },
      {
        id: "5.4",
        kind: "single",
        prompt: "Dai de un subiect sau o materie la care nu te descurci. Ce faci?",
        options: [
          { value: "A", label: "Caut singur resurse suplimentare — videoclipuri, cărți, articole, tutoriale" },
          { value: "B", label: "Cer ajutor imediat — profesor, coleg, tutore, oriunde găsesc" },
          { value: "C", label: "Muncesc mai mult la domeniile unde sunt bun și accept că nu pot excela la tot" },
          { value: "D", label: "Găsesc o metodă care funcționează pentru mine, chiar dacă e neconvențională" },
        ],
      },
      {
        id: "5.5",
        kind: "single",
        prompt: "Ce tip de profesor sau mentor îți scoate cel mai bun din tine?",
        options: [
          { value: "A", label: "Cel care explică structurat, pas cu pas, cu exemple clare și logică impecabilă" },
          { value: "B", label: "Cel care îți pune întrebări și te lasă să descoperi singur răspunsurile" },
          { value: "C", label: "Cel care îți dă proiecte reale și libertate deplină să explorezi" },
          { value: "D", label: "Cel care te provoacă să dai mai mult decât crezi că poți" },
        ],
      },
    ],
  },
  {
    id: "cat6",
    title: "Cum ești cu oamenii — Orientare Socială",
    questions: [
      {
        id: "6.1",
        kind: "single",
        prompt:
          "După o seară lungă cu mulți oameni — o petrecere sau un eveniment de grup — cum te simți de obicei?",
        options: [
          { value: "A", label: "Energizat — îmi place să fiu cu oamenii, revin acasă mai bine decât am plecat" },
          { value: "B", label: "Obosit și am nevoie de timp singur să mă reîncarc" },
          { value: "C", label: "Depinde de calitatea interacțiunilor, nu de numărul de oameni" },
        ],
      },
      {
        id: "6.2",
        kind: "single",
        prompt: "Când ești parte dintr-o echipă sau un grup, ce rol preiei natural?",
        options: [
          { value: "A", label: "Coordonez — stabilesc direcția, distribuie sarcinile, mă asigur că mergem bine" },
          { value: "B", label: "Contribui cu idei și soluții creative la care alții nu s-au gândit" },
          { value: "C", label: "Asigur că toți se simt bine și că fiecare e susținut — coeziunea echipei" },
          { value: "D", label: "Mă concentrez pe sarcina mea și livrez ce e mai bun posibil" },
        ],
      },
      {
        id: "6.3",
        kind: "single",
        prompt: "Ai un conflict cu cineva din grupul tău. Cum abordezi de obicei?",
        options: [
          { value: "A", label: "Vorbesc direct cu persoana — claritatea contează mai mult decât confortul" },
          { value: "B", label: "Caut un compromis cu care ambii să putem trăi" },
          { value: "C", label: "Evit conflictul dacă nu e esențial — prefer armonia" },
          { value: "D", label: "Cer opinia unui terț pentru a înțelege situația mai obiectiv" },
        ],
      },
      {
        id: "6.4",
        kind: "single",
        prompt: "Cum preferi să lucrezi la un proiect important?",
        options: [
          { value: "A", label: "Complet singur — am mai mult control și mă concentrez mai bine" },
          { value: "B", label: "Într-o echipă mică, de 2–3 oameni în care mă înțeleg bine" },
          { value: "C", label: "Mix — singur pentru anumite etape, în echipă pentru altele" },
          { value: "D", label: "Cu o echipă mai mare — energia colectivă mă motivează" },
        ],
      },
    ],
  },
  {
    id: "cat7",
    title: "Unde mergi — Viziune & Scop",
    questions: [
      {
        id: "7.1",
        kind: "scale-slider",
        prompt: "Cât de clar ai un sens al direcției în viața ta — ce vrei să faci, ce vrei să devii?",
        min: 1,
        max: 5,
        minLabel: "Nu am nicio idee, mă simt pierdut în asta",
        maxLabel: "Am o viziune clară și lucrez deja la ea",
      },
      {
        id: "7.2",
        kind: "single",
        prompt: "Ce tip de impact vrei să ai în viața ta?",
        options: [
          { value: "A", label: "Să creez ceva nou — un produs, un proiect, o idee care nu a existat" },
          { value: "B", label: "Să îmbunătățesc ce există — să fac ceva bun mai bun, mai eficient" },
          { value: "C", label: "Să ajut direct oamenii — să le schimb viața în bine, concret" },
          { value: "D", label: "Să construiesc o comunitate sau o mișcare în jurul a ceva important" },
          { value: "E", label: "Nu știu încă — explorarea e mai importantă decât claritatea acum" },
        ],
      },
      {
        id: "7.3",
        kind: "single",
        prompt:
          "Stai în fața unei decizii mari de viață: un drum sigur și predictibil vs. unul incert dar cu potențial mare. Ce alegi?",
        options: [
          { value: "A", label: "Drumul sigur — stabilitatea și certitudinea sunt mai importante" },
          { value: "B", label: "Drumul incert — potențialul e mai atractiv decât siguranța" },
          { value: "C", label: "Încerc să găsesc o cale care combină ambele" },
          { value: "D", label: "Depinde complet de context — nu pot da un răspuns general" },
        ],
      },
      {
        id: "7.4",
        kind: "single",
        prompt: "Ești mai atras de:",
        options: [
          { value: "A", label: "Să construiești ceva de la zero, fără model de urmat — ești pionier" },
          { value: "B", label: "Să iei ceva deja bun și să-l faci excepțional — ești optimizer" },
        ],
      },
      {
        id: "7.5",
        kind: "single",
        prompt: "Dacă banii nu ar fi o problemă și nu ai nicio constrângere, ce ai face cu timpul tău?",
        options: [
          { value: "A", label: "Aș crea — artă, conținut, design, muzică, fotografie" },
          { value: "B", label: "Aș ajuta oameni — prin consiliere, voluntariat, educație, îngrijire" },
          { value: "C", label: "Aș construi o afacere sau un proiect cu impact real" },
          { value: "D", label: "Aș explora, cerceta și înțelege lumea mai bine" },
          { value: "E", label: "Aș lucra cu mâinile, cu natura sau cu corpul meu" },
          { value: "F", label: "Aș organiza și crea sisteme care funcționează perfect" },
        ],
      },
    ],
  },
  {
    id: "cat8",
    title: "Corp & Energie — Stil de Viață",
    questions: [
      {
        id: "8.1",
        kind: "single",
        prompt: "Cum e somnul tău în general, în ultimele 2–3 luni?",
        options: [
          { value: "A", label: "Dorm bine — mă trezesc odihnit și cu energie" },
          { value: "B", label: "Dorm, dar nu mă trezesc odihnit — e o oboseală de fond" },
          { value: "C", label: "Dorm puțin sau neregulat — program haotic" },
          { value: "D", label: "Am dificultăți mari cu somnul — nu e bine" },
        ],
      },
      {
        id: "8.2",
        kind: "scale-slider",
        prompt:
          "Cât de des faci activitate fizică (sport, mers pe jos 20+ min, dans, înot, orice altceva)?",
        min: 1,
        max: 5,
        minLabel: "Rar sau deloc",
        maxLabel: "Zilnic sau aproape zilnic",
      },
      {
        id: "8.3",
        kind: "single",
        prompt:
          "Câte ore petreci zilnic pe ecrane (telefon, laptop, TV — în afara necesității de la școală/muncă)?",
        options: [
          { value: "A", label: "Sub 2 ore" },
          { value: "B", label: "2–4 ore" },
          { value: "C", label: "4–6 ore" },
          { value: "D", label: "Peste 6 ore" },
        ],
      },
      {
        id: "8.4",
        kind: "single",
        prompt: "Cum îți descrii nivelul de energie de-a lungul unei zile obișnuite?",
        options: [
          { value: "A", label: "Constant ridicat — sunt energic cea mai mare parte a zilei" },
          { value: "B", label: "Variabil — am momente de energie și momente de epuizare" },
          { value: "C", label: "Constant scăzut — mă simt obosit mai tot timpul" },
        ],
      },
    ],
  },
];
