/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#050505",
        "on-background": "#ffffff",
        "surface": "#0a0a0a",
        "on-surface": "#f8f9fa",
        "surface-variant": "#141414",
        "on-surface-variant": "#a1a1aa",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#080808",
        "surface-container": "#0f0f0f",
        "surface-container-high": "#171717",
        "surface-container-highest": "#262626",
        "primary": "#ffffff",
        "on-primary": "#000000",
        "primary-container": "#1f2937",
        "on-primary-container": "#f3f4f6",
        "secondary": "#d1d5db",
        "on-secondary": "#111827",
        "secondary-container": "#374151",
        "on-secondary-container": "#e5e7eb",
        "tertiary": "#9ca3af",
        "on-tertiary": "#111827",
        "tertiary-container": "#4b5563",
        "on-tertiary-container": "#f9fafb",
        "error": "#ef4444",
        "on-error": "#ffffff",
        "error-container": "#7f1d1d",
        "on-error-container": "#fecaca",
        "outline": "#3f3f46",
        "outline-variant": "#27272a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "gutter": "24px",
        "container-max": "1440px",
        "margin-desktop": "80px",
        "margin-mobile": "24px"
      },
      fontFamily: {
        "headline-xl": ["Outfit", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Outfit", "sans-serif"],
        "headline-lg": ["Outfit", "sans-serif"],
        "display-lg": ["Outfit", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "400" }],
        "label-md": ["13px", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
        "display-lg-mobile": ["56px", { "lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "300" }],
        "headline-lg": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "400" }],
        "display-lg": ["88px", { "lineHeight": "1.05", "letterSpacing": "-0.04em", "fontWeight": "300" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }]
      },
      maxWidth: {
        "container-max": "1440px"
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
