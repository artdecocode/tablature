/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _tablature = {}
/**
 * The function to use to replace values for display.
 * @typedef {function(string): { value: string, length: number }}
 */
_tablature.Replacement
/**
 * Options for the program.
 * @record
 */
_tablature.Config
/**
 * Keys to print as columns.
 * @type {!Array<string>}
 */
_tablature.Config.prototype.keys
/**
 * The array of data items to prints as rows.
 * @type {!Array<!Object<string, string>>}
 */
_tablature.Config.prototype.data
/**
 * The display names for each column.
 * @type {(!Object<string, string>)|undefined}
 */
_tablature.Config.prototype.headings
/**
 * The map of replacement functions which will run against data items.
 * @type {(!Object<string, _tablature.Replacement>)|undefined}
 */
_tablature.Config.prototype.replacements
/**
 * Centre values of these column (use original keys, not headings).
 * @type {(!Array<string>)|undefined}
 */
_tablature.Config.prototype.centerValues
/**
 * Center headings of these column (use original keys, not headings).
 * @type {(!Array<string>)|undefined}
 */
_tablature.Config.prototype.centerHeadings
