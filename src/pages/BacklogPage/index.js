import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Switch, Route, withRouter } from "react-router-dom";
import * as PATH from "../../constants/data/routeConstants";
import * as actions from "../../actions/backlog";
import * as issueActions from "../../actions/issue";

import * as selectors from "../../selectors/backlog";
import * as projectSelectors from "../../selectors/project";
import * as issueSelectors from "../../selectors/issue";
import * as backlogSelectors from "../../selectors/backlog";

import BacklogPageView from "./BacklogPage";
import AddSprintModal from "./AddSprintModal";
import AddIssueModal from "./AddIssueModal";

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
      isOpenAddIssueModal: false,
      isOpenAddSprintModal: false
    };
  }
  componentWillMount() {
    this.getListSprint();
    // this.getListIssue()
    this.getListBacklogIssue();
  }
  componentWillReceiveProps(newProps) {
    const { createSprintStatus } = newProps;
    if (createSprintStatus) {
      toast.success("Create sprint successfully");
      this.setState({ isOpenAddSprintModal: false });
      this.getListSprint();
    }
  }

  getListSprint = () => {
    const params = {
      query: JSON.stringify({
        project: this.props.selectedProject._id,
        completed: false
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
  // getListIssue = () => {
  //     const  params = {
  //         query: JSON.stringify({
  //             project: this.props.selectedProject._id,
  //         }),
  //         sort: JSON.stringify({
  //             sequenceInBacklog: -1,
  //             createdAt: -1
  //         })
  //     }
  //     this.props.getListBacklogIssue(params)
  // }
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
  openAddIssueModal = () => {
    // console.log(data)
    this.setState({ isOpenAddIssueModal: true });
  };
  closeAddIssueModal = () => {
    this.setState({ isOpenAddIssueModal: false });
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
      addForm,
      isOpenAddIssueModal,
      issueTypeSelectable,
      sprintTypeSelectable
    } = this.state;
    console.log("sprint: ", isOpenAddSprintModal);
    console.log("issue: ", isOpenAddIssueModal);
    return (
      <div>
        <BacklogPageView
          listSprint={listSprint}
          listBacklogIssue={listBacklogIssue}
          openAddSprintModal={this.openAddSprintModal}
          chooseActive={active => this.chooseActive(active)}
          initialData={initialData}
          openAddIssueModal={data => this.openAddIssueModal(data)}
        />
        <AddIssueModal
          openModal={isOpenAddIssueModal}
          closeModal={this.closeAddIssueModal}
          createIssue={data => this.createIssue(data)}
          validate={data => this.validate(data)}
          issueTypeSelectable={issueTypeSelectable}
          addIssueFormValue={addIssueFormValue}
          sprintTypeSelectable={sprintTypeSelectable}
          onChangeValue={(name, value) =>
            this.onChangeAddIssueFormValue(name, value)
          }
        />
        <AddSprintModal
          data={addForm}
          openModal={isOpenAddSprintModal}
          closeModal={this.closeSprintModal}
          createSprint={this.createSprint}
          validate={data => this.validate(data)}
          onChangeValue={(name, value) => this.onChangeValue(name, value)}
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
  selectedProject: projectSelectors.getSelectedProject(state),
  initialData: selectors.getInitalData(state),
  addIssueFormValue: issueSelectors.getAddIssueFormValue(state),
  sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
  issueTypeSelectable: issueSelectors.getIssueTypeSelectable(state)
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
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BacklogPageContainer));
