import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'three-gradient-color': 'linear-gradient(230deg, #1F4247, #0D1D23, #09141A)',
        'background-input': 'linear-gradient(230deg, rgba(31, 66, 71, .9))'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config
