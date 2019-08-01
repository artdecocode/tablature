## API

The package is available by importing its default function:

```js
import tablature from 'tablature'
```

%~%

```## tablature => string
[
  ["config", "Config"]
]
```

Returns a string representation of data as a table.

<typedef narrow>types/index.xml</typedef>

<table>
<tr><th>Source</th><th>Output</th></tr>
<!-- block-start -->
<tr><td>

%EXAMPLE: example, ../src => tablature%
</td>
<td>

%FORK example%
</td></tr>
</table>

%~ width="25"%

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

%~%