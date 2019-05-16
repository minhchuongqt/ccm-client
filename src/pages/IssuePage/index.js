import React, { Component } from 'react';
import IssuePageView from './IssuePage';
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as issueActions from '../../actions/backlog'
import * as selectors from '../../selectors/issue'
import * as sprintSelectors from '../../selectors/backlog'
import * as projectSelectors from '../../selectors/project'
import AddIssueModal from './AddIssueModal';
import TestDialog from '../../components/modal';
import toast from 'react-toastify'
class IssuePageContainer extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
            addForm: {
                project: this.props.selectedProject._id,
                summary: '',
                issueType: '',
                sprint: null,
                description: '',
            },
            isOpenAddIssueModal: false,
        }
    }

    componentWillMount() {
        this.getListIssue()
    }

    componentWillReceiveProps(newProps) {
        const {createIssueStatus} = newProps
        if(createIssueStatus) {
            toast.success('Create issue successfully')
            this.setState({isOpenAddIssueModal: false})
            this.props.getListIssue()
        }
        
    }
    
    getBaseOption = () => {
        const  params = {
            query: JSON.stringify({
                project: this.props.selectedProject._id,
            }),
        }
        return params
    }

    getListIssue = () => {
        const query = {
            ...this.getBaseOption(),
        }
        this.props.getIssueList(query)
    }

    getListSprint = () => {
        const  params = {
            query: JSON.stringify({
                project: this.props.selectedProject._id,
                completed: false,
                
            }),
            sort: JSON.stringify({
                sequenceInSprint: -1,
                createdAt: -1
            })
        }
        this.props.getListSprint(params)
    }

    openAddIssueModal = () => {
        const query = {
            ...this.getBaseOption(),
        }
        this.props.getIssueType(query)
        this.getListSprint()
        this.setState({isOpenAddIssueModal: true})
    }
    closeModal = () => {
        // this.setState({
        //     addForm: {
        //         project: '',
        //         summary: '',
                // issueType: '',
        //         sprint: null,
        //         description: '',
        //     }})
        this.props.resetAddIssueFormValue()
        this.setState({isOpenAddIssueModal: false})
    }
    createIssue = () => {
        const {addForm} = this.state
         this.setState({
            addForm: {
                summary: this.props.addIssueFormValue.summary,
                issueType: this.props.addIssueFormValue.issueType.value,
                sprint: this.props.addIssueFormValue.sprint.value,
                description:  this.props.addIssueFormValue.description
            }})
        const data = {
            ...addForm
        }
        // if (this.validate(data)){
            // toast.success("OK")
            // this.props.createIssue(data)
            console.log(data)
            console.log(this.props.addIssueFormValue)
        // }
    }
    validate = (data) => {
        if (!data.name) {
            toast.error("Please enter issue name");
            return false;
        }
        if (data.name.length < 2) {
            toast.error("The issue name is too short");
            return false;
        }
        return true;
    }
    chooseActive = (active) => {
        if (active === true) {
          return "btn-success";
        }
        return "btn-danger";
    }
    onChangeValue = (name, value) => {
        this.props.changeAddIssueFormValue(name, value)
    }

    showAddIssueModal = () => {
        return <TestDialog />
    }

    render() {
        const { listIssue, issueTypeSelectable, addIssueFormValue, sprintTypeSelectable  } = this.props
        const {isOpenAddIssueModal, addForm} = this.state
        return (
            <div>
                <IssuePageView 
                 listIssue={listIssue}
                 openAddIssueModal={this.openAddIssueModal}
                />
                {/* <AddIssueModal isOpen={isOpenAddIssueModal} />
                {isOpenAddIssueModal && this.showAddIssueModal()} */}

                <AddIssueModal
                    data = {addForm}
                    openModal={isOpenAddIssueModal}
                    closeModal={this.closeModal}
                    createIssue={this.createIssue}
                    validate={(data)=>this.validate(data)}
                    getListSprint={()=>this.getListSprint()}
                    issueTypeSelectable={issueTypeSelectable}
                    addIssueFormValue={addIssueFormValue}
                    sprintTypeSelectable={sprintTypeSelectable}
                    onChangeValue={(name, value) => this.onChangeValue(name, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sprint : state.SprintState,
    sprintTypeSelectable: sprintSelectors.getSprintTypeSelectable(state),
    issue : state.IssueState,
    listIssue: selectors.getListIssue(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    createIssueStatus: selectors.getCreateIssueStatus(state),
    issueTypeSelectable: selectors.getIssueTypeSelectable(state),
    addIssueFormValue: selectors.getAddIssueFormValue(state)
})

const mapDispatchToProps = dispatch => ({
    getIssueList(query) {
        dispatch(actions.getIssueList(query))
    },
    createIssue(addForm) {
        dispatch(actions.createIssue(addForm))
    },
    getIssueType(query) {
        dispatch(actions.getIssueType(query))
    },
    changeAddIssueFormValue(key, value) {
        dispatch(actions.changeAddIssueFormValue(key, value))
    },
    resetAddIssueFormValue() {
        dispatch(actions.resetAddIssueFormValue())
    },
    getListSprint(query) {
        dispatch(issueActions.getListSprint(query))
    },
})

export default connect(mapStateToProps, mapDispatchToProps) ((IssuePageContainer));