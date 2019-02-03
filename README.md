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
  * [`Replacement`](#type-replacement)
  * [`Config`](#type-config)
  * [Replacement](#replacement)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import tablature from 'tablature'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `tablature(`<br/>&nbsp;&nbsp;`config: config,`<br/>`): String`

Returns a string representation of data as a table.

`{(value: string) => {value: string, length: number}` __<a name="type-replacement">`Replacement`</a>__: The function to use to replace values for display.

__<a name="type-config">`Config`</a>__: Options for the program.

|      Name      |                           Type                            |                             Description                             |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| __keys*__      | _Array&lt;string&gt;_                                     | Keys to print as columns.                                           |
| __data*__      | _Array&lt;Object&lt;string, string&gt;>_                  | The array of data items to prints as rows.                          |
| headings       | _Object&lt;string, string&gt;_                            | The display names for each column.                                  |
| replacements   | _Object.&lt;string, [Replacement](#type-replacement)&gt;_ | The map of replacement functions which will run against data items. |
| centerValues   | _Array&lt;string&gt;_                                     | Centre values of these column (use original keys, not headings).    |
| centerHeadings | _Array&lt;string&gt;_                                     | Center headings of these column (use original keys, not headings).  |

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
[1mName[0m     [1mWhen[0m   
hello  yesterday
world     now
```

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a>  
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>