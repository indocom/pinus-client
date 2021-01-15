import { Page } from "./Column";

interface Column {
  title: string;
  pages: Page[];
}

export const columns: Column[] = [
  {
    title: "About",
    pages: [
      { title: "Our Story", link: "/about/#our-story" },
      { title: "Vision and Mission", link: "/about/#vision-mission" },
      { title: "Our Divisions", link: "/about/#our-divisions" },
    ],
  },
  {
    title: "Events",
    pages: [
      { title: "PINUS Ori", link: "/events/#pinus-ori" },
      { title: "Nusantaraku", link: "/events/#nusantaraku" },
      { title: "POPI", link: "/events/#popi" },
      { title: "Misi Kami Peduli", link: "/events/#mkp" },
      { title: "NUANSA", link: "/events/#nuansa" },
    ],
  },
  {
    title: "Admissions",
    pages: [
      { title: "Before Acceptance", link: "/admissions/before/01" },
      { title: "After Acceptance", link: "/admissions/after/01" },
    ],
  },
  {
    title: "Resources",
    pages: [
      { title: "Aksara", link: "/" },
      { title: "Humans of PINUS", link: "/" },
    ],
  },
];
