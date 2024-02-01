import { withTV } from 'tailwind-variants/dist/transformer.js';
import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = withTV({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--custom-primary)',
        'utility-blue': {
          DEFAULT: 'var(--custom-blue)',
          link: 'var(--custom-blue-link)',
          sky: 'var(--custom-blue-sky)',
          indicator: 'var(--custom-blue-indicator)',
          underline: 'var(--custom-blue-underline)',
        },
        'utility-black': 'var(--custom-black)',
        'utility-gray':{
          form: 'var(--border-gray)',
          check: 'var(--border-gray-check)',
          components: 'var(--background-gray)',
          separator: 'var(--separator-gray)'
        } ,
        'utility-purple': 'var(--custom-purple)',
        'icon-danger': 'var(--icon-danger)',
        'icon-success': 'var(--icon-success)',
        'form-error': 'var(--form-error)',
      },
      fontSize: {
        '32px': '2rem',  // 32px
      },
      lineHeight: {
        '9.5': '2.375rem', //38px,
        '19px': '19px'
      },
      boxShadow: {
        'header': '0px 4px 4px 0px #00000040',
        'tutorial': '0px 1px 2px 0px rgba(0, 0, 0, 0.16), 0px 0px 1px 0px rgba(0, 0, 0, 0.04)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      borderRadius: {
        '3px': '3px',
        '4px': '4px'
      },
      spacing: {
        '14px': '14px',
      }
    },
  },
  plugins: [nextui()]
})

export default config
