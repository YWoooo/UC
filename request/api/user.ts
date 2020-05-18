import baseUrl from './baseUrl'
import axios from '../https'
import qs from 'qs'

export default {
    register(sendData: any) {
        return axios.post(`${baseUrl.local}/register`, qs.stringify(sendData))
    }
}

