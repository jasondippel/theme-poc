import { generateCustomProperties } from './generateCustomProperties'
import { setLocalStorageValue } from './utils'
import { ACTIVE_THEME_JSON } from './config'

/**
 * Updates values in the document to reflect the values in the provided theme
 * (Full replacement)
 * @param {object} themeObj
 */
export const setActiveTheme = themeObj => {
  /**
   * Theme Object (themeObj)
   * Expected shape (roughly):
   * {
   *   key1: val,
   *   key2: {
   *     nestedKey1: val,
   *     nestedKey2: val,
   *     nestedKey3: {
   *       // can keep nesting if it wants...
   *     },
   *   },
   *   // no limit to object size, though large objects are discouraged
   * }
   */

  // TODO: clear previous theme
  // update localstorage
  setLocalStorageValue(ACTIVE_THEME_JSON, JSON.stringify(themeObj))
  // set new custom properties
  generateCustomProperties(themeObj)
}
