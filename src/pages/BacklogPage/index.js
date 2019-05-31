import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Switch, Route, withRouter } from "react-router-dom";
import * as actions from "../../actions/backlog";
import * as issueActions from "../../actions/issue";

import * as selectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as issueSelectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";

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
    };
  }
  componentWillMount() {
    this.props.getIssueType(this.getBaseOption());
    this.props.getPriority(this.getBaseOption());
    this.props.getListLabel(this.getBaseOption());
    this.getListSprint();
    this.getListBacklogIssue();
  }
  componentWillReceiveProps(newProps) {
    const { createSprintStatus, createIssueStatus, startSprintStatus } = newProps;
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
      this.getListIssue();
      this.props.resetCreateIssueStatus()
    }
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

  getListBacklogIssue = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id
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

  openAddSprintModal = () => {
    this.setState({ isOpenAddSprintModal: true });
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
  openAddIssueModal = (spintId) => {
    // console.log(data)
    this.setState({ isOpenAddIssueModal: true, addIssueToSprint: spintId });
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

  render() {
    const {
      listSprint,
      listBacklogIssue,
      initialData,
      addIssueFormValue
    } = this.props;
    const {
      isOpenAddSprintModal,
      isOpenStartSprintModal,
      addForm,
      startForm,
      isOpenAddIssueModal,
      addIssueToSprint
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
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeAddIssueModal}
          addIssueToSprint={addIssueToSprint}
          // createIssue={data => this.createIssue(data)}
          // validate={data => this.validate(data)}
          // issueTypeSelectable={issueTypeSelectable}
          // addIssueFormValue={addIssueFormValue}
          // sprintTypeSelectable={sprintTypeSelectable}
          // onChangeValue={(name, value) =>
          //   this.onChangeAddIssueFormValue(name, value)
          // }
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
  issueTypeSelectable: issueSelectors.getIssueTypeSelectable(state),
  createIssueStatus: issueSelectors.getCreateIssueStatus(state),
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BacklogPageContainer));
