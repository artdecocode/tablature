const heading = (h) => {
  const value = `\x1b[1m${h}\x1b[0m`
  return { value, length: h.length }
}

const makeBinaryHash = (arr) => {
  const res = arr.reduce((acc, current) => {
    return {
      ...acc,
      [current]: true,
    }
  }, {})
  return res
}


/**
 * Display values in a table.
 * @param {Config} conf
 * @param {string[]} config.keys Keys to print as columns.
 * @param {Object.<string, string>[]} config.data An array of data items to prints as rows.
 * @param {Object.<string, string>} [config.headings] Display names for each column.
 * @param {Object.<string, Replacement>} [config.replacements] A map of replacement functions which will run against data items.
 * @param {string[]} [config.centerValues] Centre values of this column (use original keys, not headings)
 * @param {string[]} [config.centerHeadings] Center headings of this column (use original keys, not headings)
 * @returns {string} A string which represents a table.
 */
export default function tablature(conf) {
  const {
    keys = [],
    data = [],
    headings = {},
    replacements = {},
    centerValues = [],
    centerHeadings = [],
  } = conf
  const [i] = data
  if (!i) return ''

  const cv = makeBinaryHash(centerValues)
  const hv = makeBinaryHash(centerHeadings)

  const k = Object.keys(i).reduce((acc, key) => {
    const h = headings[key]
    return {
      ...acc,
      [key]: h ? h.length : key.length, // initialise with titles lengths
    }
  }, {})

  const widths = data.reduce((dac, d) => {
    const res = Object.keys(d).reduce((acc, key) => {
      const maxLength = dac[key]
      const val = d[key]
      const r = replacements[key]
      const { length } = r ? r(val) : `${val}`
      return {
        ...acc,
        [key]: Math.max(length, maxLength),
      }
    }, {})
    return res
  }, k)

  const kk = keys.reduce((acc, key) => {
    const h = headings[key]
    return {
      ...acc,
      [key]: h || key,
    }
  }, {})
  const hr = keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: heading,
    }
  }, {})
  const hl = getLine(keys, kk, widths, hr, hv)
  const rl = data.map((row) => {
    const line = getLine(keys, row, widths, replacements, cv)
    return line
  })
  return [
    hl,
    ...rl,
  ].join('\n')
}

const pad = (val, length, replacement, cen) => {
  if (val === undefined) return ' '.repeat(length)
  let v = val
  let l
  if (replacement) {
    const { value, length: len } = replacement(val)
    v = value
    l = len
  } else {
    l = `${val}`.length
  }
  const p = length - l
  if (cen) {
    const left = Math.floor(p / 2)
    const right = p - left
    const s = ' '.repeat(left) + v + ' '.repeat(right)
    return s
  }
  const s = ' '.repeat(p)
  return `${v}${s}`
}

const getLine = (keys, values, widths, replacements = {}, center = {}) => {
  const k = keys.map(key => {
    const w = widths[key]
    if (!w) throw new Error(`Unknown field ${key}`)
    const v = values[key]
    const r = replacements[key]
    const cen = center[key]
    const p = pad(v, w, r, cen)
    return p
  })
  const line = k.join('  ')
  return line
}


/**
 * @typedef {(value: string) => {value: string, length: number}} Replacement A replacement function.
 *
 *
 * @typedef {Object} Config
 * @property {string[]} keys Keys to print as columns.
 * @property {Object.<string, string>[]} data An array of data items to prints as rows.
 * @property {Object.<string, string>} [headings = {}] Replace data keys with headings.
 * @property {Object.<string, Replacement>} [replacements] Replace data values with this values.
 * @property {string[]} [centerValues] Center values of this column (use original keys, not headings)
 * @property {string[]} [centerHeadings Center headings of this column (use original keys, not headings)
 */
