---
title: "es-x/no-string-prototype-towellformed"
description: "disallow the `String.prototype.toWellFormed` methods"
---

# es-x/no-string-prototype-towellformed
> disallow the `String.prototype.toWellFormed` methods

- ❗ <badge text="This rule has not been released yet." vertical="middle" type="error"> ***This rule has not been released yet.*** </badge>
- ✅ The following configurations enable this rule: [no-is-usv-string] and [no-new-in-esnext]

This rule reports ES2024 [`String.prototype.toWellFormed` methods](https://github.com/tc39/proposal-is-usv-string) as errors.

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

```js
/*eslint es-x/no-string-prototype-towellformed: [error, { aggressive: true }] */
"str".toWellFormed()
```

</eslint-playground>a

## 🔧 Options

This rule has an option.

```yaml
rules:
  es-x/no-string-prototype-towellformed: [error, { aggressive: false }]
```

### aggressive: boolean

Configure the aggressive mode for only this rule.
This is prior to the `settings['es-x'].aggressive` setting.

## 📚 References

- [Rule source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/lib/rules/no-string-prototype-towellformed.js)
- [Test source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/tests/lib/rules/no-string-prototype-towellformed.js)

[no-is-usv-string]: ../configs/index.md#no-is-usv-string
[no-new-in-esnext]: ../configs/index.md#no-new-in-esnext
