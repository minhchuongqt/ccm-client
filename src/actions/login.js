import {LOGIN_SUCCESS} from '../constants/types/login';
import LoginAPI from '../api/loginApi';

export const login = (data) => dispatch => {
    LoginAPI.login(data).then(res => {
        if(res.data) {
            sessionStorage.setItem('access-token', res.data.token)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})

        }
    })
}