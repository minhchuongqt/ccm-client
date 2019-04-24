import {LOGIN_SUCCESS} from '../../constants/types/login'
import { combineReducers } from 'redux';

export const loginState = (state = {}, action) => {
    const {type, payload} = action
    switch(type) {
        case LOGIN_SUCCESS:
            return payload
        default:
            return state
    }
}

const LoginState = combineReducers({
    loginState
})

export default LoginState