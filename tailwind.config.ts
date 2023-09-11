import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "base": "#191724",
        "surface": "#1f1d2e",
        "overlay": "#26233a",
        "muted": "#6e6a86",
        "subtle": "#908caa",
        "text": "#e0def4",
        "love": "#eb6f92",
        "gold": "#f6c177",
        "gold-2": "#ea9d34",
        "rose": "#ebbcba",
        "pine": "#31748f",
        "foam": "#9ccfd8",
        "iris": "#c4a7e7",
        "high-low": "#21202e",
        "high-med": "#403d52",
        "high-high": "#524f67,"
      },
      fontFamily:{
        logo:['MuseoModerno'],
        body: ['Quicksand']
      },
      animation:{
        'my-bounce': 'bounce .5s ease infinite;',
        'grow-up': 'grow-up .5s ease;'
      }
    },
  },
  plugins: [],
}
export default config
