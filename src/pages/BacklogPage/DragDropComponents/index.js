import React from "react";
import {connect} from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./column";
import "@atlaskit/css-reset";
import * as selectors from '../../../selectors/backlog'
class DragDropComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.initialData}
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps)
    this.setState(newProps.initialData)
    if(this.state !== newProps.initialData) {
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
    const {openAddSprintModal, initialData} = this.props
    // console.log(initialData)
    // console.log(this.state)
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map((columnId, index) => {
          // console.log(this.state.columnOrder)
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          // const isDropDisabled = index < this.state.homeIndex;
          if (index === this.state.columnOrder.length - 2) {
            return (
              <div key={column.id}>
                <Column
                  
                  column={column}
                  tasks={tasks}
                  index={index}
                />
                <div className="create-sprint">
                  <div className="btn-group pull-right">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => openAddSprintModal()}
                    >
                      Create sprint
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                index={index}
              />
            );
          }
        })}
      </DragDropContext>
    );
  }
}

const mapStateToProp = state => ({
  // initialData: selectors.getInitalData(state)
})

const mapDispatchToProp = dispatch => ({

})

export default connect(mapStateToProp, mapDispatchToProp) (DragDropComponents);