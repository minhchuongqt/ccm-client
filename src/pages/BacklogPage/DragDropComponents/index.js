import React from "react";
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";
import "@atlaskit/css-reset";
import * as selectors from '../../../selectors/backlog'
class DragDropComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.initialData }
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

  onDragEnd = result => {
    this.setState({ homeIndex: null });
    // document.body.style.color = 'inherit'
    const { destination, source, draggableId } = result;
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
  };

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
    
    const { openAddSprintModal, initialData, openAddIssueModal } = this.props
    // console.log(this.props)
    return (
      <div>
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
                      <div className="btn-group pull-right">
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
                      disableAction = {true}
                      startSprint
                      openAddIssueModal={openAddIssueModal}
                      column={column}
                      tasks={tasks}
                      index={index}
                      sprintActived = {sprintActived}
                      onClick={(task) => this.props.onClick(task)}
                    />
                    
                  </div>
                </div>
              );
            } else {
              return (
                <div>
                  <Column
                    openAddIssueModal={openAddIssueModal}
                    sprintActived = {sprintActived}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    onClick={(task) => this.props.onClick(task)}
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
})

const mapDispatchToProp = dispatch => ({

})

export default connect(mapStateToProp, mapDispatchToProp)(DragDropComponents);
