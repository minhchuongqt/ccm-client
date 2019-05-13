import React, { Component } from 'react';
import BacklogPageView from './BacklogPage';
import AddSprintModal from './AddSprintModal';
import { toast } from 'react-toastify'
import * as actions from '../../actions/backlog'
import * as selectors from '../../selectors/backlog'
import * as projectSelectors from '../../selectors/project'
import { connect } from 'react-redux'
class BacklogPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addForm: {
                project: this.props.selectedProject._id,
                name: '',
                startDate: '',
                endDate: '',
                goal: '',
            },
            isOpenAddSprintModal: false,
        }
    }
    componentWillMount() {
        this.getListSprint()
        this.getListBacklogIssue()
    }
    componentWillReceiveProps(newProps) {
        const {createSprintStatus} = newProps
        if(createSprintStatus) {
            toast.success('Create sprint successfully')
            this.setState({isOpenAddSprintModal: false})
            this.getListSprint()
        }
        
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

    getListBacklogIssue = () => {
        const  params = {
            query: JSON.stringify({
                project: this.props.selectedProject._id,
                sprint: null
            }),
            sort: JSON.stringify({
                sequenceInBacklog: -1,
                createdAt: -1
            })
        }
        this.props.getListBacklogIssue(params)
    }

    openAddSprintModal = () => {
        this.setState({isOpenAddSprintModal: true})
    }
    closeModal = () => {
        this.setState({
            addForm: {
                name: '',
                startDate: '',
                endDate: '',
                goal: '',
                project: '',
            }})
        this.setState({isOpenAddSprintModal: false})
    }
    createSprint = () => {
        const {addForm} = this.state
        const data = {
            ...addForm
        }
        if (this.validate(data)){
            // toast.success("OK")
            this.props.createSprint(data)
            console.log(data)
        }
    }
    validate = (data) => {
        if (!data.name) {
            toast.error("Please enter sprint name");
            return false;
        }
        if (data.name.length < 2) {
            toast.error("The sprint name is too short");
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
        const {listSprint, listBacklogIssue} = this.props
        const {isOpenAddSprintModal, addForm} = this.state
        console.log(listBacklogIssue)
        return (
            <div>
                <BacklogPageView 
                   listSprint={listSprint}
                   listBacklogIssue={listBacklogIssue}
                   openAddSprintModal={this.openAddSprintModal}
                   chooseActive={(active)=>this.chooseActive(active)}
                />
                <AddSprintModal
                    data = {addForm}
                    openModal={isOpenAddSprintModal}
                    closeModal={this.closeModal}
                    createSprint={this.createSprint}
                    validate={(data)=>this.validate(data)}
                    onChangeValue={(name, value) => this.onChangeValue(name, value)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sprint : state.SprintState,
    listSprint: selectors.listSprint(state),
    listBacklogIssue: selectors.listBacklogIssue(state),
    createSprintStatus: selectors.createSprintStatus(state),
    selectedProject: projectSelectors.getSelectedProject(state),
})

const mapDispatchToProps = dispatch => ({
    getListBacklogIssue(query) {
        dispatch(actions.getListBacklogIssue(query))
    },
    getListSprint(query) {
        dispatch(actions.getListSprint(query))
    },
    createSprint(addForm) {
        dispatch(actions.createSprint(addForm))
    }
})
export default connect(mapStateToProps, mapDispatchToProps) ((BacklogPageContainer));