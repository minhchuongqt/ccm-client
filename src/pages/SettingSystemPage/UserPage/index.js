import React, { Component } from 'react';
import UserManagementPageView from './UserManagementPage';
class ListUserPageContainer extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <UserManagementPageView/>
            </div>
        );
    }
}

export default ListUserPageContainer;