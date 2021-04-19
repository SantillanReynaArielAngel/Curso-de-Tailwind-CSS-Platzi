module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // De esta manera añadimos colores propios 
      colors:{
      'primary':'#f3c614',
      'secundary':'#353535',
    },
    height:{
      '80': '20rem ',
      '100': '25rem'
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
