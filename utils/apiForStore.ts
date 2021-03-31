/**
 * Since the Same bug as https://github.com/nuxt/typescript/issues/447 , 
 * I use any for now.
 */
let $api: any

export function initAxiosForStore(axiosInstance: any) {
  $api = axiosInstance
}

export { $api }
