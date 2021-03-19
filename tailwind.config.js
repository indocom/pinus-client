// eslint-disable-next-line no-undef
module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: false,
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
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
      about: "url('/assets/backgrounds/about.jpg')",
      admissions: "url('/assets/backgrounds/admissions.jpg')",
      events: "url('/assets/backgrounds/events.jpg')",
      contact: "url('/assets/backgrounds/contact.jpg')",
      aksaraBox: "url('/assets/backgrounds/aksaraBox.png')",
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
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "7/8": "87.5%",
        "8/9": "88.89%",
        "9/10": "90.0%",
        "10/11": "90.91%",
        "11/12": "91.7%",
        ab: "80.0%",
      },
      zIndex: {
        "-10": "-10",
      },
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
