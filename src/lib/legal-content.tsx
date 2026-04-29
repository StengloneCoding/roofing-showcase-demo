import { DEMO_COMPANY_NAME } from "@/lib/demo-placeholders";

export const impressumContent = {
  eyebrow: "Platzhalter",
  title: "Impressum",
  intro: [
    "Diese Vorabversion enthält bewusst noch keine finalen Rechtsangaben.",
  ],
  sections: [
    {
      title: "Hinweis für diese Vorabversion",
      body: [
        <p key="placeholder">
          Vor einer echten Veröffentlichung müssen hier die vollständigen Angaben zu {DEMO_COMPANY_NAME},
          Ansprechpartner, Anschrift, Kontakt, Registerdaten und gegebenenfalls USt-ID eingefügt werden.
        </p>,
      ],
    },
  ],
};

export const datenschutzContent = {
  eyebrow: "Platzhalter",
  title: "Datenschutz",
  intro: [
    "Diese Vorabversion enthält bewusst noch keinen finalen Datenschutzhinweis.",
  ],
  sections: [
    {
      title: "Hinweis für diese Vorabversion",
      body: [
        <p key="p1">
          Vor der Veröffentlichung müssen hier die Datenschutzhinweise für Kontaktformular, Hosting,
          eingesetzte Tools und alle tatsächlich verarbeiteten Daten des späteren Betriebs eingepflegt
          werden.
        </p>,
      ],
    },
  ],
};
