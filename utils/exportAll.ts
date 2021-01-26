/**
 * @description Export all default export inside a directory. 
 * @param {any} files Which should be a context of directory. 
 * @returns {Files} Files to be exported. 
 * @example exportAll(require.context('./', false, /\.ts$/)) 
 */
type Files = any
export default function (files: RequireContext): Files {
  const res: any = {}

  files.keys().forEach((fileName: string) => {
    if (fileName === './index.ts') return

    const serviceName = fileName.slice(2, -3)
    res[serviceName] = files(fileName).default
  })
  return res
}

// Copied from '@types/webpack-env/index.d.ts', since it doesn't have exporting parts.
interface RequireContext {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  /** The module id of the context module. This may be useful for module.hot.accept. */
  id: string;
}
