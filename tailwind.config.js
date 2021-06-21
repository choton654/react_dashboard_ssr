module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      '2xl': '0 25px 50px 0px #212121, 0 10px 10px -5px #212121',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
