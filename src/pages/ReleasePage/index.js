import React, { Component } from 'react';
import ReleasePageView from './ReleasePage';
import {connect} from 'react-redux'
import { toast } from 'react-toastify' 

import CreateVertionModal from './CreateVersionModal'

import * as actions from '../../actions/release'

//selector data
import * as selectors from '../../selectors/release'
import * as projectSelectors from "../../selectors/project";

class ReleasePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenAddModal: false
        }
    }
    
    componentWillMount() {
        this.getListVersion()
    }

    componentWillReceiveProps(newProps) {
        const {createVersionStatus} = newProps
        if(createVersionStatus) {
            toast.success('Create new version success')
            this.setState({isOpenAddModal: false})
            newProps.resetCreateVersionStatus()
            this.getListVersion()
        }
    }

    getBaseOption = () => {
        const params = {
          query: JSON.stringify({
            project: this.props.selectedProject._id
          })
        };
        return params;
      };

    getListVersion  = () => {
        this.props.getListVersion(this.getBaseOption())
    }

    openCreateVersionModal = (t) => {
        // console.log(t)
        this.setState({isOpenAddModal: true})
    }

    closeCreateVersionModal = () => {
        this.setState({isOpenAddModal: false})
    }

    onChangeAddVersionForm = (key, value) => {
        this.props.changeAddVersionFormValue(key, value)
    }

    createVersion = () => {
        const {addVersionFormValue, selectedProject} = this.props
        this.props.createVersion({...addVersionFormValue, status: 'UNRELEASED', project: selectedProject._id})
    }
    selectVersion = (version) => {
        this.props.selectVersion(version)
    }

    render() {
        const {isOpenAddModal} = this.state
        const {addVersionFormValue, listVersion, searchValue, changeSearchValue} = this.props
        return (
            <div>
                <ReleasePageView 
                    openCreateVersionModal = {this.openCreateVersionModal}
                    listVersion={listVersion}
                    searchValue={searchValue}
                    selectVersion={(version) => this.selectVersion(version)}
                    onChangeSearchValue={(value) => changeSearchValue(value)}
                />
                <CreateVertionModal 
                    openModal={isOpenAddModal}
                    closeModal={this.closeCreateVersionModal}
                    onChangeValue={(key, value) => this.onChangeAddVersionForm(key, value)}
                    addVersionFormValue={addVersionFormValue}
                    createVersion={() => this.createVersion()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listVersion: selectors.getListVersion(state),
    createVersionStatus: selectors.getCreateVersionStatus(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    addVersionFormValue: selectors.getAddVersionFormValue(state),
    searchValue: selectors.getSearchValue(state)
})

const mapDispatchToProps = dispatch => ({
    getListVersion(query) {
        dispatch(actions.getListVersion(query))
    },
    createVersion(data) {
        dispatch(actions.createVersion(data))
    },
    changeAddVersionFormValue(key, value) {
        dispatch(actions.changeAddVersionFormValue(key, value))
    },
    resetCreateVersionStatus() {
        dispatch(actions.resetCreateVersionStatus())
    },
    changeSearchValue(value) {
        dispatch(actions.changeSearchValue(value))
    },
    selectVersion(version) {
        dispatch(actions.selectVersion(version))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ReleasePageContainer);
