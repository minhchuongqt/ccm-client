import React, { Component } from 'react';
import ListGroupPageView from './ListGroupPage';
class ListGroupPageContainer extends Component {
    constructor(props) {
        super(props);
    }
    
   

    render() {
        return (
            <div>
                <ListGroupPageView />
            </div>
        );
    }
}

export default ListGroupPageContainer;