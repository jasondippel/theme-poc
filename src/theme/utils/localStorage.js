import { LS_KEY } from '../config'

/**
 * Gets the local storage key scoped to this library
 * @param {string} rawKey
 * @returns {string} Scoped key
 */
export const getScopedKey = rawKey => `${LS_KEY}${rawKey}`

/**
 * Gets value from local storage associated with provided key
 * @param {string} rawKey
 * @returns {string} value associated with key in local storage
 */
export const getLocalStorageValue = rawKey =>
  window.localStorage.getItem(getScopedKey(rawKey))

/**
 * Sets the value in local storage
 * @param {string} rawKey
 * @param {string} value
 */
export const setLocalStorageValue = (rawKey, value) =>
  window.localStorage.setItem(getScopedKey(rawKey), value)
