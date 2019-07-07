import RegisterApi from '../api/registerApi';
import * as types from '../constants/types/register'
import {toast} from 'react-toastify'
// import { dispatch } from 'rxjs/internal/observable/range';
const register = (data) => dispatch => {
    data.displayName =  data.displayName || data.fullName || ''
    RegisterApi.register('/auth/register', data).then(res => {
        if(res.data.error) {
            toast.error(res.data.error)
        } else {
            dispatch({type: types.REGISTER, payload: true})
        }
    })
}

const resetRegisterStatus = () => dispatch => {
    dispatch({type: types.REGISTER, payload: false})
}

export default {
    register,
    resetRegisterStatus
}