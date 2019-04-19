import React, { Component } from 'react';
import ListUserPageView from './ListUserPage';
import EditModal from './EditUserModal'
class ListUserPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    openEditModal() {
        this.setState({isOpen: true})
    }

    render() {

        const {isOpen} = this.state

        return (
            <div>
                <ListUserPageView openEditModal={() => this.openEditModal()} />
                <EditModal isOpen={isOpen}/>
            </div>
        );
    }
}

export default ListUserPageContainer;