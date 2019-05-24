import {combineReducers} from 'redux';
import LoginState from './Login/login'
import ProjectState from './Project/project'
import UserState from './User/user'
import GroupState from './Group/group'
import IssueState from './Issue/issue'
import BacklogState from './Backlog/backlog'
import WorkflowState from './Workflow/workflow'

const rootReducer = combineReducers({
    LoginState,
    ProjectState,
    UserState,
    GroupState,
    IssueState,
    BacklogState,
    WorkflowState
});

export default rootReducer;