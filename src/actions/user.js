import { GET_USER_INFO, GET_LIST_USER, GET_LIST_EMAIL, INVITE_USER_STATUS, RESET_INVITE_USER_STATUS } from '../constants/types/user';
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
        if (res.data.data) {
            dispatch({ type: GET_LIST_USER, payload: res.data.data })
        }
    })
}

export const inviteUser = (data) => dispatch => {
    UserApi.inviteUser(data).then(res => {
        if (res.data.data) {
            dispatch({ type: INVITE_USER_STATUS, payload: res.data.success })
        }
    })
}

export const resetInviteUserStatus = () => dispatch => {
    dispatch({type: RESET_INVITE_USER_STATUS})
}

export const getListEmail = (data) => async dispatch => {
    dispatch({type: GET_LIST_EMAIL, payload: {isFetching: true, data: [],error: null}})
    await UserApi.getListEmail(data).then(res => {
        if (res.data.data) {
            dispatch({ type: GET_LIST_EMAIL, payload: {isFetching: false, data: res.data.data, error: null} })
        } else {
            dispatch({ type: GET_LIST_EMAIL, payload: {isFetching: false, data: [], error: res.data.error} })
        }
    })
}

