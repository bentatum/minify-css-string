import { default as minifyCssString } from '../src'
import { default as expect } from 'expect'

const testCssString = `
  @-webkit-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-moz-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-ms-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
`

describe('minifyCssString', () => {
  it('removes any whitespace and replaces it with a single space', () => {
    expect(testCssString.match(/\s\s/gm)).toExist()
    expect(minifyCssString(testCssString).match(/\s\s/gm)).toNotExist()
  })

  it('removes new lines', () => {
    expect(testCssString.match(/\n/gm)).toExist()
    expect(minifyCssString(testCssString).match(/\n/gm)).toNotExist()
  })
})
