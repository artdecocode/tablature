import { equal } from '@zoroaster/assert'
import { c } from 'erte'
import Context from '../context'
import tablature from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof tablature, 'function')
  },
  'prints correct data'({ DATA }) {
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
    })
    return res
  },
  'centers heading'({ DATA }) {
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
      centerHeadings: ['when'],
    })
    return res
  },
  'centers values'({ DATA }) {
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
      centerValues: ['when'],
      headings: {
        when: 'When',
      },
    })
    return res
  },
  'works with non-string data'() {
    const res = tablature({
      keys: ['name', 'n'],
      data: [{ name: 'test', n: '0' }],
    })
    return res
  },
  'replaces values'({ DATA }) {
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
      replacements: {
        when(v) {
          const value = `--${v}--`
          return {
            value,
            length: value.length,
          }
        },
      },
    })
    return res
  },
  'goes to new lines'() {
    const res = tablature({
      keys: ['name', 'value'],
      data: [{
        name: 'test',
        value: 'OK this is a test',
      }, {
        name: 'test2',
        value: 'another test\nwith new line',
      }],
    })
    return res
  },
  'strips ansii'() {
    const res = tablature({
      keys: ['name', 'value'],
      data: [{
        name: c('test', 'red'),
        value: 'test',
      }, {
        name: c('another test', 'green'),
        value: 'test2',
      }],
    })
    return res
  },
}

export default T
