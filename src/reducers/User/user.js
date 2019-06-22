import {GET_USER_INFO, GET_LIST_USER, GET_LIST_EMAIL,
    INVITE_USER_STATUS, RESET_INVITE_USER_STATUS, UPDATE_USER_AVATAR
} from '../../constants/types/user'
import { combineReducers } from 'redux';

export const userInfo = (state = null, action) => {
    const {type, payload} = action
    switch(type) {
        case GET_USER_INFO:
            return payload
        default:
            return state
    }
}

export const listUser = (state = [], action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_USER:
            return payload
        default:
            return state
    }
}

export const listEmail = (state = {isFetching: false, data: [], error: null}, action) => {
    const {type, payload} = action
    switch(type) {
        case GET_LIST_EMAIL:
            return payload
        default:
            return state
    }
}

export const inviteUserStatus = (state= false, action) => {
    const {type, payload} = action
    switch(type) {
        case INVITE_USER_STATUS:
            return payload
        case RESET_INVITE_USER_STATUS:
                return false
        default:
            return state
    }
}

export const updateUserStatus = (state= false, action) => {
    const {type, payload} = action
    switch(type) {
        case UPDATE_USER_AVATAR:
            return payload
        case RESET_INVITE_USER_STATUS:
                return false
        default:
            return state
    }
}

const UserState = combineReducers({
    userInfo,
    listUser,
    listEmail,
    inviteUserStatus,
    updateUserStatus
})

export default UserState