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
        this.getActiveSprint()
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
        const { dataForBoard } = this.props
        return (
            <div>
                <ActiveSprintPageView 
                   data = {dataForBoard}
                   handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, card) => this.handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: projectSelectors.getSelectedProject(state),
    // activeSprint: sprintSelectors.getActiveSprint(state),
    dataForBoard: activeSprintSelectors.generateDataActiveBoard(state),
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ActiveSprintPageContainer));