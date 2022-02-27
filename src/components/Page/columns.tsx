type Page = {
  title: string;
  link: string;
};

type Column = {
  title: string;
  pages: Page[];
};

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
      { title: "PINUS Ori", link: "/events#pinus-ori" },
      { title: "Nusantaraku", link: "/events#nusantaraku" },
      { title: "POPI", link: "/events#popi" },
      { title: "Misi Kami Peduli", link: "/events#mkp" },
      { title: "NUANSA", link: "/events#nuansa" },
      { title: "PINUS Playbook", link: "/events" },
    ],
  },
  {
    title: "Admissions",
    pages: [
      { title: "Before Acceptance", link: "/admissions/before-01" },
      { title: "After Acceptance", link: "/admissions/after-01" },
    ],
  },
  {
    title: "Resources",
    pages: [
      { title: "Aksara", link: "https://aksarapinus.wordpress.com/" },
      {
        title: "Humans of PINUS",
        link: "https://www.instagram.com/humansof.pinus/",
      },
    ],
  },
];
