/* eslint-disable no-undef */
module.exports = {
  purge: [
    "./pages/**/*.@(js|jsx|ts|tsx)",
    "./components/**/*.@(js|jsx|ts|tsx)",
    "./styles/**/*.css",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
