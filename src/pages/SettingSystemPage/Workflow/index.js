import React, { Component } from 'react';
import WorkflowView from "./workflow.js";
import * as workflowActions from '../../../actions/workflow'
import * as projectSelectors from "../../../selectors/project";
import * as workflowSelectors from "../../../selectors/workflow";
import { connect } from 'react-redux'
class WorkflowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentWillMount(){
    this.getListWorkflow();
}
  getBaseOption = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
      })
    };
    return params;
  };
  getListWorkflow = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.props.getWorkflowList(query);
};
  render() {
    const {workflow} = this.props
    return (
      <div>
        <WorkflowView onChangeValue={(key, value) => this.setState({[key]: value}) }
        listWorkflow = {workflow}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  selectedProject: projectSelectors.getSelectedProject(state),
  workflow: workflowSelectors.getListWorkflow(state)
})


const mapDispatchToProps = dispatch => ({
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query));
}
})

export default connect(mapStateToProps, mapDispatchToProps) ((WorkflowContainer));