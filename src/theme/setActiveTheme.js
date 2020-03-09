import { generateCustomProperties } from './generateCustomProperties'
import { clearProperties, setLocalStorageValue } from './utils'
import { ACTIVE_THEME_JSON } from './config'

/**
 * Updates values in the document to reflect the values in the provided theme
 * (Full replacement)
 * @param {object} themeObj
 */
export const setActiveTheme = themeObj => {
  // clear previous theme
  clearProperties()

  // update localstorage
  setLocalStorageValue(ACTIVE_THEME_JSON, JSON.stringify(themeObj))

  // set new custom properties
  generateCustomProperties(themeObj)
}
