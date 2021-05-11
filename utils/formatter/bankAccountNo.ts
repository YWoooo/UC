/**
 * @description 1234567890 => 1234 5678 90
 * @param {number} num
 * @returns {string}
 */
export default (bankAccountNo: string): string =>
  bankAccountNo.replace(/(.{4})/g, '$1 ').trim()
