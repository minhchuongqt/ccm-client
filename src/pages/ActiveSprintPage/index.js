import React, { Component } from 'react';
import ActiveSprintPageView from './ActiveSprintPage';
import { connect } from 'react-redux'
import { toast } from "react-toastify";
import * as issueActions from '../../actions/issue'
import * as sprintActions from '../../actions/backlog'
import * as workflowActions from '../../actions/workflow'
import * as projectSelectors from "../../selectors/project";
import * as backlogSelectors from "../../selectors/backlog";
import * as activeSprintSelectors from "../../selectors/activeSprint";
import CompleteSprintModal from "./CompleteSprintModal";
class ActiveSprintPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addForm: {
            workflow: "",
          },
          completeForm: {
            moveToSprint: "",
          },
          isOpenCompleteSprintModal: false,
        };
      }
      componentWillReceiveProps(newProps) {
        const { completeSprintStatus
        } = newProps;
        if (completeSprintStatus) {
          toast.success("Complete sprint successfully");
          this.setState({ isOpenCompleteSprintModal: false });
          this.getListWorkflow();
          this.getActiveSprint();
        }
      }

    componentWillMount(){
        // this.getListIssue();
        this.getListWorkflow();
        this.getActiveSprint();
        this.getActiveSprintInfo();
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
          ...this.getBaseOption()
        };
        this.props.getIssueList(query);
    };
    getListWorkflow = () => {
        const query = {
          ...this.getBaseOption()
        };
        this.props.getWorkflowList(query);
    };
    getActiveSprint = () => {
        const query = {
          ...this.getBaseOption()
        };
        this.props.getActiveSprint(query);
    };
    getActiveSprintInfo = () => {
        const query = {
          ...this.getBaseOption()
        };
        this.props.getActiveSprintInfo(query);
    };
    openCompleteSprintModal = () => {
      this.getListSprint();
      this.setState({
        completeForm: {
          sprint: this.props.activeSprintInfo._id,
          project: this.props.selectedProject._id
        }
      });
      this.setState({ isOpenCompleteSprintModal: true });
    };
    closeCompleteSprintModal = () => {
      this.setState({
        completeForm: {
          sprint: "",
          project: "",
          moveToSprint: ""
        }
      });
      this.setState({ isOpenCompleteSprintModal: false });
    };
    completeSprint = () => {
      const { completeForm } = this.state;
      const data = {
        ...completeForm
      };
        toast.success("Sprint successfully completed")
        this.props.completeSprint(data);
        
    };
    onChangeCompleteValue = (name, value) => {
      const completeForm = this.state.completeForm;
      completeForm[name] = value;
      this.setState({ completeForm });
    };
    getListSprint = () => {
      const params = {
        query: JSON.stringify({
          project: this.props.selectedProject._id
        }),
        sort: JSON.stringify({
          sequenceInSprint: -1,
          createdAt: -1
        })
      };
      this.props.getListSprint(params);
    };
    handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card) {
        this.setState({
            addForm: {
              workflow : targetLaneId,
            }
        });
        const { addForm } = this.state;
        const data = {
            ...addForm
        };
        console.log(data)
        this.props.changeIssueWorkflow(cardId, data);
    }

    render() {
        const { dataForBoard, activeSprintInfo, sprintTypeSelectable, } = this.props
        const {
          isOpenCompleteSprintModal,
          completeForm
        } = this.state;
        return (
            <div>
                <ActiveSprintPageView 
                   data = {dataForBoard}
                   activeSprintInfo = {activeSprintInfo}
                   openCompleteSprintModal={() => this.openCompleteSprintModal()}
                   handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, card) => this.handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card)}
                />
                <CompleteSprintModal
                  data={completeForm}
                  activeSprintInfo = {activeSprintInfo}
                  openCompleteModal={isOpenCompleteSprintModal}
                  closeCompleteModal={this.closeCompleteSprintModal}
                  completeSprint={this.completeSprint}
                  validate={data => this.validate(data)}
                  sprintTypeSelectable={sprintTypeSelectable}
                  onChangeCompleteValue={(name, value) => this.onChangeCompleteValue(name, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: projectSelectors.getSelectedProject(state),
    completeSprintStatus: backlogSelectors.completeSprintStatus(state),
    dataForBoard: activeSprintSelectors.generateDataActiveBoard(state),
    activeSprintInfo: activeSprintSelectors.getSprintActiveInfo(state),
    sprintTypeSelectable: backlogSelectors.getSprintTypeSelectable(state),
})

const mapDispatchToProps = dispatch => ({
    getListSprint(query) {
      dispatch(sprintActions.getListSprint(query));
    },
    getIssueList(query) {
        dispatch(issueActions.getIssueList(query));
    },
    changeIssueWorkflow(id, data) {
        dispatch(issueActions.changeIssueWorkflow(id, data));
    },
    getWorkflowList(query) {
        dispatch(workflowActions.getWorkflowList(query));
    },
    getActiveSprint(query) {
        dispatch(sprintActions.getSprintActive(query));
    },
    getActiveSprintInfo(query) {
        dispatch(sprintActions.getSprintActiveInfo(query));
    },
    completeSprint(completeForm) {
      dispatch(sprintActions.completeSprint(completeForm));
    },
})

export default connect(mapStateToProps, mapDispatchToProps) ((ActiveSprintPageContainer));