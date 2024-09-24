/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",

    "./assets/react/controllers/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
      },
    },
  },
  plugins: [],
};
