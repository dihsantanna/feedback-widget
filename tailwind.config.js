module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        lemonade: {
          400: "#6DFF7C",
          500: "#57E55D",
        },
        grafite: {
          500: "#09090A"
        }
      },
      borderRadius: {
        md: '4px',
      },
      textShadow: {
        '2xl': '0 0 1px #09090A, 0 0 3px #09090A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
  ],
}
