# tablature

[![npm version](https://badge.fury.io/js/tablature.svg)](https://npmjs.org/package/tablature)

`tablature` Will Display Data In A Table In CLI.

```sh
yarn add -E tablature
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`tablature(config: config): String`](#tablatureconfig-config-string)
  * [`_tablature.Replacement`](#type-_tablaturereplacement)
  * [`_tablature.Config`](#type-_tablatureconfig)
  * [Replacement](#replacement)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import tablature from 'tablature'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## `tablature(`<br/>&nbsp;&nbsp;`config: config,`<br/>`): String`

Returns a string representation of data as a table.

`(value: string) => {value: string, length: number}` <strong><a name="type-_tablaturereplacement">`_tablature.Replacement`</a></strong>: The function to use to replace values for display.



<strong><a name="type-_tablatureconfig">`_tablature.Config`</a></strong>: Options for the program.


|      Name      |                                                                            Type                                                                             |                             Description                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| __keys*__      | <em>!Array&lt;string&gt;</em>                                                                                                                               | Keys to print as columns.                                           |
| __data*__      | <em>!Array&lt;!Object&lt;string, string&gt;&gt;</em>                                                                                                        | The array of data items to prints as rows.                          |
| headings       | <em>!Object&lt;string, string&gt;</em>                                                                                                                      | The display names for each column.                                  |
| replacements   | <em>!Object&lt;string, <a href="#type-_tablaturereplacement" title="The function to use to replace values for display.">_tablature.Replacement</a>&gt;</em> | The map of replacement functions which will run against data items. |
| centerValues   | <em>!Array&lt;string&gt;</em>                                                                                                                               | Centre values of these column (use original keys, not headings).    |
| centerHeadings | <em>!Array&lt;string&gt;</em>                                                                                                                               | Center headings of these column (use original keys, not headings).  |

```js
import tablature from 'tablature'

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
```
Name     When   
hello  yesterday
world     now
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true" width="25">
</a></p>

### Replacement

A replacement function must return an object containing `value` and `length` property. When replacements are not given, the ANSI codes are removed by _Tablature_, however, the replacement must always return the value along with its length.

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

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>