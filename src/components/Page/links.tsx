export interface NavLink {
  title: string;
  slug: string;
  alt?: boolean;
}

const currentYear = new Date().getFullYear();

export const navLinks: NavLink[] = [
  { title: "About", slug: "about" },
  { title: "Admissions", slug: "admissions" },
  { title: "Events", slug: "events" },
  { title: "Contact Us", slug: "contact" },
  { title: "SAN", slug: `san/${currentYear}` },
];

// pages that would be rendered alternatively

export const altPages = navLinks
  .filter((item) => item.alt)
  .map((item) => "/" + item.slug);
