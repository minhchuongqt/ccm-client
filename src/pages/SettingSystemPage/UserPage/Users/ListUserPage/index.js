import React, { Component } from 'react';
import ListUserPageView from './ListUserPage';
import { connect } from 'react-redux'
import * as userActions from '../../../../../actions/user'
import * as userSelectors from "../../../../../selectors/user";
class ListUserPageContainer extends Component {
    componentWillMount(){
        this.props.getUserInfo();
    }
    render() {
        const {userList} = this.props
        return (
            <div>
                <ListUserPageView
                userList={userList}
                 />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userList: userSelectors.getUserInfo(state)
})

const mapDispatchToProps = dispatch => ({
    getUserInfo() {
        dispatch(userActions.getUserInfo())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ListUserPageContainer);