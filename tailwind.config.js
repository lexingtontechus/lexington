const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.html", "./*.html", "./**/*.js", "./*.js"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "ordinal",
    "slash-zero"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night",
      {
        lxt: {
          primary: "#cbd5e1", //slate300
          "primary-focus": "#94a3b8", //slate400
          "primary-content": "#e2e8f0", //slate200
          secondary: "#0369a1", //sky700
          "secondary-focus": "#0ea5e9", //sky500
          "secondary-content": "#bae6fd", //sky200
          accent: "#3730a3", //indigo800
          neutral: "#64748b", //slate500
          "base-100": "#0f172a", //slate900
          "base-200": "#1e293b", //slate800
          "base-300": "#4f46e5", //indigo600
          info: "#3730a3", //indigo800
          success: "#059669", //emerald600
          warning: "#ea580c", //orange600
          error: "#e11d48", //rose600
        },
      },
    ],
  },
};
