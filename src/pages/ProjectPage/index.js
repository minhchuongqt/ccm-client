import React, { Component } from 'react';
import ProjectPageView from './ProjectPage';
import { connect } from 'react-redux'
import * as actions from '../../actions/project'
import * as selectors from '../../selectors/project'
import * as userActions from '../../actions/user'
class ProjectPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    header: 'Project', poiter: 'name'
                },
                {
                    header: 'Key', poiter: 'key'
                },
                {
                    header: 'Project Type', poiter: 'projectType'
                },
                {
                    header: 'Project Lead', poiter: 'projectLead'
                },
                {
                    header: 'Create Date', poiter: 'createdDate'
                },
                {
                    header: 'Update Date', poiter: 'updatedDate'
                }
            ],

        }
    }
    

    componentWillMount() {
        this.props.getListProject()
        // this.props.getUserInfo()
    }
    render() {
        const {listProject, listProjectType, projectTypeSelectable} = this.props
        console.log(listProjectType)
        return (
            <div>
                <ProjectPageView 
                   listProject={listProject}
                   columns = {this.state.columns}
                   projectTypeSelectable={projectTypeSelectable}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listProject: selectors.listProject(state),
})

const mapDispatchToProps = dispatch => ({
    getListProject() {
        dispatch(actions.getListProject())
    },
    getUserInfo() {
        dispatch(userActions.getUserInfo())
    },
})

export default connect(mapStateToProps, mapDispatchToProps) ((ProjectPageContainer));