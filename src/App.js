import React from 'react'
import styled from 'styled-components'
import { initializeTheme, useTheme, setThemeVal, setActiveTheme } from './theme'

const NUMBER_OF_ELEMENTS = 10000

window.setActiveTheme = setActiveTheme
window.setThemeVal = setThemeVal
window.sampleTheme = {
  colors: {
    /**********
     ** TEXT **
     **********/
    text: '#181A1B',
    textInverse: '#F5FAFC',
    textMeta: '#4e5356',
    textDisabled: '#61696b',
    link: '#007099',

    /****************
     ** BACKGROUND **
     ****************/
    background100: '#FFFFFF',
    background200: '#FAFAFA',
    background300: '#F1F1F1',
    background400: '#E3E7E8',
    background500: '#D9DDDE',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#181A1B',
    keyline: '#CDD2D4',

    /***********************
     ** ACCENTS - PRIMARY **
     ***********************/
    primary: '#00AEEF',
    primaryAccent: '#B3E7FB',
    primaryBackground: '#DEF4FD',

    /***********************
     ** ACCENTS - SUCCESS **
     ***********************/
    success: '#7AAF2C',
    successAccent: '#C0DF95',
    successBackground: '#EEF7E2',

    /***********************
     ** ACCENTS - WARNING **
     ***********************/
    warning: '#f4b71e',
    warningAccent: '#FFE380',
    warningBackground: '#FFF1C0',

    /*********************
     ** ACCENTS - ERROR **
     *********************/
    error: '#FF1A1A',
    errorAccent: '#F9BFBF',
    errorBackground: '#FBE5E5',
  },
}

initializeTheme(window.sampleTheme)

const Root = styled.section`
  background: ${useTheme('colors/background100')};
  color: ${useTheme('colors/text')};
`

const H1 = styled.h1`
  color: ${useTheme('colors/link')};
`

const P = styled.p`
  color: ${useTheme('colors/error')};
`

export const App = () => {
  let contents = []
  for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
    contents.push(<P key={i}>{`Sample contents number ${i + 1}`}</P>)
  }

  return (
    <Root>
      <H1>Sample page to test theme lib</H1>
      <P>Total number of elements: {NUMBER_OF_ELEMENTS}</P>
      <hr />
      {contents}
    </Root>
  )
}
