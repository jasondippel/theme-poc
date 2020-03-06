/**
 * Creates a named css property for use in the document
 * @param {string} name
 * @param {string} value
 */
export const createProperty = (name, value) =>
  // TODO: look into insertRule API (https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule)
  document.documentElement.style.setProperty(`--${name}`, value)
