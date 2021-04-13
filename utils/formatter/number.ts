/**
 * @description 12345 => 12,345
 * @param {number} num
 * @returns {string}
 */
export default (num: number, isFloat = false): string => {
  const fractionDigits = isFloat ? 2 : 0
  return num.toLocaleString(undefined, {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits
  });
}

