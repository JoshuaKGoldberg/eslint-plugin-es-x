---
title: "es-x/no-map-groupby"
description: "disallow the `Map.groupBy()` method"
---

# es-x/no-map-groupby
> disallow the `Map.groupBy()` method

- ❗ <badge text="This rule has not been released yet." vertical="middle" type="error"> ***This rule has not been released yet.*** </badge>
- ✅ The following configurations enable this rule: [no-array-grouping] and [no-new-in-esnext]

This rule reports ES2024 [`Map.groupBy()`](https://github.com/tc39/proposal-array-grouping) method as errors.

## 💡 Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad">

```js
/*eslint es-x/no-map-groupby: error */
Object.groupBy(array, (num, index) => {
  return num % 2 === 0 ? 'even': 'odd';
});

Map.groupBy(array, (num, index) => {
  return num % 2 === 0 ? even: odd;
});
```

</eslint-playground>

## 📚 References

- [Rule source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/lib/rules/no-map-groupby.js)
- [Test source](https://github.com/eslint-community/eslint-plugin-es-x/blob/master/tests/lib/rules/no-map-groupby.js)

[no-array-grouping]: ../configs/index.md#no-array-grouping
[no-new-in-esnext]: ../configs/index.md#no-new-in-esnext
