const { rose } = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '767px',
      // => @media (min-width: 767px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        albert: ['"Albert Sans"', "sans-serif"]
      },
      width: {
        'cus-70': '70%',
        'cus-30': '30%',
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      cusBlack: {
        100: "rgba(0,0,0,0.1)",
        200: "rgba(0,0,0,0.2)",
        300: "rgba(0,0,0,0.3)",
        400: "rgba(0,0,0,0.4)",
        500: "rgba(0,0,0,0.5)",
        600: "rgba(0,0,0,0.6)",
        700: "rgba(0,0,0,0.7)",
        800: "rgba(0,0,0,0.8)",
        900: "rgba(0,0,0,0.9)"
      },
      blue: {
        50: "#e6f1fe",
        100: "#cce3fd",
        200: "#99c7fb",
        300: "#d4d4d8",
        400: "#338ef7",
        500: "#006FEE",
        600: "#005bc4",
        700: "#004493",
        800: "#002e62",
        900: "#001731"
      },
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
      },
      skyBlue: {
        50: "#FOFCFF",
        100: "#E6FAFE",
        200: "#D7F8FE",
        300: "#C3F4FD",
        400: "#A5EEFD",
        500: "#7EE7FC",
        600: "#06B7DB",
        700: "#09ACD",
        800: "#0E8AAA",
        900: "#053B48"
      },
      green: {
        50: "#E8FAF0",
        100: "#d1f4e0",
        200: "#a2e9c1",
        300: "#74dfa2",
        400: "#45d483",
        500: "#17c964",
        600: "#12a150",
        700: "#0e793c",
        800: "#095028",
        900: "#052814"
      },
      yellow: {
        50: "#fefce8",
        100: "#fedd3",
        200: "#fbdba7",
        300: "#f9c97c",
        400: "#f7b750",
        500: "#f5a524",
        600: "#c4841d",
        700: "#936316",
        800: "#62420e",
        900: "#312107"
      },
      rose: {
        50: "#fee7ef",
        100: "#fdd0df",
        200: "#faa0bf",
        300: "#f871a0",
        400: "#f54180",
        500: "#f31260",
        600: "#c20e4d",
        700: "#920b3a",
        800: "#610726",
        900: "#310413"
      }
    },

  },
  variants: {
    extend: {}
  },
  plugins: []
};
