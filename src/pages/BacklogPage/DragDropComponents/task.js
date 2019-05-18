import React, { Component } from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
const Container = styled.div`
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  transition: background-color 0.4s ease;
  border: 1px solid lightgrey;
  boder-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            onClick={()=>this.props.onClick(this.props.task)}
            // onClick={()=> selectedTask(this.props.task)}
          >{this.props.task.content}</Container>
        )}
      </Draggable>
    )
  }
}

export default Task;