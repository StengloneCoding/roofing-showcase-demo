import type {
  GalleryProject,
  PageContent,
  SiteSettingsContent,
} from "@/lib/content";

export const fallbackSiteSettings: SiteSettingsContent = {
  companyName: "Grimm & Lechner",
  legalName: "Grimm GmbH & Co. KG",
  tagline: "Dachdeckermeister aus Bamberg seit 1919",
  phone: "0951 62840",
  email: "grimmundlechner@t-online.de",
  address: "Blumenstr. 3\n96049 Bamberg",
  navigation: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Referenzen", href: "/#referenzen" },
    { label: "Über uns", href: "/#über-uns" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footerText:
    "Von der kleinen Reparatur bis zum fertigen Dach begleiten wir Projekte in Bamberg und Umgebung mit Erfahrung, sauberer Ausführung und direkter Kommunikation.",
};

export const fallbackPages: Record<string, PageContent> = {
  start: {
    slug: "start",
    title: "Grimm & Lechner – Dachdeckermeister in Bamberg",
    metaDescription:
      "Grimm & Lechner ist Ihr Dachdeckermeister in Bamberg für Dachsanierung, Blecharbeiten, Wärmedämmung, Dachfenster und Reparaturen.",
    hero: {
      eyebrow: "Seit 1919 in vierter Generation",
      title: "Dachdeckermeister Grimm & Lechner in Bamberg und Umgebung",
      description:
        "Wir beraten ehrlich, arbeiten sauber und kümmern uns um alles rund ums Dach – von der Reparatur über Sanierung und Wärmedämmung bis zu Dachfenstern und Blecharbeiten.",
      primaryCta: {
        label: "Projekt anfragen",
        href: "/#kontaktformular",
      },
      secondaryCta: {
        label: "Referenzen ansehen",
        href: "/#referenzen",
      },
    },
    sections: [
      {
        blockType: "stats",
        eyebrow: "Kurz zusammengefasst",
        heading: "Meisterbetrieb mit klarer Beratung, kurzen Wegen und echter Erfahrung auf dem Dach.",
        items: [
          {
            value: "1919",
            label: "Tradition im Handwerk",
            description: "Seit über hundert Jahren als Dachdeckerbetrieb in Bamberg verwurzelt.",
          },
          {
            value: "96049",
            label: "Mitten in Bamberg",
            description: "Blumenstraße 3 als fester Standort für Beratung und Projektabstimmung.",
          },
          {
            value: "7+",
            label: "Leistungsbereiche",
            description: "Von Dachsanierung über Blecharbeiten bis hin zu Dachfenstern und Reparaturen.",
          },
        ],
      },
      {
        blockType: "serviceGrid",
        eyebrow: "Leistungen",
        heading: "Unsere Leistungen rund ums Dach im Überblick.",
        description:
          "Ziegel-, Schiefer- und Blecharbeiten in allen Bereichen, sauber strukturiert und als eigene Leistungsbausteine dargestellt.",
        items: [
          {
            title: "Neubauten",
            description:
              "Komplette Dacharbeiten für neue Gebäude mit sauberem Aufbau, klarer Abstimmung und fachgerechter Ausführung.",
            bullets: ["neue Dachaufbauten", "Anschlüsse", "saubere Ausführung"],
          },
          {
            title: "Dachsanierung",
            description:
              "Sanierungen im Bestand mit Blick auf Substanz, Details und eine langfristig passende Lösung für Ihr Dach.",
            bullets: ["Bestand", "Substanzprüfung", "Anschlussdetails"],
          },
          {
            title: "Arbeiten im Denkmalbereich",
            description:
              "Sorgfältige Arbeiten an sensiblen Bestandsgebäuden mit Respekt vor Material, Bestand und handwerklichem Detail.",
            bullets: ["Bestandsgebäude", "Detailtreue", "sensible Ausführung"],
          },
          {
            title: "Wärmedämmarbeiten",
            description:
              "Wärmedämmarbeiten nach Energieeinsparverordnung für mehr Effizienz, besseren Wohnkomfort und einen stimmigen Dachaufbau.",
            bullets: ["Energieeinsparverordnung", "Dämmaufbau", "Effizienz"],
          },
          {
            title: "Asbestentsorgung",
            description:
              "Fachgerechte Entsorgung im Rahmen von Dacharbeiten mit klarem Ablauf und dem nötigen Verantwortungsbewusstsein.",
            bullets: ["fachgerecht", "sicher", "sauber koordiniert"],
          },
          {
            title: "Reparaturarbeiten",
            description:
              "Schnelle, pragmatische Hilfe bei Schäden, undichten Stellen oder einzelnen defekten Bauteilen.",
            bullets: ["Schadstellen", "kurzfristige Hilfe", "gezielte Maßnahmen"],
          },
          {
            title: "Dachfenstereinbau",
            description:
              "Mehr Licht und bessere Nutzung unterm Dach durch fachgerechten Einbau und Austausch.",
            bullets: ["Einbau", "Austausch", "mehr Tageslicht"],
          },
          {
            title: "Ziegel-, Schiefer- und Blecharbeiten",
            description:
              "Handwerklich saubere Arbeiten in allen Bereichen des Dachs, abgestimmt auf Bestand, Material und Nutzung.",
            bullets: ["Ziegel", "Schiefer", "Blech"],
          },
        ],
      },
      {
        blockType: "process",
        eyebrow: "Unser Prozess",
        heading: "Von der ersten Beratung bis zur fertigen Ausführung begleiten wir Sie zuverlässig durch jeden Schritt.",
        description:
          "Kein unnötiges Theater, sondern ein klarer Ablauf mit persönlicher Abstimmung und einem festen Ansprechpartner.",
        steps: [
          {
            title: "Unverbindliches Beratungsgespräch",
            description:
              "Sie schildern uns, worum es geht. Wir hören zu, stellen die richtigen Fragen und geben eine erste ehrliche Einschätzung.",
          },
          {
            title: "Besichtigung und Aufmaß",
            description:
              "Vor Ort prüfen wir Dach, Bestand und Gegebenheiten, damit das Angebot nicht nur schön klingt, sondern auch passt.",
          },
          {
            title: "Transparentes Angebot",
            description:
              "Sie erhalten eine nachvollziehbare Empfehlung ohne versteckte Punkte – verständlich, verbindlich und sauber gegliedert.",
          },
          {
            title: "Ausführung und Abstimmung",
            description:
              "Auf der Baustelle arbeiten wir strukturiert, halten Sie auf dem Laufenden und achten besonders auf Details und Anschlüsse.",
          },
        ],
      },
      {
        blockType: "textColumns",
        eyebrow: "Über uns",
        heading: "Was Grimm & Lechner für Bauherren und Eigentümer in Bamberg auszeichnet.",
        description:
          "Wir verbinden Erfahrung aus dem klassischen Dachdeckerhandwerk mit einer ruhigen, direkten Art der Projektabwicklung.",
        columns: [
          {
            title: "Beratung auf Augenhöhe",
            body:
              "Wir erklären verständlich, welche Lösung sinnvoll ist, welche nicht – und warum. Das spart Missverständnisse und unnötige Maßnahmen.",
          },
          {
            title: "Saubere Ausführung",
            body:
              "Ob Reparatur, Sanierung oder Blecharbeit: Gerade die Details an Anschlüssen und Übergängen entscheiden über die Qualität.",
          },
          {
            title: "Verlässlich erreichbar",
            body:
              "Vom ersten Termin bis zur Abstimmung nach der Ausführung bleiben wir greifbar und kümmern uns um einen klaren Ablauf.",
          },
        ],
      },
      {
        blockType: "faq",
        eyebrow: "Häufige Fragen",
        heading: "Das Wichtigste rund ums Dach kurz und verständlich erklärt.",
        description:
          "Viele Fragen bekommen wir vor dem ersten Termin immer wieder gestellt. Hier sind die wichtigsten Antworten vorab.",
        items: [
          {
            question: "Kostet die Besichtigung und das Angebot etwas?",
            answer:
              "Die erste Beratung vor Ort und ein unverbindliches Angebot sind in der Regel kostenfrei. Wenn für eine saubere Einschätzung zusätzlicher Aufwand nötig ist, sprechen wir das vorher offen mit Ihnen ab.",
          },
          {
            question: "Wie schnell liegt ein Angebot normalerweise vor?",
            answer:
              "Das hängt vom Umfang des Projekts ab. Für kleinere Arbeiten geht es oft recht zügig, bei umfangreicheren Sanierungen brauchen wir etwas mehr Zeit, damit das Angebot nicht nur schnell, sondern auch belastbar ist.",
          },
          {
            question: "Wann können Dacharbeiten nach der Beauftragung starten?",
            answer:
              "Der Starttermin richtet sich nach Auftragslage, Material und Jahreszeit. Wir nennen Ihnen nach der Besichtigung eine realistische Einschätzung und halten den Ablauf so planbar wie möglich.",
          },
          {
            question: "Kann auch im Winter am Dach gearbeitet werden?",
            answer:
              "Ja, viele Arbeiten sind auch in der kühleren Jahreszeit möglich. Entscheidend sind Witterung, Sicherheit und die Art des Dachs. Wenn Bedingungen gegen eine saubere Ausführung sprechen, sagen wir das klar.",
          },
          {
            question: "Wie schnell helfen Sie bei einem akuten Schaden?",
            answer:
              "Bei undichten Stellen oder Sturmschäden versuchen wir so schnell wie möglich zu reagieren. Wie kurzfristig das geht, hängt immer von der aktuellen Situation ab, aber dringende Fälle priorisieren wir selbstverständlich.",
          },
          {
            question: "Übernehmen Sie auch kleinere Reparaturen?",
            answer:
              "Ja, selbstverständlich. Nicht jedes Dach braucht sofort eine große Sanierung. Wir kümmern uns auch um kleinere Schäden und sagen ehrlich, ob eine Reparatur ausreicht oder mehr nötig ist.",
          },
          {
            question: "Mit welchen Materialien arbeiten Sie?",
            answer:
              "Wir setzen auf bewährte und passende Materialien für das jeweilige Dach. Dazu gehören je nach Projekt zum Beispiel Ziegel, Schiefer, Blech, Dämmstoffe und Komponenten namhafter Hersteller.",
          },
          {
            question: "Wie lange dauert eine Dachsanierung oder Neueindeckung?",
            answer:
              "Das lässt sich erst nach Besichtigung seriös einordnen. Größe, Dachform, Detailanschlüsse und Witterung spielen eine große Rolle. Wir geben Ihnen vorab einen realistischen Zeitrahmen statt eines pauschalen Versprechens.",
          },
        ],
      },
      {
        blockType: "cta",
        eyebrow: "Nächster Schritt",
        heading: "Wenn Sie ein Dachprojekt planen, schauen wir gemeinsam drauf.",
        description:
          "Ein kurzes Gespräch reicht oft schon, um die nächsten sinnvollen Schritte einzuordnen und das Projekt sauber anzustoßen.",
        primaryCta: {
          label: "Jetzt Anfrage starten",
          href: "/#kontaktformular",
        },
        secondaryCta: {
          label: "Kontaktseite öffnen",
          href: "/kontakt",
        },
      },
    ],
  },
  kontakt: {
    slug: "kontakt",
    title: "Kontakt | Grimm & Lechner",
    metaDescription:
      "Kontaktieren Sie Grimm & Lechner in Bamberg für Dachsanierung, Blecharbeiten, Dachfenster und Reparaturen.",
    hero: {
      eyebrow: "Kontakt",
      title: "Kurze Wege, klare Antworten und ein Termin, der wirklich weiterhilft.",
      description:
        "Erzählen Sie uns kurz, worum es geht. Wir melden uns mit einer realistischen Einschätzung und dem passenden nächsten Schritt.",
      primaryCta: {
        label: "Anfrage senden",
        href: "#anfrage",
      },
      secondaryCta: {
        label: "Direkt anrufen",
        href: "tel:095162840",
      },
    },
    sections: [
      {
        blockType: "contactCards",
        eyebrow: "Direkte Wege",
        heading: "So erreichen Sie uns am schnellsten.",
        items: [
          {
            title: "Anrufen",
            body: "Für schnelle Rückfragen oder eine direkte Terminabstimmung.",
            label: "0951 62840",
            href: "tel:095162840",
            icon: "phone",
          },
          {
            title: "E-Mail",
            body: "Praktisch für Fotos, Unterlagen oder eine kurze Projektbeschreibung.",
            label: "grimmundlechner@t-online.de",
            href: "mailto:grimmundlechner@t-online.de",
            icon: "mail",
          },
          {
            title: "Adresse",
            body: "Grimm & Lechner, Blumenstraße 3, 96049 Bamberg.",
            label: "Blumenstraße 3",
            icon: "map",
          },
          {
            title: "Termine",
            body: "Beratung und unverbindliche Angebote sind selbstverständlich kostenlos.",
            label: "Nach Vereinbarung",
            icon: "clock",
          },
        ],
      },
      {
        blockType: "textColumns",
        eyebrow: "Gut vorbereitet",
        heading: "Was uns bei der ersten Einschätzung hilft.",
        columns: [
          {
            title: "Art des Projekts",
            body:
              "Zum Beispiel Reparatur, Dachsanierung, Wärmedämmung, Blecharbeiten oder Dachfenster.",
          },
          {
            title: "Ort und Objekt",
            body:
              "Ein kurzer Hinweis zu Gebäudeart, Standort und der aktuellen Situation hilft uns bei der Einordnung.",
          },
          {
            title: "Dringlichkeit",
            body:
              "Wenn es schnell gehen muss oder bereits ein Schaden vorhanden ist, sagen Sie das direkt dazu.",
          },
        ],
      },
    ],
  },
  karriere: {
    slug: "karriere",
    title: "Karriere | Grimm & Lechner",
    metaDescription:
      "Karriere bei Grimm & Lechner: motivierte Dachdeckerhelfer, Quereinsteiger und Dachdeckergesellen gesucht.",
    hero: {
      eyebrow: "Karriere",
      title: "Wir suchen Verstärkung für unser Team in Bamberg.",
      description:
        "Gesucht werden motivierte Dachdeckerhelfer, gerne auch Quereinsteiger und Dachdeckergesellen – ab sofort und mit übertariflicher Bezahlung.",
      primaryCta: {
        label: "Jetzt bewerben",
        href: "#bewerbung",
      },
      secondaryCta: {
        label: "Per E-Mail melden",
        href: "mailto:grimmundlechner@t-online.de",
      },
    },
    sections: [
      {
        blockType: "jobHighlights",
        eyebrow: "Was Sie erwartet",
        heading: "Ein Team, das Handwerk ernst nimmt und direkt miteinander arbeitet.",
        description:
          "Wir suchen keine große Selbstdarstellung, sondern Leute, die anpacken wollen und sich aufeinander verlassen können.",
        items: [
          "Übertarifliche Bezahlung und ein ehrlicher Umgang im Alltag.",
          "Einstieg auch für motivierte Quereinsteiger möglich.",
          "Abwechslungsreiche Arbeiten von Reparaturen bis zu kompletten Dachsanierungen.",
          "Ein Meisterbetrieb mit Geschichte und einem festen Platz in Bamberg.",
        ],
        note:
          "Wenn Sie Interesse haben, reicht eine kurze Nachricht oder ein Anruf. Den Rest besprechen wir unkompliziert.",
      },
      {
        blockType: "textColumns",
        eyebrow: "Wen wir suchen",
        heading: "Wichtig sind Haltung, Zuverlässigkeit und Lust auf gutes Handwerk.",
        columns: [
          {
            title: "Dachdeckerhelfer",
            body:
              "Wer handwerklich zupacken kann und sich in ein eingespieltes Team einbringen möchte, ist bei uns willkommen.",
          },
          {
            title: "Quereinsteiger",
            body:
              "Auch ohne klassischen Dachdecker-Lebenslauf ist ein Einstieg möglich, wenn Motivation und Verlässlichkeit stimmen.",
          },
          {
            title: "Dachdeckergesellen",
            body:
              "Fachliche Erfahrung ist natürlich willkommen – besonders dann, wenn Sie sauber arbeiten und Verantwortung übernehmen möchten.",
          },
        ],
      },
      {
        blockType: "cta",
        eyebrow: "Unkompliziert",
        heading: "Kurz melden, vorstellen und ins Gespräch kommen.",
        description:
          "Schreiben Sie uns einfach an grimmundlechner@t-online.de oder nutzen Sie das Formular auf dieser Seite.",
        primaryCta: {
          label: "Zur Bewerbung",
          href: "#bewerbung",
        },
        secondaryCta: {
          label: "Jetzt anrufen",
          href: "tel:095162840",
        },
      },
    ],
  },
  referenzen: {
    slug: "referenzen",
    title: "Referenzen | Grimm & Lechner",
    metaDescription:
      "Projektbeispiele von Grimm & Lechner rund um Dachsanierung, Blecharbeiten, Dachfenster und Reparaturen.",
    hero: {
      eyebrow: "Referenzen",
      title: "Projektbeispiele aus dem Dachdeckeralltag in Bamberg und Umgebung",
      description:
        "Dieser Inhalt ist in der aktuellen Struktur als Abschnitt auf der Startseite gedacht und dort per Hash-Navigation erreichbar.",
      primaryCta: {
        label: "Zur Startseite",
        href: "/#referenzen",
      },
      secondaryCta: {
        label: "Kontakt aufnehmen",
        href: "/kontakt",
      },
    },
    sections: [],
  },
};

export const fallbackGalleryProjects: GalleryProject[] = [
  {
    slug: "dachsanierung-bestand",
    title: "Dachsanierung im Bestand",
    serviceType: "Dachsanierung",
    summary:
      "Neuaufbau einer belasteten Dachfläche mit sauber geführten Anschlüssen und einer dauerhaft stimmigen Lösung im Bestand.",
    location: "Bamberg",
    completionYear: 2025,
    result: "Substanz gesichert und Dachaufbau neu geordnet",
    tags: ["Bestand", "Steildach", "Anschlüsse"],
  },
  {
    slug: "blecharbeiten-und-gaube",
    title: "Blecharbeiten an Gaube und Rinne",
    serviceType: "Blecharbeiten",
    summary:
      "Präzise Detailarbeit an Übergängen und Anschlüssen, damit das Dach technisch sauber und optisch ruhig bleibt.",
    location: "Umgebung Bamberg",
    completionYear: 2024,
    result: "Saubere Verwahrungen und langlebige Details",
    tags: ["Gaube", "Rinne", "Detailarbeit"],
  },
  {
    slug: "dachfenster-mit-daemmung",
    title: "Dachfenster mit ergänzender Dämmung",
    serviceType: "Dachfenster",
    summary:
      "Mehr Licht unterm Dach mit fachgerechter Integration in den vorhandenen Aufbau und abgestimmter Wärmedämmung.",
    location: "Oberfranken",
    completionYear: 2026,
    result: "Mehr Tageslicht und bessere Nutzbarkeit",
    tags: ["Dachfenster", "Dämmung", "Sanierung"],
  },
];
