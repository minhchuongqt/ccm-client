import React, { Component } from 'react';
import WorkflowView from "./workflow.js";
import * as workflowActions from '../../../actions/workflow'
import * as projectSelectors from "../../../selectors/project";
import * as workflowSelectors from "../../../selectors/workflow";
import AddStepModal from "./AddStepModal";
import {toast} from "react-toastify"
import { connect } from 'react-redux'
class WorkflowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        project: this.props.selectedProject._id,
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
      name: ""
    }
  });
  this.setState({ isOpenAddStepModal: false });
};
onChangeValue = (name, value) => {
  const addForm = this.state.addForm;
  addForm[name] = value;
  this.setState({ addForm });
  console.log(value)
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
    const {workflow} = this.props
    const {
      isOpenAddStepModal,
      addForm,
    } = this.state;
    return (
      <div>
        <WorkflowView onChangeValue={(key, value) => this.setState({[key]: value}) }
        listWorkflow = {workflow}
        openAddStepModal={() => this.openAddStepModal()}
        />
         <AddStepModal
          data={addForm}
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
})


const mapDispatchToProps = dispatch => ({
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query));
},
addStep(addForm) {
  dispatch(workflowActions.addStep(addForm));
},
})

export default connect(mapStateToProps, mapDispatchToProps) ((WorkflowContainer));