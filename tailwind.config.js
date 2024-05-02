const { space } = require('postcss/lib/list');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#FCB72B",
          800: "#495567",
          700: "#939CAA",
          900: "#333A44"
        },
        secondary: {
          100: "#F2F5F9",
          200: "#E5ECF4",
          300: "#FFF4DF",

        },
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      fontSize: {
        "TH1": "3.5rem",
        "TH2": "3rem",
        "TH3": "2.5rem",
        "TH4": "1.5rem",
        "THBODY": "0.9375rem",
      },
      lineHeight:{
        "TH1": "3.5rem",
        "TH2": "3rem",
        "TH3": "3rem",
        "TH4": "1.75rem",
        "THBODY": "1.5625rem",
      },
      letterSpacing:{
        "TH1": "-2.5px",
        "TH2": "-2.14px",
        "TH3": "-1.79px",
        "TH4": "-1.07px",
      },
      backgroundImage: {
        "home-hero-desktop": "url('../public/static/images/home-hero-desktop.jpg')",
        "home-hero-tablet": "url('../public/static/images/home-hero-tablet.jpg')",
        "home-hero-mobile": "url('../public/static/images/home-hero-mobile.jpg')",

        "about-hero-desktop": "url('../public/static/images/about-hero-desktop.jpg')",
        "about-hero-tablet": "url('../public/static/images/about-hero-tablet.jpg')",
        "about-hero-mobile": "url('../public/static/images/about-hero-mobile.jpg')",

        "careers-location-hero-desktop": "url('../public/static/images/careers-location-hero-desktop.jpg')",
        "careers-location-hero-tablet": "url('../public/static/images/careers-location-hero-tablet.jpg')",
        "careers-location-hero-mobile": "url('../public/static/images/careers-location-hero-mobile.jpg')",

        "world-map-desktop": "url('../public/static/images/world-map-desktop.png')",
        "world-map-tablet": "url('../public/static/images/world-map-tablet.png')",
        "world-map-mobile": "url('../public/static/images/world-map-mobile.png')",

        "circle": "url('../public/static/patterns/circle.svg')",
        "left-downward-arrow": "url('../public/static/patterns/left-downward-arrow.svg')",
        "left-upward-arrow": "url('../public/static/patterns/left-upward-arrow.svg')",
        "line": "url('../public/static/patterns/line.svg')",
        "right-arrow": "url('../public/static/patterns/right-arrow.svg')",
        "semi-circles": "url('../public/static/patterns/semi-circles.svg')",
        "white-circles": "url('../public/static/patterns/white-circles.svg')",
        "line-white": "url('../public/static/patterns/line-white.svg')",

      },
    },
  },
  plugins: [],
};
