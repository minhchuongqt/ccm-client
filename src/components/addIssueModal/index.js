import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as issueActions from '../../actions/backlog'
import * as selectors from '../../selectors/issue'
import * as sprintSelectors from '../../selectors/backlog'
import * as projectSelectors from '../../selectors/project'
import {toast} from 'react-toastify'
import AddIssueModal from "./addIssueModal";

class AddIssueModalContainer extends Component {
  constructor(props) {
    super(props);
    
  }

  getListSprint = () => {
    const params = {
        query: JSON.stringify({
            project: this.props.selectedProject._id,
            completed: false,

        }),
        sort: JSON.stringify({
            sequenceInSprint: -1,
            createdAt: -1
        })
    }
    this.props.getListSprint(params)
}

createIssue = (data) => {
  // if (this.validate(data)) {
      // toast.success("OK")
      // this.props.createIssue(data)
      
  // }
  
  // if (this.validate(addIssueFormValue)){

  // toast.success("OK")
  // this.props.createIssue(addForm)
  // }
}

validate = (data) => {
  if (!data.summary) {
      toast.error("Please enter issue summary");
      return false;
  }
  if (!data.issueType) {
      toast.error("Please choose issue type");
      return false;
  }
  if (!data.sprint) {
      toast.error("Please enter issue summary");
      return false;
  }
  return true;
}

onChangeValue = (name, value) => {
 this.props.changeAddIssueFormValue(name, value)
}
  
  render() {
    const { issueTypeSelectable, addIssueFormValue, sprintTypeSelectable, addIssueValue, isOpenAddIssueModal } = this.props
    
    return (
      <AddIssueModal
        openModal={isOpenAddIssueModal}
        closeModal={this.props.closeModal}
        createIssue={data => this.createIssue(data)}
        validate={data => this.validate(data)}
        issueTypeSelectable={issueTypeSelectable}
        addIssueFormValue={addIssueFormValue}
        addIssueValue={addIssueValue}
        sprintTypeSelectable={sprintTypeSelectable}
        onChangeValue={(name, value) => this.onChangeValue(name, value)}
      />
    );
  }
}


const mapStateToProps = state => ({
  sprintTypeSelectable: sprintSelectors.getSprintTypeSelectable(state),
  listIssue: selectors.getListIssue(state),
  selectedProject: projectSelectors.getSelectedProject(state),
  selectedIssue: selectors.getSelectedIssue(state),
  createIssueStatus: selectors.getCreateIssueStatus(state),
  issueTypeSelectable: selectors.getIssueTypeSelectable(state),
  addIssueFormValue: selectors.getAddIssueFormValue(state),
  addIssueValue: selectors.generateDataForAddIssue(state),
  issueInfo: selectors.getIssueInfo(state)
})

const mapDispatchToProps = dispatch => ({
  getIssueList(query) {
      dispatch(actions.getIssueList(query))
  },
  createIssue(addForm) {
      dispatch(actions.createIssue(addForm))
  },
  getIssueType(query) {
      dispatch(actions.getIssueType(query))
  },
  changeAddIssueFormValue(key, value) {
      dispatch(actions.changeAddIssueFormValue(key, value))
  },
  resetAddIssueFormValue() {
      dispatch(actions.resetAddIssueFormValue())
  },
  getListSprint(query) {
      dispatch(issueActions.getListSprint(query))
  },
})

export default connect(mapStateToProps, mapDispatchToProps) (AddIssueModalContainer);
