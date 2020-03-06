import { setActiveTheme } from './setActiveTheme'
import { getLocalStorageValue } from './utils'
import { ACTIVE_THEME_JSON } from './config'

/**
 * Sets up theme library; Will try to use previously used theme; If it can't, will use theme provided in call
 * @param {object} themeObj
 */
export const initializeTheme = themeObj => {
  const previousThemeJSON = getLocalStorageValue(ACTIVE_THEME_JSON)
  if (!!previousThemeJSON) {
    try {
      const previousTheme = JSON.parse(previousThemeJSON)
      setActiveTheme(previousTheme)
      return
    } catch (error) {
      // eslint-disable-next-line no-undef
      if (process.env.NODE_ENV === 'production') {
        // eslint-disable-next-line no-console
        console.error('Error using pervious theme', error)
      }
    }
  }

  setActiveTheme(themeObj)
}
