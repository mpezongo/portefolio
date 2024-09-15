/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform:"translateY(-10px)",
          },
          to:{
            opacity:"1",
            transform: "translateY(0)",
          }
        }
      },
      rotateCircle:{
        from :{
          transform: "rotate(0deg)"
        },
        to :{
          transform: "rotate(360deg)"
        }
      },
      animation:{
        slidein: "slidein 1s ease 300ms forwards",
        rotateCircl:"spin 3s linear infinite",
      },
      screens: {
        tel: "0px",
        // => @media (min-width: 0px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
      backgroundImage: {
        "home-img": "url('../src/assets/img/home2.png')",
        "ccna":"url('../src/assets/img/ccna-introduction-to-networks.png')"
      },
      colors: {
        primary: "#28e98c",
        secondary:{
          DEFAULT:"#303030",
          "20": "#202020",
          "40": "#404040"
        },
        third:"#0e0e0e",
        rouge: "#ff0000",
        green: "#00ff00",
      },
      borderWidth:{
        "1":"1px",
        "1.5":"1.5px",
        "2.":"2px",
        "2.5":"2.5px",
        "3.":"3px",
      },
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
        urbanist:["Urbanist", "sans-serif"],
        jost:["Jost", "sans-serif"]
      },
      blur: {
        "sm-1": "10px",
      },
      backdropBlur: {
        "sm-1": "1px",
      },
      textShadow: {
        outline:
          "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
      },
      rotate: {
        'x-12': 'rotateX(12deg)',
        'y-12': 'rotateY(12deg)',
        // Ajoute d'autres angles si nécessaire
      },
      width: {
        "1":"1px",
        "42":"10.5rem",
        "100": "28rem",
        "104": "32rem",
        "108": "36rem",
        "112": "40rem",
        "116": "44rem",
        "120": "48rem",
      },
      height: {
        "1":'1px',
        "42":"10.5rem",
        "70":"17rem",
        "100": "28rem",
        "104": "32rem",
        "108": "36rem",
        "112": "40rem",
        "116": "44rem",
        "120": "48rem",
      },
      minWidth: {
        "100": "28rem",
        "104": "32rem",
        "108": "36rem",
        "112": "40rem",
        "116": "44rem",
        "120": "48rem",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-textshadow")],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
