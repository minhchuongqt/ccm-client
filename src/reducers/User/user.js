import {GET_USER_INFO} from '../../constants/types/user'
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

const UserState = combineReducers({
    userInfo
})

export default UserState