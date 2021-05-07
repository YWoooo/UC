import numberFormatter from './number'

/**
 * @description 12345 -> $12,345 USD, by default. 
 * @param {number} num
 * @returns {string} the standard format of money.
 */
export default (num: number, options: Options): string => {
  const {
    ccy = 'USD',
    isFloat = false
  } = options
  return `$${numberFormatter(num, isFloat)} ${ccy}`
}

interface Options {
  ccy: string
  isFloat: boolean
}

