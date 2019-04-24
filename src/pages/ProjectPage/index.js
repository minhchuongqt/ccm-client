import React, { Component } from 'react';
import ProjectPageView from './ProjectPage';
import { connect } from 'react-redux'
import * as actions from '../../actions/project'
import * as userActions from '../../actions/user'
class ProjectPageContainer extends Component {
    componentWillMount() {
        // this.props.getListProject()
        this.props.getUserInfo()
    }
    render() {
        const {userInfo} = this.props
        console.log(userInfo)
        return (
            <div>
                <ProjectPageView 
                   userInfo={userInfo}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.UserState.userInfo
})

const mapDispatchToProps = dispatch => ({
    getListProject() {
        dispatch(actions.getListProject())
    },
    getUserInfo() {
        dispatch(userActions.getUserInfo())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ProjectPageContainer));