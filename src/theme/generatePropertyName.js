/**
 * Formats a string that contains a "/" separated path to the value to the corresponding property name
 * @param {string} rawPathToValue
 * @returns {string} Name of property corresponding to desired value
 */
export const generatePropertyName = rawPathToValue => {
  const levels = rawPathToValue.split('/')
  return levels.join('-')
}
