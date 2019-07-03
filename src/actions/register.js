import RegisterApi from '../api/registerApi';

// import { dispatch } from 'rxjs/internal/observable/range';
const register = (data) => dispatch => {
    data.displayName =  data.displayName || data.fullName || ''
    RegisterApi.register('/auth/register', data).then(res => {
    }).catch(error => {

    })
}

export default {
    register,
}