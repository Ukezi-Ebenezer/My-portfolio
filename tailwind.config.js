module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0D0D12",
        slate: "#1A1A24",
        champagne: "#C9A84C",
        ivory: "#FAF8F5",
        muted: "#888794",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        drama: ['"Cormorant Garamond"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        card: "2rem",
        pill: "999px",
      }
    }
  },
  plugins: []
};
