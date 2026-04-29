export type DemoLogo = {
  height: number;
  name: string;
  src: string;
  width: number;
};

export const demoLogos: DemoLogo[] = [
  {
    name: "Nordfirst",
    src: "/demo-logos/nordfirst.svg",
    width: 208,
    height: 52,
  },
  {
    name: "Dachform",
    src: "/demo-logos/dachform.svg",
    width: 208,
    height: 52,
  },
  {
    name: "Kupferwerk",
    src: "/demo-logos/kupferwerk.svg",
    width: 208,
    height: 52,
  },
  {
    name: "Steinkante",
    src: "/demo-logos/steinkante.svg",
    width: 208,
    height: 52,
  },
  {
    name: "Lichtfirst",
    src: "/demo-logos/lichtfirst.svg",
    width: 208,
    height: 52,
  },
  {
    name: "Werkdach",
    src: "/demo-logos/werkdach.svg",
    width: 208,
    height: 52,
  },
];

export const marqueeDemoLogos = [...demoLogos, ...demoLogos];
