import React, { Component } from "react";
import IssuePageView from "./IssuePage";
import { connect } from "react-redux";
import * as actions from "../../actions/issue";
import * as issueActions from "../../actions/backlog";
import * as selectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as userSelectors from "../../selectors/user";
import AddIssueModal from "./AddIssueModal";
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
      isOpenAddIssueModal: false
    };
  }

  componentWillMount() {
    this.getListIssue();
    this.getListUser()
  }

  componentWillReceiveProps(newProps) {
    const { createIssueStatus } = newProps;
    // console.log(newProps)
    if (createIssueStatus) {
      toast.success("Create issue successfully");
      this.setState({ isOpenAddIssueModal: false });
      this.getListIssue();
      this.props.resetCreateIssueStatus()
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

  getListIssue = () => {
    const query = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
      }),
      sort: JSON.stringify({
        createdAt: -1
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
    this.props.getIssueType(query);
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

  createIssue = (data) => {
    console.log(this.props.addIssueValueForApi)
    // if (this.validate(data)) {
    //     toast.success("OK")
    this.props.createIssue(this.props.addIssueValueForApi)
        
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

  showAddIssueModal = () => {
    return <TestDialog />;
  };

  render() {
    const {
      listIssue,
      issueTypeSelectable,
      addIssueFormValue,
      sprintTypeSelectable,
      addIssueValue,
      issueInfo,
      // selectedIssue,
      assigneeSelectable,
      userInfo
    } = this.props;
    const { isOpenAddIssueModal } = this.state;
    // console.log(selectedIssue)
    return (
      <div>
        <IssuePageView
          listIssue={listIssue}
          issueInfo={issueInfo}
          // selectedIssue={selectedIssue}
          openAddIssueModal={this.openAddIssueModal}
          closeIssueDetail={this.closeIssueDetail}
          selectIssue={issue => this.selectIssue(issue)}
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeModal}
          userInfo={userInfo}
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
  sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
  assigneeSelectable: selectors.getAssigneeSelectable(state),
  issueTypeSelectable: selectors.getIssueTypeSelectable(state),
  addIssueFormValue: state.IssueState.addIssueFormValue,
  addIssueValueForApi: selectors.generateDataForAddIssue(state),
  issueInfo: selectors.getIssueInfo(state),
  userInfo: userSelectors.getUserInfo(state)
  
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
  changeAddIssueFormValue(key, value) {
    
    dispatch(actions.changeAddIssueFormValue(key, value));
  },
  resetAddIssueFormValue() {
    dispatch(actions.resetAddIssueFormValue());
  },
  getListSprint(query) {
    dispatch(issueActions.getListSprint(query));
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
});

export default connect(
  mapState,
  mapDispatchToProps
)(IssuePageContainer);
