import { resolve } from 'path'

/**
 * A testing context for the package.
 */
export default class Context {
  async _init() {
    // console.log('init context')
  }
  get SNAPSHOT_DIR() {
    return resolve(__dirname, '../snapshot')
  }
  get DATA() {
    return [
      {
        name: 'hello',
        when: 'yesterday',
      },
      {
        name: 'world',
        when: 'now',
      },
    ]
  }
  /**
   * Example method.
   */
  example() {
    return 'OK'
  }
  async _destroy() {
    // console.log('destroy context')
  }
}
