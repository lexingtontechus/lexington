const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
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
    "slash-zero",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "sunset",
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
          "base-200": "#334155", //slate700
          "base-300": "#64748b", //slate500
          info: "#3730a3", //indigo800
          success: "#059669", //emerald600
          warning: "#ea580c", //orange600
          error: "#e11d48", //rose600
        },
      },
    ],
  },
};
