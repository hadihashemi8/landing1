/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "basic-Color": "#111B47",
        "second-Color": "#F3F5FF",
      },
      screens:{
        "small": "480px"
      },
    
     
    },
  },
  plugins: [],
};
