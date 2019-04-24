import {combineReducers} from 'redux';
import LoginState from './Login/login'
import ProjectState from './Project/project'
import UserState from './User/user'
import GroupState from './Group/group'

const rootReducer = combineReducers({
    LoginState,
    ProjectState,
    UserState,
    GroupState
});

export default rootReducer;