import {GET_USER_INFO, GET_LIST_USER} from '../../constants/types/user'
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

const UserState = combineReducers({
    userInfo,
    listUser
})

export default UserState