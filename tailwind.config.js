// eslint-disable-next-line no-undef
module.exports = {
  purge: [
    "./src/pages/**/*.@(js|jsx|ts|tsx)",
    "./src/components/**/*.@(js|jsx|ts|tsx)",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "pinus-red": "#FF3B3A",
      "pinus-blue": "#202F6E",
      "pinus-yellow": "#EFB61F",
      "pinus-black": "#161616",
      secondary: "#EDEDED",
    }),
    backgroundImage: () => ({
      home: "url('/assets/backgrounds/home.jpg')",
      "home-showcase1": "url('/assets/images/home-1.jpg')",
      "home-showcase2": "url('/assets/images/home-2.jpg')",
      "home-showcase3": "url('/assets/images/home-3.jpg')",
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
