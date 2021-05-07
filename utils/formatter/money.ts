import numberFormatter from './number'

/**
 * @description 12345 -> $12,345 USD, by default. 
 * @param {number} num
 * @param {Options} options
 * @returns {string} the standard format of money.
 */
export default (num: number, options = defaultOptions): string => {
  const { ccy, isFloat } = options
  return `$${numberFormatter(num, isFloat)} ${ccy}`
}

const defaultOptions: Options = {
  ccy: 'USD',
  isFloat: false
}

interface Options {
  ccy: string
  isFloat: boolean
}
