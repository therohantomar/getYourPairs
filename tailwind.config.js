/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':"350px",
      },
      fontFamily:{
          "martian":["Martian"],
          "ubuntu":["Ubuntu"],
          "nunito":["Nunito"],
          "mooli":["Mooli"],
          "titillium":["Titillium"]
      },
    },
  },
  plugins: [require("daisyui")],
}

