/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  plugins: ['prettier-plugin-astro', "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
