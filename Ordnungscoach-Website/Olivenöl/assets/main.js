const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const supportedLanguages = ["de", "it", "en", "fr"];
const defaultLanguage = "de";

const translations = {
  de: {
    pageTitles: {
      "index.html": "Mangiaracina Import | Extra Vergine Olivenöl",
      "produkte.html": "Produkte | Mangiaracina Import",
      "preise.html": "Preise | Mangiaracina Import",
      "blog.html": "Blog | Mangiaracina Import",
      "ueber-uns.html": "Über uns | Mangiaracina Import",
      "kontakt.html": "Kontakt | Mangiaracina Import",
      "galerie.html": "Galerie | Mangiaracina Import",
      "impressum.html": "Impressum | Mangiaracina Import",
      "datenschutz.html": "Datenschutz | Mangiaracina Import",
      "agb.html": "AGB | Mangiaracina Import",
      "404.html": "404 | Seite nicht gefunden"
    },
    common: {
      language_label: "Sprache wählen",
      nav_toggle: "Menü öffnen",
      nav_home: "Start",
      nav_products: "Produkte & Preise",
      nav_gallery: "Galerie",
      nav_prices: "Preise",
      nav_faq: "FAQ",
      nav_about: "Über uns",
      nav_blog: "Blog",
      nav_contact: "Kontakt",
      footer_imprint: "Impressum",
      footer_privacy: "Datenschutz",
      footer_terms: "AGB",
      footer_blog: "Blog",
      form_name: "Name",
      form_name_placeholder: "Vorname Nachname",
      form_email: "E-Mail",
      form_email_placeholder: "name@mail.ch",
      form_product: "Produkt",
      form_message: "Nachricht",
      form_message_placeholder: "Menge, Lieferadresse, Wunschdatum",
      form_privacy: "Ich habe die <a href=\"datenschutz.html\">Datenschutzerklärung</a> gelesen.",
      form_submit: "Bestellanfrage senden",
      contact_email_label: "E-Mail:",
      contact_phone_label: "Telefon:",
      not_found_title: "404 - Seite nicht gefunden",
      not_found_text: "Zurück zur <a href=\"index.html\">Startseite von Mangiaracina Import</a>."
    },
    index: {
      hero_badge: "<span class=\"dot\" aria-hidden=\"true\"></span>Extra Vergine Olivenöl · Nocellara del Belice · Import seit 2005",
      hero_title: "Olivenöl aus Sizilien -<br><span class=\"gradientText\">direkt zu dir nach Hause.</span>",
      hero_text: "Mangiaracina Import ist ein Familienunternehmen aus Spreitenbach. Wir liefern hochwertiges, kaltgepresstes Olivenöl in Glasflaschen und Kanistern.",
      hero_cta_primary: "Jetzt bestellen",
      hero_cta_secondary: "Produkte & Preise",
      stat_1_num: "Seit 2005",
      stat_1_label: "Produktion, Import und Verkauf",
      stat_2_num: "Säure unter 0.2%",
      stat_2_label: "kaltgepresst und naturrein",
      stat_3_num: "Handernte",
      stat_3_label: "Nocellara del Belice",
      quick_title: "Schnellbestellung",
      quick_text: "Antwort in der Regel innerhalb von 24h.",
      news_title: "Aktuelles",
      news_text: "Ernte, Liefertermine und saisonale Hinweise.",
      chapter_title: "Kapitel entdecken",
      chapter_text: "Die Inhalte sind auf eigene Seiten verteilt, damit die Website klarer und schneller navigierbar bleibt."
    },
    products: {
      hero_title: "Produkte und Preise",
      hero_text: "Extra Vergine Olivenöl in Flaschen und Kanistern.",
      note_title: "Hinweise"
    },
    prices: {
      hero_title: "Produkte & Preise",
      hero_text: "Alle verfügbaren Gebinde mit Richtpreisen und Versandhinweisen auf einen Blick.",
      note_title: "Wichtige Hinweise"
    },
    blog: {
      hero_title: "Blog und Hintergrund",
      hero_text: "Kurze Beiträge zu Qualität, Lagerung, Herkunft und Verwendung von Olivenöl.",
      list_title: "Aktuelle Beiträge",
      list_text: "Ein kompakter Überblick über Ernte, Qualität und Küchenpraxis."
    },
    about: {
      hero_title: "Über Mangiaracina Import",
      hero_text: "Familienbetrieb mit Fokus auf Herkunft, Qualität und direkten Kundenkontakt.",
      story_title: "Unsere Geschichte",
      story_text: "Seit 2005 importieren wir hochwertiges Olivenöl aus Sizilien in die Schweiz. Unser Ziel ist ein ehrliches Produkt mit klarer Herkunft.",
      quality_title: "Unser Qualitätsanspruch",
      quality_text: "Kurze Wege zwischen Ernte und Pressung, kontrollierte Verarbeitung und direkte Distribution ohne Zwischenhändler.",
      gallery_title: "Galerie",
      gallery_text: "Einblicke in Ernte, Produktion und Abfüllung.",
      gallery_cta: "Kontakt aufnehmen",
      gallery_cap_1: "Extra Vergine Olivenöl",
      gallery_cap_2: "Flaschen und Etiketten",
      gallery_cap_3: "Olivenhaine in Sizilien",
      gallery_cap_4: "Ernte im Olivenhain",
      gallery_cap_5: "Oliven vor der Pressung",
      gallery_cap_6: "Frische Ölproduktion"
    },
    contact: {
      hero_title: "Kontakt und Bestellung",
      hero_text: "Wir beraten dich gerne zu Mengen, Versand und Lieferterminen.",
      direct_title: "Direkter Kontakt",
      company_label: "Firma:",
      person_label: "Ansprechperson:",
      address_label: "Adresse:",
      mobile_label: "Mobile:",
      form_title: "Bestellanfrage",
      faq_title: "Häufige Fragen",
      faq_text: "Antworten zu Bestellung, Versand und Produktqualität."
    },
    gallery: {
      redirect_title: "Galerie verschoben",
      redirect_text: "Die Galerie ist jetzt in der Seite Über uns integriert.",
      redirect_cta: "Zur Galerie in Über uns"
    },
    legal: {
      imprint_title: "Impressum",
      company_label: "Firma:",
      owner_label: "Inhaber:",
      address_label: "Adresse:",
      privacy_title: "Datenschutzerklärung",
      privacy_data_title: "Welche Daten",
      privacy_data_text: "Wir verarbeiten Kontaktangaben aus Formular, E-Mail oder Telefon sowie technische Server-Logdaten.",
      privacy_purpose_title: "Zweck",
      privacy_purpose_text: "Verarbeitung zur Bearbeitung von Bestellungen, Anfragen und Lieferabwicklung.",
      privacy_share_title: "Weitergabe",
      privacy_share_text: "Eine Weitergabe erfolgt nur, wenn dies für Versand, Abrechnung oder gesetzliche Pflichten notwendig ist.",
      privacy_rights_title: "Ihre Rechte",
      privacy_rights_text: "Sie haben das Recht auf Auskunft, Berichtigung und Löschung im Rahmen der gesetzlichen Vorgaben.",
      terms_title: "AGB",
      terms_1_title: "1. Geltungsbereich",
      terms_1_text: "Diese AGB gelten für alle Lieferungen und Verkäufe von Mangiaracina Import.",
      terms_2_title: "2. Produkte und Preise",
      terms_2_text: "Alle Preise verstehen sich in CHF. Produktinformationen erfolgen nach bestem Wissen.",
      terms_3_title: "3. Bestellung und Zahlung",
      terms_3_text: "Bestellungen erfolgen per Formular, E-Mail oder Telefon. Zahlung gemäss vereinbarter Kondition.",
      terms_4_title: "4. Lieferung",
      terms_4_text: "Lieferung in der Schweiz nach Absprache. Versandkosten werden transparent ausgewiesen.",
      terms_5_title: "5. Haftung",
      terms_5_text: "Es gelten die gesetzlichen Bestimmungen. Eine weitergehende Haftung wird ausgeschlossen, soweit zulässig."
    },
    dynamic: {
      buttons: { ask: "Anfragen", order: "Bestellen", read: "Lesen", contact: "Mehr" },
      form_sent: "Gesendet (Demo). Für echte Bestellungen: E-Mail, Telefon oder eigenes Backend anbinden.",
      news: [
        { title: "Neue Ernte verfügbar", text: "Die aktuelle Charge aus Sizilien ist eingetroffen und sofort lieferbar." },
        { title: "Direktbestellung", text: "Bestellungen per Formular, E-Mail oder Telefon. Antwort meist am selben Werktag." }
      ],
      offers: [
        { title: "500 ml Glasflasche", badge: "Classic", text: "Ideal für den täglichen Einsatz in kalten und warmen Gerichten." },
        { title: "6 x 500 ml Karton", badge: "Plus Bestseller", text: "Preisvorteil für Familien und Vielverbraucher." },
        { title: "5 Liter Kanister", badge: "Gastro", text: "Für Gastronomie, Events und Großverbrauch." }
      ],
      prices: [
        { title: "Basic", price: "CHF 20.00", sub: "1 x 500 ml", image: "https://mangiaracina.ch/img/prod1.png", bullets: ["Extra Vergine", "Nocellara del Belice", "Versand: CHF 9.90"] },
        { title: "Plus", price: "CHF 120.00", sub: "6 x 500 ml", image: "https://mangiaracina.ch/img/prod2.png", bullets: ["Extra Vergine", "Karton mit 6 Flaschen", "Versand: CHF 20.00"] },
        { title: "Ultra", price: "CHF 120.00", sub: "1 x 5 Liter", image: "https://mangiaracina.ch/img/prod3.png", bullets: ["Extra Vergine", "Kanister für Haushalt/Gastro", "Versand: CHF 20.00"] }
      ],
      refs: [
        { title: "Anbaugebiet", text: "Campobello di Mazara und Castelvetrano in der Provinz Trapani, Sizilien." },
        { title: "Ernte und Pressung", text: "Handernte und schonende Kaltpressung bei niedriger Temperatur." },
        { title: "Produktprofil", text: "Fruchtig, leicht pikant, mit Noten von Artischocke und Kräutern." }
      ],
      reviews: [
        { name: "Familie P. (Aargau)", stars: 5, text: "Sehr aromatisch und frisch. Wir bestellen regelmässig nach." },
        { name: "Restaurant C. (ZH)", stars: 5, text: "Konstante Qualität und zuverlässige Lieferung." },
        { name: "M. (Baden)", stars: 5, text: "Top Preis-Leistung für echtes extra vergine Olivenöl." }
      ],
      faq: [
        { q: "Wie bestelle ich?", a: "Per Formular, E-Mail oder Telefon. Wir bestätigen Menge, Preis und Lieferung." },
        { q: "Wie wird das Öl geliefert?", a: "Per Paketversand in der Schweiz oder nach Absprache zur Abholung." },
        { q: "Welche Sorte ist enthalten?", a: "Ausschliesslich Nocellara del Belice aus dem Südwesten Siziliens." },
        { q: "Ist das Öl filtriert?", a: "Das Öl wird naturrein abgefüllt und kann leichte natürliche Trübungen zeigen." }
      ],
      blogPosts: [
        { title: "Woran erkennt man gutes Olivenöl?", date: "2026-03-01", text: "Herkunft, Erntezeitpunkt, Pressung und Säurewert sind entscheidend." },
        { title: "Olivenöl richtig lagern", date: "2026-02-10", text: "Kühl, dunkel und gut verschlossen lagern." },
        { title: "Nocellara del Belice in der Küche", date: "2026-01-20", text: "Ideal zu Gemüse, Pasta, Fisch und als Finishing-Öl." }
      ],
      productOptions: [
        { value: "1 x 500 ml", label: "1 x 500 ml Glasflasche" },
        { value: "6 x 500 ml", label: "6 x 500 ml Karton" },
        { value: "1 x 5 Liter", label: "1 x 5 Liter Kanister" },
        { value: "Firmenkunde / Gastro", label: "Firmenkunde / Gastro" }
      ],
      productNotes: [
        "Lieferung in der Schweiz nach Absprache.",
        "Preise verstehen sich pro Einheit inklusive MwSt.",
        "Für grössere Mengen bitte direkt Kontakt aufnehmen."
      ],
      aboutFacts: [
        "Direkter Import aus Sizilien seit 2005",
        "Persönlicher Kontakt statt anonymem Shop",
        "Fokus auf nachvollziehbare Herkunft"
      ],
      aboutChips: ["Kaltpressung", "Direktimport", "Handernte", "Naturrein"],
      chapters: [
        { title: "Produkte & Preise", text: "Alle Formate, Preise und Versandhinweise im Überblick.", href: "preise.html" },
        { title: "Über uns", text: "Herkunft, Familienbetrieb und Galerie aus Sizilien.", href: "ueber-uns.html" },
        { title: "Kontakt", text: "Bestellung, Beratung und direkte Erreichbarkeit.", href: "kontakt.html" }
      ]
    }
  },
  it: {
    pageTitles: {
      "index.html": "Mangiaracina Import | Olio extra vergine di oliva",
      "produkte.html": "Prodotti | Mangiaracina Import",
      "preise.html": "Prezzi | Mangiaracina Import",
      "blog.html": "Blog | Mangiaracina Import",
      "ueber-uns.html": "Chi siamo | Mangiaracina Import",
      "kontakt.html": "Contatto | Mangiaracina Import",
      "galerie.html": "Galleria | Mangiaracina Import",
      "impressum.html": "Note legali | Mangiaracina Import",
      "datenschutz.html": "Privacy | Mangiaracina Import",
      "agb.html": "Condizioni generali | Mangiaracina Import",
      "404.html": "404 | Pagina non trovata"
    },
    common: {
      language_label: "Seleziona lingua",
      nav_toggle: "Apri menu",
      nav_home: "Home",
      nav_products: "Prodotti e prezzi",
      nav_gallery: "Galleria",
      nav_prices: "Prezzi",
      nav_faq: "FAQ",
      nav_about: "Chi siamo",
      nav_blog: "Blog",
      nav_contact: "Contatto",
      footer_imprint: "Note legali",
      footer_privacy: "Privacy",
      footer_terms: "Condizioni generali",
      footer_blog: "Blog",
      form_name: "Nome",
      form_name_placeholder: "Nome Cognome",
      form_email: "E-mail",
      form_email_placeholder: "nome@mail.ch",
      form_product: "Prodotto",
      form_message: "Messaggio",
      form_message_placeholder: "Quantita, indirizzo di consegna, data desiderata",
      form_privacy: "Ho letto l'<a href=\"datenschutz.html\">informativa sulla privacy</a>.",
      form_submit: "Invia richiesta d'ordine",
      contact_email_label: "E-mail:",
      contact_phone_label: "Telefono:",
      not_found_title: "404 - Pagina non trovata",
      not_found_text: "Torna alla <a href=\"index.html\">home page di Mangiaracina Import</a>."
    },
    index: {
      hero_badge: "<span class=\"dot\" aria-hidden=\"true\"></span>Olio extra vergine · Nocellara del Belice · Importazione dal 2005",
      hero_title: "Olio dalla Sicilia -<br><span class=\"gradientText\">direttamente a casa tua.</span>",
      hero_text: "Mangiaracina Import e una realta familiare di Spreitenbach. Forniamo olio extra vergine spremuto a freddo in bottiglie di vetro e latte.",
      hero_cta_primary: "Ordina ora",
      hero_cta_secondary: "Prodotti e prezzi",
      stat_1_num: "Dal 2005",
      stat_1_label: "Produzione, importazione e vendita",
      stat_2_num: "Acidita sotto 0.2%",
      stat_2_label: "spremuto a freddo e naturale",
      stat_3_num: "Raccolta a mano",
      stat_3_label: "Nocellara del Belice",
      quick_title: "Ordine rapido",
      quick_text: "Risposta di norma entro 24 ore.",
      news_title: "Novita",
      news_text: "Raccolto, consegne e indicazioni stagionali.",
      chapter_title: "Scopri le sezioni",
      chapter_text: "I contenuti sono distribuiti su pagine dedicate per rendere il sito piu chiaro e veloce."
    },
    products: { hero_title: "Prodotti e prezzi", hero_text: "Olio extra vergine in bottiglie e latte.", note_title: "Note" },
    prices: { hero_title: "Prodotti e prezzi", hero_text: "Tutti i formati disponibili con prezzi indicativi e note sulla spedizione.", note_title: "Indicazioni importanti" },
    blog: { hero_title: "Blog e approfondimenti", hero_text: "Brevi articoli su qualita, conservazione, origine e uso dell'olio d'oliva.", list_title: "Articoli recenti", list_text: "Una panoramica compatta su raccolta, qualita e cucina." },
    about: {
      hero_title: "Chi e Mangiaracina Import",
      hero_text: "Azienda familiare con attenzione a origine, qualita e contatto diretto.",
      story_title: "La nostra storia",
      story_text: "Dal 2005 importiamo olio di alta qualita dalla Sicilia in Svizzera. Il nostro obiettivo e un prodotto onesto con origine chiara.",
      quality_title: "Il nostro standard di qualita",
      quality_text: "Tempi brevi tra raccolta e spremitura, lavorazione controllata e distribuzione diretta senza intermediari.",
      gallery_title: "Galleria",
      gallery_text: "Uno sguardo a raccolta, produzione e imbottigliamento.",
      gallery_cta: "Contattaci",
      gallery_cap_1: "Olio extra vergine",
      gallery_cap_2: "Bottiglie ed etichette",
      gallery_cap_3: "Uliveti in Sicilia",
      gallery_cap_4: "Raccolta nell'uliveto",
      gallery_cap_5: "Olive prima della spremitura",
      gallery_cap_6: "Produzione di olio fresco"
    },
    contact: {
      hero_title: "Contatto e ordine",
      hero_text: "Ti consigliamo volentieri su quantita, spedizione e tempi di consegna.",
      direct_title: "Contatto diretto",
      company_label: "Azienda:",
      person_label: "Referente:",
      address_label: "Indirizzo:",
      mobile_label: "Cellulare:",
      form_title: "Richiesta d'ordine",
      faq_title: "Domande frequenti",
      faq_text: "Risposte su ordini, spedizione e qualita del prodotto."
    },
    gallery: { redirect_title: "Galleria spostata", redirect_text: "La galleria e ora integrata nella pagina Chi siamo.", redirect_cta: "Vai alla galleria in Chi siamo" },
    legal: {
      imprint_title: "Note legali",
      company_label: "Azienda:",
      owner_label: "Titolare:",
      address_label: "Indirizzo:",
      privacy_title: "Informativa sulla privacy",
      privacy_data_title: "Quali dati",
      privacy_data_text: "Trattiamo dati di contatto da modulo, e-mail o telefono e dati tecnici di log del server.",
      privacy_purpose_title: "Finalita",
      privacy_purpose_text: "Trattamento per ordini, richieste e gestione della consegna.",
      privacy_share_title: "Comunicazione a terzi",
      privacy_share_text: "La comunicazione avviene solo se necessaria per spedizione, fatturazione o obblighi legali.",
      privacy_rights_title: "I tuoi diritti",
      privacy_rights_text: "Hai diritto di accesso, rettifica e cancellazione nei limiti previsti dalla legge.",
      terms_title: "Condizioni generali",
      terms_1_title: "1. Ambito di applicazione",
      terms_1_text: "Queste condizioni si applicano a tutte le forniture e vendite di Mangiaracina Import.",
      terms_2_title: "2. Prodotti e prezzi",
      terms_2_text: "Tutti i prezzi sono in CHF. Le informazioni sui prodotti sono fornite al meglio delle nostre conoscenze.",
      terms_3_title: "3. Ordine e pagamento",
      terms_3_text: "Gli ordini avvengono tramite modulo, e-mail o telefono. Il pagamento segue le condizioni concordate.",
      terms_4_title: "4. Consegna",
      terms_4_text: "Consegna in Svizzera previo accordo. I costi di spedizione sono indicati in modo trasparente.",
      terms_5_title: "5. Responsabilita",
      terms_5_text: "Si applicano le disposizioni di legge. E esclusa ogni ulteriore responsabilita ove consentito."
    },
    dynamic: {
      buttons: { ask: "Richiedi", order: "Ordina", read: "Leggi", contact: "Vai" },
      form_sent: "Inviato (demo). Per ordini reali: usa e-mail, telefono o collega un backend.",
      news: [{ title: "Nuovo raccolto disponibile", text: "Il lotto attuale dalla Sicilia e arrivato ed e subito disponibile." }, { title: "Ordine diretto", text: "Ordini tramite modulo, e-mail o telefono. Risposta di solito nello stesso giorno lavorativo." }],
      offers: [{ title: "Bottiglia in vetro 500 ml", badge: "Classic", text: "Ideale per l'uso quotidiano in piatti freddi e caldi." }, { title: "Cartone 6 x 500 ml", badge: "Plus Bestseller", text: "Vantaggio di prezzo per famiglie e grandi consumatori." }, { title: "Latta da 5 litri", badge: "Gastro", text: "Per ristorazione, eventi e grandi volumi." }],
      prices: [{ title: "Basic", price: "CHF 20.00", sub: "1 x 500 ml", image: "https://mangiaracina.ch/img/prod1.png", bullets: ["Extra Vergine", "Nocellara del Belice", "Spedizione: CHF 9.90"] }, { title: "Plus", price: "CHF 120.00", sub: "6 x 500 ml", image: "https://mangiaracina.ch/img/prod2.png", bullets: ["Extra Vergine", "Cartone da 6 bottiglie", "Spedizione: CHF 20.00"] }, { title: "Ultra", price: "CHF 120.00", sub: "1 x 5 litri", image: "https://mangiaracina.ch/img/prod3.png", bullets: ["Extra Vergine", "Latta per casa o ristorazione", "Spedizione: CHF 20.00"] }],
      refs: [{ title: "Zona di coltivazione", text: "Campobello di Mazara e Castelvetrano, provincia di Trapani, Sicilia." }, { title: "Raccolta e spremitura", text: "Raccolta a mano e spremitura a freddo a bassa temperatura." }, { title: "Profilo del prodotto", text: "Fruttato, leggermente piccante, con note di carciofo ed erbe." }],
      reviews: [{ name: "Famiglia P. (Argovia)", stars: 5, text: "Molto aromatico e fresco. Ordiniamo regolarmente." }, { name: "Ristorante C. (ZH)", stars: 5, text: "Qualita costante e consegna affidabile." }, { name: "M. (Baden)", stars: 5, text: "Ottimo rapporto qualita-prezzo per vero olio extra vergine." }],
      faq: [{ q: "Come posso ordinare?", a: "Tramite modulo, e-mail o telefono. Confermiamo quantita, prezzo e consegna." }, { q: "Come viene consegnato l'olio?", a: "Con spedizione in Svizzera o ritiro previo accordo." }, { q: "Quale varieta contiene?", a: "Esclusivamente Nocellara del Belice dal sud-ovest della Sicilia." }, { q: "L'olio e filtrato?", a: "L'olio e imbottigliato naturale e puo mostrare leggere velature naturali." }],
      blogPosts: [{ title: "Come riconoscere un buon olio?", date: "2026-03-01", text: "Origine, periodo di raccolta, spremitura e acidita sono decisivi." }, { title: "Conservare correttamente l'olio", date: "2026-02-10", text: "Conservare al fresco, al buio e ben chiuso." }, { title: "Nocellara del Belice in cucina", date: "2026-01-20", text: "Ideale con verdure, pasta, pesce e come olio finale." }],
      productOptions: [{ value: "500ml", label: "1 x 500 ml bottiglia in vetro" }, { value: "6x500ml", label: "6 x 500 ml cartone" }, { value: "5l", label: "1 x 5 litri latta" }, { value: "gastro", label: "Azienda / Gastro" }],
      productNotes: ["Consegna in Svizzera previo accordo.", "Prezzi per unita, IVA inclusa.", "Per quantita maggiori contattaci direttamente."],
      aboutFacts: ["Importazione diretta dalla Sicilia dal 2005", "Contatto personale invece di uno shop anonimo", "Forte attenzione a origine tracciabile"],
      aboutChips: ["Spremitura a freddo", "Import diretto", "Raccolta a mano", "Naturale"],
      chapters: [{ title: "Prodotti e prezzi", text: "Formati, prezzi e spedizione in un colpo d'occhio.", href: "preise.html" }, { title: "Chi siamo", text: "Origine, azienda familiare e galleria dalla Sicilia.", href: "ueber-uns.html" }, { title: "Contatto", text: "Ordini, consulenza e contatto diretto.", href: "kontakt.html" }]
    }
  },
  en: {
    pageTitles: {
      "index.html": "Mangiaracina Import | Extra virgin olive oil",
      "produkte.html": "Products | Mangiaracina Import",
      "preise.html": "Prices | Mangiaracina Import",
      "blog.html": "Blog | Mangiaracina Import",
      "ueber-uns.html": "About | Mangiaracina Import",
      "kontakt.html": "Contact | Mangiaracina Import",
      "galerie.html": "Gallery | Mangiaracina Import",
      "impressum.html": "Imprint | Mangiaracina Import",
      "datenschutz.html": "Privacy | Mangiaracina Import",
      "agb.html": "Terms | Mangiaracina Import",
      "404.html": "404 | Page not found"
    },
    common: {
      language_label: "Choose language",
      nav_toggle: "Open menu",
      nav_home: "Home",
      nav_products: "Products & Prices",
      nav_gallery: "Gallery",
      nav_prices: "Prices",
      nav_faq: "FAQ",
      nav_about: "About",
      nav_blog: "Blog",
      nav_contact: "Contact",
      footer_imprint: "Imprint",
      footer_privacy: "Privacy",
      footer_terms: "Terms",
      footer_blog: "Blog",
      form_name: "Name",
      form_name_placeholder: "First name Last name",
      form_email: "Email",
      form_email_placeholder: "name@mail.ch",
      form_product: "Product",
      form_message: "Message",
      form_message_placeholder: "Quantity, delivery address, preferred date",
      form_privacy: "I have read the <a href=\"datenschutz.html\">privacy policy</a>.",
      form_submit: "Send order request",
      contact_email_label: "Email:",
      contact_phone_label: "Phone:",
      not_found_title: "404 - Page not found",
      not_found_text: "Back to the <a href=\"index.html\">Mangiaracina Import home page</a>."
    },
    index: {
      hero_badge: "<span class=\"dot\" aria-hidden=\"true\"></span>Extra virgin olive oil · Nocellara del Belice · Imported since 2005",
      hero_title: "Olive oil from Sicily -<br><span class=\"gradientText\">directly to your home.</span>",
      hero_text: "Mangiaracina Import is a family business from Spreitenbach. We deliver high-quality cold-pressed olive oil in glass bottles and canisters.",
      hero_cta_primary: "Order now",
      hero_cta_secondary: "Products & Prices",
      stat_1_num: "Since 2005",
      stat_1_label: "Production, import and sales",
      stat_2_num: "Acidity below 0.2%",
      stat_2_label: "cold-pressed and natural",
      stat_3_num: "Hand harvest",
      stat_3_label: "Nocellara del Belice",
      quick_title: "Quick order",
      quick_text: "Usually answered within 24h.",
      news_title: "News",
      news_text: "Harvest, deliveries and seasonal updates.",
      chapter_title: "Explore sections",
      chapter_text: "The content is split across dedicated pages to keep the site clearer and faster to navigate."
    },
    products: { hero_title: "Products and prices", hero_text: "Extra virgin olive oil in bottles and canisters.", note_title: "Notes" },
    prices: { hero_title: "Products & Prices", hero_text: "All available formats with guide prices and shipping notes at a glance.", note_title: "Important notes" },
    blog: { hero_title: "Blog and background", hero_text: "Short articles on quality, storage, origin and everyday use of olive oil.", list_title: "Recent posts", list_text: "A compact overview of harvest, quality and kitchen use." },
    about: {
      hero_title: "About Mangiaracina Import",
      hero_text: "Family-run business focused on origin, quality and direct customer contact.",
      story_title: "Our story",
      story_text: "Since 2005 we have been importing high-quality olive oil from Sicily to Switzerland. Our goal is an honest product with clear origin.",
      quality_title: "Our quality standard",
      quality_text: "Short time between harvest and pressing, controlled processing and direct distribution without middlemen.",
      gallery_title: "Gallery",
      gallery_text: "Insights into harvest, production and bottling.",
      gallery_cta: "Get in touch",
      gallery_cap_1: "Extra virgin olive oil",
      gallery_cap_2: "Bottles and labels",
      gallery_cap_3: "Olive groves in Sicily",
      gallery_cap_4: "Harvest in the grove",
      gallery_cap_5: "Olives before pressing",
      gallery_cap_6: "Fresh oil production"
    },
    contact: {
      hero_title: "Contact and ordering",
      hero_text: "We are happy to advise you on quantities, shipping and delivery dates.",
      direct_title: "Direct contact",
      company_label: "Company:",
      person_label: "Contact person:",
      address_label: "Address:",
      mobile_label: "Mobile:",
      form_title: "Order request",
      faq_title: "Frequently asked questions",
      faq_text: "Answers about ordering, shipping and product quality."
    },
    gallery: { redirect_title: "Gallery moved", redirect_text: "The gallery is now integrated into the About page.", redirect_cta: "Go to the gallery in About" },
    legal: {
      imprint_title: "Imprint",
      company_label: "Company:",
      owner_label: "Owner:",
      address_label: "Address:",
      privacy_title: "Privacy policy",
      privacy_data_title: "What data",
      privacy_data_text: "We process contact details from forms, email or phone as well as technical server log data.",
      privacy_purpose_title: "Purpose",
      privacy_purpose_text: "Processing for orders, enquiries and delivery handling.",
      privacy_share_title: "Sharing",
      privacy_share_text: "Data is shared only when necessary for shipping, invoicing or legal obligations.",
      privacy_rights_title: "Your rights",
      privacy_rights_text: "You have the right to access, correction and deletion within the legal framework.",
      terms_title: "Terms and conditions",
      terms_1_title: "1. Scope",
      terms_1_text: "These terms apply to all deliveries and sales by Mangiaracina Import.",
      terms_2_title: "2. Products and prices",
      terms_2_text: "All prices are in CHF. Product information is provided to the best of our knowledge.",
      terms_3_title: "3. Ordering and payment",
      terms_3_text: "Orders are placed via form, email or phone. Payment follows the agreed terms.",
      terms_4_title: "4. Delivery",
      terms_4_text: "Delivery within Switzerland by arrangement. Shipping costs are shown transparently.",
      terms_5_title: "5. Liability",
      terms_5_text: "Statutory provisions apply. Any further liability is excluded where permitted."
    },
    dynamic: {
      buttons: { ask: "Enquire", order: "Order", read: "Read", contact: "Open" },
      form_sent: "Sent (demo). For real orders use email, phone or connect your own backend.",
      news: [{ title: "New harvest available", text: "The current batch from Sicily has arrived and is ready for delivery." }, { title: "Direct ordering", text: "Orders by form, email or phone. Usually answered on the same business day." }],
      offers: [{ title: "500 ml glass bottle", badge: "Classic", text: "Ideal for daily use in cold and warm dishes." }, { title: "6 x 500 ml carton", badge: "Plus Bestseller", text: "Better value for families and frequent users." }, { title: "5 litre canister", badge: "Gastro", text: "For hospitality, events and higher volume use." }],
      prices: [{ title: "Basic", price: "CHF 20.00", sub: "1 x 500 ml", image: "https://mangiaracina.ch/img/prod1.png", bullets: ["Extra virgin", "Nocellara del Belice", "Shipping: CHF 9.90"] }, { title: "Plus", price: "CHF 120.00", sub: "6 x 500 ml", image: "https://mangiaracina.ch/img/prod2.png", bullets: ["Extra virgin", "Carton with 6 bottles", "Shipping: CHF 20.00"] }, { title: "Ultra", price: "CHF 120.00", sub: "1 x 5 litres", image: "https://mangiaracina.ch/img/prod3.png", bullets: ["Extra virgin", "Canister for home or catering", "Shipping: CHF 20.00"] }],
      refs: [{ title: "Growing area", text: "Campobello di Mazara and Castelvetrano in the province of Trapani, Sicily." }, { title: "Harvest and pressing", text: "Hand-picked and gently cold-pressed at low temperature." }, { title: "Product profile", text: "Fruity, lightly peppery, with notes of artichoke and herbs." }],
      reviews: [{ name: "P. family (Aargau)", stars: 5, text: "Very aromatic and fresh. We order regularly." }, { name: "Restaurant C. (ZH)", stars: 5, text: "Consistent quality and reliable delivery." }, { name: "M. (Baden)", stars: 5, text: "Great value for real extra virgin olive oil." }],
      faq: [{ q: "How do I order?", a: "By form, email or phone. We confirm quantity, price and delivery." }, { q: "How is the oil delivered?", a: "By parcel shipment within Switzerland or collection by arrangement." }, { q: "Which variety is included?", a: "Exclusively Nocellara del Belice from south-west Sicily." }, { q: "Is the oil filtered?", a: "The oil is bottled naturally and may show slight natural cloudiness." }],
      blogPosts: [{ title: "How do you spot good olive oil?", date: "2026-03-01", text: "Origin, harvest timing, pressing and acidity are decisive." }, { title: "How to store olive oil", date: "2026-02-10", text: "Store cool, dark and tightly closed." }, { title: "Nocellara del Belice in the kitchen", date: "2026-01-20", text: "Ideal with vegetables, pasta, fish and as a finishing oil." }],
      productOptions: [{ value: "500ml", label: "1 x 500 ml glass bottle" }, { value: "6x500ml", label: "6 x 500 ml carton" }, { value: "5l", label: "1 x 5 litre canister" }, { value: "gastro", label: "Business / Gastro" }],
      productNotes: ["Delivery within Switzerland by arrangement.", "Prices are per unit including VAT.", "For larger volumes please contact us directly."],
      aboutFacts: ["Direct import from Sicily since 2005", "Personal contact instead of an anonymous shop", "Focus on transparent origin"],
      aboutChips: ["Cold-pressed", "Direct import", "Hand harvest", "Natural"],
      chapters: [{ title: "Products & Prices", text: "Formats, pricing and shipping details at a glance.", href: "preise.html" }, { title: "About", text: "Origin, family business and gallery from Sicily.", href: "ueber-uns.html" }, { title: "Contact", text: "Ordering, advice and direct reachability.", href: "kontakt.html" }]
    }
  },
  fr: {
    pageTitles: {
      "index.html": "Mangiaracina Import | Huile d'olive vierge extra",
      "produkte.html": "Produits | Mangiaracina Import",
      "preise.html": "Prix | Mangiaracina Import",
      "blog.html": "Blog | Mangiaracina Import",
      "ueber-uns.html": "A propos | Mangiaracina Import",
      "kontakt.html": "Contact | Mangiaracina Import",
      "galerie.html": "Galerie | Mangiaracina Import",
      "impressum.html": "Mentions legales | Mangiaracina Import",
      "datenschutz.html": "Confidentialite | Mangiaracina Import",
      "agb.html": "Conditions generales | Mangiaracina Import",
      "404.html": "404 | Page introuvable"
    },
    common: {
      language_label: "Choisir la langue",
      nav_toggle: "Ouvrir le menu",
      nav_home: "Accueil",
      nav_products: "Produits et prix",
      nav_gallery: "Galerie",
      nav_prices: "Prix",
      nav_faq: "FAQ",
      nav_about: "A propos",
      nav_blog: "Blog",
      nav_contact: "Contact",
      footer_imprint: "Mentions legales",
      footer_privacy: "Confidentialite",
      footer_terms: "Conditions generales",
      footer_blog: "Blog",
      form_name: "Nom",
      form_name_placeholder: "Prenom Nom",
      form_email: "E-mail",
      form_email_placeholder: "nom@mail.ch",
      form_product: "Produit",
      form_message: "Message",
      form_message_placeholder: "Quantite, adresse de livraison, date souhaitee",
      form_privacy: "J'ai lu la <a href=\"datenschutz.html\">declaration de confidentialite</a>.",
      form_submit: "Envoyer la demande de commande",
      contact_email_label: "E-mail:",
      contact_phone_label: "Telephone:",
      not_found_title: "404 - Page introuvable",
      not_found_text: "Retour a la <a href=\"index.html\">page d'accueil de Mangiaracina Import</a>."
    },
    index: {
      hero_badge: "<span class=\"dot\" aria-hidden=\"true\"></span>Huile d'olive vierge extra · Nocellara del Belice · Importation depuis 2005",
      hero_title: "Huile d'olive de Sicile -<br><span class=\"gradientText\">directement chez vous.</span>",
      hero_text: "Mangiaracina Import est une entreprise familiale de Spreitenbach. Nous livrons une huile d'olive de qualite, pressee a froid, en bouteilles et en bidons.",
      hero_cta_primary: "Commander",
      hero_cta_secondary: "Produits et prix",
      stat_1_num: "Depuis 2005",
      stat_1_label: "Production, importation et vente",
      stat_2_num: "Acidite sous 0.2%",
      stat_2_label: "pressee a froid et naturelle",
      stat_3_num: "Recolte manuelle",
      stat_3_label: "Nocellara del Belice",
      quick_title: "Commande rapide",
      quick_text: "Reponse en general sous 24 h.",
      news_title: "Actualites",
      news_text: "Recolte, livraisons et informations saisonnieres.",
      chapter_title: "Decouvrir les sections",
      chapter_text: "Le contenu est reparti sur des pages dediees pour rendre le site plus clair et plus rapide a parcourir."
    },
    products: { hero_title: "Produits et prix", hero_text: "Huile d'olive vierge extra en bouteilles et bidons.", note_title: "Remarques" },
    prices: { hero_title: "Produits et prix", hero_text: "Tous les formats disponibles avec prix indicatifs et informations d'expedition.", note_title: "Informations importantes" },
    blog: { hero_title: "Blog et contenus", hero_text: "De courts articles sur la qualite, la conservation, l'origine et l'usage de l'huile d'olive.", list_title: "Articles recents", list_text: "Un apercu compact sur la recolte, la qualite et l'usage en cuisine." },
    about: {
      hero_title: "A propos de Mangiaracina Import",
      hero_text: "Entreprise familiale axee sur l'origine, la qualite et le contact direct.",
      story_title: "Notre histoire",
      story_text: "Depuis 2005, nous importons une huile d'olive de grande qualite de Sicile vers la Suisse. Notre objectif est un produit honnete avec une origine claire.",
      quality_title: "Notre exigence de qualite",
      quality_text: "Delai court entre recolte et pressage, transformation controlee et distribution directe sans intermediaires.",
      gallery_title: "Galerie",
      gallery_text: "Apercus de la recolte, de la production et de la mise en bouteille.",
      gallery_cta: "Nous contacter",
      gallery_cap_1: "Huile d'olive vierge extra",
      gallery_cap_2: "Bouteilles et etiquettes",
      gallery_cap_3: "Oliveraies en Sicile",
      gallery_cap_4: "Recolte dans l'oliveraie",
      gallery_cap_5: "Olives avant le pressage",
      gallery_cap_6: "Production d'huile fraiche"
    },
    contact: {
      hero_title: "Contact et commande",
      hero_text: "Nous vous conseillons volontiers sur les quantites, l'expedition et les delais de livraison.",
      direct_title: "Contact direct",
      company_label: "Entreprise:",
      person_label: "Interlocuteur:",
      address_label: "Adresse:",
      mobile_label: "Mobile:",
      form_title: "Demande de commande",
      faq_title: "Questions frequentes",
      faq_text: "Reponses sur la commande, l'expedition et la qualite du produit."
    },
    gallery: { redirect_title: "Galerie deplacee", redirect_text: "La galerie est maintenant integree a la page A propos.", redirect_cta: "Aller a la galerie dans A propos" },
    legal: {
      imprint_title: "Mentions legales",
      company_label: "Entreprise:",
      owner_label: "Proprietaire:",
      address_label: "Adresse:",
      privacy_title: "Declaration de confidentialite",
      privacy_data_title: "Quelles donnees",
      privacy_data_text: "Nous traitons les coordonnees issues du formulaire, de l'e-mail ou du telephone ainsi que les journaux techniques du serveur.",
      privacy_purpose_title: "Finalite",
      privacy_purpose_text: "Traitement des commandes, demandes et de la logistique de livraison.",
      privacy_share_title: "Transmission",
      privacy_share_text: "Une transmission n'a lieu que si elle est necessaire pour l'expedition, la facturation ou des obligations legales.",
      privacy_rights_title: "Vos droits",
      privacy_rights_text: "Vous disposez d'un droit d'acces, de rectification et de suppression dans le cadre legal.",
      terms_title: "Conditions generales",
      terms_1_title: "1. Champ d'application",
      terms_1_text: "Ces conditions s'appliquent a toutes les livraisons et ventes de Mangiaracina Import.",
      terms_2_title: "2. Produits et prix",
      terms_2_text: "Tous les prix sont en CHF. Les informations produit sont fournies au mieux de nos connaissances.",
      terms_3_title: "3. Commande et paiement",
      terms_3_text: "Les commandes se font via formulaire, e-mail ou telephone. Le paiement suit les conditions convenues.",
      terms_4_title: "4. Livraison",
      terms_4_text: "Livraison en Suisse sur accord. Les frais d'expedition sont affiches de maniere transparente.",
      terms_5_title: "5. Responsabilite",
      terms_5_text: "Les dispositions legales s'appliquent. Toute responsabilite supplementaire est exclue dans la mesure autorisee."
    },
    dynamic: {
      buttons: { ask: "Demander", order: "Commander", read: "Lire", contact: "Voir" },
      form_sent: "Envoye (demo). Pour de vraies commandes: utilisez l'e-mail, le telephone ou branchez votre propre backend.",
      news: [{ title: "Nouvelle recolte disponible", text: "Le lot actuel de Sicile est arrive et peut etre livre immediatement." }, { title: "Commande directe", text: "Commandes via formulaire, e-mail ou telephone. Reponse generalement le meme jour ouvrable." }],
      offers: [{ title: "Bouteille en verre 500 ml", badge: "Classic", text: "Ideale pour un usage quotidien dans des plats froids ou chauds." }, { title: "Carton 6 x 500 ml", badge: "Plus Bestseller", text: "Avantage prix pour familles et gros consommateurs." }, { title: "Bidon 5 litres", badge: "Gastro", text: "Pour restauration, evenements et volumes plus importants." }],
      prices: [{ title: "Basic", price: "CHF 20.00", sub: "1 x 500 ml", image: "https://mangiaracina.ch/img/prod1.png", bullets: ["Vierge extra", "Nocellara del Belice", "Expedition: CHF 9.90"] }, { title: "Plus", price: "CHF 120.00", sub: "6 x 500 ml", image: "https://mangiaracina.ch/img/prod2.png", bullets: ["Vierge extra", "Carton de 6 bouteilles", "Expedition: CHF 20.00"] }, { title: "Ultra", price: "CHF 120.00", sub: "1 x 5 litres", image: "https://mangiaracina.ch/img/prod3.png", bullets: ["Vierge extra", "Bidon pour maison ou restauration", "Expedition: CHF 20.00"] }],
      refs: [{ title: "Zone de culture", text: "Campobello di Mazara et Castelvetrano dans la province de Trapani, en Sicile." }, { title: "Recolte et pressage", text: "Recolte a la main et pressage a froid a basse temperature." }, { title: "Profil du produit", text: "Fruite, legerement piquant, avec des notes d'artichaut et d'herbes." }],
      reviews: [{ name: "Famille P. (Argovie)", stars: 5, text: "Tres aromatique et frais. Nous commandons regulierement." }, { name: "Restaurant C. (ZH)", stars: 5, text: "Qualite constante et livraison fiable." }, { name: "M. (Baden)", stars: 5, text: "Excellent rapport qualite-prix pour une vraie huile vierge extra." }],
      faq: [{ q: "Comment commander ?", a: "Via formulaire, e-mail ou telephone. Nous confirmons quantite, prix et livraison." }, { q: "Comment l'huile est-elle livree ?", a: "Par colis en Suisse ou retrait sur accord." }, { q: "Quelle variete contient-elle ?", a: "Uniquement la Nocellara del Belice du sud-ouest de la Sicile." }, { q: "L'huile est-elle filtree ?", a: "L'huile est mise en bouteille naturellement et peut presenter un leger trouble naturel." }],
      blogPosts: [{ title: "Comment reconnaitre une bonne huile d'olive ?", date: "2026-03-01", text: "Origine, date de recolte, pressage et acidite sont decisifs." }, { title: "Bien conserver l'huile d'olive", date: "2026-02-10", text: "Conserver au frais, a l'abri de la lumiere et bien ferme." }, { title: "Nocellara del Belice en cuisine", date: "2026-01-20", text: "Ideale avec legumes, pates, poisson et en touche finale." }],
      productOptions: [{ value: "500ml", label: "1 x 500 ml bouteille en verre" }, { value: "6x500ml", label: "6 x 500 ml carton" }, { value: "5l", label: "1 x 5 litres bidon" }, { value: "gastro", label: "Entreprise / Gastro" }],
      productNotes: ["Livraison en Suisse sur accord.", "Prix par unite, TVA incluse.", "Pour de plus grandes quantites, merci de nous contacter directement."],
      aboutFacts: ["Import direct de Sicile depuis 2005", "Contact personnel au lieu d'une boutique anonyme", "Accent mis sur une origine tracable"],
      aboutChips: ["Presse a froid", "Import direct", "Recolte manuelle", "Naturelle"],
      chapters: [{ title: "Produits et prix", text: "Formats, prix et expedition en un coup d'oeil.", href: "preise.html" }, { title: "A propos", text: "Origine, entreprise familiale et galerie de Sicile.", href: "ueber-uns.html" }, { title: "Contact", text: "Commande, conseil et contact direct.", href: "kontakt.html" }]
    }
  }
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[match]));
}

function formatDate(iso, language) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(language === "de" ? "de-CH" : language, {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}

function mountCards(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function getCurrentPage() {
  const parts = window.location.pathname.split("/");
  return parts[parts.length - 1] || "index.html";
}

function getLanguage() {
  const stored = window.localStorage.getItem("siteLanguage");
  if (supportedLanguages.includes(stored)) return stored;
  if (supportedLanguages.includes(document.documentElement.lang)) return document.documentElement.lang;
  return defaultLanguage;
}

function translate(key, language) {
  const read = (obj) => key.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  return read(translations[language]) ?? read(translations[defaultLanguage]) ?? key;
}

function applyPageTitle(language) {
  const title = translations[language].pageTitles[getCurrentPage()];
  if (title) document.title = title;
}

function renderLanguageSelect(language) {
  const select = document.getElementById("langSwitcher");
  if (!select) return;
  const options = [
    { value: "de", label: "Deutsch" },
    { value: "it", label: "Italiano" },
    { value: "en", label: "English" },
    { value: "fr", label: "Français" }
  ];
  select.innerHTML = options.map((option) => `<option value="${option.value}"${option.value === language ? " selected" : ""}>${option.label}</option>`).join("");
  select.setAttribute("aria-label", translate("common.language_label", language));
}

function applyStaticTranslations(language) {
  document.documentElement.lang = language;
  applyPageTitle(language);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translate(el.getAttribute("data-i18n"), language);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = translate(el.getAttribute("data-i18n-html"), language);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", translate(el.getAttribute("data-i18n-placeholder"), language));
  });
  renderLanguageSelect(language);
}

function renderProductSelect(language) {
  const select = document.getElementById("productSelect");
  if (!select) return;
  const previous = select.value;
  const options = translations[language].dynamic.productOptions;
  select.innerHTML = options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
  select.value = options.some((option) => option.value === previous) ? previous : options[0].value;
}

function renderFaq(language) {
  const faqEl = document.getElementById("faqList");
  if (!faqEl) return;
  faqEl.innerHTML = translations[language].dynamic.faq.map((item) => `
    <details>
      <summary>${escapeHtml(item.q)}</summary>
      <p>${escapeHtml(item.a)}</p>
    </details>
  `).join("");
}

function renderProductNotes(language) {
  const notes = document.getElementById("productNotes");
  if (notes) notes.innerHTML = translations[language].dynamic.productNotes.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderAboutFacts(language) {
  const facts = document.getElementById("aboutFacts");
  if (facts) facts.innerHTML = translations[language].dynamic.aboutFacts.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderAboutChips(language) {
  const chips = document.getElementById("aboutChips");
  if (chips) chips.innerHTML = translations[language].dynamic.aboutChips.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("");
}

function renderChapters(language) {
  const data = translations[language].dynamic;
  mountCards("chapterGrid", data.chapters.map((item) => `
    <article class="card">
      <h3 class="h3">${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.text)}</p>
      <a class="btn btn--soft" href="${escapeHtml(item.href)}">${escapeHtml(data.buttons.contact)}</a>
    </article>
  `).join(""));
}

function renderNews(language) {
  const data = translations[language].dynamic;
  mountCards("newsGrid", data.news.map((item) => `
    <article class="card">
      <h3 class="h3">${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.text)}</p>
    </article>
  `).join(""));
}

function renderOffers(language) {
  const data = translations[language].dynamic;
  mountCards("offerGrid", data.offers.map((item) => `
    <article class="card">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
        <h3 class="h3">${escapeHtml(item.title)}</h3>
        <span class="badge" style="padding:8px 12px">${escapeHtml(item.badge)}</span>
      </div>
      <p class="muted">${escapeHtml(item.text)}</p>
      <a class="btn btn--soft" href="kontakt.html">${escapeHtml(data.buttons.ask)}</a>
    </article>
  `).join(""));
}

function renderPrices(language) {
  const data = translations[language].dynamic;
  mountCards("priceGrid", data.prices.map((item) => `
    <article class="card">
      <img class="priceCard__image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
      <h3 class="h3">${escapeHtml(item.title)}</h3>
      <div style="display:flex;align-items:baseline;gap:10px;margin:6px 0 10px">
        <div style="font-weight:900;font-size:30px">${escapeHtml(item.price)}</div>
        <div class="muted">${escapeHtml(item.sub)}</div>
      </div>
      <ul class="list">${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
      <a class="btn btn--primary" href="kontakt.html">${escapeHtml(data.buttons.order)}</a>
    </article>
  `).join(""));
}

function renderRefs(language) {
  mountCards("refGrid", translations[language].dynamic.refs.map((item) => `
    <article class="card">
      <h3 class="h3">${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.text)}</p>
    </article>
  `).join(""));
}

function renderReviews(language) {
  mountCards("reviewGrid", translations[language].dynamic.reviews.map((item) => `
    <article class="card">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
        <strong>${escapeHtml(item.name)}</strong>
        <span aria-label="${item.stars}">${"&#9733;".repeat(item.stars)}</span>
      </div>
      <p class="muted">${escapeHtml(item.text)}</p>
    </article>
  `).join(""));
}

function renderBlogTeaser(language) {
  const data = translations[language].dynamic;
  mountCards("blogTeaser", data.blogPosts.map((item) => `
    <article class="card">
      <p class="muted" style="margin:0 0 6px">${escapeHtml(formatDate(item.date, language))}</p>
      <h3 class="h3">${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.text)}</p>
      <a class="btn btn--soft" href="blog.html">${escapeHtml(data.buttons.read)}</a>
    </article>
  `).join(""));
}

function renderDynamicContent(language) {
  renderProductSelect(language);
  renderNews(language);
  renderOffers(language);
  renderPrices(language);
  renderRefs(language);
  renderReviews(language);
  renderBlogTeaser(language);
  renderFaq(language);
  renderProductNotes(language);
  renderAboutFacts(language);
  renderAboutChips(language);
  renderChapters(language);
}

function applyTranslations(language) {
  applyStaticTranslations(language);
  renderDynamicContent(language);
}

const langSwitcher = document.getElementById("langSwitcher");
let currentLanguage = getLanguage();
applyTranslations(currentLanguage);

if (langSwitcher) {
  langSwitcher.addEventListener("change", (event) => {
    currentLanguage = supportedLanguages.includes(event.target.value) ? event.target.value : defaultLanguage;
    window.localStorage.setItem("siteLanguage", currentLanguage);
    applyTranslations(currentLanguage);
  });
}

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = translations[currentLanguage].dynamic.form_sent;
    form.reset();
    renderProductSelect(currentLanguage);
  });
}


