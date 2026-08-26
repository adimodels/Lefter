import type { Category } from "./types";

// Test Părinți — 32 de întrebări, 6 categorii + Profil Copil.
// Transcris integral din brief-ul tehnic (secțiunea 7B).

export const PARENT_TEST_INSTRUCTIONS =
  "Răspunde bazat pe ceea ce faci de obicei — nu pe ceea ce crezi că ar trebui să faci, nu pe idealizarea propriului rol. Testul nu judecă — orice stil are resurse și zone de creștere. Cu cât ești mai sincer, cu atât recomandările vor fi mai relevante pentru copilul tău.";

export const PARENT_TEST_DURATION = "12–18 minute";

export const PARENT_CATEGORIES: Category[] = [
  {
    id: "p1",
    title: "Stilul tău de parenting",
    questions: [
      {
        id: "P1.1",
        kind: "single",
        prompt: "Când copilul tău vine cu o problemă sau o supărare, de obicei:",
        options: [
          { value: "A", label: "Îl ascult complet înainte să spun orice — el termină, eu vorbesc după" },
          { value: "B", label: "Îi ofer imediat o soluție sau un sfat util — vreau să îl ajut concret" },
          { value: "C", label: "Îl liniștesc rapid și îl redirecționez spre ce are de făcut — să nu se blocheze" },
          { value: "D", label: "Îi explic că nu e chiar atât de grav și să privească lucrurile mai realist" },
        ],
      },
      {
        id: "P1.2",
        kind: "single",
        prompt: "Care afirmație descrie cel mai bine regulile în familia ta?",
        options: [
          { value: "A", label: "Avem reguli clare cu consecințe clare — și le aplic consistent" },
          { value: "B", label: "Avem reguli, dar le ajustez în funcție de situație" },
          { value: "C", label: "Încerc să stabilesc reguli, dar copilul le negociează des" },
          { value: "D", label: "Prefer să-l las pe copil să-și găsească singur limitele" },
        ],
      },
      {
        id: "P1.3",
        kind: "single",
        prompt: "Copilul tău e dezamăgit pentru ceva ce ți se pare minor. Cum reacționezi?",
        options: [
          { value: "A", label: "Validez ce simte, chiar dacă nu sunt de acord cu importanța lui subiectivă" },
          { value: "B", label: "Îi explic de ce nu e cazul să se supere atât — vreau să îl ajut să fie realist" },
          { value: "C", label: "Îl distrag cu altceva sau îl redirecționez" },
          { value: "D", label: "Îi spun că trebuie să fie mai rezistent — viața e mai grea decât asta" },
        ],
      },
      {
        id: "P1.4",
        kind: "single",
        prompt: "Cât de mult lași copilul să ia decizii singur (îmbrăcăminte, activități, prieteni)?",
        options: [
          { value: "A", label: "Mult — e dreptul lui să aleagă, eu ghidez doar când cere" },
          { value: "B", label: "Selectiv — pentru unele lucruri da, pentru altele prefer să decid eu" },
          { value: "C", label: "Puțin — știu ce e mai bine și prefer să fiu eu cel care orientează" },
          { value: "D", label: "Copilul decide aproape totul — nu mă implic prea mult" },
        ],
      },
      {
        id: "P1.5",
        kind: "single",
        prompt: "Când impui o regulă sau o decizie importantă, de obicei:",
        options: [
          { value: "A", label: "Explic de ce e importantă — vreau ca copilul să înțeleagă logica" },
          { value: "B", label: "Spun ce am decis și aștept să fie respectat — pentru că am autoritate" },
          { value: "C", label: "Discutăm împreună și ajungem la o regulă cu care ambii suntem de acord" },
          { value: "D", label: "Nu impun reguli — prefer să curgă natural" },
        ],
      },
    ],
  },
  {
    id: "p2",
    title: "Cât îți cunoști copilul",
    questions: [
      {
        id: "P2.1",
        kind: "single",
        prompt:
          "Știi care sunt cei mai buni 2–3 prieteni ai copilului tău în acest moment și de ce îi place de ei?",
        options: [
          { value: "A", label: "Da, îi știu cu nume și înțeleg relația dintre ei" },
          { value: "B", label: "Știu cine sunt, dar nu știu de ce îi place de ei" },
          { value: "C", label: "Știu un prieten sau doi" },
          { value: "D", label: "Nu știu cu siguranță cine îi sunt cei mai buni prieteni acum" },
        ],
      },
      {
        id: "P2.2",
        kind: "single",
        prompt: "Copilul tău are un vis, o pasiune sau un scop pentru viitor. Îl știi?",
        options: [
          { value: "A", label: "Da, l-am discutat des și îl susțin activ" },
          { value: "B", label: "Știu în linii mari, dar nu am explorat asta cu el" },
          { value: "C", label: "Am o bănuială, dar nu am discutat direct" },
          { value: "D", label: "Nu știu ce își dorește cu adevărat" },
        ],
      },
      {
        id: "P2.3",
        kind: "single",
        prompt: "Ce îi face cel mai multă teamă sau anxietate copilului tău în această perioadă?",
        options: [
          { value: "A", label: "Știu exact — am vorbit despre asta" },
          { value: "B", label: "Am o idee, dar nu sunt sigur" },
          { value: "C", label: "Nu știu" },
        ],
      },
      {
        id: "P2.4",
        kind: "single",
        prompt: "Care e lucrul care îl face pe copilul tău cel mai fericit?",
        options: [
          { value: "A", label: "Știu imediat și fără nicio dubiu" },
          { value: "B", label: "Am câteva idei, dar nu știu care e pe primul loc" },
          { value: "C", label: "Nu știu cu exactitate" },
        ],
      },
      {
        id: "P2.5",
        kind: "single",
        prompt:
          "Dacă ai întreba copilul ce a fost cel mai bun și cel mai greu din ultima săptămână, ce crezi că ar răspunde?",
        options: [
          { value: "A", label: "Știu cu exactitate ce ar spune" },
          { value: "B", label: "Aș putea ghici în linii mari" },
          { value: "C", label: "Nu știu ce se întâmplă în viața lui zi de zi" },
          { value: "D", label: "Nu am idee" },
        ],
      },
    ],
  },
  {
    id: "p3",
    title: "Așteptări vs. suport",
    questions: [
      {
        id: "P3.1",
        kind: "single",
        prompt: "Crezi că inteligența și talentele copilului tău sunt:",
        options: [
          { value: "A", label: "Fixe — le are sau nu le are, și cam atât" },
          { value: "B", label: "Complet dezvoltabile — cu efort și practică pot deveni mai bun la orice" },
          { value: "C", label: "Parțial fixe — unele se pot dezvolta, altele nu" },
        ],
      },
      {
        id: "P3.2",
        kind: "single",
        prompt: "Copilul tău ia o notă proastă sau eșuează la un concurs. Cum reacționezi de obicei?",
        options: [
          { value: "A", label: "Îl întreb ce s-a întâmplat și ce poate face diferit data viitoare" },
          { value: "B", label: "Mă dezamăgesc și el simte asta — probabil îl afectează" },
          { value: "C", label: "Îl consolez și îi spun că nu contează" },
          { value: "D", label: "Analizăm cauza împreună și găsim soluții concrete" },
        ],
      },
      {
        id: "P3.3",
        kind: "single",
        prompt: "Cât de multă presiune simte copilul tău din partea ta legat de școală sau performanță?",
        options: [
          { value: "A", label: "Foarte puțin — nu pun presiune" },
          { value: "B", label: "Moderată — aștept rezultate bune, dar nu exagerez" },
          { value: "C", label: "Destul de multă — performanța e prioritară" },
          { value: "D", label: "Foarte multă — e subiect frecvent de tensiune în familie" },
        ],
      },
      {
        id: "P3.4",
        kind: "single",
        prompt: "Cum îl sprijini activ pe copilul tău în dezvoltarea lui?",
        options: [
          { value: "A", label: "Îl înscriu la activități extrașcolare care îl interesează" },
          { value: "B", label: "Îl ajut la teme și mă implic activ în educația lui" },
          { value: "C", label: "Îi ofer resursele financiare necesare" },
          { value: "D", label: "Sunt acolo când are nevoie, dar nu mă bag prea mult" },
        ],
      },
    ],
  },
  {
    id: "p4",
    title: "Cum gestionezi emoțiile în familie",
    questions: [
      {
        id: "P4.1",
        kind: "single",
        prompt: "Copilul tău e furios și spune lucruri grele în acel moment. Cum răspunzi?",
        options: [
          {
            value: "A",
            label: "Îi spun că văd că e foarte supărat și că e OK să simtă asta, dar nu și să spună orice",
          },
          { value: "B", label: "Îi explic că ce a spus e nedrept și îl corectez" },
          { value: "C", label: "Mă retrag până se calmează — nu vreau să escaladăm" },
          { value: "D", label: "Aplic o consecință imediată pentru comportament" },
        ],
      },
      {
        id: "P4.2",
        kind: "single",
        prompt: "Când copilul tău plânge pentru ceva ce tu consideri minor:",
        options: [
          { value: "A", label: "Validez sentimentul — „văd că ești supărat” — chiar dacă mi se pare mic lucrul" },
          { value: "B", label: "Îl consolez, dar îi spun să fie mai puternic" },
          { value: "C", label: "Îl distrag cu altceva" },
          { value: "D", label: "Îl las să-și treacă emoția singur" },
        ],
      },
      {
        id: "P4.3",
        kind: "single",
        prompt: "Cât de confortabil ești tu însuți cu emoțiile dificile — propria tristețe, furie, teamă?",
        options: [
          { value: "A", label: "Destul de confortabil — pot să le recunosc și să le procesez" },
          { value: "B", label: "Incomod — prefer să le evit sau să le ignor" },
          { value: "C", label: "Depinde de emoție" },
        ],
      },
      {
        id: "P4.4",
        kind: "single",
        prompt: "Vorbești cu copilul tău despre emoțiile tale — când ești supărat, fericit sau îngrijorat?",
        options: [
          { value: "A", label: "Da, regulat și deschis — consider că e important să vadă că și eu am emoții" },
          { value: "B", label: "Rar — nu vreau să îl îngrijorez sau să pun povara pe el" },
          { value: "C", label: "Niciodată — emoțiile mele sunt treaba mea" },
        ],
      },
      {
        id: "P4.5",
        kind: "single",
        prompt: "Când copilul tău greșește sau are un comportament negativ, de obicei:",
        options: [
          { value: "A", label: "Vorbim despre ce s-a întâmplat și despre consecințele naturale ale comportamentului" },
          { value: "B", label: "Aplic o pedeapsă clară și predictibilă" },
          { value: "C", label: "Îmi exprim dezamăgirea — vreau să știe că mă afectează" },
          { value: "D", label: "Ignor dacă nu e ceva grav" },
        ],
      },
    ],
  },
  {
    id: "p5",
    title: "Tu ca om — Wellbeing Personal",
    questions: [
      {
        id: "P5.1",
        kind: "single",
        prompt: "Cât de des simți că ești epuizat de responsabilitățile de părinte?",
        options: [
          { value: "A", label: "Niciodată sau rareori — mă descurc bine" },
          { value: "B", label: "Câteodată — e normal, cred" },
          { value: "C", label: "Des — e o oboseală care nu trece" },
          { value: "D", label: "Aproape constant — mă simt la capătul puterilor" },
        ],
      },
      {
        id: "P5.2",
        kind: "single",
        prompt: "Simți că ești la fel de prezent emoțional cu copilul tău față de cum erai acum câțiva ani?",
        options: [
          { value: "A", label: "Da, cel puțin la fel — poate chiar mai mult" },
          { value: "B", label: "Puțin mai puțin — e normal să evoluezi" },
          { value: "C", label: "Mult mai puțin — mă detașez uneori fără să vreau" },
          { value: "D", label: "Mă simt complet diferit față de ce eram ca părinte" },
        ],
      },
      {
        id: "P5.3",
        kind: "single",
        prompt: "Există momente când simți că ai fi mai fericit cu mai puține responsabilități parentale?",
        options: [
          { value: "A", label: "Nu, deloc — rolul ăsta mă împlinește" },
          { value: "B", label: "Rareori, în momente de stres intens" },
          { value: "C", label: "Des — simt că am nevoie de mai mult spațiu personal" },
          { value: "D", label: "Foarte des — e o tensiune constantă" },
        ],
      },
      {
        id: "P5.4",
        kind: "single",
        prompt: "Ai timp pentru tine — activități pe care le faci pentru plăcerea ta, nu pentru familie sau muncă?",
        options: [
          { value: "A", label: "Da, regulat — e o prioritate pentru mine" },
          { value: "B", label: "Rar, dar există" },
          { value: "C", label: "Aproape deloc" },
          { value: "D", label: "Deloc — nu îmi permite situația" },
        ],
      },
      {
        id: "P5.5",
        kind: "single",
        prompt: "Cum te simți în general față de viața ta, dincolo de rolul de părinte și de muncă?",
        options: [
          { value: "A", label: "Împlinit — am și alte surse de sens și bucurie" },
          { value: "B", label: "Bine, dar parenting-ul ocupă mult" },
          { value: "C", label: "Obosit și cu puține resurse — supraviețuiesc" },
          { value: "D", label: "Epuizat — nu mai știu cine sunt în afara rolurilor" },
        ],
      },
    ],
  },
  {
    id: "p6",
    title: "Viziunea ta pentru copilul tău",
    questions: [
      {
        id: "P6.1",
        kind: "single",
        prompt: "Cum descrii cel mai bine ce vrei pentru copilul tău?",
        options: [
          { value: "A", label: "Să fie fericit și să facă ceea ce îl pasionează" },
          { value: "B", label: "Să aibă un viitor sigur și stabil" },
          { value: "C", label: "Să reușească și să fie respectat" },
          { value: "D", label: "Să contribuie la ceva mai mare decât el" },
        ],
      },
      {
        id: "P6.2",
        kind: "single",
        prompt: "Cât de mult influențezi tu direcția și alegerile copilului?",
        options: [
          { value: "A", label: "Mult — eu știu ce e mai bine și îl orientez puternic" },
          { value: "B", label: "Îl ghidez, dar decizia finală îi aparține lui" },
          { value: "C", label: "Puțin — el decide, eu sprijin" },
          { value: "D", label: "Mă implic prea puțin — nu simt că știu cum să ajut" },
        ],
      },
      {
        id: "P6.3",
        kind: "single",
        prompt: "Ce crezi că lipsește cel mai mult în educația copilului tău în acest moment?",
        options: [
          { value: "A", label: "Disciplina și structura" },
          { value: "B", label: "Libertatea de a explora ce îl interesează" },
          { value: "C", label: "Conexiunea emoțională cu adulții din jurul lui" },
          { value: "D", label: "Abilități practice pentru viața reală (bani, comunicare, prezentare de sine)" },
          { value: "E", label: "Stima de sine și încrederea în el însuși" },
        ],
      },
      {
        id: "P6.4",
        kind: "single",
        prompt: "Cum te descrii ca visionary pentru copilul tău?",
        options: [
          { value: "A", label: "Știu exact ce cale ar trebui să urmeze și lucrez spre asta" },
          { value: "B", label: "Am o imagine generală, dar sunt deschis la ce descoperim împreună" },
          { value: "C", label: "Vreau ca el să-și descopere singur calea — rolul meu e să creez contextul" },
          { value: "D", label: "Nu m-am gândit la asta în profunzime — merg zi cu zi" },
        ],
      },
    ],
  },
  {
    id: "profil-copil",
    title: "Profilul Copilului",
    supplementary: true,
    questions: [
      {
        id: "PC.1",
        kind: "single",
        prompt: "Copilul tău are:",
        options: [
          { value: "A", label: "8–10 ani" },
          { value: "B", label: "11–13 ani" },
          { value: "C", label: "14–16 ani" },
          { value: "D", label: "17–20 ani" },
          { value: "E", label: "Peste 20 de ani" },
        ],
      },
      {
        id: "PC.2",
        kind: "multi-select-max",
        max: 3,
        prompt: "Ce activități îl atrag cel mai mult pe copilul tău? (selectează până la 3)",
        options: [
          { value: "sport", label: "Sport și activitate fizică" },
          { value: "arta", label: "Artă, muzică, dans, teatru" },
          { value: "lectura", label: "Lectură, povești, scris" },
          { value: "jocuri-video", label: "Jocuri video sau tehnologie" },
          { value: "manual", label: "Gătit, bricolaj, lucru manual" },
          { value: "conversatii", label: "Conversații și socializare" },
          { value: "matematica", label: "Matematică și puzzle-uri" },
          { value: "animale", label: "Animale și natură" },
          { value: "performance", label: "Prezentare în fața altora — performance, vorbire în public" },
          { value: "business", label: "Business, bani, organizare" },
        ],
      },
      {
        id: "PC.3",
        kind: "multi-select-max",
        max: 2,
        prompt: "Ce provocări observi la copilul tău? (selectează până la 2)",
        options: [
          { value: "timiditate", label: "Timiditate sau lipsă de încredere" },
          { value: "concentrare", label: "Dificultăți de concentrare" },
          { value: "relatii", label: "Relații sociale dificile" },
          { value: "motivatie", label: "Lipsă de motivație pentru școală" },
          { value: "anxietate", label: "Anxietate sau îngrijorare excesivă" },
          { value: "autoreglare", label: "Dificultăți de autoreglare sau impulsivitate" },
          { value: "directie", label: "Lipsă de direcție sau de interes" },
          { value: "niciuna", label: "Nu observ provocări semnificative" },
        ],
      },
      {
        id: "PC.4",
        kind: "single",
        prompt: "Ce ai vrea ca un curs sau program să dezvolte la copilul tău?",
        options: [
          { value: "A", label: "Prezența fizică, imaginea și încrederea în sine" },
          { value: "B", label: "Comunicarea și exprimarea în public" },
          { value: "C", label: "Gândirea practică — bani, afaceri, responsabilitate" },
          { value: "D", label: "Nu sunt sigur — aș vrea o recomandare pe baza profilului" },
        ],
      },
    ],
  },
];
