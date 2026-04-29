import type {
  GalleryProject,
  PageContent,
  SiteSettingsContent,
} from "@/lib/content";
import {
  DEMO_ADDRESS,
  DEMO_CITY,
  DEMO_COMPANY_NAME,
  DEMO_EMAIL,
  DEMO_FOUNDING,
  DEMO_LEGAL_NAME,
  DEMO_PHONE,
  DEMO_PHONE_HREF,
  DEMO_REGION,
} from "@/lib/demo-placeholders";

export const fallbackSiteSettings: SiteSettingsContent = {
  companyName: DEMO_COMPANY_NAME,
  legalName: DEMO_LEGAL_NAME,
  tagline: `Dachdeckermeister aus ${DEMO_CITY}`,
  phone: DEMO_PHONE,
  email: DEMO_EMAIL,
  address: DEMO_ADDRESS,
  navigation: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Ablauf", href: "/#prozess" },
    { label: "Über uns", href: "/#über-uns" },
    { label: "Karriere", href: "/karriere" },
  ],
  footerText:
    `Von der kleinen Reparatur bis zum kompletten Dachprojekt zeigt diese Demo, wie ${DEMO_COMPANY_NAME} Leistungen, Vertrauen und Kontakt klar präsentieren kann.`,
};

export const fallbackPages: Record<string, PageContent> = {
  start: {
    slug: "start",
    title: `${DEMO_COMPANY_NAME} - Dachdeckermeister für ${DEMO_REGION}`,
    metaDescription:
      `${DEMO_COMPANY_NAME} ist die generische Demo-Website für Dachsanierung, Blecharbeiten, Wärmedämmung, Dachfenster und Reparaturen.`,
    hero: {
      eyebrow: `Seit ${DEMO_FOUNDING} für Kunden im Einsatz`,
      title: `Dachdeckermeister ${DEMO_COMPANY_NAME} in ${DEMO_REGION}`,
      description:
        `Hier steht die Kernbotschaft von ${DEMO_COMPANY_NAME}: klare Beratung, saubere Ausführung und alle Leistungen rund ums Dach aus einer Hand.`,
      primaryCta: {
        label: "Projekt anfragen",
        href: "/#kontaktformular",
      },
      secondaryCta: {
        label: "Leistungen ansehen",
        href: "/#leistungen",
      },
    },
    sections: [
      {
        blockType: "stats",
        eyebrow: "Kurz zusammengefasst",
        heading: "Meisterbetrieb mit klarer Beratung, kurzen Wegen und einem starken Leistungsversprechen.",
        items: [
          {
            value: "1950",
            label: "Tradition im Handwerk",
            description: "Die Zahl startet beim aktuellen Jahr und zählt beim Scrollen bis zum Gründungsjahr herunter.",
          },
          {
            value: "12345",
            label: `Standort in ${DEMO_CITY}`,
            description: "Dieser Platzhalter eignet sich für Postleitzahl, Stadt oder Einsatzgebiet.",
          },
          {
            value: "7",
            label: "Leistungsbereiche",
            description: "Die Zahl zählt beim Sichtbarwerden hoch und zeigt die wichtigsten Leistungsfelder auf einen Blick.",
          },
        ],
      },
      {
        blockType: "serviceGrid",
        eyebrow: "Leistungen",
        heading: "Unsere Leistungen rund ums Dach im Überblick.",
        description:
          "Die Leistungsbausteine sind generisch formuliert und können für jeden Dachdeckerbetrieb angepasst werden.",
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
              "Wärmedämmarbeiten für mehr Effizienz, besseren Wohnkomfort und einen stimmigen Dachaufbau.",
            bullets: ["Dämmaufbau", "Effizienz", "Wohnkomfort"],
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
              "Sie schildern kurz das Projekt. Diese Demo zeigt, wie eine erste ehrliche Einschätzung und ein klarer Einstieg formuliert werden kann.",
          },
          {
            title: "Besichtigung und Aufmaß",
            description:
              "Vor Ort prüfen Sie Dach, Bestand und Gegebenheiten, damit das Angebot nicht nur gut klingt, sondern auch passt.",
          },
          {
            title: "Transparentes Angebot",
            description:
              "Sie erhalten eine nachvollziehbare Empfehlung ohne versteckte Punkte, verständlich, verbindlich und sauber gegliedert.",
          },
          {
            title: "Ausführung und Abstimmung",
            description:
              "Auf der Baustelle arbeiten Sie strukturiert, halten Kunden auf dem Laufenden und achten besonders auf Details und Anschlüsse.",
          },
        ],
      },
      {
        blockType: "textColumns",
        eyebrow: "Über uns",
        heading: `Was ${DEMO_COMPANY_NAME} für Bauherren und Eigentümer in ${DEMO_REGION} auszeichnet.`,
        description:
          "Dieser Abschnitt eignet sich für Haltung, Arbeitsweise und die Tonalität Ihres Dachdeckerbetriebs.",
        columns: [
          {
            title: "Beratung auf Augenhöhe",
            body:
              "Erklären Sie verständlich, welche Lösung sinnvoll ist, welche nicht und warum. Das spart Missverständnisse und unnötige Maßnahmen.",
          },
          {
            title: "Saubere Ausführung",
            body:
              "Ob Reparatur, Sanierung oder Blecharbeit: Gerade die Details an Anschlüssen und Übergängen entscheiden über die Qualität.",
          },
          {
            title: "Verlässlich erreichbar",
            body:
              "Vom ersten Termin bis zur Abstimmung nach der Ausführung bleiben Sie greifbar und kümmern sich um einen klaren Ablauf.",
          },
        ],
      },
      {
        blockType: "faq",
        eyebrow: "Häufige Fragen",
        heading: "Das Wichtigste rund ums Dach kurz und verständlich erklärt.",
        description:
          "Viele Fragen tauchen vor dem ersten Termin immer wieder auf. Hier sind generische Antworten für die Demo.",
        items: [
          {
            question: "Kostet die Besichtigung und das Angebot etwas?",
            answer:
              "Die erste Beratung vor Ort und ein unverbindliches Angebot sind in der Regel kostenfrei. Wenn für eine saubere Einschätzung zusätzlicher Aufwand nötig ist, sprechen wir das vorher offen an.",
          },
          {
            question: "Wie schnell liegt ein Angebot normalerweise vor?",
            answer:
              "Das hängt vom Umfang des Projekts ab. Für kleinere Arbeiten geht es oft recht zügig, bei umfangreicheren Sanierungen braucht es etwas mehr Zeit, damit das Angebot belastbar ist.",
          },
          {
            question: "Wann können Dacharbeiten nach der Beauftragung starten?",
            answer:
              "Der Starttermin richtet sich nach Auftragslage, Material und Jahreszeit. Nach der Besichtigung können Sie eine realistische Einschätzung und einen planbaren Ablauf kommunizieren.",
          },
          {
            question: "Kann auch im Winter am Dach gearbeitet werden?",
            answer:
              "Ja, viele Arbeiten sind auch in der kühleren Jahreszeit möglich. Entscheidend sind Witterung, Sicherheit und die Art des Dachs. Wenn Bedingungen gegen eine saubere Ausführung sprechen, sollte das klar benannt werden.",
          },
          {
            question: "Wie schnell helfen Sie bei einem akuten Schaden?",
            answer:
              "Bei undichten Stellen oder Sturmschäden versuchen Sie so schnell wie möglich zu reagieren. Wie kurzfristig das geht, hängt von der aktuellen Situation ab, dringende Fälle werden priorisiert.",
          },
          {
            question: "Übernehmen Sie auch kleinere Reparaturen?",
            answer:
              "Ja, selbstverständlich. Nicht jedes Dach braucht sofort eine große Sanierung. Auch kleinere Schäden können eingeordnet und ehrlich bewertet werden.",
          },
          {
            question: "Mit welchen Materialien arbeiten Sie?",
            answer:
              "Sie können hier Ihre bevorzugten Materialien nennen, zum Beispiel Ziegel, Schiefer, Blech, Dämmstoffe oder Komponenten ausgewählter Hersteller.",
          },
          {
            question: "Wie lange dauert eine Dachsanierung oder Neueindeckung?",
            answer:
              "Das lässt sich erst nach Besichtigung seriös einordnen. Größe, Dachform, Detailanschlüsse und Witterung spielen eine große Rolle. Ein realistischer Zeitrahmen ist besser als ein pauschales Versprechen.",
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
    title: `Kontakt | ${DEMO_COMPANY_NAME}`,
    metaDescription:
      `Kontaktieren Sie ${DEMO_COMPANY_NAME} für Dachsanierung, Blecharbeiten, Dachfenster und Reparaturen.`,
    hero: {
      eyebrow: "Kontakt",
      title: "Kurze Wege, klare Antworten und ein Termin, der wirklich weiterhilft.",
      description:
        "Erzählen Sie uns kurz, worum es geht. Diese Demo zeigt eine kontaktstarke, handwerkliche Ansprache ohne leere Werbephrasen.",
      primaryCta: {
        label: "Anfrage senden",
        href: "#anfrage",
      },
      secondaryCta: {
        label: "Direkt anrufen",
        href: `tel:${DEMO_PHONE_HREF}`,
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
            label: DEMO_PHONE,
            href: `tel:${DEMO_PHONE_HREF}`,
            icon: "phone",
          },
          {
            title: "E-Mail",
            body: "Praktisch für Fotos, Unterlagen oder eine kurze Projektbeschreibung.",
            label: DEMO_EMAIL,
            href: `mailto:${DEMO_EMAIL}`,
            icon: "mail",
          },
          {
            title: "Adresse",
            body: `Platzhalter für Anschrift, Standort oder Büro von ${DEMO_COMPANY_NAME}.`,
            label: "Musterstraße 1",
            icon: "map",
          },
          {
            title: "Termine",
            body: "Beratung und unverbindliche Angebote können hier als Serviceversprechen platziert werden.",
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
    title: `Karriere | ${DEMO_COMPANY_NAME}`,
    metaDescription:
      `Karriere bei ${DEMO_COMPANY_NAME}: motivierte Dachdeckerhelfer, Quereinsteiger und Dachdeckergesellen gesucht.`,
    hero: {
      eyebrow: "Karriere",
      title: `Wir suchen Verstärkung für unser Team in ${DEMO_REGION}.`,
      description:
        "Gesucht werden motivierte Dachdeckerhelfer, gerne auch Quereinsteiger und Dachdeckergesellen, ab sofort und mit klarer Kommunikation im Bewerbungsprozess.",
      primaryCta: {
        label: "Jetzt bewerben",
        href: "#bewerbung",
      },
      secondaryCta: {
        label: "Per E-Mail melden",
        href: `mailto:${DEMO_EMAIL}`,
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
          "Faire Bezahlung und ein ehrlicher Umgang im Alltag.",
          "Einstieg auch für motivierte Quereinsteiger möglich.",
          "Abwechslungsreiche Arbeiten von Reparaturen bis zu kompletten Dachsanierungen.",
          `Ein eingespieltes Team mit klarem Einsatzgebiet in ${DEMO_REGION}.`,
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
              "Wer handwerklich zupacken kann und sich in ein eingespieltes Team einbringen möchte, ist willkommen.",
          },
          {
            title: "Quereinsteiger",
            body:
              "Auch ohne klassischen Dachdecker-Lebenslauf ist ein Einstieg möglich, wenn Motivation und Verlässlichkeit stimmen.",
          },
          {
            title: "Dachdeckergesellen",
            body:
              "Fachliche Erfahrung ist natürlich willkommen, besonders dann, wenn Sie sauber arbeiten und Verantwortung übernehmen möchten.",
          },
        ],
      },
      {
        blockType: "cta",
        eyebrow: "Unkompliziert",
        heading: "Kurz melden, vorstellen und ins Gespräch kommen.",
        description:
          `Schreiben Sie uns einfach an ${DEMO_EMAIL} oder nutzen Sie das Formular auf dieser Seite.`,
        primaryCta: {
          label: "Zur Bewerbung",
          href: "#bewerbung",
        },
        secondaryCta: {
          label: "Jetzt anrufen",
          href: `tel:${DEMO_PHONE_HREF}`,
        },
      },
    ],
  },
};

export const fallbackGalleryProjects: GalleryProject[] = [
  {
    slug: "dachsanierung-bestand",
    title: "Dachsanierung im Bestand",
    serviceType: "Dachsanierung",
    summary:
      "Neuaufbau einer belasteten Dachfläche mit sauber geführten Anschlüssen und einer dauerhaft stimmigen Lösung im Bestand.",
    location: DEMO_CITY,
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
    location: DEMO_REGION,
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
    location: DEMO_REGION,
    completionYear: 2026,
    result: "Mehr Tageslicht und bessere Nutzbarkeit",
    tags: ["Dachfenster", "Dämmung", "Sanierung"],
  },
];
