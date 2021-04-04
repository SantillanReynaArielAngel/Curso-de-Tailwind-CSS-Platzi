module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //Cambairemos al tipografia que esta por defecto
    fontFamily:{
      display:['Gilroy', 'sans-serof'],
      body:['Graphik', 'sans-serif']
    },
    extend: {
      //Añadiremos un nuevo color a la paleta de tailwind
      colors:{
        cyan:'#9cdbff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
