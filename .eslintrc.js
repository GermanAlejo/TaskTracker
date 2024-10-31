
/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/stylistic'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
    "src/utils/graphQl-types.ts",
    "src/graphQl/*"
  ],
  rules: {
    "no-unused-vars": "error",
    "no-console": "warn",
    "no-undef": "error",
    "quotes": "off",
    "import/no-unresolved": "off",
    "indent": "off",
    "complexity": ["error", { "max": 10 }],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-shadow": "error",
    "no-undef": "off"
  }
};