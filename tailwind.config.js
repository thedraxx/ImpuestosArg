/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'primary-100': '#F0F4F8',
        'primary-200': '#D9E2EC',
        'primary-300': '#BCCCDC',
        'primary-400': '#9FB3C8',
        'primary-500': '#829AB1',
        'primary-600': '#627D98',
        'primary-700': '#486581',
        "lightBlack": '#1F2937',
      },
    },
  },
  plugins: [],
}
