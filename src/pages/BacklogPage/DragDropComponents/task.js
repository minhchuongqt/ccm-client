import React, { Component } from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
const Container = styled.div`
  background-color: ${props => (props.isDragging ? 'white' : 'white')};
  transition: background-color 0.4s ease;
  border: 1px solid lightgrey;
  boder-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;
const IssueKey = styled.div`
  float: right;
  padding: 0 10px;
  p {
    text-decoration-line: ${props => (props.completed ? 'line-through' : '')};
    font-size: 14px;
  }
`

const StoryPoint = styled.div`
  float: right;
  border-radius: 50%;
  background-color: #ddd;
  width: 30px;
  text-align: center;
`;

class Task extends Component {
  render() {
    const { task } = this.props
    // console.log(task)
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            onClick={()=>this.props.onClick(task)}
            // onClick={()=> selectedTask(task)}
          >
            <img src={task.iconUrl}/>&nbsp;{task.content}
            <StoryPoint>{task.storyPoint || ' - '}</StoryPoint>
            <IssueKey completed = {task.completed}><p className="com">{task.issueKey}</p></IssueKey>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;