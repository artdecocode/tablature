const heading = (h) => {
  const value = `\x1b[1m${h}\x1b[0m`
  return { value, length: h.length }
}

const getLength = (value) => {
  return `${value}`.replace(/\033\[.*?m/g, '').length
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
 * @param {!_tablature.Config} conf Options for the program.
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
      const r = getReplacement(replacements, key)
      const { length } = r(val)
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

const getReplacement = (replacements, key) => {
  const r = replacements[key]
  if (!r) return value => ({
    value,
    length: getLength(value),
  })
  return r
}

const getLine = (keys, values, widths, replacements = {}, center = {}) => {
  let currentWidth = 0
  const k = keys.map(key => {
    const w = widths[key]
    if (!w) throw new Error(`Unknown field ${key}`)
    const v = values[key]
    const r = getReplacement(replacements, key)
    const cen = center[key]
    const [rh, ...rows] = `${v}`.split('\n')
    const h = pad(rh, w, r, cen)
    let rs = ''
    if (rows.length) {
      rs = '\n' + rows.map(row => {
        const wb = ' '.repeat(currentWidth)
        const rv = pad(row, w, r, cen)
        return `${wb}${rv}`
      }).join('\n')
    }
    const res = `${h}${rs}`
    currentWidth += w + 2
    return res
  })
  const line = k.join('  ')
  return line
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('..').Config} _tablature.Config
 */