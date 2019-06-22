import React from "react";
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";
import "@atlaskit/css-reset";
import * as selectors from '../../../selectors/backlog'
import ConfirmModal from './ConfirmModal'
class DragDropComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...this.props.initialData,
      isOpenModal: false,
      confirmMessage: '',
      moveIssueData: {}
     }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.initialData)
    if (this.state !== newProps.initialData) {
      this.setState(newProps.initialData)
    }
  }

  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex
    });
  };

  // onDragUpdate = (update) => {
  //   const {destination} = update
  //   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity}`
  // }

  moveIssue = async (result) => {
    this.setState({ homeIndex: null });
    const { destination, source, draggableId } = result;
    await this.props.changeIssueSprint(draggableId, source.droppableId, destination.droppableId)
    this.props.getListSprint()
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    //Moving form one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  }

  onDragEnd = async result => {
    
    const {sprintSelectable} = this.props
    // document.body.style.color = 'inherit'
    const { destination, source, draggableId } = result;
    if(!destination) return
    if((sprintSelectable.find(item => item.value === source.droppableId) || {}).active || 
    (sprintSelectable.find(item => item.value === destination.droppableId) || {}).active
    ) {
      const sourceSprint = sprintSelectable.find(item => item.value === source.droppableId)
      const destinationSprint = sprintSelectable.find(item => item.value === destination.droppableId)
      const text = `This issue will be moved from sprint &nbsp;<b>${destinationSprint.label}</b>&nbsp; to sprint &nbsp;<b>${sourceSprint.label}</b>`
      await this.setState({isOpenModal: true, confirmMessage: text, moveIssueData: result})
      // console.log('warning')
    } else {
      this.moveIssue(result)
    }

    
  };

  closeModal = () => {
    this.setState({isOpenModal: false, moveIssueData: {}})
  }

  render() {
    const backlogColumn = {
      id: "backlog",
      title: "Backlog",
      taskIds: []
    };
    let sprintActived = false;
    this.state.columnOrder.map((columnId, index) => {
      const column = this.state.columns[columnId];
      if(column.active) {
        sprintActived = true;
      }
    })
    
    const { openAddSprintModal, initialData, openAddIssueModal, openStartSprintModal, selectableIssueType, createIssue } = this.props
    const {isOpenModal, confirmMessage, moveIssueData} = this.state
    // console.log(isOpenModal)
    return (
      <div>
        <ConfirmModal 
          openModal={isOpenModal}
          closeModal={this.closeModal}
          confirmMessage={confirmMessage}
          moveIssue={() => this.moveIssue(moveIssueData)}
        />
        <DragDropContext
          onDragStart={this.onDragStart}
          // onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            
            // const isDropDisabled = index < this.state.homeIndex;
            if (index === this.state.columnOrder.length - 1) {
              return (
                <div key={column.id}>
                  <div className="create-sprint">
                      <div className="btn-group pull-right" style={{marginRight: 9}}>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={data => openAddSprintModal(data)}
                        >
                          Create sprint
                    </button>
                      </div>
                    </div>
                  <div >
                    <Column
                      createIssue={(summary, issueType) => createIssue(summary, issueType)}
                      disableAction = {true}
                      startSprint
                      openAddIssueModal={openAddIssueModal}
                      openStartSprintModal={openStartSprintModal}
                      column={column}
                      tasks={tasks}
                      index={index}
                      sprintActived = {sprintActived}
                      onClick={(task) => this.props.onClick(task)}
                      selectableIssueType={selectableIssueType}
                    />
                    
                  </div>
                </div>
              );
            } else {
              return (
                <div key={column.id}>
                  <Column
                    createIssue={(summary, issueType, sprint) => createIssue(summary, issueType, sprint)}
                    openAddIssueModal={openAddIssueModal}
                    openStartSprintModal={openStartSprintModal}
                    sprintActived = {sprintActived}
                    column={column}
                    tasks={tasks}
                    index={index}
                    onClick={(task) => this.props.onClick(task)}
                    selectableIssueType={selectableIssueType}
                  />
                  
                </div>
              );
            }
          })}
        </DragDropContext>
        
      </div>
    );
  }
}

const mapStateToProp = state => ({
  // initialData: selectors.getInitalData(state)
  sprintSelectable: selectors.getSprintTypeSelectable(state)
})

const mapDispatchToProp = dispatch => ({

})

export default connect(mapStateToProp, mapDispatchToProp)(DragDropComponents);
