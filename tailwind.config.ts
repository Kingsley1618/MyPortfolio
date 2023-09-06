import type { Config } from 'tailwindcss'

const config: Config = {
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
      keyframes : {
        customRotate : {
          "0%" : {transform : 'rotate(0deg)'},
          "100%" : {transform : "rotate(360deg)"}
        }
      },
      animation : {
        'spin-rotate' : 'customRotate 4s infinite both linear'
      }
    },
  },
  plugins: [],
}
export default config
