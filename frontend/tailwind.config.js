/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'Inter', 'Roboto', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      maxWidth: {
        'mobile': '432px',
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['20px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'btn': ['14px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '12px',
        'box': '8px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        grltheme: {
          "primary": "#0066CC",
          "secondary": "#6C63FF",
          "accent": "#FF9900",
          "neutral": "#333333",
          "neutral-light": "#F5F5F5",
          "base-100": "#FFFFFF",
          "base-200": "#F5F5F5",
          "base-300": "#E0E0E0",
          "info": "#00AAFF",
          "success": "#00AA00",
          "warning": "#FF9900",
          "error": "#CC0000",
          "--gold": "#FFD700",
          "--gray": "#999999",
          "--light-blue": "#E3F2FD",
        },
      },
    ],
  },
}