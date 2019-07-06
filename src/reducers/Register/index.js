import {REGISTER} from '../../constants/types/register'
import { combineReducers } from 'redux';

export const registerStatus = (state = false, action) => {
    const {type, payload} = action
    switch(type) {
        case REGISTER:
            return payload
        default:
            return state
    }
}

const RegisterState = combineReducers({
    registerStatus
})

export default RegisterState