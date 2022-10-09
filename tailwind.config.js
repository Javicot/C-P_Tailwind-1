/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "primary-y": "#f3c614",
        "secondary-y": "#353535",
        "secondary-lg": "#6e6e6e",
        "tercero-3": "#2dced6",
        "cuarto-4": "#9f58ff",
      },
      backgroundImage: {
        "main-img":
          "url('https://images.unsplash.com/photo-1601090000612-05caf795fc96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
      },
      height: {
        80: "20rem",
        100: "25rem",
      },
      maxWidth: {
        cien: "62.5rem",
      },
      minWidth: {
        tress: "20rem",
        cuatros: "25rem",
      },
    },
  },
  plugins: [],
};
