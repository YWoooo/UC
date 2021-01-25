/**
 * @description Export all default export inside a directory. 
 * @param {any} files Which should be a context of directory. 
 * @returns {Files} Files to be exported. 
 * @example exportAll(require.context('./', false, /\.ts$/)) 
 */
type Files = any
export default function (files: any): Files {
  const res: any = {}

  files.keys().forEach((fileName: string) => {
    if (fileName === './index.ts') return

    const serviceName = fileName.slice(2, -3)
    res[serviceName] = files(fileName).default
  })
  return res
}