import { generatePropertyName } from './generatePropertyName'
import { isIE, getLocalStorageValue, getIn } from './utils'
import { ACTIVE_THEME_JSON } from './config'

/**
 * Returns the value of a key that belongs to the theme
 * @param {string} pathToVal
 * @returns {string | undefined} themeValue
 */
export const useTheme = pathToVal => {
  /**
   * If IE, can't use custom properties approach; send back raw value instead
   * Consequences of this:
   * - IE will only get the value of the key once, no updates
   * - must ensure theme is set before anything tries to access theme values; if not, values will be undefined
   */
  if (isIE()) {
    const activeThemeJSON = getLocalStorageValue(ACTIVE_THEME_JSON)
    if (!!activeThemeJSON) {
      const activeTheme = JSON.parse(activeThemeJSON)
      return getIn(activeTheme, pathToVal)
    }
    return
  }

  return `var(--${generatePropertyName(pathToVal)})`
}
