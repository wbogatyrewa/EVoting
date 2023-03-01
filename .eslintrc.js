module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ExportDefaultDeclaration",
        message: "Restricted default export, prefer named exports!",
      },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    overrides: [
      {
        files: ["webpack.config.js"],
        rules: {
          "@typescript-eslint/no-var-requires": ["off"],
        },
      },
      {
        files: ["*.stories.tsx"],
        rules: {
          "no-restricted-syntax": ["off"],
        },
      },
    ],
  },
};
