import { isIE } from './index'

/**
 * Gets a reference to the property style block if it exists
 * @returns {Element | undefined} HTML element or undefined
 */
const maybeGetPropertyStyleBlock = () => {}

/**
 * Creates a style block in the header for all theme values to be specified in
 */
const createPropertyStyleBlock = () => {
  const head = document.head || document.getElementsByTagName('head')[0]
  const StyleBlock = document.createElement('style')
  StyleBlock.setAttribute('data-themeProperties', true)
  head.appendChild(StyleBlock)
}

const removePropertyStyleBlock = () => {}

/**
 * Creates a named css property for use in the document
 * @param {string} name
 * @param {string} value
 */
export const createProperty = (name, value) => {
  // TODO: look into insertRule API (https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule)

  // Custom properties don't work in IE so don't bother setting them
  if (isIE()) return
  document.documentElement.style.setProperty(`--${name}`, value)
}

const removeProperty = () => {}
