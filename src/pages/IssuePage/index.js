import React, { Component } from "react";
import IssuePageView from "./IssuePage";
import { connect } from "react-redux";
import { toast } from "react-toastify";

//actions
import * as actions from "../../actions/issue";
import * as backlogActions from "../../actions/backlog";
import * as workflowActions from '../../actions/workflow'
import * as releaseActions from "../../actions/release"
import * as componentActions from "../../actions/component"
// selector
import * as selectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as userSelectors from "../../selectors/user";
import * as workflowSelectors from "../../selectors/workflow";
import * as componentSelectors from "../../selectors/component";
//View
import AddIssueModal from "../../components/addIssueModal";
import TestDialog from "../../components/modal";

class IssuePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        project: this.props.selectedProject._id,
        summary: "",
        issueType: "",
        sprint: null,
        description: ""
      },
      isOpenAddIssueModal: false,
      displayDescriptionEditor: false,
      description: '',
      comment: '',
      displayAddSubtask: false,
      subTaskSummary: '',
      displayEditSummary: false,
      issueSummary: ''
    };
    // this.assignFocus;
  }

  componentWillMount() {
    const { selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType, issueInfo } = this.props;
    this.props.getIssueType(this.getBaseOption());
    this.props.getPriority(this.getBaseOption());
    this.props.getListLabel(this.getBaseOption());
    this.props.getListStoryPoint(this.getBaseOption());
    this.props.getListComponent(this.getBaseOption())
    this.props.getListAllSprint(this.getBaseOption())
    this.getListSprint();
    this.getListUser();
    this.getListWorkflow();
    this.getListVersion();
    if(issueInfo) {
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType, false);
    } else {
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType);
    }
  }

  componentWillReceiveProps(newProps) {
    const { createIssueStatus, selectedFilterForDetailIssueValue,
      selectedFilterForUserIssueValue,
      issueInfo,
      sortType, updateIssueStatus, createSubtaskStatus,
      postCommentStatus,
      issueSummary,
      removeIssueStatus
    } = newProps;
    // console.log(newProps)
    if (createIssueStatus) {
      toast.success("Create issue successfully");
      this.setState({ isOpenAddIssueModal: false });
      newProps.getListLabel(this.getBaseOption());
      newProps.getListStoryPoint(this.getBaseOption());
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType);
      newProps.resetCreateIssueStatus()
    }

    if (updateIssueStatus) {
      // toast.success("Update issue successfully");
      this.props.getListLabel(this.getBaseOption());
      this.props.getListStoryPoint(this.getBaseOption());
      this.getIssueInfo(issueInfo)
      // this.getListIssue(selectedFilterForDetailIssueValue, sortType);
      this.props.resetUpdateIssueStatus()
    }

    if (createSubtaskStatus) {
      toast.success("Create subtask successfully");
      this.getIssueInfo(issueInfo)
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType, false)
      this.props.resetCreateSubtaskStatus()
    }
    if (postCommentStatus) {
      this.getIssueInfo(issueInfo)
      this.props.resetPostCommentStatus()
      this.setState({ comment: "" });
       
    }

    if (removeIssueStatus) {
      toast.success("Remove issue successfully");
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType)
      this.props.resetRemoveIssueStatus()
    }

    if (selectedFilterForDetailIssueValue !== this.props.selectedFilterForDetailIssueValue) {
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType);
    }
    if (sortType !== this.props.sortType) {
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType);
    }
    if (issueSummary !== newProps.issueInfo.summary) {
      this.setState({ issueSummary: newProps.issueInfo.summary });
    }
  }

  componentWillUnmount = () => {
    // console.log('unmount')
    this.props.resetRemoveIssueStatus()
  }

  onFocus = (e) => {
    switch (e) {
      case 'assignFocus':
        // this.assignFocus.focus()
        document.getElementById("assignFocus").click()
        break;

      default:
        break;
    }
    // console.log(e)
    // this[e].focus()
  }

  getBaseOption = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
      })
    };
    return params;
  };

  getListIssue = (query = {}, filter = {}, sort = -1, setSelectedIssue = true) => {
    if (query.key != 'all') {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
          [query.key]: query.value,
          released: false,
        }),
        sort: JSON.stringify({
          [filter.value]: sort
        })
      };
      this.props.getIssueList(params, setSelectedIssue);
    } else {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
          released: false,
        }),
        sort: JSON.stringify({
          [filter.value]: sort
        })
      };
      this.props.getIssueList(params, setSelectedIssue);
    }
  };

  getIssueInfo = issue => {
    const id = issue._id;
    const params = {
      ...this.getBaseOption()
    };
    this.props.getIssueInfo(id, params);
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

  getListSprint = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id,
        active: false,
      }),
      sort: JSON.stringify({
        sequenceInSprint: -1,
        createdAt: -1
      })
    };
    this.props.getListSprint(params);
  };

  getListWorkflow = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.props.getWorkflowList(query);
  };

  getListVersion = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.props.getListVersion(query);
  };

  openAddIssueModal = () => {
    const query = {
      ...this.getBaseOption()
    };
    // this.getListSprint();
    this.setState({ isOpenAddIssueModal: true });
    this.props.changeAddIssueFormValue('issueType', this.props.issueTypeSelectable.find(item => item.label == "Story"))
    this.props.changeAddIssueFormValue('priority', this.props.prioritySelectable.find(item => item.label == "Medium"))
  };

  closeIssueDetail = () => {
    document.getElementById("issue-detail-collapse").className +=
      "A hide-detail";
    // document.getElementById('open-issues').className += " hide-detail "
  };
  closeModal = () => {
    this.props.resetAddIssueFormValue();
    this.setState({ isOpenAddIssueModal: false });
  };

  chooseActive = active => {
    if (active === true) {
      return "btn-success";
    }
    return "btn-danger";
  };

  selectIssue = issue => {
    // this.props.selectIssue(issue);
    console.log(issue)
    if(issue.subTaskOfIssue) {
      const { selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType } = this.props
      this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType)
    }

    this.getIssueInfo(issue);
    if (document.getElementById("issue-detail-collapse")) {
      document.getElementById("issue-detail-collapse").className +=
        "A detail-visibility";
    }
  };

  createIssue = () => {
    this.props.createIssue(this.props.addIssueValueForApi)
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

  showAddIssueModal = () => {
    return <TestDialog />;
  };

  onChangeFilterForUserIssue = (value) => {
    const { selectedFilterForDetailIssueValue, sortType } = this.props
    this.props.changeFilterForUserIssue(value)
    if (value.key != 'all') {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
          [value.key]: value.value
        }),
        sort: JSON.stringify({
          [selectedFilterForDetailIssueValue.value]: sortType,
        })
      };
      this.props.getIssueList(params);
    } else {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
        }),
        sort: JSON.stringify({
          [selectedFilterForDetailIssueValue.value]: sortType,
        })
      };
      this.props.getIssueList(params);
    }
  }

  updateIssueDetail = (key, value) => {
    const { issueInfo } = this.props
    console.log(key, ': ', value)
    switch (key) {
      case 'label':
        this.props.updateIssueDetail(issueInfo._id, { [key]: value.map(item => item.label) })
        break;
      case 'component':
        this.props.updateIssueDetail(issueInfo._id, { [key]: value.map(item => item.value) })
        break;
      case 'storyPoints':
        this.props.updateIssueDetail(issueInfo._id, { [key]: value.label })
        break;
      case 'description':
        this.setState({ [key]: value })
        break;
      case 'subTaskSummary':
        this.setState({ subTaskSummary: value })
        break;
      case 'summary':
        this.setState({ issueSummary: value })
        break;
      case 'workflow':
        this.props.updateIssueDetail(issueInfo._id, { [key]: this.props.listWorkflow.find(i => i.type == value)._id })
        break;
      case 'closed':
        this.props.updateIssueDetail(issueInfo._id, { [key]: value })
        break;
      default:
        this.props.updateIssueDetail(issueInfo._id, { [key]: value.value })
        break;
    }
  }

  changeDisplayDescriptionEditor = async (value, text) => {
    await this.setState({ displayDescriptionEditor: value, description: text })
  }

  changeDisplayCreateSubtask = (value) => {
    this.setState({ displayAddSubtask: value })
  }
  changeDisplayEditSummary = (value) => {
    this.setState({ displayEditSummary: value })
  }

  onChangeCommentValue = (value) => {
    this.setState({ comment: value })
  };

  saveDescription = () => {
    const { issueInfo } = this.props
    this.props.updateIssueDetail(issueInfo._id, { description: this.state.description })
  }

  saveSummary = () => {
    const { issueInfo } = this.props
    if (this.state.issueSummary !== issueInfo.summary) {
      this.props.updateIssueDetail(issueInfo._id, { summary: this.state.issueSummary })
    }
  }

  postComment = () => {
    const data = {
      issue: this.props.issueInfo._id,
      content: this.state.comment
    }
    this.props.postComment(data)
    document.getElementById('commentInputIS').value = ''
  }
  createSubtask = () => {
    const { selectedProject, issueTypeSelectable, issueInfo, prioritySelectable } = this.props
    const { subTaskSummary } = this.state
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
  handleKeyPress = (e) => {
    if(e.charCode === 13)
    this.postComment()
  }
  moveToComment = () => {
    document.getElementById('commentInputIS').focus();
  }
  refeshListIssue = () => {
    const { selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType } = this.props
    this.getListIssue(selectedFilterForUserIssueValue, selectedFilterForDetailIssueValue, sortType)
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
      storyPointSelectable,
      filterableForUserIssue,
      filterableForDetailIssue,
      selectedFilterForUserIssueValue,
      selectedFilterForDetailIssueValue,
      searchValue,
      sortType,
      listIssueIsFetching,
      versionSelectable,
      componentSelectable,
    } = this.props;
    const { isOpenAddIssueModal, displayDescriptionEditor, description, displayAddSubtask,
      subTaskSummary, issueSummary } = this.state;
    // console.log(selectedIssue)
    return (
      <div>
        <IssuePageView
          selectedFilterForUserIssueValue={selectedFilterForUserIssueValue}
          filterableForUserIssue={filterableForUserIssue}
          filterableForDetailIssue={filterableForDetailIssue}
          selectedFilterForDetailIssueValue={selectedFilterForDetailIssueValue}
          displayDescriptionEditor={displayDescriptionEditor}
          descriptionState={description}
          displayAddSubtask={displayAddSubtask}
          subTaskSummary={subTaskSummary}
          issueSummary={issueSummary}
          listIssueIsFetching={listIssueIsFetching}
          componentSelectable={componentSelectable}
          changeDisplayDescriptionEditor={(value, text) => this.changeDisplayDescriptionEditor(value, text)}
          changeDisplayCreateSubtask={value => this.changeDisplayCreateSubtask(value)}
          onChangeFilterForUserIssue={(value) => this.onChangeFilterForUserIssue(value)}
          onChangeFilterForDetailIssue={value => this.props.changeFilterForDetailIssue(value)}
          onChangeSearchValue={value => this.props.onChangeSearchValue(value)}
          onChangeCommentValue={(value) => this.onChangeCommentValue(value)}
          postComment={() => this.postComment()}
          handleKeyPress={(e) => this.handleKeyPress(e)}
          changeSortType={value => this.props.changeSortType(value)}
          updateIssueDetail={(key, value) => this.updateIssueDetail(key, value)}
          saveDescription={() => this.saveDescription()}
          createSubtask={() => this.createSubtask()}
          changeDisplayEditSummary={value => this.changeDisplayEditSummary(value)}
          saveSummary={() => this.saveSummary()}
          removeIssue={(id) => this.removeIssue(id)}
          refeshListIssue={() => this.refeshListIssue()}
          sortType={sortType}
          searchValue={searchValue}
          listIssue={listIssue}
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
          versionSelectable={versionSelectable}
          sprintTypeSelectable={sprintTypeSelectable}
          moveToComment={() => this.moveToComment()}
          onFocus={e => this.onFocus(e)}
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeModal}
          userInfo={userInfo}
          createIssue={data => this.createIssue(data)}
          validate={data => this.validate(data)}
          addIssueFormValue={addIssueFormValue}
          addIssueValue={addIssueValue}
          onChangeValue={(name, value) => this.onChangeValue(name, value)}
          onRemoveFile={id => this.props.onRemoveFile(id)}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    sprint: state.SprintState,
    issue: state.IssueState,
    listIssue: selectors.getListIssue(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    // selectedIssue: selectors.getSelectedIssue(state),
    createIssueStatus: selectors.getCreateIssueStatus(state),

    storyPointSelectable: selectors.getStoryPointSelectable(state),
    sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
    assigneeSelectable: selectors.getAssigneeSelectable(state),
    issueTypeSelectable: selectors.getIssueTypeSelectable(state),
    prioritySelectable: selectors.getPrioritySelectable(state),
    labelSelectable: selectors.getLabelSelectable(state),

    addIssueFormValue: state.IssueState.addIssueFormValue,
    addIssueValueForApi: selectors.generateDataForAddIssue(state),
    issueInfo: selectors.getIssueInfo(state)(false),
    userInfo: userSelectors.getUserInfo(state),
    filterableForUserIssue: selectors.getFilterableForUserIssue(state),
    filterableForDetailIssue: selectors.getFilterableForDetailIssue(state),
    selectedFilterForUserIssueValue: selectors.getSelectedFilterForUserIssueValue(state),
    selectedFilterForDetailIssueValue: selectors.getSelectedFilterForDetailIssueValue(state),
    searchValue: selectors.getSearchValue(state),
    sortType: selectors.getSortType(state),
    updateIssueStatus: selectors.getUpdateIssueStatus(state),
    createSubtaskStatus: selectors.getCreateSubtaskStatus(state),
    postCommentStatus: selectors.getPostCommentStatus(state),
    listWorkflow: workflowSelectors.getListWorkflow(state),
    removeIssueStatus: selectors.getRemoveIssueStatus(state),
    listIssueIsFetching: selectors.getListIssueIsFetching(state),
    versionSelectable: selectors.getVersionSelectable(state),
    componentSelectable: componentSelectors.getComponentSelectable(state)
  }
};

const mapDispatchToProps = dispatch => ({
  getIssueList(query, setSelectedIssue) {
    dispatch(actions.getIssueList(query, setSelectedIssue));
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
  getListLabel(query) {
    dispatch(actions.getListLabel(query));
  },
  getListStoryPoint(query) {
    dispatch(actions.getListStoryPoint(query));
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
  getListAllSprint(query) {
    dispatch(backlogActions.getListAllSprint(query));
  },
  selectIssue(issue) {
    dispatch(actions.selectIssue(issue));
  },
  onRemoveFile(id) {
    dispatch(actions.onRemoveFile(id))
  },
  resetCreateIssueStatus() {
    dispatch(actions.resetCreateIssueStatus())
  },
  changeFilterForUserIssue(value) {
    dispatch(actions.changeFilterForUserIssue(value))
  },
  changeFilterForDetailIssue(value) {
    dispatch(actions.changeFilterForDetailIssue(value))
  },
  onChangeSearchValue(value) {
    dispatch(actions.changeSearchValue(value))
  },
  changeSortType(value) {
    dispatch(actions.changeSortType(value))
  },
  updateIssueDetail(id, data) {
    dispatch(actions.updateIssueDetail(id, data))
  },
  resetUpdateIssueStatus() {
    dispatch(actions.resetUpdateIssueStatus())
  },
  createSubtask(data) {
    dispatch(actions.createSubtask(data))
  },
  resetCreateSubtaskStatus() {
    dispatch(actions.resetCreateSubtaskStatus())
  },
  resetPostCommentStatus() {
    dispatch(actions.resetPostCommentStatus())
  },
  getWorkflowList(query) {
    dispatch(workflowActions.getWorkflowList(query))
  },
  removeIssue(id) {
    dispatch(actions.removeIssue(id))
  },
  resetRemoveIssueStatus() {
    dispatch(actions.resetRemoveIssueStatus())
  },
  getListVersion(query) {
    dispatch(releaseActions.getListVersion(query))
  },
  getListComponent(query) {
    dispatch(componentActions.getListComponent(query))
  },
  postComment(data) {
    dispatch(actions.postComment(data))
  },
  resetAllData() {
    dispatch(actions.resetAllData())
  }
});

export default connect(
  mapState,
  mapDispatchToProps
)(IssuePageContainer);
