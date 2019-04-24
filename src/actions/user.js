import { GET_USER_INFO } from '../constants/types/user';
import UserApi from '../api/userApi';

export const getUserInfo = (data) => async dispatch => {
    await UserApi.getUserInfo(data).then(res => {
        if(res.data) {
            dispatch({type: GET_USER_INFO, payload: res.data.data})
        }
    })
}