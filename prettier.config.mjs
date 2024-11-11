/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva', 'cn'],
};

export default config;
