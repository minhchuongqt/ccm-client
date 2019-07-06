import { GET_USER_INFO, GET_LIST_USER, GET_LIST_EMAIL, INVITE_USER_STATUS,
    RESET_INVITE_USER_STATUS, UPDATE_USER_AVATAR } from '../constants/types/user';
import UserApi from '../api/userApi';
import {toast} from 'react-toastify'
import BaseApi from '../api/base'
import _ from 'lodash'

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
        if (res.data.error) {
            toast.error(res.data.error)
        } else {
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

export const updateAvatar = (file) => async dispatch => {
    let FileSize = file.size / 1024 / 1024; // in MB
    if (FileSize > 10) {
        toast.error('File size cannot more than 10MB');
        return;
    }
    let path = ''
    const readerBase64 = new FileReader();
    readerBase64.onload = async (eventBase64) => {
        const url = eventBase64.target.result;
        const filename = file.name;
        const data = { id: filename, raw: file, filename, url, }
        BaseApi.uploadFile(data.raw).then(res => {
            if(res.data.data.filePath) {
                UserApi.updateInfo({avatarUrl: res.data.data.filePath}).then(resq => {
                    if(resq.data.success) {
                        dispatch({type: UPDATE_USER_AVATAR, payload: true})
                    } else {
                        toast.error(res.data.error)
                    }   
                })
            }
           
        })
    };
    readerBase64.readAsDataURL(file);
}