import { createProperty } from './utils'

/**
 * Creates custom properties on the document for all key/value pairs in the object
 * @param {object} obj
 * @param {string} prefix
 */
export const generateCustomProperties = (obj, prefix) =>
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (typeof value === 'object') {
      const newPrefix = !!prefix ? `${prefix}-${key}` : key
      return generateCustomProperties(obj[key], newPrefix)
    }

    const propertyName = !!prefix ? `${prefix}-${key}` : key
    const propertyValue = obj[key]
    createProperty(propertyName, propertyValue)
  })
