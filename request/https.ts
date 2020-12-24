import axios from 'axios'
import { onRequest } from './interceptors/onRequest'
import { onResponseSuccess, onResponseErr } from './interceptors/onResponse'

const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

instance.interceptors.request.use(onRequest)
instance.interceptors.response.use(onResponseSuccess, onResponseErr)

export default instance
