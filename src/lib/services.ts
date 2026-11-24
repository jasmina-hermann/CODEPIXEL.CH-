// Alle Inhalte der Leistungs-Unterseiten (/leistungen/...).
// ACHTUNG: Preise bei "software", "prozesscoaching" und "buchhaltung" sind VORSCHLÄGE.
// Bitte vor dem Livegang prüfen und anpassen.

export interface ServicePair {
  problem: string;
  problemText: string;
  solution: string;
  solutionText: string;
}

export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceLink {
  title: string;
  url: string;
  text: string;
}

export interface Service {
  slug: string;
  name: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  menuDescription: string;
  menuIcon: string;
  intro: string;
  pairs: ServicePair[];
  stepsTitle: string;
  steps: ServiceStep[];
  packagesTitle: string;
  packagesIntro: string;
  packages: ServicePackage[];
  packagesNote: string;
  related: ServiceLink[];
  faq: ServiceFaq[];
  ctaTitle: string;
  ctaText: string;
}

export const PRICE_NOTE =
  "Alle Preise sind unverbindliche Richtwerte. Das genaue Angebot erhalten Sie nach einem kostenlosen Erstgespräch.";

export const services: Service[] = [
  {
    slug: "webseiten",
    name: "Webseiten",
    badge: "Webseiten",
    metaTitle: "Webseiten für KMU in der Schweiz | Codepixel",
    metaDescription:
      "Individuelle Webseiten, die Vertrauen schaffen und Anfragen bringen. Onepager ab CHF 1'000, KMU Basic ab CHF 2'300, Business ab CHF 5'000.",
    heroTitle: "Webseiten, die Anfragen <span class='heading-script-accent'>bringen</span>",
    heroSubtitle:
      "Individuelles Design, schnelle Technik und eine klare Nutzerführung. Damit aus Besuchern Kunden werden.",
    menuDescription: "Design, das Anfragen bringt",
    menuIcon: "HiOutlineNewspaper",
    intro:
      "Eine Webseite ist oft der erste Eindruck Ihres Unternehmens. Wir sorgen dafür, dass dieser Eindruck überzeugt und Besucher den Weg zu Ihnen finden.",
    pairs: [
      {
        problem: "Die Webseite wirkt veraltet",
        problemText: "Das Design passt nicht mehr zum Unternehmen und schreckt Interessenten eher ab.",
        solution: "Individuelles Design nach Mass",
        solutionText:
          "Wir gestalten einen Auftritt, der zu Ihrer Marke passt. Keine Vorlage von der Stange und keine austauschbare Baukastenoptik.",
      },
      {
        problem: "Besucher kommen, aber niemand meldet sich",
        problemText: "Angebote sind schwer zu verstehen und der Weg zur Kontaktaufnahme ist unklar.",
        solution: "Klare Nutzerführung",
        solutionText:
          "Verständliche Inhalte, deutliche Handlungsaufforderungen und kurze Wege zur Anfrage führen Besucher gezielt zum Kontakt.",
      },
      {
        problem: "Auf dem Handy ist alles unübersichtlich",
        problemText: "Texte sind zu klein, Seiten laden langsam und Buttons sind kaum zu treffen.",
        solution: "Mobile First und schnell",
        solutionText:
          "Ihre Seite wird zuerst für das Smartphone entwickelt und bleibt auf Tablet und Computer schnell, hochwertig und leicht bedienbar.",
      },
      {
        problem: "Bei Google nicht auffindbar",
        problemText: "Potenzielle Kunden suchen nach Ihren Leistungen, landen aber bei der Konkurrenz.",
        solution: "SEO und Google-Profil von Anfang an",
        solutionText:
          "Saubere Technik, Inhalte mit Keyword-Recherche und ein eingerichtetes Google Unternehmensprofil machen Sie besser sichtbar.",
      },
    ],
    stepsTitle: "So entsteht Ihre Webseite",
    steps: [
      { title: "Unverbindlich kennenlernen", text: "Sie erzählen von Ihrem Unternehmen und Ihren Zielen. Gemeinsam definieren wir, was die Webseite erreichen soll." },
      { title: "Konzept sichtbar machen", text: "Aus Ihren Anforderungen entsteht ein individuelles Designkonzept, das zu Ihrer Marke passt." },
      { title: "Umsetzen und verfeinern", text: "Nach Ihrer Freigabe wird die Seite responsiv entwickelt. Ihr Feedback fliesst direkt in den Feinschliff ein." },
      { title: "Sicher online gehen", text: "Nach sorgfältigen Tests geht die Seite live. Sie erhalten alle Zugänge und eine persönliche Einführung." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Wählen Sie die passende Grundlage. Unsicher? Wir beraten Sie gerne persönlich.",
    packages: [
      {
        name: "Onepager",
        price: "Ab CHF 1'000.–",
        description: "Der professionelle Einstieg für Einzelunternehmen und kleine Teams.",
        features: [
          "Eine individuelle Inhaltsseite",
          "Responsives Webdesign für alle Geräte",
          "Suchmaschinenfreundliche Inhalte",
          "Kontaktformular inklusive Datenschutz",
          "Impressum und Datenschutzerklärung",
          "Technische Qualitätssicherung und Liveschaltung",
        ],
      },
      {
        name: "KMU Basic",
        price: "Ab CHF 2'300.–",
        description: "Unser meistgewähltes Paket für Unternehmen mit mehreren Leistungen oder Zielgruppen.",
        featured: true,
        features: [
          "Bis zu 6 individuelle Inhaltsseiten",
          "Responsives Premium Design",
          "Suchmaschinenfreundliche Seitenstruktur",
          "Inhalte inklusive Keyword-Recherche",
          "Einrichtung Google Unternehmensprofil",
          "Korrekturen bis zu 4 Stunden",
        ],
      },
      {
        name: "Business",
        price: "Ab CHF 5'000.–",
        description: "Für Unternehmen mit umfangreichen Inhalten und hohen Ansprüchen an Design und Sichtbarkeit.",
        features: [
          "Bis zu 12 Inhaltsseiten inklusive Landingpages",
          "Individuelles Konzept für Nutzerführung und Design",
          "Erweiterte Suchmaschinenoptimierung und interne Verlinkung",
          "Strukturierte Daten für Google und KI-Suchen",
          "Zweisprachige Webseite (z. B. Deutsch und Englisch)",
          "Blog-System und persönliche Projektbegleitung",
        ],
      },
    ],
    packagesNote:
      "Service- und Wartungspakete für die Zeit nach dem Livegang (Updates, Sicherheit, Anpassungen) erhalten Sie auf Anfrage.",
    related: [
      {
        title: "Webseiten nach Mass für starke Unternehmen",
        url: "/projekte/case-study-4",
        text: "So entsteht ein Webauftritt, der Vertrauen schafft und Anfragen unterstützt.",
      },
    ],
    faq: [
      {
        question: "Wie lange dauert es, bis meine Webseite online ist?",
        answer:
          "Das hängt vom Umfang ab und davon, wie schnell Inhalte und Freigaben bei uns eintreffen. Einen Onepager setzen wir oft in wenigen Wochen um, grössere Webseiten brauchen entsprechend länger. Im Erstgespräch nennen wir Ihnen einen konkreten Zeitplan.",
      },
      {
        question: "Kann ich Inhalte später selbst ändern?",
        answer:
          "Wo es sinnvoll ist, zum Beispiel beim Blog, ja. Alles andere passen wir schnell für Sie an. Sie erreichen uns direkt, ohne Umwege.",
      },
      {
        question: "Was passiert nach dem Livegang?",
        answer:
          "Sie erhalten alle Zugänge und eine persönliche Einführung. Auf Wunsch betreuen wir Ihre Webseite danach mit einem Service- oder Wartungspaket weiter.",
      },
    ],
    ctaTitle: "Bereit für eine Webseite, die <span class='heading-script-accent'>wirkt</span>?",
    ctaText: "Erzählen Sie uns von Ihrem Vorhaben. Sie erhalten eine erste, unverbindliche Einschätzung.",
  },

  {
    slug: "software",
    name: "Software & Apps",
    badge: "Software & Apps",
    metaTitle: "Individuelle Software und Apps für KMU | Codepixel",
    metaDescription:
      "Massgeschneiderte Software, Web-Apps und mobile Apps, die genau zu Ihren Abläufen passen. Vom Konzept-Workshop bis zur fertigen Lösung.",
    heroTitle: "Software, die zu Ihren Abläufen <span class='heading-script-accent'>passt</span>",
    heroSubtitle:
      "Individuelle Programme und Apps, die Arbeit vereinfachen, statt neue Probleme zu schaffen.",
    menuDescription: "Programme und Apps nach Mass",
    menuIcon: "HiOutlineCog",
    intro:
      "Standardsoftware zwingt Ihr Team oft in fremde Abläufe. Wir entwickeln Lösungen, die sich Ihrem Alltag anpassen.",
    pairs: [
      {
        problem: "Standardsoftware passt nicht zu Ihren Abläufen",
        problemText: "Ihr Team arbeitet mit Umwegen, weil das Programm nicht so funktioniert wie das Unternehmen.",
        solution: "Software, die Ihre Abläufe abbildet",
        solutionText:
          "Wir entwickeln Programme, die genau zu Ihrem Alltag passen, damit Ihr Team schneller und mit weniger Fehlern arbeitet.",
      },
      {
        problem: "Informationen liegen verstreut",
        problemText: "Excel-Listen, E-Mails und Notizen führen zu Suchaufwand und widersprüchlichen Angaben.",
        solution: "Eine zentrale Anwendung",
        solutionText:
          "Alle wichtigen Angaben sind an einem Ort verfügbar und können direkt aktualisiert werden. Alle arbeiten mit denselben Informationen.",
      },
      {
        problem: "Der Aussendienst hat keine aktuellen Daten",
        problemText: "Aufträge, Rapporte und Fotos werden erst im Büro nachgetragen.",
        solution: "Mobile Apps für unterwegs",
        solutionText:
          "Aufträge werden direkt vor Ort bearbeitet, dokumentiert und abgeschlossen. Mit Fotos, Unterschrift und automatischer Übergabe ans Büro.",
      },
      {
        problem: "Systeme sprechen nicht miteinander",
        problemText: "Daten müssen zwischen Programmen von Hand übertragen werden.",
        solution: "Schnittstellen zu Ihren Systemen",
        solutionText:
          "Wir verbinden Ihre neue Lösung mit Buchhaltung, Kundenverwaltung und weiteren Systemen, damit nichts doppelt erfasst wird.",
      },
    ],
    stepsTitle: "So entsteht Ihre Software",
    steps: [
      { title: "Anforderungen klären", text: "Wir verstehen Ihre Abläufe und legen gemeinsam fest, was die Lösung können muss." },
      { title: "Konzept und Prototyp", text: "Sie sehen früh, wie die Anwendung aussieht und funktioniert, und können Rückmeldungen geben." },
      { title: "Entwicklung in Etappen", text: "Wir setzen Schritt für Schritt um. So können Sie früh testen und Änderungen bleiben überschaubar." },
      { title: "Einführung und Betreuung", text: "Wir begleiten den Start, schulen Ihr Team und stehen danach für Anpassungen zur Verfügung." },
    ],
    packagesTitle: "Wege zur eigenen Software",
    packagesIntro: "Sie müssen nicht gleich das ganze Projekt beauftragen. Starten Sie mit einem klaren ersten Schritt.",
    packages: [
      {
        name: "Konzept-Workshop",
        price: "Ab CHF 690.–",
        description: "Der sichere Einstieg: Sie wissen danach genau, was gebaut wird und was es kostet.",
        features: [
          "Workshop zu Abläufen und Zielen",
          "Skizze der Anwendung",
          "Schriftliches Konzept",
          "Aufwandsschätzung",
        ],
      },
      {
        name: "Start-Paket",
        price: "Ab CHF 4'900.–",
        description: "Erste lauffähige Version einer einfachen Web-App oder eines internen Tools.",
        featured: true,
        features: [
          "Klickbarer Prototyp",
          "Lauffähige erste Version",
          "Eine Benutzerrolle und eine Schnittstelle",
          "Einführung für Ihr Team",
        ],
      },
      {
        name: "Individuelle Software",
        price: "Festpreis nach Konzept",
        priceNote: "Nach dem Konzept-Workshop",
        description: "Massgeschneiderte Lösung für Ihre Abläufe, mit allen nötigen Funktionen und Schnittstellen.",
        features: [
          "Umsetzung in Etappen",
          "Mehrere Benutzerrollen",
          "Schnittstellen zu Ihren Systemen",
          "Schulung und Betreuung",
        ],
      },
    ],
    packagesNote:
      "Der Konzept-Workshop wird bei einer anschliessenden Beauftragung auf Wunsch angerechnet. Betreuung und Weiterentwicklung nach dem Start auf Anfrage.",
    related: [
      { title: "Kita Connect", url: "/projekte/case-study-1", text: "App für Eltern und Betreuungsteams." },
      { title: "Garage Flow", url: "/projekte/case-study-2", text: "Werkstatt-App für Termine, Fahrzeuge und Aufträge." },
      { title: "Service Pilot", url: "/projekte/case-study-3", text: "Mobile Lösung für Klima- und Heizungsbetriebe." },
    ],
    faq: [
      {
        question: "Was kostet eine individuelle Software?",
        answer:
          "Das hängt vom Umfang ab. Deshalb starten wir mit einem Konzept-Workshop. Danach kennen Sie Funktionen, Aufwand und Preis und können in Ruhe entscheiden.",
      },
      {
        question: "Gehört mir die Software am Ende?",
        answer:
          "Nutzungsrechte und Verantwortlichkeiten klären wir vor dem Start schriftlich, damit es später keine Überraschungen gibt.",
      },
      {
        question: "Kann die Software mit meinen bestehenden Programmen verbunden werden?",
        answer:
          "In vielen Fällen ja, zum Beispiel mit Buchhaltung oder Kundenverwaltung. Welche Schnittstellen möglich sind, klären wir im Erstgespräch.",
      },
    ],
    ctaTitle: "Welche Arbeit soll Ihre Software <span class='heading-script-accent'>abnehmen</span>?",
    ctaText: "Beschreiben Sie uns Ihren Alltag. Wir zeigen Ihnen, was sich digital lösen lässt.",
  },

  {
    slug: "prozesscoaching",
    name: "Prozesscoaching",
    badge: "Prozesse & Coaching",
    metaTitle: "Prozesscoaching für KMU: Abläufe, Automatisierung und Coaching | Codepixel",
    metaDescription:
      "Klare Abläufe, weniger Handarbeit und ein Team, das mitzieht: Prozess-Check ab CHF 490, Automatisierung und praxisnahes Coaching für KMU in der Schweiz.",
    heroTitle: "Klare Abläufe. Ein Team, das <span class='heading-script-accent'>mitzieht</span>",
    heroSubtitle:
      "Wir analysieren Ihre Prozesse, automatisieren wiederkehrende Arbeit und begleiten Ihr Team, bis die neuen Abläufe im Alltag sitzen.",
    menuDescription: "Abläufe verbessern, Team begleiten",
    menuIcon: "HiOutlineChartBar",
    intro:
      "Viele Unternehmen verlieren jede Woche Stunden mit doppelter Arbeit und unklaren Zuständigkeiten. Wir verbinden beides: bessere Abläufe und ein Team, das sie auch lebt.",
    pairs: [
      {
        problem: "Dieselben Daten werden mehrfach eingegeben",
        problemText: "Das kostet Zeit und führt zu Tippfehlern und widersprüchlichen Angaben.",
        solution: "Systeme verbinden und automatisieren",
        solutionText:
          "Über Schnittstellen fliessen Daten automatisch zwischen Webseite, Kundenverwaltung, Kalender und Buchhaltung. Einmal erfassen genügt.",
      },
      {
        problem: "Anfragen laufen über viele Kanäle",
        problemText: "WhatsApp, E-Mail, Telefon und Zettel: Es geht etwas unter, und niemand hat den Überblick.",
        solution: "Ein klarer Ablauf mit zentraler Übersicht",
        solutionText:
          "Anfragen landen an einem Ort, werden automatisch erfasst und Ihr Team sieht jederzeit den aktuellen Status.",
      },
      {
        problem: "Verantwortlichkeiten sind unklar",
        problemText: "Aufgaben bleiben liegen oder werden doppelt gemacht, und im Team entsteht Reibung.",
        solution: "Rollen und Zuständigkeiten klären",
        solutionText:
          "Gemeinsam legen wir fest, wer wofür verantwortlich ist, und machen das für alle verständlich und umsetzbar.",
      },
      {
        problem: "Neue Abläufe werden im Team nicht gelebt",
        problemText: "Das neue System steht bereit, doch im Alltag wird weiter mit Excel und Zetteln gearbeitet.",
        solution: "Coaching und Begleitung bei der Einführung",
        solutionText:
          "Wir erklären verständlich, schulen praxisnah und begleiten Ihr Team, bis die neuen Abläufe selbstverständlich werden.",
      },
    ],
    stepsTitle: "So verbessern wir Ihre Abläufe",
    steps: [
      { title: "Ist-Zustand erfassen", text: "Wir schauen uns an, wie Ihre Arbeit heute wirklich abläuft, im Büro und im Alltag Ihres Teams." },
      { title: "Engpässe und Prioritäten", text: "Wir zeigen die grössten Zeitfresser und klären Rollen, Zuständigkeiten und Ziele." },
      { title: "Umsetzen und automatisieren", text: "Wir richten Schnittstellen und automatische Abläufe ein und testen sie gemeinsam mit Ihnen." },
      { title: "Team coachen und verankern", text: "Wir begleiten Ihr Team in der Einführung und prüfen, ob die neuen Abläufe im Alltag wirklich entlasten." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Starten Sie mit einem klaren ersten Schritt und entscheiden Sie danach, was sich für Sie lohnt.",
    packages: [
      {
        name: "Prozess-Check",
        price: "CHF 490.–",
        priceNote: "Fixpreis",
        description: "Der ideale Einstieg: ein halber Tag Analyse mit klaren Ergebnissen.",
        features: [
          "Analyse Ihrer Abläufe (halber Tag)",
          "Die 3 bis 5 grössten Zeitfresser",
          "Schriftlicher Kurzbericht",
          "Konkrete Lösungsvorschläge",
        ],
      },
      {
        name: "Automatisierung & Coaching",
        price: "Ab CHF 1'900.–",
        description: "Ein bis zwei Abläufe werden eingerichtet, und Ihr Team wird bei der Einführung begleitet.",
        featured: true,
        features: [
          "Umsetzung von 1 bis 2 Abläufen",
          "Schnittstellen zu Ihren Systemen",
          "Drei Coaching-Sitzungen für Ihr Team",
          "Kurze Dokumentation",
        ],
      },
      {
        name: "Rundum-Begleitung",
        price: "Ab CHF 4'500.–",
        description: "Für Unternehmen, die mehrere Abläufe neu aufstellen und das ganze Team mitnehmen möchten.",
        features: [
          "Mehrere Abläufe und Schnittstellen",
          "Workshop mit Ihrem Team",
          "Coaching für Führung und Zuständigkeiten",
          "Nachbetreuung nach dem Start",
        ],
      },
    ],
    packagesNote:
      "Einzelne Coaching-Sitzungen (CHF 190.–) sind jederzeit möglich. Der Prozess-Check wird bei einer anschliessenden Umsetzung auf Wunsch angerechnet.",
    related: [
      { title: "Garage Flow", url: "/projekte/case-study-2", text: "Termine, Aufträge und Buchhaltung an einem Ort." },
      { title: "Service Pilot", url: "/projekte/case-study-3", text: "Vom Einsatz bis zur Übergabe an die Administration." },
      { title: "Klar führen: Coaching für Unternehmen", url: "/projekte/case-study-5", text: "Mehr Klarheit in Rollen, Kommunikation und Entscheidungen." },
    ],
    faq: [
      {
        question: "Für welche Unternehmen lohnt sich ein Prozesscoaching?",
        answer:
          "Für alle, die das Gefühl haben, zu viel Zeit mit Administration, Suchen und doppelter Arbeit zu verbringen, oder bei denen neue Werkzeuge im Team nicht ankommen.",
      },
      {
        question: "Muss ich dafür meine bestehende Software wechseln?",
        answer:
          "Nicht unbedingt. Oft verbinden wir die Systeme, die Sie bereits nutzen, und automatisieren die Wege dazwischen.",
      },
      {
        question: "Wo finden die Coaching-Sitzungen statt?",
        answer:
          "Nach Absprache bei Ihnen vor Ort, bei uns im Thurgau oder online. Das legen wir im Erstgespräch fest.",
      },
    ],
    ctaTitle: "Wo verlieren Sie heute am meisten <span class='heading-script-accent'>Zeit</span>?",
    ctaText: "Buchen Sie einen Prozess-Check und erfahren Sie, was sich in Ihrem Alltag am meisten lohnt.",
  },

  {
    slug: "buchhaltung",
    name: "Buchhaltung, Administration & HR",
    badge: "Prozesscoaching · Buchhaltung & HR",
    metaTitle: "Buchhaltung, Administration und HR für KMU | Codepixel",
    metaDescription:
      "Laufende Buchhaltung, MWST, Lohnbuchhaltung, Personaladministration und Büroorganisation für KMU in Thurgau, Zürich und St. Gallen. Persönlich und transparent.",
    heroTitle: "Zahlen, Löhne und Personal im <span class='heading-script-accent'>Griff</span>",
    heroSubtitle:
      "Buchhaltung, Administration und HR aus einer Hand. Digital organisiert, pünktlich erledigt und mit klarem Überblick.",
    menuDescription: "Zahlen, Löhne und Personal im Griff",
    menuIcon: "HiOutlineCalculator",
    intro:
      "Belege, Löhne, Verträge, Fristen: Die Administration frisst Zeit, die im Tagesgeschäft fehlt. Wir übernehmen sie oder richten sie so ein, dass sie fast von selbst läuft.",
    pairs: [
      {
        problem: "Belege stapeln sich, der Überblick fehlt",
        problemText: "Quittungen und Rechnungen liegen verteilt, und wie es dem Unternehmen geht, zeigt sich erst beim Abschluss.",
        solution: "Digitale, laufende Buchhaltung",
        solutionText:
          "Belege landen digital am richtigen Ort, die Buchhaltung ist immer aktuell und Sie sehen Ihre Zahlen jederzeit auf einen Blick.",
      },
      {
        problem: "MWST und Fristen bereiten Sorgen",
        problemText: "Abrechnungen werden kurz vor knapp erstellt, und die Angst vor Fehlern bleibt.",
        solution: "Pünktliche MWST-Abrechnung",
        solutionText:
          "Wir erstellen Ihre MWST-Abrechnungen termingerecht und behalten alle Fristen für Sie im Blick.",
      },
      {
        problem: "Löhne und Personal kosten Nerven",
        problemText: "Lohnabrechnungen, Sozialversicherungen, Verträge und Absenzen sind aufwendig und fehleranfällig.",
        solution: "Lohnbuchhaltung und Personaladministration",
        solutionText:
          "Wir erstellen Löhne und Lohnausweise, übernehmen Meldungen an die Sozialversicherungen und unterstützen bei Arbeitsverträgen, Ein- und Austritten.",
      },
      {
        problem: "Die Administration läuft nebenher",
        problemText: "Ablage, Offerten, Mahnungen und Vorlagen werden immer dann erledigt, wenn gerade Zeit bleibt.",
        solution: "Klare Abläufe fürs Büro",
        solutionText:
          "Wir ordnen Ablage und Vorlagen, richten Mahnwesen und wiederkehrende Aufgaben ein und automatisieren, was sich wiederholt.",
      },
    ],
    stepsTitle: "So übernehmen wir Ihre Administration",
    steps: [
      { title: "Kennenlernen", text: "Wir besprechen Ihr Unternehmen, Ihre aktuelle Buchhaltung und was Sie abgeben möchten." },
      { title: "Einrichten", text: "Wir richten die Buchhaltungssoftware und die digitale Belegablage ein oder übernehmen Ihre bestehende Lösung." },
      { title: "Laufend erledigen", text: "Wir verbuchen Belege, erstellen MWST- und Lohnabrechnungen und kümmern uns um die Personaladministration." },
      { title: "Abschluss vorbereiten", text: "Wir bereiten den Jahresabschluss sauber vor und stimmen ihn mit Ihnen oder Ihrer Treuhand ab." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Monatlich planbare Kosten statt Überraschungen. Den genauen Preis legen wir nach Belegmenge fest.",
    packages: [
      {
        name: "Einrichtung",
        price: "Ab CHF 490.–",
        priceNote: "Einmalig",
        description: "Der saubere Start in eine digitale Buchhaltung.",
        features: [
          "Einrichtung der Buchhaltungssoftware (z. B. bexio)",
          "Kontenplan nach Ihren Bedürfnissen",
          "Digitale Belegablage",
          "Persönliche Einführung",
        ],
      },
      {
        name: "Buchhaltung laufend",
        price: "Ab CHF 190.–",
        priceNote: "pro Monat",
        description: "Ihre Finanzbuchhaltung, laufend und aktuell geführt.",
        featured: true,
        features: [
          "Verbuchen aller Belege",
          "Bank- und Kontenabstimmung",
          "MWST-Abrechnung",
          "Quartalsübersicht Ihrer Zahlen",
        ],
      },
      {
        name: "Buchhaltung, Löhne & HR",
        price: "Ab CHF 390.–",
        priceNote: "pro Monat",
        description: "Für Unternehmen mit Mitarbeitenden, die Zahlen und Personal aus einer Hand möchten.",
        features: [
          "Alles aus «Buchhaltung laufend»",
          "Monatliche Lohnabrechnungen und Lohnausweise",
          "Meldungen an Sozialversicherungen",
          "Personaladministration (Verträge, Ein- und Austritte)",
        ],
      },
    ],
    packagesNote:
      "Der Preis richtet sich nach der Anzahl Belege und Mitarbeitenden. Im Erstgespräch erhalten Sie ein verbindliches Angebot.",
    related: [],
    faq: [
      {
        question: "Mit welcher Buchhaltungssoftware arbeiten Sie?",
        answer:
          "Bevorzugt mit bexio. Wir können aber auch Ihre bestehende Lösung übernehmen. Das klären wir im Erstgespräch.",
      },
      {
        question: "Übernehmen Sie auch Aufgaben im Personalbereich?",
        answer:
          "Ja. Neben den Löhnen unterstützen wir bei Arbeitsverträgen, Ein- und Austritten, Absenzen und Arbeitszeugnissen. Was genau, legen wir gemeinsam fest.",
      },
      {
        question: "Muss ich meine Belege noch in Papierform abgeben?",
        answer:
          "Nein. Sie fotografieren Belege mit dem Handy oder leiten sie per E-Mail weiter. Den Rest erledigen wir.",
      },
      {
        question: "Machen Sie auch den Jahresabschluss und die Steuererklärung?",
        answer:
          "Wir bereiten den Jahresabschluss vollständig vor und arbeiten bei Bedarf mit Ihrer Treuhand zusammen. Was genau übernommen wird, legen wir gemeinsam fest.",
      },
    ],
    ctaTitle: "Weniger Büro, mehr <span class='heading-script-accent'>Zeit</span>?",
    ctaText: "Erzählen Sie uns, wie Buchhaltung und Administration heute laufen. Sie erhalten eine unverbindliche Einschätzung.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
