import { equal } from 'zoroaster/assert'
import Context from '../context'
import tablature from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof tablature, 'function')
  },
  async 'calls package without error'() {
    await tablature()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
