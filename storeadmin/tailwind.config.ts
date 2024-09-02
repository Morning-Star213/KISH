import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#2D6E55',
      secondary: '#DCEFE4',
      hoverPrimary: '#1F4638',
      hoverOutline: '#DCEFE4',
      disabled: '#6B7280',
      border: '#D4D4D8',
      white: '#FFFFFF',
      black: '#333333',
      error: '#DC2626',
      gray: '#F3F4F6',
      errorInput: '#FEE2E2',
      errorBorder: '#DC2626',
      tableBorder: '#D3D4DB',
      tableHeader: '#F3F4F6',
      overlay: '#333333',
    },
  },
  plugins: [],
}
export default config
