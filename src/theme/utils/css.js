import { isIE } from './index'

let StyleBlock // Let this be a global variable so we can save time when accessing style block
const ruleMap = {} // Used to keep track of what rules are active and their order

/**
 * Creates a style block in the header for all theme values to be specified in
 */
const createPropertyStyleBlock = () => {
  const Elem = document.createElement('style')
  Elem.setAttribute('data-themeProperties', true)
  document.head.appendChild(Elem)
  return Elem
}

/**
 * Creates a named css property for use in the document
 * @param {string} name
 * @param {string} value
 */
export const createProperty = (name, value) => {
  // Custom properties don't work in IE so don't bother setting them
  if (isIE()) return

  if (StyleBlock === undefined) {
    StyleBlock = createPropertyStyleBlock()
  }

  if (!!ruleMap[name]) {
    deleteProperty(name)
  }

  const styleSheet = StyleBlock.sheet
  const insertedIndex = StyleBlock.sheet.insertRule(
    `:root { --${name}: ${value}; }`,
    styleSheet.cssRules.length,
  )
  ruleMap[name] = insertedIndex
}

/**
 * Deletes a css property from the style block
 * @param {string} name The property to be deleted
 */
const deleteProperty = name => {
  if (!ruleMap[name]) return
  StyleBlock.sheet.deleteRule(ruleMap[Object.keys(ruleMap).indexOf(name)])
  delete ruleMap[name]
}

/**
 * Removes all css properties from the style block
 */
export const clearProperties = () => {
  Object.keys(ruleMap).forEach(deleteProperty)
}
