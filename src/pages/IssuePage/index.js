import React, { Component } from 'react';
import IssuePageView from './IssuePage';
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as selectors from '../../selectors/issue'
import AddIssueModal from './AddIssueModal';
import toast from 'react-toastify'
import SearchSelect from "../../components/singleSelect";
class IssuePageContainer extends Component {
    componentWillMount() {
        this.props.getIssueList()
    }
      
    constructor(props) {
        super(props);
        this.state = {
            addForm: {
                project: '',
                summary: '',
                issueKey: '',
                sprint: '',
                description: '',
            },
            isOpenAddIssueModal: false,
        }
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
                completed: false,
            }),
        }
        return params
    }

    getListIssue = () => {
        const query = {
            ...this.getBaseOption(),
        }
        this.props.getListIssue(query)
    }

    openAddIssueModal = () => {
        this.setState({isOpenAddIssueModal: true})
    }
    closeModal = () => {
        this.setState({
            addForm: {
                summary: '',
                issueKey: '',
                sprint: '',
                description: '',
            }})
        this.setState({isOpenAddIssueModal: false})
    }
    createIssue = () => {
        const {addForm} = this.state
        const data = {
            ...addForm
        }
        if (this.validate(data)){
            // toast.success("OK")
            this.props.createIssue(data)
            console.log(data)
        }
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
        const addForm = this.state.addForm
        addForm[name] = value
        this.setState({addForm})    
    }
    render() {
        const { listIssue } = this.props
        const {isOpenAddIssueModal, addForm} = this.state
        return (
            <div>
                <IssuePageView 
                 listIssue={listIssue}
                 openAddIssueModal={this.openAddIssueModal}
                />
                <AddIssueModal
                    data = {addForm}
                    openModal={isOpenAddIssueModal}
                    closeModal={this.closeModal}
                    createIssue={this.createIssue}
                    validate={(data)=>this.validate(data)}
                    onChangeValue={(name, value) => this.onChangeValue(name, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    issue : state.IssueState,
    listIssue: selectors.listIssue(state),
    createIssueStatus: selectors.createIssueStatus(state)
})

const mapDispatchToProps = dispatch => ({
    getIssueList() {
        dispatch(actions.getIssueList())
    },
    createIssue(addForm) {
        dispatch(actions.createIssue(addForm))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((IssuePageContainer));