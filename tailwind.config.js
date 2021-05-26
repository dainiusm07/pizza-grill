const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        1: "1px",
      },
      zIndex: {
        "-1": "-1",
        100: "100",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addComponents }) => {
      addComponents([
        {
          ".font-primary": {
            fontFamily: "'Bree Serif', serif",
          },
        },
      ]);
    },
  ],
};
