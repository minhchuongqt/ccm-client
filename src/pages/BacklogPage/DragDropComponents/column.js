import React from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Task from './task'
import IconSelect from '../../../components/iconSelect'
import _ from 'lodash'
const Container = styled.div`
  background-color: white;
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  flex-direction: column;
`
const TitleRow = styled.div`
  padding: 5px 0;
`

const Title = styled.span`
  padding: 8px;
  font-size: 22px;
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
const InputSummary = styled.input`
  margin-left: 5px;
  border: unset;
  width: 100%;
  height: 34px;
`;

const Save = styled.span`
  float: right;
  color: blue;
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    blackground: #ddd;
  }
`;
const Cancel = styled.span`
  float: right;
  cursor: pointer;
  color: #777777;
  &:hover {
    blackground: #ddd;
  }
`;

const OpenPopup = styled.span`
  float: right;
  cursor: pointer;
  color: #777777;
  &:hover {
    blackground: #ddd;
  }
`;

const TypeIssue = styled.div`
  width: 60px;
  .select__dropdown-indicator {
    padding: unset;
  }
  .select__menu {
    width: 200px
  }
`


export default class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowInput: false,
      issueType: {},
    }
  }

  componentWillReceiveProps(newProps) {
    const {selectableIssueType} = newProps;
    const {issueType} = this.state
    if(_.isEmpty(issueType)) {
      this.setState({issueType: (selectableIssueType || []).find(item => item.label == 'Story' && item)})
    }
  }
  
  showInput = () => {
    this.setState({isShowInput: true})
  }

  createIssue = (summary, issueType, column, storyType) => {
    this.props.createIssue(summary, issueType, column)
    this.setState({summary: '', issueType: storyType})
  }

  render() {
    const { openAddIssueModal, column, sprintActived, disableAction, openStartSprintModal, selectableIssueType, createIssue, tasks } = this.props
    const {isShowInput, summary, issueType} = this.state
    const storyType =  (selectableIssueType || []).find(item => item.label == 'Story' && item)
    // console.log(issueType)
    // _.isEmpty(issueType) && this.setState({issueType: storyType})
    // console.log(selectableIssueType)
    return (
      <Container>
        <div className="box box-success" >
          <TitleRow>
            <Title>{this.props.column.title}</Title>
            <span className="com">{column.taskIds.length} issues</span>
            {!disableAction && <ActionIcon>
                <Remove className="fa fa-times"></Remove>
                <Edit className="fa fa-edit"></Edit>
            </ActionIcon>}
            {column && column.active && 
            <IssueCount>
              <DoneCount>{column.count.done || ' 0 '}</DoneCount>
              <InProgressCount>{column.count.inProgress || ' 0 '}</InProgressCount>
              <ToDoCount>{column.count.toDo || ' 0 '}</ToDoCount>
            </IssueCount>
            }
             { !column.active && column.name && 
              <ButtonGroup>
                <ButtonStart disabled = {sprintActived || tasks.length <= 0} onClick={() => openStartSprintModal(column._id)}>
                  Start
                  </ButtonStart>
                </ButtonGroup>
            }
          </TitleRow>
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
              {isShowInput &&
                <div>
                  <div style={{display: "flex"}}>
                    <TypeIssue>
                      <IconSelect
                        value={issueType}
                        options={selectableIssueType}
                        onChange={e => this.setState({issueType: e})}
                      />
                    </TypeIssue>
                    <InputSummary placeholder="What needs to be done?"
                      value={summary || ''}
                      onKeyDown={e => { e.key == 'Enter' && this.createIssue(summary, issueType.value, column._id, storyType) }}
                      onChange={e => {console.log(e.target.value); this.setState({summary: e.target.value})}}
                    />

                  </div>
                  <div>
                    <OpenPopup onClick={() => {openAddIssueModal(column._id); this.setState({isShowInput: false})}}>Open Modal</OpenPopup>
                    <Save onClick={() => {createIssue(summary, issueType.value, column._id); this.setState({summary: '', issueType: storyType})}}>Save</Save>
                    <Cancel onClick={() => this.setState({isShowInput: false, summary: '', issueType: storyType})}>Cancel</Cancel>
                  </div>
                </div>
              }
              {!isShowInput && 
                <button className="btn btn-default" onClick={() => this.showInput()}>
                <i className="fa fa-plus" style={{ fontSize: '11px' }}></i> &nbsp;Create issue
                </button>
              }
            </div>
        </div>
      </Container>
    )
  }
}