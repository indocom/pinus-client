import { Page } from "./Column";

interface Column {
  title: string;
  pages: Page[];
}

export const columns: Column[] = [
  {
    title: "About",
    pages: [
      { title: "Our Story", link: "/" },
      { title: "Vision and Mission", link: "/" },
      { title: "PINUS Committee", link: "/" },
    ],
  },
  {
    title: "Events",
    pages: [
      { title: "PINUS Ori", link: "/" },
      { title: "Nusantaraku", link: "/" },
      { title: "POPI", link: "/" },
      { title: "Misi Kami Peduli", link: "/" },
      { title: "NUANSA", link: "/" },
    ],
  },
  {
    title: "Admissions",
    pages: [
      { title: "Before Acceptance", link: "/" },
      { title: "After Acceptance", link: "/" },
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
