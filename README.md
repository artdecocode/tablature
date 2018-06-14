# tablature

[![npm version](https://badge.fury.io/js/tablature.svg)](https://badge.fury.io/js/tablature)

`tablature` is a Node.js package to display data in a table.

```sh
yarn add -E tablature
```

## `tablature(Conf: Object):string`

Returns a string representation of data as a table.

```js
import tablature from '../src'

const DATA = [
  {
    name: 'hello',
    when: 'yesterday',
  },
  {
    name: 'world',
    when: 'now',
  },
]

const res = tablature({
  keys: ['name', 'when'],
  data: DATA,
  centerValues: ['when'],
  centerHeadings: ['when'],
  headings: {
    name: 'Name',
    when: 'When',
  },
})
console.log(res)
```

```fs
Name     When
hello  yesterday
world     now
```

| property       | type             | description                                                       |
|----------------|------------------|-------------------------------------------------------------------|
| keys           | string[]         | Keys to print as columns.                                         |
| data           | `Object.<string, string>[]`       | An array of data items to prints as rows.        |
| headings       | `Object.<string, string>` | Display names for each column.                                    |
| replacements   | `Object.<string, Replacement>`  | A map of replacement functions which will run against data items. |
| centerValues   | string[]         | Centre values of this column (use original keys, not headings)    |
| centerHeadings | string[]         | Center headings of this column (use original keys, not headings)  |

### Replacement

A replacement function must return an object containing `value` and `length` property. This is to enable printing of Unix escape codes.

```js
const isEnabled = (value) => {
  if (value == 'ENABLED') return { value: `\x1b[32mOK\x1b[0m`, length: 2 }
  if (value == 'NOTPRESENT') return { value: `\x1b[31m--\x1b[0m`, length: 2 }
  return { value, length: value.length }
}

const replacements = {
  enabled: isEnabled,
}
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
