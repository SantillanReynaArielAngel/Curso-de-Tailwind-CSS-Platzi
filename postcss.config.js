const purgecss = require('@fullhuman/postcss-purgecss')
module.exports={
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // Lo siguiente elimina el codigo css no utilizado de style.css 
        purgecss({
            content: ['./**/*.html']
          }),
        // Lo siguiente comprime(elimina saltos de linea y espacios) de un css 
        require('cssnano')({
            preset: 'default',
          }),
    ]
} 