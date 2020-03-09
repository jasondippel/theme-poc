import React from 'react'
import styled from 'styled-components'
import {
  initializeTheme,
  useTheme,
  setThemeValue,
  setActiveTheme,
} from './theme'

const NUMBER_OF_ELEMENTS = 10000

window.setActiveTheme = setActiveTheme
window.setThemeValue = setThemeValue
window.sampleTheme1 = {
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
window.sampleTheme2 = {
  colors: {
    /**********
     ** TEXT **
     **********/
    text: '#F5FAFC',
    textInverse: '#181A1B',
    textMeta: '#aeb4b5',
    textDisabled: '#999fa3',
    link: '#00aceb',

    /****************
     ** BACKGROUND **
     ****************/
    background100: '#2F3638',
    background200: '#2D3032',
    background300: '#222729',
    background400: '#384042',
    background500: '#3f4547',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#181A1B',
    keyline: '#191d1f',

    /***********************
     ** ACCENTS - PRIMARY **
     ***********************/
    primary: '#007ba8',
    primaryAccent: '#074a64',
    primaryBackground: '#042e3e',

    /***********************
     ** ACCENTS - SUCCESS **
     ***********************/
    success: '#348113',
    successAccent: '#204f0c',
    successBackground: '#173a09',

    /***********************
     ** ACCENTS - WARNING **
     ***********************/
    warning: '#cc4100',
    warningAccent: '#7a2700',
    warningBackground: '#5c1d00',

    /*********************
     ** ACCENTS - ERROR **
     *********************/
    error: '#c20000',
    errorAccent: '#800000',
    errorBackground: '#5c0000',
  },
}

initializeTheme(window.sampleTheme1)

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
