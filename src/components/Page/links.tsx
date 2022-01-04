export interface NavLink {
  title: string;
  slug: string;
  alt?: boolean;
}

export const navLinks: NavLink[] = [
  { title: "About", slug: "about" },
  { title: "Admissions", slug: "admissions" },
  { title: "Events", slug: "events" },
  { title: "Visit Us", slug: "visit" },
  { title: "Contact Us", slug: "contact" }
];

// pages that would be rendered alternatively

export const altPages = navLinks
  .filter((item) => item.alt)
  .map((item) => "/" + item.slug);
