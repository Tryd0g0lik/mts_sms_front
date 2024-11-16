import { fileURLToPath } from 'url';
import * as path from 'path';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default {
  "languageOptions": {
    "parserOptions": {
      "project": [
        "./tsconfig.json"
      ],
      "tsconfigRootDir": path.dirname(fileURLToPath(import.meta.url)),
      "ecmaVersion": "latest",
      "sourceType": "module",
    },
    "globals": {
      "commonjs": true,
      "node": true,
      "browser": false,
    },
  },

  "plugins": {
    "@typescript-eslint": tseslint.plugin,
    "@stylistic": stylistic,
    "@stylistic/ts": stylisticTs
  },
  "rules": {
    "quotes": "off",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "ignoreTypeValueShadow": true,
        "ignoreFunctionTypeParameterNameValueShadow": true
      }
    ],
    "@typescript-eslint/space-before-function-paren": "off",
    // пробел перед скобкой именованной, анонимной футнкции и прочее
    "@stylistic/space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "no-new": "off",
    "no-new-wrappers": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/semi": "off",
    "@stylistic/semi": [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": false
      }
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "@stylistic/semi-style": [
      "error",
      "last"
    ],
    "indent": "off",
    "@stylistic/ts/indent": [
      "error",
      2
    ],
    '@stylistic/ts/indent': ['error', 2, { "ignoredNodes": ["ConditionalExpression"] }],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        "fixToUnknown": false,
        "ignoreRestArgs": true
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    // ключевое слово при импорте
    "@typescript-eslint/consistent-type-imports": "off",
    // if else for, while, &&, || and ?:
    "@typescript-eslint/no-unnecessary-condition": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/await-thenable": "off",
    // Запретить использование неиспользуемых переменных
    "@typescript-eslint/no-unused-vars": "off",
    // "no-extraneous-dependencies": "off", //
    // Запретить присваивание значений с типом any переменным и свойствам.
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off", // Запретить вызов значения с типом any.
    "@stylistic/ts/member-delimiter-style": [ // TypeScript - три разделителя между элементами в интерфейсах и псевдонимах типов
      "error",
      {
        "multiline": {
          "delimiter": "none", // ' ' ',' ';'
          "requireLast": false // последняя строка
        }
      }
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off", //["error", { ignoreTernaryTests: true }]
  },
  "ignores": [
    "webpack.config.js",
    "src/index.ts",
    "src/interfaces.ts",
    "package.*",
  ]
};
