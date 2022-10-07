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
          "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)",
      },
    },
  },
  plugins: [],
};
