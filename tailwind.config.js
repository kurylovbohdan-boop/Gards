/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './context/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#1E232A',      // угольный
        olive: '#2B3A2C',     // лесной оливковый
        signal: '#FF6B00',    // сигнальный оранжевый (скидки, главные кнопки)
        'signal-dark': '#D95A00',
        paper: '#F4F5F7',     // фон страницы
        line: '#D5D9DE',
        muted: '#5E6670',
        ok: '#2E7D32',
        warn: '#B26A00',
      },
      fontFamily: { sans: ['var(--font-sans)', 'Arial', 'sans-serif'] },
      borderRadius: { DEFAULT: '2px', sm: '2px', md: '3px', lg: '4px' },
    },
  },
  plugins: [],
};
