import React, { Component } from 'react';
import WorkflowView from "./workflow.js";
import * as workflowActions from '../../../actions/workflow'
import * as projectSelectors from "../../../selectors/project";
import * as workflowSelectors from "../../../selectors/workflow";
import AddStepModal from "./AddStepModal"
import {toast} from "react-toastify"
import { connect } from 'react-redux'
import _ from "lodash"
class WorkflowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        project: this.props.selectedProject._id
      },
      workflowForm: {
        project: this.props.selectedProject._id
      },
      changeForm: {
        project: this.props.selectedProject._id
      },
      isOpenAddStepModal: false,
    }
  }
  componentWillMount(){
    this.getListWorkflow();
}
componentWillReceiveProps(newProps) {
  const { addStepStatus, updateWorkflowStatus, swapWorkflowStatus
  } = newProps;
  if (addStepStatus) {
    toast.success("Add step successfully");
    this.setState({ isOpenAddStepModal: false });
    this.getListWorkflow();
  }
  if (updateWorkflowStatus) {
    this.getListWorkflow();
  }
  if (swapWorkflowStatus) {
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
addStep = () => {
  const { addForm } = this.state;
  addForm["sequence"] = this.props.workflow.length + 1
  const data = {
    ...addForm
  };
  if(this.validate(data)) {
    this.props.addStep(data);
  }
    
};
updateWorkflow = async (id, value) => {
  const workflowForm = this.state.workflowForm
  workflowForm["to"] = value.map(item => item.value)
  if(_.isEmpty(workflowForm.to)) {
    workflowForm["linkAll"] = true
  }
  else {
    workflowForm["linkAll"]= false
  }
  this.setState({ workflowForm });
  this.props.updateWorkflow(id, workflowForm)
}
swapWorkflow =  (source, destination) => {
  const changeForm = this.state.changeForm
  changeForm["source"] = source
  changeForm["destination"] = destination
  this.setState({changeForm});
  this.props.swapWorkflow(changeForm);
}
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
    const {workflow, selectableStatus, workflowSelectable, workflowInfo} = this.props
    const {
      isOpenAddStepModal,
      addForm,
      workflowForm
    } = this.state;
    return (
      <div>
        <WorkflowView 
        listWorkflow = {workflow}
        updateWorkflow={(id, value) => this.updateWorkflow(id, value)}
        workflowForm={workflowForm}
        workflowSelectable={workflowSelectable}
        openAddStepModal={() => this.openAddStepModal()}
        swapWorkflow={(source, destination) => this.swapWorkflow(source, destination)}
        workflowDown={() => this.workflowDown()}
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
  updateWorkflowStatus: workflowSelectors.updateWorkflowStatus(state),
  swapWorkflowStatus: workflowSelectors.swapWorkflowStatus(state),
  selectableStatus: workflowSelectors.createStepSelectable(),
  workflowSelectable: workflowSelectors.getWorkflowSelectable(state),
})


const mapDispatchToProps = dispatch => ({
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query));
},
addStep(addForm) {
  dispatch(workflowActions.addStep(addForm));
},
updateWorkflow(id, data) {
  dispatch(workflowActions.updateWorkflow(id, data))
},
swapWorkflow(data) {
  dispatch(workflowActions.swapWorkflow(data))
}
})

export default connect(mapStateToProps, mapDispatchToProps) ((WorkflowContainer));