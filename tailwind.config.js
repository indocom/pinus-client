// eslint-disable-next-line no-undef
module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: false,
  theme: {
    backgroundImage: () => ({
      home: "url('/assets/backgrounds/home.jpg')",
      "home-showcase1": "url('/assets/images/home-1.jpg')",
      "home-showcase2": "url('/assets/images/home-2.jpg')",
      "home-showcase3": "url('/assets/images/home-3.jpg')",
      about: "url('/assets/backgrounds/about.jpg')",
      admissions: "url('/assets/backgrounds/admissions.jpg')",
      events: "url('/assets/backgrounds/events.jpg')",
      contact: "url('/assets/backgrounds/contact.jpg')",
    }),
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
      "sm-min": { min: "641px" },
      "md-min": { min: "769px" },
      "lg-min": { min: "1025px" },
      "xl-min": { min: "1281px" },
      "2xl-min": { min: "1537px" },
    },
    extend: {
      colors: {
        "pinus-red": "#FF3B3A",
        "pinus-blue": "#202F6E",
        "pinus-yellow": "#EFB61F",
        "pinus-black": "#161616",
        "grey-primary": "#EDEDED",
        "grey-secondary": "#E1E4E8",
        "grey-tertiary": "#F6F8FA",
      },
      height: () => ({
        "screen-75": "75vh",
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
