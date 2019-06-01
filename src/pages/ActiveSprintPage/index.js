import React, { Component } from 'react';
import ActiveSprintPageView from './ActiveSprintPage';
import { connect } from 'react-redux'
import * as issueActions from '../../actions/issue'
import * as sprintActions from '../../actions/backlog'
import * as workflowActions from '../../actions/workflow'
import * as projectSelectors from "../../selectors/project";
import * as activeSprintSelectors from "../../selectors/activeSprint";

class ActiveSprintPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addForm: {
            workflow: "",
          }
        };
      }
    
    componentWillMount(){
        // this.getListIssue();
        this.getListWorkflow();
        this.getActiveSprint();
        this.getActiveSprintInfo();
    }
    generateValueBoardData() {

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
        const { dataForBoard, activeSprintInfo } = this.props
        const {
          isOpenStartSprintModal,
          addForm
        } = this.state;
        return (
            <div>
                <ActiveSprintPageView 
                   data = {dataForBoard}
                   activeSprintInfo = {activeSprintInfo}
                   openAddSprintModal={this.openAddSprintModal}
                   handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, card) => this.handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card)}
                />
                {/* <AddSprintModal
                  data={addForm}
                  openModal={isOpenStartSprintModal}
                  closeModal={this.closeStartSprintModal}
                  startSprint={this.startSprint}
                  validate={data => this.validate(data)}
                  onChangeValue={(name, value) => this.onChangeValue(name, value)}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: projectSelectors.getSelectedProject(state),
    // createSprintStatus: backlogSelectors.createSprintStatus(state),
    dataForBoard: activeSprintSelectors.generateDataActiveBoard(state),
    activeSprintInfo: activeSprintSelectors.getSprintActiveInfo(state)
})

const mapDispatchToProps = dispatch => ({
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
    // startSprint(addForm) {
    //   dispatch(actions.startSprint(addForm));
    // },
})

export default connect(mapStateToProps, mapDispatchToProps) ((ActiveSprintPageContainer));