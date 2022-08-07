/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: "Montserrat, sans-serif",
    },
    colors: {
      white: {
        20:"#FFFFFF",
        50: "#f8fafc",
        100: "#f1f5f9",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
      },
      green: "#7B9749",
      darkgreen: "#2F3A3D",
      gray: {
        300: "#cbd5e1",
        400: "#94a3b8",
        600: "#828181",
        800: "#464444",
      },
      blue: {
        300: "#93c5fd",
      },
      red:{
        600: "#dc2626"
      },
    },
    extend: {
      inputShadow: {
        "2px": "1px #7B9749",
      },
      backgroundImage: {
        "auth-hero": "url('../hero/signup-login-hero.png')",
      },
      screens: {
        xs: "320px",
        sm: "481px",
        md: "769px",
        lg: "1025px",
        xl: "1600px",
        "2xl": "1920px"
      },
    },
  },
  plugins: [],
};
// 7B9749  - green mostly in hover
// 828181 - light gray mostyly buttons for in active
// 464444 - drak gray (Font colors)
