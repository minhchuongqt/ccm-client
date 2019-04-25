import RegisterApi from '../api/registerApi';
// import { dispatch } from 'rxjs/internal/observable/range';
const register = (data) => dispatch => {
    RegisterApi.register('/auth/register', data).then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })
}

export default {
    register,
}