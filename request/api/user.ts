import baseUrl from './baseUrl'
import axios from '../https'

export default {
    register(sendData: any) {
        return axios.post(`${baseUrl.local}/register`, sendData)
    }
}

