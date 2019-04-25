import React, { Component } from 'react';
import {connect} from 'react-redux'
import AddProjectPageView from './AddProjectPage';
import * as actions from '../../../actions/project'
import * as selectors from '../../../selectors/project'

class AddProjectPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    
    componentWillMount() {
        // this.props.getProjectType()
    }
    onChangeValue = (name, value) => {
        this.setState({[name]: value})
    }
    resetValue = () => {
        this.setState({})
    }
    createProject = () => {
        this.props.createProject()
    }
    render() {
        const {projectTypeSelectable} = this.props
        console.log(this.state)
        return (
            <div>
                <AddProjectPageView 
                   projectTypeSelectable={projectTypeSelectable}
                   onChangeValue={(name, value) => this.onChangeValue(name, value)}
                   resetValue={this.resetValue}
                   createProject={this.createProject}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listProject: selectors.listProject(state),
    listProjectType: selectors.listProjectType(state),
    projectTypeSelectable: selectors.projectTypeSelectable(state)
})

const mapDispatchToProps = dispatch => ({
    getListProject() {
        dispatch(actions.getListProject())
    },
    getProjectType() {
        dispatch(actions.getProjectType())
    },
    createProject() {
        
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (AddProjectPage);