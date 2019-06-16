import React, { Component } from 'react';
import ListUserPageView from './ListUserPage';
import AddUserModal from '../AddUserPage/AddUserModal';

import { connect } from 'react-redux'
// actions
import * as userActions from '../../../../../actions/user'
import * as projectActions from '../../../../../actions/project'
//selectors
import * as userSelectors from "../../../../../selectors/user";
import * as projectSelectors from "../../../../../selectors/project"
import { toast } from 'react-toastify';
class ListUserPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenInviteUserModal: false,
            addUserFormValue: {},
        }
    }
    
    componentWillMount(){
        // this.props.getUserInfo();
        this.getListUser(this.getBaseOption())
    }

    componentWillReceiveProps(newProps) {
        const {inviteUserStatus} = newProps
        if(inviteUserStatus) {
            this.setState({isOpenInviteUserModal: false})
            toast.success("Invite success.")
            this.getListUser(this.getBaseOption())
            this.props.resetInviteUserStatus()
        }
    }

    getBaseOption = () => {
        const params = {
          query: JSON.stringify({
            project: this.props.selectedProject._id
          })
        };
        return params;
      };

    getListUser = (query) => {
        this.props.getListUser(query)
    }

    openInviteUserModal = () => {
        this.setState({isOpenInviteUserModal: true})
    }

    closeInviteUserModal = () => {
        this.setState({isOpenInviteUserModal: false})
    }

    onChangeValue = (key, value) => {
        // console.log(key,':  ', value)
        if(key == "emailText") {
            this.props.getListEmail({...this.getBaseOption(), email: value})
        } else {
            const {addUserFormValue} = {...this.state}
            addUserFormValue[key] = value
            this.setState({addUserFormValue})
        }
    }

    inviteUser = id => {
        if(id) {
            const data = {
                project: this.props.selectedProject._id,
                member: id
            }
            this.props.inviteUser(data)
        }
    }

    render() {
        const {listUser, isGetEmailFetching, emailSelectable} = this.props
        const {isOpenInviteUserModal, addUserFormValue} = this.state
        console.log(isOpenInviteUserModal)
        return (
            <div>
                <ListUserPageView
                listUser={listUser}
                openInviteUserModal={() => this.openInviteUserModal()}
                 />
                 <AddUserModal 
                    openModal={isOpenInviteUserModal}
                    data={addUserFormValue}
                    isGetEmailFetching={isGetEmailFetching}
                    emailSelectable={emailSelectable}
                    onChangeValue={(key, value) => this.onChangeValue(key, value)}
                    getOptions={this.getOptions}
                    closeModal = {this.closeInviteUserModal}
                    inviteUser={(id) => this.inviteUser(id)}
                 />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userList: userSelectors.getUserInfo(state),
    listUser: userSelectors.getListUser(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    emailSelectable: userSelectors.getEmailSelectable(state),
    isGetEmailFetching: state.UserState.listEmail.isFetching,
    inviteUserStatus: userSelectors.getInviteUserStatus(state)
})

const mapDispatchToProps = dispatch => ({
    getUserInfo() {
        dispatch(userActions.getUserInfo())
    },
    getListUser(query) {
        dispatch(userActions.getListUser(query))
    },
    getListEmail(value) {
        dispatch(userActions.getListEmail(value))
    },
    inviteUser(data) {
        dispatch(userActions.inviteUser(data))
    },
    resetInviteUserStatus() {
        dispatch(userActions.resetInviteUserStatus())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ListUserPageContainer);