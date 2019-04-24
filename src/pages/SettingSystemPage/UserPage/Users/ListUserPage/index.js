import React, { Component } from 'react';
import ListUserPageView from './ListUserPage';
class ListUserPageContainer extends Component {
    constructor(props) {
        super(props);
    }
    
   

    render() {
        return (
            <div>
                <ListUserPageView />
            </div>
        );
    }
}

export default ListUserPageContainer;