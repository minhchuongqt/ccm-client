import React, { Component } from 'react';
import { toast } from "react-toastify";
import ProjectManagementPageView from './ProjectSettingPage';
import * as projectActions from '../../../actions/project'
import * as projectSelectors from "../../../selectors/project";
import { connect } from 'react-redux'
class ListProjectPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: ''
        }
    }
    componentWillMount () {
        this.props.getListProject()
    }
    componentWillReceiveProps(newProps) {
        const { deleteProjectStatus
        } = newProps;
        if (deleteProjectStatus) {
            toast.success("Delete project successfully");
            this.props.getListProject()
            this.props.resetDeleteProjectStatus()
        }
    }
    chooseProject = (project) => {
        this.setState(
            {project: project})
    }
    deleteProject = (id) => {
        // console.log(id)
        this.props.deleteProject(id)
        this.props.getListProject()
    }

    render() {
        const {listProject} = this.props
        const { project } = this.state
        return (
            
            <div>
                <ProjectManagementPageView
                listProject = {listProject}
                project = {project}
                chooseProject = {(project) => this.chooseProject(project)}
                deleteProject = {(id) => this.deleteProject(id)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listProject: projectSelectors.listProject(state),
    deleteProjectStatus: projectSelectors.getDeleteProjectStatus(state)
})

const mapDispatchToProps = dispatch => ({
    getListProject() {
        dispatch(projectActions.getListProject())
    },
    deleteProject(id) {
        dispatch(projectActions.deleteProject(id))
    },
    resetDeleteProjectStatus() {
        dispatch(projectActions.resetDeleteProjectStatus())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ListProjectPageContainer);