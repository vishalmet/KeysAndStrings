/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-home-bg': "url('/home.png')",
      },
      colors: {
        'custom-bg': "#FFF8E1",
        'custom-primary': "#FF4500",
        'custom-secondary': "#FFD700",
        'custom-accent': "#32CD32",
        'custom-text': "#2F4F4F ",
        'custom-button': "#FF6347 ",
        'custom-hover': "#FF7F50 ",
      }
    },
  },
  plugins: [],
};
