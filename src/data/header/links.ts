export interface NavLink {
  title: string;
  slug: string;
  alt?: boolean;
}

export const CURRENT_YEAR = new Date().getFullYear();

export const navLinks: NavLink[] = [
  { title: "About", slug: "about" },
  { title: "Admissions", slug: "admissions" },
  { title: "CCA", slug: "cca" },
  { title: "Events", slug: "events" },
  { title: "Contact Us", slug: "contact" },
  { title: "SAN", slug: `san/${CURRENT_YEAR}` },
  { title: "Yearbooks", slug: `yearbooks` },
];

// pages that would be rendered alternatively

export const altPages = navLinks
  .filter((item) => item.alt)
  .map((item) => "/" + item.slug);
