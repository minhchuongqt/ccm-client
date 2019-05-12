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
    return (
      <Container>
        <div className="box box-success" >
        <Title>{this.props.column.title}</Title>
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
            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
            {provided.placeholder}
          </TaskList>
        )}
        </Droppable>
        <div className="box-footer">
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                <i className="fa fa-plus" title="Edit" style={{ fontSize: '11px' }}></i> &nbsp;Create issue</button>
            </div>
        </div>
      </Container>
    )
  }
}