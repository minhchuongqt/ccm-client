import React, { Component } from 'react';
import IssuePageView from './IssuePage';
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as issueActions from '../../actions/backlog'
import * as selectors from '../../selectors/issue'
import * as sprintSelectors from '../../selectors/backlog'
import * as projectSelectors from '../../selectors/project'
import AddIssueModal from '../../components/addIssueModal';
import TestDialog from '../../components/modal';
import toast from 'react-toastify'

class IssuePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addForm: {
                project: this.props.selectedProject._id,
                summary: '',
                // issueKey: 'DEL-3',
                issueType: '',
                sprint: null,
                description: '',
            },
            isOpenAddIssueModal: false,
        }
    }

    componentWillMount() {
        this.getListIssue()
        // this.getIssueInfo()
    }

    componentWillReceiveProps(newProps) {
        const { createIssueStatus } = newProps
        if (createIssueStatus) {
            toast.success('Create issue successfully')
            this.setState({ isOpenAddIssueModal: false })
            this.props.getListIssue()
        }

    }

    getBaseOption = () => {
        const params = {
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

    getIssueInfo = (issue) => {
        const id = issue._id
        const params = {
            ...this.getBaseOption(),
        }
        this.props.getIssueInfo(id, params)
    }
    getListSprint = () => {
        const params = {
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
        this.setState({ isOpenAddIssueModal: true })
    }
    
    closeIssueDetail = () => {
        document.getElementById('issue-detail-collapse').className += "A hide-detail"
        // document.getElementById('open-issues').className += " hide-detail "
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
        this.setState({ isOpenAddIssueModal: false })
    }
    
    chooseActive = (active) => {
        if (active === true) {
            return "btn-success";
        }
        return "btn-danger";
    }

    selectIssue = (issue) => {
        this.props.selectIssue(issue)
        this.getIssueInfo(issue)
        if(document.getElementById('issue-detail-collapse')) {
            document.getElementById('issue-detail-collapse').className += "A detail-visibility"
        }
        
        // document.getElementById('issue-detail-collapse').classList.remove(" hide-detail ")
    }

    showAddIssueModal = () => {
        return <TestDialog />
    }

    render() {
        const { listIssue, issueTypeSelectable, addIssueFormValue, sprintTypeSelectable, addIssueValue, issueInfo, selectedIssue } = this.props
        const { isOpenAddIssueModal, addForm } = this.state
        return (
            <div>
                <IssuePageView
                    listIssue={listIssue}
                    issueInfo={issueInfo}
                    selectedIssue={selectedIssue}
                    openAddIssueModal={this.openAddIssueModal}
                    closeIssueDetail={this.closeIssueDetail}
                    selectIssue={(issue) => this.selectIssue(issue)}
                />
                {/* <AddIssueModal isOpen={isOpenAddIssueModal} />
                {isOpenAddIssueModal && this.showAddIssueModal()} */}

                <AddIssueModal
                    isOpenAddIssueModal={isOpenAddIssueModal}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sprint: state.SprintState,
    sprintTypeSelectable: sprintSelectors.getSprintTypeSelectable(state),
    issue: state.IssueState,
    listIssue: selectors.getListIssue(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    selectedIssue: selectors.getSelectedIssue(state),
    createIssueStatus: selectors.getCreateIssueStatus(state),
    issueTypeSelectable: selectors.getIssueTypeSelectable(state),
    addIssueFormValue: selectors.getAddIssueFormValue(state),
    addIssueValue: selectors.generateDataForAddIssue(state),
    issueInfo: selectors.getIssueInfo(state)
})

const mapDispatchToProps = dispatch => ({
    getIssueList(query) {
        dispatch(actions.getIssueList(query))
    },
    getIssueInfo(id, query) {
        dispatch(actions.getIssueInfo(id, query))
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
    selectIssue(issue) {
        dispatch(actions.selectIssue(issue))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((IssuePageContainer));