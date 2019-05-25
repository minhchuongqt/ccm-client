import React from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Task from './task'

const Container = styled.div`
  background-color: white;
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.4s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 30px;
`
export default class Column extends React.Component {
  render() {
    const { openAddIssueModal, startSprint } = this.props
    return (
      <Container>
        <div className="box box-success" >
          <div className="btn-group pull-right p-d-9">
            <button
              type="button"
              className="btn btn-xs btn-primary"
              // onClick={() => console.log(this.props.column.id)}
              onClick={() => startSprint(this.props.column.id)}
            >
              <strong>Start sprint</strong>
            </button>
        </div>
        <div><Title>{this.props.column.title}</Title></div>
        <Droppable 
        droppableId={this.props.column.id}
        isDropDisabled={this.props.isDropDisabled}
        >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.tasks.map((task, index) => <Task
             onClick={(task)=>this.props.onClick(task)}
              key={task.id} task={task} index={index}/>)}
            {provided.placeholder}
          </TaskList>
        )}
        </Droppable>
        <div className="box-footer">
              <button className="btn btn-default" onClick={() => openAddIssueModal(true)}>
                <i className="fa fa-plus" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
        </div>
      </Container>
    )
  }
}