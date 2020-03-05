import React from 'react'
import styled from 'styled-components'
import { useTheme, setThemeVal } from './theme'

window.setThemeVal = setThemeVal

const H1 = styled.h1`
  color: ${useTheme('light')};
`

export const App = () => (
  <div>
    <H1>
      Rockets are a go!{' '}
      <span role="img" aria-label="rocket emoji">
        🚀
      </span>
    </H1>
    <p>
      Congrats! You got a simple react app up and running{' '}
      <span role="img" aria-label="party popper emoji">
        🎉
      </span>
      ! Now go forth and build
    </p>
  </div>
)
