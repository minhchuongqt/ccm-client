import {LOGIN_SUCCESS} from '../constants/types/login';
import LoginAPI from '../api/loginApi';
import {toast} from 'react-toastify'

export const login = (data) => dispatch => {
    LoginAPI.login(data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            sessionStorage.setItem('access-token', res.data.token)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        }
    })
}