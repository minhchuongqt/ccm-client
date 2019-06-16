import React, { Component } from 'react';
import WorkflowView from "./workflow.js";
import * as workflowActions from '../../../actions/workflow'
import * as projectSelectors from "../../../selectors/project";
import * as workflowSelectors from "../../../selectors/workflow";
import AddStepModal from "./AddStepModal"
import {toast} from "react-toastify"
import { connect } from 'react-redux'
class WorkflowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        project: this.props.selectedProject._id,
      },
      workflowForm: {
      },
      isOpenAddStepModal: false,
    }
  }
  componentWillMount(){
    this.getListWorkflow();
}
componentWillReceiveProps(newProps) {
  const { addStepStatus
  } = newProps;
  if (addStepStatus) {
    toast.success("Add step successfully");
    this.setState({ isOpenAddStepModal: false });
    this.getListWorkflow();
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
  getListWorkflow = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.props.getWorkflowList(query);
};
openAddStepModal = () => {
  this.setState({ isOpenAddStepModal: true });
};
closeStepModal = () => {
  this.setState({
    addForm: {
      name: "",
      status: ""
    }
  });
  this.setState({ isOpenAddStepModal: false });
};
onChangeValue = (name, value) => {
  const addForm = this.state.addForm;
  addForm[name] = value;
  this.setState({ addForm });
};
onChangeWorkflowValue = (name, value) => {
  const workflowForm = this.state.workflowForm;
  workflowForm[name] = value;
  this.setState({ workflowForm });
  console.log(workflowForm)
};
addStep = () => {
  const { addForm } = this.state;
  const data = {
    ...addForm
  };
  if(this.validate(data)) {
    this.props.addStep(data);
  }
    
};
validate = (data) => {
  if (!data.name || data.name.length < 1) {
    toast.error("Please enter step name!");
    return false;
  }
  if (!data.project) {
    toast.error("Cannot create step");
    return false;
  }
  return true;
}
  render() {
    const {workflow, selectableStatus, workflowSelectable} = this.props
    const {
      isOpenAddStepModal,
      addForm,
      workflowForm
    } = this.state;
    return (
      <div>
        <WorkflowView 
        listWorkflow = {workflow}
        onChangeWorkflowValue={(name, value) => this.onChangeWorkflowValue(name, value)}
        workflowForm={workflowForm}
        workflowSelectable={workflowSelectable}
        openAddStepModal={() => this.openAddStepModal()}
        />
         <AddStepModal
          data={addForm}
          selectableStatus={selectableStatus}
          openModal={isOpenAddStepModal}
          closeModal={this.closeStepModal}
          addStep={this.addStep}
          onChangeValue={(name, value) => this.onChangeValue(name, value)}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  selectedProject: projectSelectors.getSelectedProject(state),
  workflow: workflowSelectors.getListWorkflow(state),
  addStepStatus: workflowSelectors.addStepStatus(state),
  selectableStatus: workflowSelectors.createStepSelectable(),
  workflowSelectable: workflowSelectors.getWorkflowSelectable(state),
})


const mapDispatchToProps = dispatch => ({
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query));
},
addStep(addForm) {
  dispatch(workflowActions.addStep(addForm));
}
})

export default connect(mapStateToProps, mapDispatchToProps) ((WorkflowContainer));