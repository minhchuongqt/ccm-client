import React, { Component } from 'react';
import EditUserPageView from './EditUserPage';
import Modal from 'react-modal'
class EditUserPageContainer extends Component {
    render() {
        return (
            <Modal>
                <EditUserPageView/>
            </Modal>
        );
    }
}

export default EditUserPageContainer;