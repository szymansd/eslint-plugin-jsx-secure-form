# eslint-plugin-jsx-secure-form

[![npm version](https://badge.fury.io/js/eslint-plugin-jsx-secure-form.svg)](https://badge.fury.io/js/eslint-plugin-jsx-secure-form)

A minimal set of easy to install ESLint rules to make your React forms and inputs more secure. If any user will have enhanced spellcheck enabled inside browser and you will not disable `spellCheck="false"` it might result into sending passwords & usernames or other PII to 3rd party server.

> If you are interested into details of those security issues you can reed it [here](https://www.bleepingcomputer.com/news/security/google-microsoft-can-get-your-passwords-via-web-browsers-spellcheck/).
> This news caused quite a few reactions all over the world which can be viewed [here](https://blog.lastpass.com/2022/09/best-practices-security-of-your-browser-settings/).

## Setup

1. Install it using package manager:
   - npm `npm install --development eslint eslint-plugin-jsx-secure-form`
   - yarn `yarn add -D eslint eslint-plugin-jsx-secure-form`
2. Extend `plugin:jsx-secure-form/recommended` in your `.eslintrc`.

Example `.eslintrc`:

```json
{
  "extends": ["plugin:jsx-secure-form/recommended"],
  "plugins": ["jsx-secure-form"]
}
```

3. You're done!

## Optional - Configuring the rules

If you want to change a rule of an included plugin (for example of `eslint-plugin-react`) you must prefix the rule with `react-app/` (for preventing namespace collisions).  
For example:

```json
{
  "extends": ["plugin:jsx-secure-form/recommended"],
  "rules": {
    "jsx-secure-form/disable-form-spellcheck": ["warn"],
    "jsx-secure-form/disable-input-spellcheck": ["warn"]
  }
}
```

### Exclusions
This rules is not working for given input types: `"file", "image", "reset", and "submit"`.
