import { generatePropertyName } from './generatePropertyName'
import {
  setIn,
  getLocalStorageValue,
  setLocalStorageValue,
  createProperty,
} from './utils'
import { ACTIVE_THEME_JSON } from './config'

/**
 * Updates specific key for the active theme to the provided value
 * (Partial replacement)
 * @param {string} propertyName
 * @param {string} propertyValue
 */
export const setThemeVal = (rawPropertyName, propertyValue) => {
  // Update active theme in local storage so that update persists to next session
  const activeThemeJSON = getLocalStorageValue(ACTIVE_THEME_JSON)
  if (!!activeThemeJSON) {
    const activeTheme = JSON.parse(activeThemeJSON)
    const newTheme = setIn(activeTheme, rawPropertyName, propertyValue)
    setLocalStorageValue(ACTIVE_THEME_JSON, JSON.stringify(newTheme))
  }

  // Update custom property
  createProperty(generatePropertyName(rawPropertyName), propertyValue)
}
