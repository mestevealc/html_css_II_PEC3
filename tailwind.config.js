/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],

  theme: {
    colors: {
      "blue": "#007bff",
      "blue-dark": "#005EC3",
      "white": "#f8f9fa",
      "gray": "#6c757d",
      "gray-light": "#ddd",
      "gray-dark": "#333",
    },

    fontFamily: {
      sans: [
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans - serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      serif: ["Georgia", "Times New Roman", "serif"],
    },

    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
