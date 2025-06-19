module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "linebreak-style": ["error", "windows"], // ou "off" si tu préfères
    "import/newline-after-import": ["error", { "count": 1 }],
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: {
        jest: true,
      },
      rules: {
        // désactive par exemple cette règle sur les tests si tu veux
        "no-undef": "off",
      }
    }
  ]
};