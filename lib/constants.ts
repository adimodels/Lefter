// Valori de configurare / conținut. Cele marcate „PLACEHOLDER" sunt date de
// business reale care trebuie completate de echipa Adi Academy înainte de
// lansare (nu au fost furnizate în brief-ul tehnic).

export const FREE_REPORTS_LIMIT = 5000;

/** Sub această vârstă, testul Tineri cere consimțământul explicit al părintelui/tutorelui. */
export const MINOR_AGE_THRESHOLD = 16;

export const MIN_AGE = 15;
export const MAX_AGE = 80;

export const SITE_NAME = "Adi Academy";

export const SOCIAL_LINKS = {
  // PLACEHOLDER — link real către contul de Instagram Adi Academy.
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/adiacademy",
};

export const CONTACT_INFO = {
  // PLACEHOLDER — de completat de echipa Adi Academy.
  email: "contact@adiacademy.md",
  phone: "+373 00 000 000",
};

export const LEGAL_INFO = {
  // PLACEHOLDER — denumirea legală exactă / IDNO ale operatorului de date.
  operatorName: "Adi Academy",
  dataRetentionYears: 3,
  deletionRequestDays: 5,
};

export const MOLDOVA_DISTRICTS = [
  "Chișinău",
  "Bălți",
  "Anenii Noi",
  "Basarabeasca",
  "Briceni",
  "Cahul",
  "Cantemir",
  "Călărași",
  "Căușeni",
  "Cimișlia",
  "Criuleni",
  "Dondușeni",
  "Drochia",
  "Dubăsari",
  "Edineț",
  "Fălești",
  "Florești",
  "Glodeni",
  "Hîncești",
  "Ialoveni",
  "Leova",
  "Nisporeni",
  "Ocnița",
  "Orhei",
  "Rezina",
  "Rîșcani",
  "Sîngerei",
  "Soroca",
  "Strășeni",
  "Șoldănești",
  "Ștefan Vodă",
  "Taraclia",
  "Telenești",
  "Ungheni",
  "UTA Găgăuzia",
  "Transnistria",
  "Altă țară / Diaspora",
] as const;
