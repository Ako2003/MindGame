/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      padding: {
        DEFAULT: "5vw",
      },
      center: true,
    },

    extend: {
      fontFamily: {
        Rubik: ["Rubik Gemstones", "sans-serif"],
      },

      colors: {
        primary: "#1b57f2",

        dark: {
          400: "#101221",
        },

        darkener: {
          50: "rgba(0,0,0,.05)",
          100: "rgba(0,0,0,.1)",
          150: "rgba(0,0,0,.15)",
          200: "rgba(0,0,0,.2)",
          250: "rgba(0,0,0,.25)",
          300: "rgba(0,0,0,.3)",
          350: "rgba(0,0,0,.35)",
          400: "rgba(0,0,0,.4)",
          450: "rgba(0,0,0,.45)",
          500: "rgba(0,0,0,.5)",
          550: "rgba(0,0,0,.55)",
          600: "rgba(0,0,0,.6)",
          650: "rgba(0,0,0,.65)",
          700: "rgba(0,0,0,.7)",
          750: "rgba(0,0,0,.75)",
          800: "rgba(0,0,0,.8)",
          850: "rgba(0,0,0,.85)",
          900: "rgba(0,0,0,.9)",
          950: "rgba(0,0,0,.95)",
        },

        lightener: {
          50: "rgba(255,255,255,.05)",
          100: "rgba(255,255,255,.1)",
          150: "rgba(255,255,255,.15)",
          200: "rgba(255,255,255,.2)",
          250: "rgba(255,255,255,.25)",
          300: "rgba(255,255,255,.3)",
          350: "rgba(255,255,255,.35)",
          400: "rgba(255,255,255,.4)",
          450: "rgba(255,255,255,.45)",
          500: "rgba(255,255,255,.5)",
          550: "rgba(255,255,255,.55)",
          600: "rgba(255,255,255,.6)",
          650: "rgba(255,255,255,.65)",
          700: "rgba(255,255,255,.7)",
          750: "rgba(255,255,255,.75)",
          800: "rgba(255,255,255,.8)",
          850: "rgba(255,255,255,.85)",
          900: "rgba(255,255,255,.9)",
          950: "rgba(255,255,255,.95)",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-top": "radial-gradient(at top, var(--tw-gradient-stops))",
        "gradient-radial-at-bottom": "radial-gradient(at bottom, var(--tw-gradient-stops))",
      },

      boxShadow: {
        "card-100": "0 0 10px 0 rgba(0,0,0,0.1)",
        "card-200": "0 0 10px 0 rgba(0,0,0,0.2)",
        "card-300": "0 0 10px 0 rgba(0,0,0,0.3)",
        "card-400": "0 0 10px 0 rgba(0,0,0,0.4)",
        "white-card-100": "0 0 10px 0 rgba(255,255,255,0.1)",
        "white-card-200": "0 0 10px 0 rgba(255,255,255,0.2)",
        "white-card-300": "0 0 10px 0 rgba(255,255,255,0.3)",
        "white-card-400": "0 0 10px 0 rgba(255,255,255,0.4)",
      },

      fontSize: { xxs: ["0.625rem", "0.875rem"] },
    },
  },
  plugins: [],
};
