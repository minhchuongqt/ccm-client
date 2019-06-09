import { GET_USER_INFO, GET_LIST_USER } from '../constants/types/user';
import UserApi from '../api/userApi';

export const getUserInfo = (data) => dispatch => {
    UserApi.getUserInfo(data).then(res => {
        if(res.data) {
            dispatch({type: GET_USER_INFO, payload: res.data.data})
        }
    })
}

export const getListUser = (data) => dispatch => {
    UserApi.getListUser(data).then(res => {
        if (res.data) {
            dispatch({ type: GET_LIST_USER, payload: res.data.data })
        }
    })
}