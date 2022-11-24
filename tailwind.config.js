/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
        backgroundImage: {
            'app': "url('/assets/imgs/bg-app.png')",
            'welcome': "url('/assets/imgs/bg-welcome.png')",
        }
    },
  },
  plugins: [],
}
