import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import * as PATH from '../../constants/data/routeConstants'
import UserManagementContainer from './UserPage';
import WorkflowContainer from './Workflow'
class ListUserPageContainer extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <Switch>
                <Route path={PATH.WORKFLOW_URL} component={WorkflowContainer} />
                <Route path={PATH.USER_URL} component={UserManagementContainer} />
            </Switch>
        );
    }
}

export default ListUserPageContainer;