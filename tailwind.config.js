module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // De esta manera añadimos colores propios 
      colors:{
      'primary':'#f3c614',
      'secundary':'#353535',
    }
  }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
