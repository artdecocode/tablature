# tablature

[![npm version](https://badge.fury.io/js/tablature.svg)](https://npmjs.org/package/tablature)

`tablature` Will Display Data In A Table In CLI.

```sh
yarn add tablature
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`tablature(config: config): String`](#tablatureconfig-config-string)
  * [`Replacement`](#type-replacement)
  * [`Config`](#type-config)
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

`(value: string) => {value: string, length: number}` __<a name="type-replacement">`Replacement`</a>__: The function to use to replace values for display.



__<a name="type-config">`Config`</a>__: Options for the program.
<table>
 <thead><tr>
  <th>Name</th>
  <th>Type &amp; Description</th>
 </tr></thead>
 <tr>
  <td rowSpan="3" align="center"><strong>keys*</strong></td>
  <td><em>!Array&lt;string&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>Keys to print as columns.</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center"><strong>data*</strong></td>
  <td><em>!Array&lt;!Object&lt;string, string&gt;&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>The array of data items to prints as rows.</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">headings</td>
  <td><em>!Object&lt;string, string&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>The display names for each column.</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">replacements</td>
  <td><em>!Object&lt;string, <a href="#type-replacement" title="The function to use to replace values for display.">Replacement</a>&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>The map of replacement functions which will run against data items.</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">centerValues</td>
  <td><em>!Array&lt;string&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>Centre values of these column (use original keys, not headings).</td>
 </tr>
 <tr>
  <td rowSpan="3" align="center">centerHeadings</td>
  <td><em>!Array&lt;string&gt;</em></td>
 </tr>
 <tr></tr>
 <tr>
  <td>Center headings of these column (use original keys, not headings).</td>
 </tr>
</table>

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