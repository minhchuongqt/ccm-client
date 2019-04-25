import {combineReducers} from 'redux';
import LoginState from './Login/login'
import ProjectState from './Project/project'
import UserState from './User/user'
import GroupState from './Group/group'
import IssueState from './Issue/issue'
import SprintState from './Sprint/sprint'

const rootReducer = combineReducers({
    LoginState,
    ProjectState,
    UserState,
    GroupState,
    IssueState,
    SprintState,
});

export default rootReducer;