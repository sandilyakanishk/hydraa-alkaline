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
        "on-primary-container": "#c8d6ff",
        "primary-fixed": "#d9e2ff",
        "surface-container": "#1f2020",
        "on-error": "#690005",
        "tertiary-fixed-dim": "#b5cad4",
        "secondary": "#b6c7eb",
        "inverse-on-surface": "#2f3031",
        "secondary-fixed-dim": "#b6c7eb",
        "on-tertiary": "#20333b",
        "surface-container-high": "#292a2a",
        "background": "#121414",
        "secondary-container": "#394968",
        "error": "#ffb4ab",
        "surface-variant": "#343535",
        "on-primary": "#002d6e",
        "on-secondary-fixed": "#081b37",
        "on-primary-fixed": "#001945",
        "on-primary-fixed-variant": "#00429b",
        "primary-container": "#0a57c5",
        "on-error-container": "#ffdad6",
        "tertiary": "#b5cad4",
        "error-container": "#93000a",
        "outline-variant": "#424653",
        "surface-tint": "#b0c6ff",
        "secondary-fixed": "#d7e3ff",
        "surface-container-lowest": "#0d0e0f",
        "surface": "#121414",
        "primary": "#b0c6ff",
        "on-tertiary-fixed": "#0a1e26",
        "on-tertiary-container": "#c5dae4",
        "surface-dim": "#121414",
        "surface-container-low": "#1b1c1c",
        "surface-container-highest": "#343535",
        "on-tertiary-fixed-variant": "#364952",
        "tertiary-container": "#4c6069",
        "on-background": "#e3e2e2",
        "tertiary-fixed": "#d1e6f1",
        "primary-fixed-dim": "#b0c6ff",
        "on-surface": "#e3e2e2",
        "on-secondary": "#20304d",
        "on-surface-variant": "#c3c6d5",
        "on-secondary-fixed-variant": "#374765",
        "inverse-primary": "#0e58c6",
        "inverse-surface": "#e3e2e2",
        "surface-bright": "#383939",
        "on-secondary-container": "#a8b9dc",
        "outline": "#8c909f"
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
        "margin-desktop": "64px",
        "margin-mobile": "24px"
      },
      fontFamily: {
        "headline-xl": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
        "display-lg-mobile": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800" }],
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
