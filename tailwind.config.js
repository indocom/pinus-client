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
      secondary: "#EDEDED",
    }),
    backgroundImage: () => ({
      home: "url('assets/backgrounds/home.jpg')",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
