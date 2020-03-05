const generateKey = rawPathToKey => rawPathToKey

/**
 * Updates all values in the document to reflect the values in the provided theme; Full replacement
 * @param {object} themeObj
 */
export const setActiveTheme = themeObj => {
  console.log('this does not do anything yet...')
}

/**
 * Updates specific key for the active theme to the provided value; Partial replacement
 * @param {string} key
 * @param {string} val
 */
export const setThemeVal = (key, val) => {
  document.documentElement.style.setProperty(`--${generateKey(key)}`, val)
}

/**
 * Returns the value of a key that belongs to the theme
 * @param {string} pathToVal
 * @returns {string | undefined} themeValue
 */
export const useTheme = pathToVal => `var(--${generateKey(pathToVal)})`
