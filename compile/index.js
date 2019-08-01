module.exports = {}

/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_tablature.Replacement} Replacement The function to use to replace values for display.
 */
/**
 * @typedef {(value: string) => {value: string, length: number}} _tablature.Replacement The function to use to replace values for display.
 */
/**
 * @typedef {_tablature.Config} Config Options for the program.
 */
/**
 * @typedef {Object} _tablature.Config Options for the program.
 * @prop {!Array<string>} keys Keys to print as columns.
 * @prop {!Array<!Object<string, string>>} data The array of data items to prints as rows.
 * @prop {!Object<string, string>} [headings] The display names for each column.
 * @prop {!Object<string, _tablature.Replacement>} [replacements] The map of replacement functions which will run against data items.
 * @prop {!Array<string>} [centerValues] Centre values of these column (use original keys, not headings).
 * @prop {!Array<string>} [centerHeadings] Center headings of these column (use original keys, not headings).
 */
