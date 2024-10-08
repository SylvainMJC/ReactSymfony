/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",

    "./assets/react/controllers/*.jsx",
    "./assets/react/controllers/section/*.jsx",
    "./assets/react/controllers/components/*.jsx",
    "./assets/react/controllers/poll/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        customGrey: "#6B7280",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
