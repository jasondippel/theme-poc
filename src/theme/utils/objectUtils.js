const NOT_SET = undefined

/**
 * Given a collection of values, tries to get the value specified by the
 * keyPath. If any part of the keyPath fails, it returns the notSetValue
 * @param {object} collection The collection to search through
 * @param {string} keyPath Path the value; Of the form "keys/to/value..."
 * @param {*} notSetValue Fallback value if keyPath does not exist
 * @returns {*} value at end of keyPath or notSetValue if bad keyPath
 */
export const getIn = (collection, keyPath, notSetValue) => {
  keyPath = keyPath.split('/')
  let i = 0
  while (i !== keyPath.length) {
    collection = collection[keyPath[i++]] || NOT_SET
    if (collection === NOT_SET) return notSetValue
  }

  return collection
}

/**
 * Inserts value at specified path within provided object
 * @param {object} collection
 * @param {string} keyPath
 * @param {string} value
 * @returns {object} Collection with inserted value
 */
export const setIn = (collection, keyPath, value) => {
  const newCollection = Object.assign({}, collection)
  let level = 0
  keyPath = keyPath.split('/')

  keyPath.reduce((a, b) => {
    level++

    if (typeof a[b] === 'undefined' && level !== keyPath.length) {
      a[b] = {}
      return a[b]
    }

    if (level === keyPath.length) {
      a[b] = value
      return value
    } else {
      return a[b]
    }
  }, newCollection)

  return newCollection
}
