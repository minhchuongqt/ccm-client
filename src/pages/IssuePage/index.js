import React, { Component } from "react";
import IssuePageView from "./IssuePage";
import { connect } from "react-redux";
import * as actions from "../../actions/issue";
import * as backlogActions from "../../actions/backlog";
import * as selectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as userSelectors from "../../selectors/user";
import AddIssueModal from "../../components/addIssueModal";
import TestDialog from "../../components/modal";
import {toast} from "react-toastify";

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
      
    };
    // this.assignFocus;
  }

  componentWillMount() {
    const { selectedFilterForDetailIssueValue, sortType } = this.props;
    this.props.getIssueType(this.getBaseOption());
    this.props.getPriority(this.getBaseOption());
    this.props.getListLabel(this.getBaseOption());
    this.props.getListStoryPoint(this.getBaseOption());
    this.getListIssue(selectedFilterForDetailIssueValue, sortType);
    this.getListUser();
  }

  componentWillReceiveProps(newProps) {
    const { createIssueStatus, selectedFilterForDetailIssueValue, sortType } = newProps;
    // console.log(newProps)
    if (createIssueStatus) {
      toast.success("Create issue successfully");
      this.setState({ isOpenAddIssueModal: false });
      this.props.getListLabel(this.getBaseOption());
      this.props.getListStoryPoint(this.getBaseOption());
      this.getListIssue();
      this.props.resetCreateIssueStatus()
    }
    if(selectedFilterForDetailIssueValue !== this.props.selectedFilterForDetailIssueValue) {
      this.getListIssue(selectedFilterForDetailIssueValue, sortType);
    }
    if(sortType !== this.props.sortType) {
      this.getListIssue(selectedFilterForDetailIssueValue, sortType);
    }
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

  getListIssue = (filter, sort) => {
    const query = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
      }),
      sort: JSON.stringify({
        [filter.value]: sort
      })
    };
    this.props.getIssueList(query);
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
        // completed: false
      }),
      sort: JSON.stringify({
        sequenceInSprint: -1,
        createdAt: -1
      })
    };
    this.props.getListSprint(params);
  };

  openAddIssueModal = () => {
    const query = {
      ...this.getBaseOption()
    };
    this.getListSprint();
    this.setState({ isOpenAddIssueModal: true });
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
    this.props.selectIssue(issue);
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
    const {selectedFilterForDetailIssueValue, sortType} = this.props
    this.props.changeFilterForUserIssue(value)
    if(value.key != 'all') {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
          [value.key]: value.value
        }),
        sort: JSON.stringify({
          [selectedFilterForDetailIssueValue.valu]: sortType,
        })
      };
      this.props.getIssueList(params);
    } else {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id,
        }),
        sort: JSON.stringify({
          [selectedFilterForDetailIssueValue.valu]: sortType,
        })
      };
      this.props.getIssueList(params);
    }
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
      sortType
    } = this.props;
    const { isOpenAddIssueModal } = this.state;
    // console.log(selectedIssue)
    return (
      <div>
        <IssuePageView
          selectedFilterForUserIssueValue={selectedFilterForUserIssueValue}
          filterableForUserIssue={filterableForUserIssue}
          filterableForDetailIssue={filterableForDetailIssue}
          selectedFilterForDetailIssueValue={selectedFilterForDetailIssueValue}
          onChangeFilterForUserIssue={(value) => this.onChangeFilterForUserIssue(value)}
          onChangeFilterForDetailIssue={value => this.props.changeFilterForDetailIssue(value)}
          onChangeSearchValue={value => this.props.onChangeSearchValue(value)}
          changeSortType={value => this.props.changeSortType(value)}
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
          onFocus = {e => this.onFocus(e)}
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeModal}
          userInfo={userInfo}
          prioritySelectable={prioritySelectable}
          labelSelectable={labelSelectable}
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
      </div>
    );
  }
}

const mapState = state => {
  return{
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
  issueInfo: selectors.getIssueInfo(state),
  userInfo: userSelectors.getUserInfo(state),
  filterableForUserIssue: selectors.getFilterableForUserIssue(state),
  filterableForDetailIssue: selectors.getFilterableForDetailIssue(state),
  selectedFilterForUserIssueValue: selectors.getSelectedFilterForUserIssueValue(state),
  selectedFilterForDetailIssueValue: selectors.getSelectedFilterForDetailIssueValue(state),
  searchValue: selectors.getSearchValue(state),
  sortType: selectors.getSortType(state)
}
};

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
  }

});

export default connect(
  mapState,
  mapDispatchToProps
)(IssuePageContainer);
