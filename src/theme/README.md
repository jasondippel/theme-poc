# theme

## Description

<!-- A description of what this package does. -->

This package provides you with the functions required to initialize, use, and modify a theme.

## Basic Usage

<!-- A basic example of how to use this package. Doesn't have to be proper code, just enough to show how to use it. -->

```js
import {
  initializeTheme,
  setActiveTheme,
  setThemeValue,
  useTheme,
} from './theme'

// Must provide a theme object; object can be any shape
const sampleThemeObj = {
  colors: {
    text: '#000',
    background: '#FFF',
  },
}

// Must initialize the theme before it is used
initializeTheme(sampleThemeObj)

// The active theme can be changed at any time
setActiveTheme(anotherThemeObj)

// Specific values within the them can be updated
setThemeValue('colors/text', '#F00')

// Theme values can easily be used in JS
const Visual = () => (
  <div style={{ color: useTheme('colors/text') }}>Sample</div>
)

// Can also use theme values in CSS, though this will not work in IE11
const Container = styled.div`
  background: var(--colors-background);
`
```

## Exports

### `initializeTheme(themeObj)`

Sets up theme library; Will try to use previously used theme; If it can't, will use theme provided in call

### `setActiveTheme(themeObj)`

Updates values in the document to reflect the values in the provided theme

### `setThemeValue(name, value)`

Updates specific key for the active theme to the provided value

### `useTheme(name)`

Returns the value of a key that belongs to the theme

## Known Issues

<!-- Are there any current issues with this component? -->

- Partially works in IE11
  - IE11 does not support css variables
  - Accessing theme values through JS works, but does not dynamically update as it inputs the value directly (would need to refresh page to see updated any updates)
  - Unable to access theme values outside of JS (ex. through `var(--property-name)`)
