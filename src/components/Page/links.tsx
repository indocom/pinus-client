export interface NavLink {
  title: string;
  slug: string;
  alt?: boolean;
}

export const navLinks: NavLink[] = [
  { title: "About", slug: "about" },
  { title: "Admissions", slug: "admissions" },
  { title: "Events", slug: "events" },
  { title: "Contact Us", slug: "contact" },
<<<<<<< HEAD
  { title: "SAN", slug: "sanWrite" },
=======
  { title: "SAN", slug: "kudos" },
>>>>>>> 7cdc558b9c23f253f406f2d2fb3c10d52231ff0f
];

// pages that would be rendered alternatively

export const altPages = navLinks
  .filter((item) => item.alt)
  .map((item) => "/" + item.slug);
