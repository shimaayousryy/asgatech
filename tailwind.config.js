/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        'main_color' :'#008080', 
        'primary_color' : '#EAF7FF',
        'secondary':'#757575',
      
      },
      borderRadius :{
        'main_radius':'10px'
      },
    },
  },
  plugins: [],
}

