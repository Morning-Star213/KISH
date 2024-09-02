/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.ts',
}

export default config
