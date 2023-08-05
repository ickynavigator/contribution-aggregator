module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript"
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"]
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/space-before-function-paren": "off"
  }
};
