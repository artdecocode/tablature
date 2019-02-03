import { equal } from 'zoroaster/assert'
import SnapshotContext from 'snapshot-context'
import { c } from 'erte'
import Context from '../context'
import tablature from '../../src'

/** @type {Object.<string, (c: Context, s: SnapshotContext)>} */
const T = {
  context: [
    Context,
    SnapshotContext,
  ],
  'is a function'() {
    equal(typeof tablature, 'function')
  },
  async 'prints correct data'({ DATA, SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
    })
    await test('normal.txt', res.trim())
  },
  async 'centers heading'({ DATA, SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
      centerHeadings: ['when'],
    })
    await test('heading-center.txt', res.trim())
  },
  async 'centers values'({ DATA, SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
    const res = tablature({
      keys: ['name', 'when'],
      data: DATA,
      centerValues: ['when'],
      headings: {
        when: 'When',
      },
    })
    await test('values-center.txt', res.trim())
  },
  async 'replaces values'({ DATA, SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
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
    await test('replacements.txt', res.trim())
  },
  async 'goes to new lines'({ SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
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
    await test('new-lines.txt', res.trim())
  },
  async 'strips ansii'({ SNAPSHOT_DIR }, { setDir, test }) {
    setDir(SNAPSHOT_DIR)
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
    await test('ansii.txt', res.trim())
  },
}

export default T
