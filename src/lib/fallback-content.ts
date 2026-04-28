import type {
  GalleryProject,
  PageContent,
  SiteSettingsContent,
} from "@/lib/content";

export const fallbackSiteSettings: SiteSettingsContent = {
  companyName: "Grimm & Lechner",
  legalName: "Grimm GmbH & Co. KG",
  tagline: "Dachdeckermeister. Ihr Dach in guten Haenden.",
  phone: "0951 123456",
  email: "info@grimmundlechner.de",
  address: "Bamberg und Umgebung\nTermin nach Vereinbarung",
  navigation: [
    { label: "Start", href: "/" },
    { label: "Referenzen", href: "/referenzen" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footerText:
    "Seit 1919 steht Grimm & Lechner fuer Dachdeckerarbeiten mit Substanz, saubere Ausfuehrung und klare Kommunikation auf der Baustelle.",
};

export const fallbackPages: Record<string, PageContent> = {
  start: {
    slug: "start",
    title: "Dachdeckermeister Grimm & Lechner in Bamberg",
    metaDescription:
      "Grimm & Lechner plant, saniert und wartet Daecher, Fassaden und Blechdetails in Bamberg und Umgebung.",
    hero: {
      eyebrow: "Seit 1919 aus Bamberg",
      title: "Daecher mit Haltung, Handwerk und einem klaren Ansprechpartner.",
      description:
        "Von der klassischen Steildachsanierung bis zu Spenglerarbeiten, Abdichtungen und Dachfenstern begleiten wir Projekte mit ruhiger Planung und sauberer Ausfuehrung.",
      primaryCta: {
        label: "Projekt anfragen",
        href: "/kontakt",
      },
      secondaryCta: {
        label: "Karriere entdecken",
        href: "/karriere",
      },
    },
    sections: [
      {
        blockType: "stats",
        eyebrow: "Wofuer wir stehen",
        heading: "Ein Dachprojekt laeuft besser, wenn Kommunikation und Ausfuehrung zusammenpassen.",
        items: [
          {
            value: "1919",
            label: "Tradition im Handwerk",
            description: "Langfristig gewachsenes Wissen fuer Altbau, Sanierung und Neubau.",
          },
          {
            value: "1",
            label: "Team fuer Dach und Blech",
            description: "Kurze Wege, klare Verantwortungen und keine Reibungsverluste.",
          },
          {
            value: "100%",
            label: "Saubere Abwicklung",
            description: "Von der Besichtigung bis zur finalen Abstimmung mit Blick aufs Ganze.",
          },
        ],
      },
      {
        blockType: "serviceGrid",
        eyebrow: "Leistungen",
        heading: "Alles, was das Dach langfristig dicht, robust und wertig haelt.",
        description:
          "Wir decken klassische Dachdeckerleistungen genauso ab wie Details, bei denen Erfahrung und Sorgfalt den Unterschied machen.",
        items: [
          {
            title: "Dachsanierung",
            description:
              "Behutsame Sanierungen im Bestand mit einem Blick fuer Substanz, Anschluesse und langlebige Loesungen.",
            bullets: ["Steildach", "Flachdach", "Wartung und Reparatur"],
          },
          {
            title: "Spenglerarbeiten",
            description:
              "Praezise Blechanschluesse, Verkleidungen und Entwaesserungsdetails fuer ein stimmiges Gesamtbild.",
            bullets: ["Rinnen", "Gauben", "Verwahrungen"],
          },
          {
            title: "Dachfenster und Belichtung",
            description:
              "Mehr Licht, bessere Nutzbarkeit und fachgerechte Integration in bestehende Dachaufbauten.",
            bullets: ["Einbau", "Austausch", "Innenanschluesse"],
          },
          {
            title: "Abdichtung und Schutz",
            description:
              "Loesungen fuer Anschluesse, Durchdringungen und sensible Bereiche mit hoher Beanspruchung.",
            bullets: ["Abdichtungen", "Anschluesse", "Details"],
          },
        ],
      },
      {
        blockType: "process",
        eyebrow: "Ablauf",
        heading: "So fuehren wir Projekte ohne unnötiges Hin und Her.",
        description:
          "Ein fester Ablauf sorgt dafuer, dass Termine, Material und Ausfuehrung zusammenlaufen.",
        steps: [
          {
            title: "Vor-Ort-Termin",
            description:
              "Wir schauen uns Dach, Bestand und Anforderungen direkt an und besprechen die sinnvollen Optionen.",
          },
          {
            title: "Klare Empfehlung",
            description:
              "Sie bekommen eine nachvollziehbare Einschätzung, welche Loesung technisch und wirtschaftlich passt.",
          },
          {
            title: "Saubere Umsetzung",
            description:
              "Auf der Baustelle arbeiten wir strukturiert, abgestimmt und mit Blick auf Details und Anschluesse.",
          },
          {
            title: "Abschluss und Betreuung",
            description:
              "Zum Projektende gehen wir alles gemeinsam durch und bleiben auch fuer Wartung und Nachfragen greifbar.",
          },
        ],
      },
      {
        blockType: "textColumns",
        eyebrow: "Warum Grimm & Lechner",
        heading: "Handwerklich solide, im Umgang angenehm und auf der Baustelle verlässlich.",
        description:
          "Uns geht es nicht um laute Selbstdarstellung, sondern um Arbeit, die man Jahre spaeter noch gut findet.",
        columns: [
          {
            title: "Bestand mit Respekt behandeln",
            body:
              "Gerade bei aelteren Gebaeuden kommt es darauf an, vorhandene Substanz zu verstehen und nur dort einzugreifen, wo es wirklich sinnvoll ist.",
          },
          {
            title: "Details ernst nehmen",
            body:
              "Viele Probleme entstehen nicht in der Flaeche, sondern an Uebergaengen. Genau dort investieren wir viel Aufmerksamkeit.",
          },
          {
            title: "Verstaendlich beraten",
            body:
              "Sie bekommen keine unnötig komplizierten Erklaerungen, sondern eine klare Einschaetzung, mit der man Entscheidungen treffen kann.",
          },
        ],
      },
      {
        blockType: "faq",
        eyebrow: "Haeufige Fragen",
        heading: "Was Bauherren und Eigentuemer vorab oft wissen wollen.",
        items: [
          {
            question: "Welche Projekte uebernehmt ihr?",
            answer:
              "Wir arbeiten an Sanierungen, Reparaturen und Neubauprojekten rund um Dach, Blech und angrenzende Details.",
          },
          {
            question: "Ist auch ein Austausch einzelner Bauteile moeglich?",
            answer:
              "Ja. Nicht jedes Projekt braucht sofort eine Komplettsanierung. Oft sind gezielte Massnahmen die bessere Loesung.",
          },
          {
            question: "Arbeitet ihr nur in Bamberg?",
            answer:
              "Unser Schwerpunkt liegt in Bamberg und Umgebung. Bei passenden Projekten pruefen wir den Radius gern individuell.",
          },
        ],
      },
      {
        blockType: "cta",
        eyebrow: "Naechster Schritt",
        heading: "Wenn Sie ein Dachprojekt im Blick haben, schauen wir gemeinsam drauf.",
        description:
          "Ein erstes Gespraech reicht oft schon, um die naechsten sinnvollen Schritte einzuordnen.",
        primaryCta: {
          label: "Kontakt aufnehmen",
          href: "/kontakt",
        },
        secondaryCta: {
          label: "Referenzen ansehen",
          href: "/referenzen",
        },
      },
    ],
  },
  kontakt: {
    slug: "kontakt",
    title: "Kontakt zu Grimm & Lechner",
    metaDescription:
      "Kontaktieren Sie Grimm & Lechner fuer Dachsanierung, Blecharbeiten und Wartung in Bamberg und Umgebung.",
    hero: {
      eyebrow: "Kontakt",
      title: "Kurze Wege, klare Antworten und ein Termin, der wirklich weiterhilft.",
      description:
        "Erzaehlen Sie uns kurz, worum es geht. Wir melden uns mit einer realistischen Einschaetzung und dem passenden naechsten Schritt.",
      primaryCta: {
        label: "Anfrage senden",
        href: "#anfrage",
      },
      secondaryCta: {
        label: "Telefonisch melden",
        href: "tel:0951123456",
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
            body: "Wenn es schnell gehen soll oder Sie das Projekt direkt besprechen moechten.",
            label: "0951 123456",
            href: "tel:0951123456",
            icon: "phone",
          },
          {
            title: "E-Mail",
            body: "Praktisch fuer erste Unterlagen, Fotos oder eine kurze Projektbeschreibung.",
            label: "info@grimmundlechner.de",
            href: "mailto:info@grimmundlechner.de",
            icon: "mail",
          },
          {
            title: "Einsatzgebiet",
            body: "Bamberg und Umgebung mit Fokus auf private und gewerbliche Dachprojekte.",
            label: "Region Bamberg",
            icon: "map",
          },
          {
            title: "Terminabstimmung",
            body: "Besichtigungen und Abstimmungen nach Vereinbarung.",
            label: "Flexible Termine",
            icon: "clock",
          },
        ],
      },
      {
        blockType: "textColumns",
        eyebrow: "Vorbereitung",
        heading: "Damit wir Ihre Anfrage schnell einordnen koennen.",
        columns: [
          {
            title: "Projektart",
            body:
              "Ob Sanierung, Wartung, Blechdetail oder Dachfenster: eine kurze Einordnung hilft uns bei der Vorbereitung.",
          },
          {
            title: "Objekt und Ort",
            body:
              "Ein Satz zum Gebaeude und die Lage reichen fuer den ersten Abgleich oft schon aus.",
          },
          {
            title: "Dringlichkeit",
            body:
              "Wenn es um akute Schaeden oder einen engen Bauzeitenplan geht, sagen Sie es direkt dazu.",
          },
        ],
      },
    ],
  },
  karriere: {
    slug: "karriere",
    title: "Karriere bei Grimm & Lechner",
    metaDescription:
      "Arbeiten bei Grimm & Lechner: Dachdeckerhandwerk mit Haltung, Struktur und echten Perspektiven im Raum Bamberg.",
    hero: {
      eyebrow: "Karriere",
      title: "Gute Arbeit braucht ein Team, das sich aufeinander verlassen kann.",
      description:
        "Wir suchen Menschen, die Lust auf solides Handwerk, saubere Baustellen und eine Mannschaft mit ruhigem, direktem Umgang haben.",
      primaryCta: {
        label: "Jetzt bewerben",
        href: "#bewerbung",
      },
      secondaryCta: {
        label: "Kontakt",
        href: "/kontakt",
      },
    },
    sections: [
      {
        blockType: "jobHighlights",
        eyebrow: "Das erwartet dich",
        heading: "Ein Umfeld, in dem man konzentriert arbeiten und sich entwickeln kann.",
        description:
          "Wir wollen kein aufgesetztes Employer Branding, sondern Bedingungen, unter denen man seinen Job gerne macht.",
        items: [
          "Verlaessliche Absprachen und ein direkter Draht auf der Baustelle.",
          "Abwechslungsreiche Projekte zwischen Sanierung, Detailarbeit und klassischem Dachhandwerk.",
          "Ein Team, das Erfahrung teilt und neue Kolleginnen und Kollegen wirklich aufnimmt.",
          "Ein Betrieb mit Geschichte, der trotzdem nach vorn denkt.",
        ],
        note:
          "Wenn du handwerklich sauber arbeitest, mitdenken willst und keine Lust auf Theater hast, sollten wir reden.",
      },
      {
        blockType: "textColumns",
        eyebrow: "Wen wir suchen",
        heading: "Wichtig ist weniger die grosse Pose als die richtige Haltung zur Arbeit.",
        columns: [
          {
            title: "Fachlich",
            body:
              "Ob mit Erfahrung im Dachdeckerhandwerk oder mit ehrlichem Interesse am Einstieg: handwerkliches Verstaendnis ist uns wichtig.",
          },
          {
            title: "Im Team",
            body:
              "Wir suchen Leute, die verbindlich sind, mitdenken und auf der Baustelle klar miteinander umgehen.",
          },
          {
            title: "In der Entwicklung",
            body:
              "Wer Verantwortung uebernehmen will, soll bei uns nicht auf der Stelle treten muessen.",
          },
        ],
      },
      {
        blockType: "cta",
        eyebrow: "Unkompliziert",
        heading: "Kein grosses Bewerbungsritual. Lieber ein ehrliches Gespraech.",
        description:
          "Schreib uns kurz, wer du bist, was du machst und was du suchst. Den Rest klaeren wir gemeinsam.",
        primaryCta: {
          label: "Zur Bewerbung",
          href: "#bewerbung",
        },
        secondaryCta: {
          label: "Anrufen",
          href: "tel:0951123456",
        },
      },
    ],
  },
  referenzen: {
    slug: "referenzen",
    title: "Referenzen und Projektbeispiele",
    metaDescription:
      "Einblicke in Projektbeispiele von Grimm & Lechner rund um Dachsanierung, Blechdetails und Dachfenster.",
    hero: {
      eyebrow: "Referenzen",
      title: "Ein Querschnitt durch Arbeiten, bei denen Ausfuehrung und Details im Mittelpunkt stehen.",
      description:
        "Unsere Galerie zeigt typische Themenfelder und Projektcharaktere, an denen man unsere Art zu arbeiten gut ablesen kann.",
      primaryCta: {
        label: "Projekt besprechen",
        href: "/kontakt",
      },
      secondaryCta: {
        label: "Karriere",
        href: "/karriere",
      },
    },
    sections: [
      {
        blockType: "textColumns",
        eyebrow: "Was wir zeigen",
        heading: "Nicht jede gute Arbeit muss laut sein. Aber man sollte sie ansehen koennen.",
        columns: [
          {
            title: "Sanierung",
            body:
              "Massnahmen im Bestand, bei denen Material, Anschlussdetails und bauphysikalische Fragen sauber ineinandergreifen muessen.",
          },
          {
            title: "Neubau und Ergaenzung",
            body:
              "Projekte, bei denen Dachflaechen, Dachfenster und Blechanschluesse als stimmige Einheit gedacht werden.",
          },
          {
            title: "Detailarbeit",
            body:
              "Gerade an Gauben, Rinnen und Uebergaengen zeigt sich, wie sorgfaeltig ein Dach wirklich umgesetzt wurde.",
          },
        ],
      },
    ],
  },
};

export const fallbackGalleryProjects: GalleryProject[] = [
  {
    slug: "sanierung-bestandsdach",
    title: "Sanierung im Bestandsdach",
    serviceType: "Dachsanierung",
    summary:
      "Neuaufbau einer belasteten Dachflaeche mit sauber gefuehrten Anschluessen und einer robusten Detailausbildung.",
    location: "Raum Bamberg",
    completionYear: 2025,
    result: "Neuer Dachaufbau mit klarer Entwaesserung",
    tags: ["Bestand", "Steildach", "Anschlussdetails"],
  },
  {
    slug: "dachfenster-und-blech",
    title: "Dachfenster mit Blechintegration",
    serviceType: "Dachfenster",
    summary:
      "Einbau neuer Belichtungselemente mit abgestimmten Blechanschluessen und durchdachter Einbindung in die Dachflaeche.",
    location: "Metropolregion",
    completionYear: 2024,
    result: "Mehr Licht und saubere Anschlusspunkte",
    tags: ["Belichtung", "Blech", "Bestand"],
  },
  {
    slug: "gauben-und-rinnendetails",
    title: "Gauben- und Rinnendetails",
    serviceType: "Spenglerarbeiten",
    summary:
      "Praezise Blechfuehrung an sensiblen Uebergaengen fuer dauerhaft belastbare und optisch ruhige Details.",
    location: "Oberfranken",
    completionYear: 2023,
    result: "Langlebige Blechdetails ohne Kompromisse",
    tags: ["Gaube", "Rinne", "Verwahrung"],
  },
  {
    slug: "wartung-und-reparatur",
    title: "Wartung und gezielte Reparatur",
    serviceType: "Instandhaltung",
    summary:
      "Nicht jede Aufgabe braucht die grosse Loesung. Hier stand eine schnelle, saubere Schadensbehebung im Vordergrund.",
    location: "Bamberg",
    completionYear: 2026,
    result: "Substanz gesichert und Folgeschaeden vermieden",
    tags: ["Wartung", "Reparatur", "Schnelle Hilfe"],
  },
];
