import React, { Component } from 'react';
import ActiveSprintPageView from './ActiveSprintPage';
import { connect } from 'react-redux'
import * as issueActions from '../../actions/issue'
import * as sprintActions from '../../actions/backlog'
import * as workflowActions from '../../actions/workflow'
import * as projectSelectors from "../../selectors/project";
import * as sprintSelectors from "../../selectors/backlog";
import * as activeSprintSelectors from "../../selectors/activeSprint";

// const boardData = {
//     "lanes": [
//         {
//           "id": "1111111",
          
//           "title": "TO DO",
//           "label": "3 issues",
//           "style": {
//             "width": 300
//           },
//           "cards": [
//             {
//               "id": "Frontend",
//               "title": "Code login page",
//               "label": "15 mins",
//               "description": "Code login page in client side"
//             },
//             {
//               "id": "Plan2",
//               "title": "Code register page",
//               "label": "10 mins",
//               "description": "Design regiter page in client sidde"
//             },
//             {
//               "id": "Plan3",
//               "title": "Implement API auth",
//               "label": "30 mins",
//               "description": "Implement API for authenticate"
//             }
//           ]
//         },
//         {
//           "id": "22222222",
//           "title": "IN PROGRESS",
//           "label": "1 issue",
//           "style": {
//             "width": 300
//           },
//           "cards": [
//             {
//               "id": "Wip1",
//               "title": "CRUD Group UI",
//               "label": "30 mins",
//               "description": "Design Group UI CRUD"
//             }
//           ]
//         },
//         {
//           "id": "33333333",
//           "title": "DONE",
//           "style": {
//             "width": 300
//           },
//           "label": "2 issues",
//           "cards": [
//             {
//               "id": "Completed1",
//               "title": "Get requirements",
//               "label": "15 mins",
//               "description": "Get requirements from customer"
//             },
//             {
//               "id": "Completed2",
//               "title": "Requirements analysis",
//               "label": "15 mins",
//               "description": "Determining the conditions to meet for a new project"
//             }
//           ]
//         }
//       ]
// }
class ActiveSprintPageContainer extends Component {
    
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

    render() {
        const { dataForBoard } = this.props
        return (
            <div>
                <ActiveSprintPageView 
                   data = {dataForBoard}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: projectSelectors.getSelectedProject(state),
    activeSprint: sprintSelectors.getActiveSprint(state),
    dataForBoard: activeSprintSelectors.generateDataActiveBoard(state),
})

const mapDispatchToProps = dispatch => ({
    getIssueList(query) {
        dispatch(issueActions.getIssueList(query));
    },
    getWorkflowList(query) {
        
        dispatch(workflowActions.getWorkflowList(query));
    },
    getActiveSprint(query) {
        dispatch(sprintActions.getSprintActive(query));
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ActiveSprintPageContainer));