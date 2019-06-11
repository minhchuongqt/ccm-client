import React, { Component } from 'react';
import ProjectPageView from './ProjectPage';
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions/project'
import * as selectors from '../../selectors/project'
import * as userActions from '../../actions/user'
import AddProjectModal from './AddProjectModal';
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
            addForm: {
                name: '',
                key: '',
                projectType: '',
                description: '',
            },
            isOpenAddProjectModal: false,
        }
    }
    

    componentWillMount() {
        this.props.getListProject()
        // this.props.getUserInfo()
    }

    componentWillReceiveProps(newProps) {
        const {createProjectStatus} = newProps
        if(createProjectStatus) {
            toast.success('Create project successfully')
            this.setState({isOpenAddProjectModal: false})
            this.props.getListProject()
        }

    }

    onChangeValue = (name, value) => {
        const addForm = this.state.addForm
        addForm[name] = value
        this.setState({addForm})    
    }
    openAddProjectModal = () => {
        this.props.getProjectType()
        this.setState({isOpenAddProjectModal: true})
    }
    closeModal = () => {
        this.setState({
        addForm: {
            name: '',
            key: '',
            projectType: '',
            description: '',
        }})
        this.setState({isOpenAddProjectModal: false})
    }
    createProject = () => {
        const {addForm} = this.state
        const data = {
            ...addForm,
            projectType: addForm.projectType.value
        }
        if (this.validate(data)){
            // toast.success("OK")
            this.props.createProject(data)
        }
    }
    validate = (data) => {
        if (!data.name) {
            toast.error("Please enter project name");
            return false;
        }
        if (data.name.length < 2) {
            toast.error("The project name is too short");
            return false;
        }
        if (data.name.length > 50) {
            toast.error("The project name must be no more than 50 characters");
            return false;
        }
        if (data.key.length > 3) {
            toast.error("Project key must be no more than 3 characters");
            return false;
        }
        // if (!data.projectType) {
        //     toast.error("Please choose project type");
        //     return false;
        // }
        return true;
    }

    selectProject = (project) => {
        this.props.selectProject(project)
        // localStorage.setItem('project', project)
    }

    switchPage = () => {
        this.props.history.push("/backlog")
    }
    // getProjectType = () => {
    //     this.props.getProjectType()
    // }
    render() {
        const {listProject, projectTypeSelectable} = this.props
        const {isOpenAddProjectModal, addForm} = this.state
        return (
            <div>
                <ProjectPageView 
                   listProject={listProject}
                   columns = {this.state.columns}
                   openAddProjectModal={this.openAddProjectModal}
                   selectProject={(project) => this.selectProject(project)}
                   switchPage={this.switchPage}
                />
                <AddProjectModal
                    data = {addForm}
                    openModal={isOpenAddProjectModal}
                    closeModal={this.closeModal}
                    createProject={this.createProject}
                    validate={(data)=>this.validate(data)}
                    projectTypeSelectable={projectTypeSelectable}
                    onChangeValue={(name, value) => this.onChangeValue(name, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    project : state.ProjectState,
    listProject: selectors.listProject(state),
    projectTypeSelectable: selectors.projectTypeSelectable(state),
    createProjectStatus: selectors.createProjectStatus(state)
})

const mapDispatchToProps = dispatch => ({
    getListProject() {
        dispatch(actions.getListProject())
    },
    getUserInfo() {
        dispatch(userActions.getUserInfo())
    },
    getProjectType() {
        dispatch(actions.getProjectType())
    },
    createProject(addForm) {
        dispatch(actions.createProject(addForm))
    },
    selectProject(project) {
        dispatch(actions.selectProject(project))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter (ProjectPageContainer));