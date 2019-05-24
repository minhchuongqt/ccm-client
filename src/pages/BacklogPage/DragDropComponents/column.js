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
const Title = styled.div`
  // display: flex;
  padding: 5px 0;
  span {
    padding: 8px;
    font-size: 22px;
  }
`

const IssueCount = styled.div`
  padding: 8px;
  float: right;
`

const ActionIcon = styled.div`
  padding: 15px;
  float: right;
`
const ButtonGroup = styled.div`
  padding: 4px;
  float: right;
`

const ButtonStart = styled.button`
    background-color: ${props => (props.disabled ? '#fafafc' : '#007bff')};
    color: ${props => (props.disabled ? '#d4d8de' : '#fff')};
    border-radius: 3px;
    border: 1px solid transparent;
    padding: 5px 20px;
  }
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.4s ease;
  background-color: ${props => (props.isDraggingOver ? 'rgba(0,0,0, 0.05)' : 'white')};
  flex-grow: 1;
  min-height: 30px;
`

const ToDoCount = styled.div`
  margin: 3px;
  float: right;
  border-radius: 50%;
  background-color: #ddd;
  color: #223655;
  width: 30px;
  text-align: center;
`;
const InProgressCount = styled.div`
  margin: 3px;
  float: right;
  border-radius: 50%;
  background-color: #0053cc;
  color: #fff;
  width: 30px;
  text-align: center;
`;
const DoneCount = styled.div`
  margin: 3px;
  float: right;
  border-radius: 50%;
  background-color: #01875a;
  color: #fff;
  width: 30px;
  text-align: center;
`;

const Edit = styled.i`
  float: right;
  padding: 0 3px;
  cursor: pointer;
`;
const Remove = styled.i`
  padding: 0 3px;
  float: right;
  color: red;
  cursor: pointer;
`;


export default class Column extends React.Component {
  render() {
    const { openAddIssueModal, column, sprintActived } = this.props
    // console.log(sprintActived)
    return (
      <Container>
        <div className="box box-success" >
          <Title>
            <span>{this.props.column.title}</span>
            <ActionIcon>
                <Remove className="fa fa-times"></Remove>
                <Edit className="fa fa-edit"></Edit>
            </ActionIcon>
            {column && column.active && 
            <IssueCount>
              <DoneCount>{column.count.done || ' 0 '}</DoneCount>
              <InProgressCount>{column.count.inProgress || ' 0 '}</InProgressCount>
              <ToDoCount>{column.count.toDo || ' 0 '}</ToDoCount>
            </IssueCount>
            }
             { !column.active && column.name && <ButtonGroup><ButtonStart disabled = {sprintActived}>Start</ButtonStart></ButtonGroup>}
          </Title>
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