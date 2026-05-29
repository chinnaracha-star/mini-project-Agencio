/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./style.css"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#0B1D51",
          muted: "#64748B",
          accent: "#2563EB",
          surface: "#F1F5FF",
          icon: "#E8F0FE",
        },
      },
      maxWidth: {
        newsletter: "64rem",
        footer: "72rem",
      },
    },
  },
  plugins: [],
};
