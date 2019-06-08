import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as backlogActions from '../../actions/backlog'
import * as selectors from '../../selectors/issue'
import * as backlogSelectors from '../../selectors/backlog'
import * as projectSelectors from '../../selectors/project'
import * as userSelectors from '../../selectors/user'
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
            // completed: false,

        }),
        sort: JSON.stringify({
            sequenceInSprint: -1,
            createdAt: -1
        })
    }
    this.props.getListSprint(params)
}

createIssue = () => {
  const {addIssueToSprint, addIssueValueForApi} = this.props
  let query = {...addIssueValueForApi}
  if(addIssueToSprint) {
      query = {...query, sprint: addIssueToSprint}
  }
  this.props.createIssue(query)
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
    const { 
      listIssue,
      issueTypeSelectable,
      addIssueFormValue,
      sprintTypeSelectable,
      addIssueValue,
      issueInfo,
      prioritySelectable,
      assigneeSelectable,
      labelSelectable,
      userInfo,
      openModal,
      closeModal,
      addIssueToSprint,
      storyPointSelectable,
      versionSelectable
     } = this.props
    // console.log(openModal)
    return (
      <AddIssueModal
      storyPointSelectable={storyPointSelectable}
      addIssueToSprint={addIssueToSprint}
      openModal={openModal}
      closeModal={closeModal}
      userInfo={userInfo}
      prioritySelectable={prioritySelectable}
      labelSelectable={labelSelectable}
      versionSelectable={versionSelectable}
      createIssue={data => this.createIssue(data)}
      validate={data => this.validate(data)}
      issueTypeSelectable={issueTypeSelectable}
      assigneeSelectable={assigneeSelectable}
      addIssueFormValue={addIssueFormValue}
      addIssueValue={addIssueValue}
      sprintTypeSelectable={sprintTypeSelectable}
      onChangeValue={(name, value) => this.onChangeValue(name, value)}
      onRemoveFile={id => this.props.onRemoveFile(id)}
      />
    );
  }
}


const mapStateToProps = state => ({
  listIssue: selectors.getListIssue(state),
  selectedProject: projectSelectors.getSelectedProject(state),
  createIssueStatus: selectors.getCreateIssueStatus(state),
  storyPointSelectable: selectors.getStoryPointSelectable(state),
  sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
  assigneeSelectable: selectors.getAssigneeSelectable(state),
  issueTypeSelectable: selectors.getIssueTypeSelectable(state),
  prioritySelectable: selectors.getPrioritySelectable(state),
  labelSelectable: selectors.getLabelSelectable(state),
  addIssueFormValue: selectors.getAddIssueFormValue(state),
  addIssueValueForApi: selectors.generateDataForAddIssue(state),
  issueInfo: selectors.getIssueInfo(state),
  userInfo: userSelectors.getUserInfo(state),
  versionSelectable: selectors.getVersionSelectable(state)
})

const mapDispatchToProps = dispatch => ({
  getIssueList(query) {
    dispatch(actions.getIssueList(query));
  },
  getIssueInfo(id, query) {
    dispatch(actions.getIssueInfo(id, query));
  },
  getListUser(query) {
    dispatch(actions.getListUser(query));
  },
  createIssue(addForm) {
    dispatch(actions.createIssue(addForm));
  },
  getIssueType(query) {
    dispatch(actions.getIssueType(query));
  },
  getPriority(query) {
    dispatch(actions.getPriority(query));
  },
  changeAddIssueFormValue(key, value) {
    dispatch(actions.changeAddIssueFormValue(key, value));
  },
  resetAddIssueFormValue() {
    dispatch(actions.resetAddIssueFormValue());
  },
  getListSprint(query) {
    dispatch(backlogActions.getListSprint(query));
  },
  getListLabel(query) {
    dispatch(actions.getListLabel(query));
  },
  selectIssue(issue) {
    dispatch(actions.selectIssue(issue));
  },
  onRemoveFile(id) {
    dispatch(actions.onRemoveFile(id))
  },
  resetCreateIssueStatus() {
    dispatch(actions.resetCreateIssueStatus())
  }
})

export default connect(mapStateToProps, mapDispatchToProps) (AddIssueModalContainer);
