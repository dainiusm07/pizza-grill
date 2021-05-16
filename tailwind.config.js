module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // options: {
    //   safelist: {
    //     greedy: ["/safe$/"],
    //   },
    // },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
  plugins: [],
};
