import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/backlog";
import * as issueActions from "../../actions/issue";
import * as workflowActions from "../../actions/workflow";
// import * as userActions from "../../actions/user";

import * as selectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as issueSelectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";
import * as userSelectors from "../../selectors/user";
import * as workflowSelectors from "../../selectors/workflow";

import BacklogPageView from "./BacklogPage";
import AddSprintModal from "./AddSprintModal";
import StartSprintModal from "./StartSprintModal";
import AddIssueModal from "../../components/addIssueModal";

class BacklogPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        project: this.props.selectedProject._id,
        name: "",
        startDate: "",
        endDate: "",
        goal: ""
      },
      startForm: {
        name: "",
        sprint: "",
        startDate: "",
        endDate: "",
        goal: ""
      },
      isOpenAddIssueModal: false,
      isOpenAddSprintModal: false,
      isOpenStartSprintModal: false,
      addIssueToSprint: null,
      description: '',
      displayAddSubtask: false,
      subTaskSummary: '',
      displayEditSummary: false,
      issueSummary: ''
    };
  }
  componentWillMount() {
    this.props.getIssueType(this.getBaseOption());
    this.props.getPriority(this.getBaseOption());
    this.props.getListLabel(this.getBaseOption());
    this.props.getListStoryPoint(this.getBaseOption());
    this.getListUser();
    this.getListSprint();
    this.getListBacklogIssue();
    this.getListWorkflow();
  }
  componentWillReceiveProps(newProps) {
    const { createSprintStatus, createIssueStatus, startSprintStatus,
      updateIssueStatus, createSubtaskStatus,
      issueSummary,
      removeIssueStatus,
      issueInfo
    } = newProps;
    if (createSprintStatus) {
      toast.success("Create sprint successfully");
      this.setState({ isOpenAddSprintModal: false });
      this.getListSprint();
    }
    if (startSprintStatus) {
      toast.success("Sprint started");
      this.setState({ isOpenStartSprintModal: false });
      this.getListSprint();
    }
    // console.log(newProps)
    if (createIssueStatus) {
      toast.success("Create issue successfully");
      this.setState({ isOpenAddIssueModal: false,   addIssueToSprint: null,});
      this.props.getListLabel(this.getBaseOption());
      this.props.getListStoryPoint(this.getBaseOption());
      this.getListSprint();
      // this.getListIssue()
      this.getListBacklogIssue();
      this.props.resetCreateIssueStatus()
    }

    if (updateIssueStatus) {
      toast.success("Update issue successfully");
      this.props.getListLabel(this.getBaseOption());
      this.props.getListStoryPoint(this.getBaseOption());
      this.getIssueInfo(issueInfo)
      // this.getListIssue(selectedFilterForDetailIssueValue, sortType);
      this.props.resetUpdateIssueStatus()
    }

    if (createSubtaskStatus) {
      toast.success("Create subtask successfully");
      this.getIssueInfo(issueInfo)
      this.props.resetCreateSubtaskStatus()
    }

    if (removeIssueStatus) {
      toast.success("Remove issue successfully");
      // this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType)
      this.props.resetRemoveIssueStatus()
    }

    if(issueSummary !== newProps.issueInfo.summary) {
      this.setState({issueSummary: newProps.issueInfo.summary});
    }
  }

  // componentWillUnmount() {
  //   this.props.resetAllData()
  // }

  getListSprint = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id,

        // completed: false
      }),
      sort: JSON.stringify({
        sequenceInSprint: -1,
        createdAt: -1
      })
    };
    this.props.getListSprint(params);
  };

  getListBacklogIssue = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id,
        subTaskOfIssue: null
      }),
      sort: JSON.stringify({
        sequenceInBacklog: -1,
        createdAt: -1
      })
    };
    this.props.getListBacklogIssue(params);
  };

  getBaseOption = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
      })
    };
    return params;
  };

  getIssueInfo = issue => {
    const id = issue._id;
    const params = {
      ...this.getBaseOption()
    };
    this.props.getIssueInfo(id, params);
  };

  getListWorkflow = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.props.getWorkflowList(query);
  };

  getListUser = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id,
      }),
      sort: JSON.stringify({
        displayName: -1,
      })
    };
    this.props.getListUser(params);
  }

  selectIssue = issue => {
    // this.props.selectIssue(issue);
    this.getIssueInfo(issue);
    if (document.getElementById("issue-detail-collapse")) {
      document.getElementById("issue-detail-collapse").className +=
        "A detail-visibility";
    }
  };

  openAddSprintModal = () => {
    this.setState({ isOpenAddSprintModal: true });

    this.props.changeAddIssueFormValue('issueType', this.props.issueTypeSelectable[0])
    this.props.changeAddIssueFormValue('priority', this.props.prioritySelectable[0])
  };
  closeSprintModal = () => {
    this.setState({
      addForm: {
        name: "",
        startDate: "",
        endDate: "",
        goal: "",
        project: ""
      }
    });
    this.setState({ isOpenAddSprintModal: false });
  };
  openStartSprintModal = (sprintId) => {
    this.setState({
      startForm: {
        sprint: sprintId,
        project: this.props.selectedProject._id,
      }
       });
       this.setState({ isOpenStartSprintModal: true });
  };
  closeStartSprintModal = () => {
    this.setState({
      addForm: {
        name: "",
        startDate: "",
        endDate: "",
        goal: "",
        project: ""
      }
    });
    this.setState({ isOpenStartSprintModal: false });
  };
  openAddIssueModal = (sprintId) => {
    // console.log(data)
    this.setState({ isOpenAddIssueModal: true, addIssueToSprint: sprintId });
  };
  closeAddIssueModal = () => {
    this.setState({ isOpenAddIssueModal: false, addIssueToSprint: null });
  };
  createSprint = () => {
    const { addForm } = this.state;
    const data = {
      ...addForm
    };
    if (this.validate(data)) {
      // toast.success("OK")
      this.props.createSprint(data);
    }
  };
  startSprint = () => {
    const { startForm } = this.state;
    const data = {
      ...startForm
    };
    // if (this.validate(data)) {
    //   toast.success("OK")
      this.props.startSprint(data);
    // }
      // console.log(data)
  };
  validate = data => {
    if (!data.name) {
      toast.error("Please enter sprint name");
      return false;
    }
    if (data.name.length < 2) {
      toast.error("The sprint name is too short");
      return false;
    }
    return true;
  };
  chooseActive = active => {
    if (active === true) {
      return "btn-success";
    }
    return "btn-danger";
  };
  onChangeValue = (name, value) => {
    const addForm = this.state.addForm;
    addForm[name] = value;
    this.setState({ addForm });
  };
  onChangeStartValue = (name, value) => {
    const startForm = this.state.startForm;
    startForm[name] = value;
    this.setState({ startForm });
  };
  

  onChangeAddIssueFormValue = (name, value) => {
    this.props.changeAddIssueFormValue(name, value);
  };

  updateIssueDetail = (key, value) => {
    const {issueInfo} = this.props
    console.log(key, ': ', value)
    switch (key) {
      case 'label':
        this.props.updateIssueDetail(issueInfo._id, {[key]: value.map(item => item.label)})
        break;
      case 'storyPoints':
          this.props.updateIssueDetail(issueInfo._id, {[key]: value.label})
        break;
      case 'description':
        this.setState({[key]: value})
        break;
      case 'subTaskSummary':
        this.setState({subTaskSummary: value})
        break;
      case 'summary':
        this.setState({issueSummary: value})
        break;
      case 'workflow':
        this.props.updateIssueDetail(issueInfo._id, {[key]: this.props.listWorkflow.find(i => i.type == value)._id})
        break;
      case 'closed':
        this.props.updateIssueDetail(issueInfo._id, {[key]: value})
        break;
      default:
          this.props.updateIssueDetail(issueInfo._id, {[key]: value.value})
        break;
    }
  }

  changeDisplayDescriptionEditor = async (value, text) => {
    await this.setState({displayDescriptionEditor: value, description: text})
  }

  changeDisplayCreateSubtask = (value) => {
    this.setState({displayAddSubtask: value})
  }
  changeDisplayEditSummary = (value) => {
    this.setState({displayEditSummary: value})
  }

  saveDescription = () => {
    const {issueInfo} = this.props
    this.props.updateIssueDetail(issueInfo._id, {description: this.state.description})
  }

  saveSummary = () => {
    const {issueInfo} = this.props
    if(this.state.issueSummary !== issueInfo.summary) {
      this.props.updateIssueDetail(issueInfo._id, {summary: this.state.issueSummary})
    }
  }

  createSubtask = () => {
    const {selectedProject, issueTypeSelectable, issueInfo, prioritySelectable} = this.props
    const {subTaskSummary} = this.state
        const data = {
          project: selectedProject._id,
          issueType: issueTypeSelectable.find(item => item.label == 'Sub Task').value,
          priority: prioritySelectable.find(item => item.label == 'Medium').value,
          summary: subTaskSummary,
          subTaskOfIssue: issueInfo._id
        }
        this.props.createSubtask(data)
  }

  removeIssue = (id) => {
    this.props.removeIssue(id)
  }

  render() {
    const {
      listSprint,
      listBacklogIssue,
      initialData,
      // addIssueFormValue,
      issueTypeSelectable,
      addIssueFormValue,
      // sprintTypeSelectable,
      // addIssueValue,
      issueInfo,
      prioritySelectable,
      assigneeSelectable,
      labelSelectable,
      userInfo,
      storyPointSelectable,
    } = this.props;
    const {
      isOpenAddSprintModal,
      isOpenStartSprintModal,
      addForm,
      startForm,
      isOpenAddIssueModal,
      addIssueToSprint,
      displayDescriptionEditor, description,  displayAddSubtask,
      subTaskSummary, issueSummary
    } = this.state;
    // console.log("sprint: ", isOpenAddSprintModal);
    // console.log("issue: ", isOpenAddIssueModal);
    return (
      <div>
        <BacklogPageView
          listSprint={listSprint}
          listBacklogIssue={listBacklogIssue}
          openAddSprintModal={this.openAddSprintModal}
          openStartSprintModal={data => this.openStartSprintModal(data)}
          chooseActive={active => this.chooseActive(active)}
          initialData={initialData}
          openAddIssueModal={data => this.openAddIssueModal(data)}

          displayDescriptionEditor={displayDescriptionEditor}
          descriptionState={description}
          displayAddSubtask={displayAddSubtask}
          subTaskSummary={subTaskSummary}
          issueSummary={issueSummary}
          changeDisplayDescriptionEditor={(value, text) => this.changeDisplayDescriptionEditor(value, text)}
          changeDisplayCreateSubtask={value => this.changeDisplayCreateSubtask(value)}
          updateIssueDetail={(key, value) => this.updateIssueDetail(key, value)}
          saveDescription={() => this.saveDescription()}
          createSubtask={() => this.createSubtask()}
          changeDisplayEditSummary={value => this.changeDisplayEditSummary(value)}
          saveSummary={() => this.saveSummary()}
          removeIssue={(id) => this.removeIssue(id)}
          selectIssue={issue => this.selectIssue(issue)}
          issueInfo={issueInfo}
          userInfo={userInfo}
          issueTypeSelectable={issueTypeSelectable}
          labelSelectable={labelSelectable}
          storyPointSelectable={storyPointSelectable}
          openAddIssueModal={this.openAddIssueModal}
          closeIssueDetail={this.closeIssueDetail}
          selectIssue={issue => this.selectIssue(issue)}
          assigneeSelectable={assigneeSelectable}
          prioritySelectable={prioritySelectable}
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeAddIssueModal}
          addIssueToSprint={addIssueToSprint}
        />
        <AddSprintModal
          data={addForm}
          openModal={isOpenAddSprintModal}
          closeModal={this.closeSprintModal}
          createSprint={this.createSprint}
          validate={data => this.validate(data)}
          onChangeValue={(name, value) => this.onChangeValue(name, value)}
        />
        <StartSprintModal
          data={startForm}
          openStartModal={isOpenStartSprintModal}
          closeStartModal={this.closeStartSprintModal}
          startSprint={this.startSprint}
          validate={data => this.validate(data)}
          onChangeStartValue={(name, value) => this.onChangeStartValue(name, value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sprint: state.SprintState,
  listSprint: selectors.listSprint(state),
  listBacklogIssue: selectors.listBacklogIssue(state),
  createSprintStatus: selectors.createSprintStatus(state),
  startSprintStatus: selectors.startSprintStatus(state),
  selectedProject: projectSelectors.getSelectedProject(state),
  initialData: selectors.getInitalData(state),
  addIssueFormValue: issueSelectors.getAddIssueFormValue(state),

  sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
  storyPointSelectable: issueSelectors.getStoryPointSelectable(state),
  issueTypeSelectable: issueSelectors.getIssueTypeSelectable(state),
  prioritySelectable: issueSelectors.getPrioritySelectable(state),
  labelSelectable: issueSelectors.getLabelSelectable(state),
  assigneeSelectable: issueSelectors.getAssigneeSelectable(state),

  createIssueStatus: issueSelectors.getCreateIssueStatus(state),
  issueInfo: issueSelectors.getIssueInfo(state),
  userInfo: userSelectors.getUserInfo(state),

  updateIssueStatus: issueSelectors.getUpdateIssueStatus(state),
  createSubtaskStatus: issueSelectors.getCreateSubtaskStatus(state),
  listWorkflow: workflowSelectors.getListWorkflow(state),
  removeIssueStatus: issueSelectors.getRemoveIssueStatus(state),
});

const mapDispatchToProps = dispatch => ({
  getListBacklogIssue(query) {
    dispatch(actions.getListBacklogIssue(query));
  },
  getListSprint(query) {
    dispatch(actions.getListSprint(query));
  },
  createSprint(addForm) {
    dispatch(actions.createSprint(addForm));
  },
  changeAddIssueFormValue(key, value) {
    dispatch(issueActions.changeAddIssueFormValue(key, value));
  },
  getIssueType(query) {
    dispatch(issueActions.getIssueType(query));
  },
  getPriority(query) {
    dispatch(issueActions.getPriority(query));
  },
  getListLabel(query) {
    dispatch(issueActions.getListLabel(query));
  },
  startSprint(startForm) {
    dispatch(actions.startSprint(startForm));
  },
  getListStoryPoint(query) {
    dispatch(issueActions.getListStoryPoint(query))
  },
  resetCreateIssueStatus(query) {
    dispatch(issueActions.resetCreateIssueStatus(query))
  },
  getIssueInfo(id, query) {
    dispatch(issueActions.getIssueInfo(id, query));
  },
  updateIssueDetail(id, data) {
    dispatch(issueActions.updateIssueDetail(id, data))
  },
  resetUpdateIssueStatus() {
    dispatch(issueActions.resetUpdateIssueStatus())
  },
  createSubtask(data) {
    dispatch(issueActions.createSubtask(data))
  },
  resetCreateSubtaskStatus() {
    dispatch(issueActions.resetCreateSubtaskStatus())
  },
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query))
  },
  getListUser(query) {
    dispatch(issueActions.getListUser(query))
  },
  removeIssue(id) {
    dispatch(issueActions.removeIssue(id))
  },
  resetRemoveIssueStatus() {
    dispatch(issueActions.resetRemoveIssueStatus())
  },
  // resetAllData() {
  // }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BacklogPageContainer));
