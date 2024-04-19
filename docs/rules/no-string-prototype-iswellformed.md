---
title: "es-x/no-string-prototype-iswellformed"
description: "disallow the `String.prototype.isWellFormed` methods"
since: "v7.1.0"
---

# es-x/no-string-prototype-iswellformed
> disallow the `String.prototype.isWellFormed` methods

- ✅ The following configurations enable this rule: [no-is-usv-string] and [no-new-in-esnext]

This rule reports ES2024 [`String.prototype.isWellFormed` methods](https://github.com/tc39/proposal-is-usv-string) as errors.

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

```js
/*eslint es-x/no-string-prototype-iswellformed: [error, { aggressive: true }] */
"str".isWellFormed()
```

</eslint-playground>a

## 🔧 Options

This rule has an option.

```yaml
rules:
  es-x/no-string-prototype-iswellformed: [error, { aggressive: false }]
```

### aggressive: boolean

Configure the aggressive mode for only this rule.
This is prior to the `settings['es-x'].aggressive` setting.

## 🚀 Version

This rule was introduced in v7.1.0.

## 📚 References

- [Rule source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/lib/rules/no-string-prototype-iswellformed.js)
- [Test source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/tests/lib/rules/no-string-prototype-iswellformed.js)

[no-is-usv-string]: ../configs/index.md#no-is-usv-string
[no-new-in-esnext]: ../configs/index.md#no-new-in-esnext
