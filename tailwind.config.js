export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'koku-dark': '#2c3e50',
        'koku-light': '#ecf0f1',
        'koku-accent': '#e74c3c',
        'koku-green': '#27ae60',
        'koku-gray': '#95a5a6',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
};