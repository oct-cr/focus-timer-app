module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "react-app"
  ],
  "plugins": [
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "block-scoped-var": "warn",
    "curly": "warn",
    "no-else-return": "warn",
    "no-unused-expressions": "warn",
    "radix": "error",
    "strict": [
      "warn",
      "never"
    ],
    "no-shadow": "warn",
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "no-unused-vars": "warn",
    "array-bracket-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": "warn",
    "comma-spacing": "warn",
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "indent": "off",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "max-depth": "warn",
    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "padded-blocks": [
      "warn",
      {
        "classes": "always"
      }
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "arrow-spacing": "warn",
    "no-duplicate-imports": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": "warn",
    "sort-imports": "off",
    "template-curly-spacing": [
      "warn",
      "never"
    ]
  }
}