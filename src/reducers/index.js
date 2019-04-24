import {combineReducers} from 'redux';
import LoginState from './Login/login'
import ProjectState from './Project/project'
import UserState from './User/user'

const rootReducer = combineReducers({
    LoginState,
    ProjectState,
    UserState
});

export default rootReducer;