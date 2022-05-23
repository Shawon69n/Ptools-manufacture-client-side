module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7dd3fc",

          "secondary": "#d8b4fe",

          "accent": "#c4b5fd",

          "neutral": "#1A1A1A",

          "base-100": "#FFFFFF",

          "info": "#4AA8BF",

          "success": "#4ade80",

          "warning": "#facc15",

          "error": "#ef4444",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}