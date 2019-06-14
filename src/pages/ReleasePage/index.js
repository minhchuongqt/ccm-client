import React, { Component } from 'react';
import ReleasePageView from './ReleasePage';
import {connect} from 'react-redux'
import { toast } from 'react-toastify' 

import CreateVersionModal from './CreateVersionModal'
import EditVersionModal from './EditVersionModal'
import ConfirmDeleteVersionModal from './ConfirmDeleteVersionModal'

import * as actions from '../../actions/release'

//selector data
import * as selectors from '../../selectors/release'
import * as projectSelectors from "../../selectors/project";

class ReleasePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenAddModal: false,
            isOpenEditModal: false,
            isOpenConfirmDeleteModal: false,
            addVersionFormValue: {
                startDate: new Date(),
                releaseDate: new Date(),
            },
            editVersionFormValue: {

            },
            versionBeDeleted: {}
        }
    }
    
    componentWillMount() {
        this.getListVersion()
    }

    componentWillReceiveProps(newProps) {
        const {createVersionStatus, releaseStatus, unreleaseStatus, updateVersionStatus, deleteVersionStatus} = newProps
        if(createVersionStatus) {
            toast.success('Create new version successful')
            this.setState({isOpenAddModal: false})
            newProps.resetCreateVersionStatus()
            this.getListVersion()
        }

        if(updateVersionStatus) {
            toast.success('Update version successfull')
            this.setState({isOpenEditModal: false})
            newProps.resetCreateVersionStatus()
            this.getListVersion()
        }
        
        if(deleteVersionStatus) {
            toast.success('Delele version successful')
            this.setState({isOpenConfirmDeleteModal: false})
            newProps.resetCreateVersionStatus()
            this.getListVersion()
        }

        if(releaseStatus) {
            toast.success("Release success.")
            newProps.resetReleaseStatus()
            this.getListVersion()
        }
        if(unreleaseStatus) {
            toast.success("Unrelease successful.")
            newProps.resetReleaseStatus()
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
        const {addVersionFormValue} = {...this.state}
        addVersionFormValue[key] = value
        this.setState({addVersionFormValue})
    }

    createVersion = () => {
        const {addVersionFormValue} = this.state
        const {selectedProject} = this.props
        this.props.createVersion({...addVersionFormValue, status: 'UNRELEASED', project: selectedProject._id})
    }
    selectVersion = (version) => {
        this.props.selectVersion(version)
        this.props.getVersionDetail(version._id)
    }

    editVersion = (item) => {
        const {editVersionFormValue} = {...this.state}
        editVersionFormValue.id = item._id
        editVersionFormValue.name = item.name
        editVersionFormValue.startDate = new Date(item.startDate)
        editVersionFormValue.releaseDate = new Date(item.releaseDate)
        editVersionFormValue.description = item.description
        this.setState({isOpenEditModal: true, editVersionFormValue})
    }

    closeEditVersionModal = () => {
        this.setState({isOpenEditModal: false, editVersionFormValue: {}})
    }

    onChangeEditVersionForm = (key, value) => {
        const {editVersionFormValue} = {...this.state}
        editVersionFormValue[key] = value
        this.setState({editVersionFormValue})
    }

    updateVersion = () => {
        const {editVersionFormValue} = {...this.state}
        this.props.updateVersion(editVersionFormValue.id, editVersionFormValue)
    }

    openConfirmDeleteVersionModal = (item) => {
        const {versionSelectable} = this.props
        const selectableVersion = versionSelectable.filter(version => version.value != item._id)
        console.log(selectableVersion)
        item.nextVersion = selectableVersion[0] || {}
        item.isMoveIssueToNextVersion = true
        this.setState({isOpenConfirmDeleteModal: true, versionBeDeleted: item})
    }

    closeConfirmDeleteVersionModal = () => {
        this.setState({isOpenConfirmDeleteModal: false})
    }

    changeConfirmDeleleVersionFormValue = (key, value) => {
        const {versionBeDeleted} = {...this.state}
        versionBeDeleted[key] = value
        this.setState({versionBeDeleted})
    }

    deleteVersion = (version) => {
        const data = {
            nextVersion: version.isMoveIssueToNextVersion && version.nextVersion.value || null,
        }
        this.props.deleteVersion(version._id, data)
    }

    render() {
        const {isOpenAddModal, isOpenEditModal, editVersionFormValue, addVersionFormValue, isOpenConfirmDeleteModal, versionBeDeleted} = this.state
        const {listVersion, searchValue, changeSearchValue, versionSelectable} = this.props
        const selectableVersion = versionSelectable.filter(item => item.value != versionBeDeleted._id)
        return (
            <div>
                <ReleasePageView 
                    openCreateVersionModal = {this.openCreateVersionModal}
                    listVersion={listVersion}
                    searchValue={searchValue}
                    selectVersion={(version) => this.selectVersion(version)}
                    onChangeSearchValue={(value) => changeSearchValue(value)}
                    releaseVersion={id => this.props.releaseVersion(id)}
                    unreleaseVersion={id => this.props.unreleaseVersion(id)}
                    editVersion={item => this.editVersion(item)}
                    deleteVersion={item => this.openConfirmDeleteVersionModal(item)}
                />
                <CreateVersionModal 
                    openModal={isOpenAddModal}
                    closeModal={this.closeCreateVersionModal}
                    onChangeValue={(key, value) => this.onChangeAddVersionForm(key, value)}
                    addVersionFormValue={addVersionFormValue}
                    createVersion={() => this.createVersion()}
                />
                <EditVersionModal 
                    openModal={isOpenEditModal}
                    closeModal={this.closeEditVersionModal}
                    onChangeValue={(key, value) => this.onChangeEditVersionForm(key, value)}
                    editVersionFormValue={editVersionFormValue}
                    save={() => this.updateVersion()}
                />
                <ConfirmDeleteVersionModal
                    version={versionBeDeleted} 
                    versionSelectable={selectableVersion}
                    openModal={isOpenConfirmDeleteModal}
                    closeModal={this.closeConfirmDeleteVersionModal}
                    submit={(version) => this.deleteVersion(version)}
                    changeConfirmDeleleVersionFormValue={(key, value) => this.changeConfirmDeleleVersionFormValue(key, value)}
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
    searchValue: selectors.getSearchValue(state),
    releaseStatus: selectors.getReleaseStatus(state),
    unreleaseStatus: selectors.getUnreleaseStatus(state),
    updateVersionStatus: selectors.getUpdateVersionStatus(state),
    versionSelectable: selectors.getVersionSelectable(state),
    deleteVersionStatus: selectors.getDeleteVersionStatus(state)
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
    },
    getVersionDetail(version) {
        dispatch(actions.getVersionDetail(version))
    },
    releaseVersion(id) {
        dispatch(actions.releaseVersion(id))
    },
    unreleaseVersion(id) {
        dispatch(actions.unreleaseVersion(id))
    },
    resetReleaseStatus() {
        dispatch(actions.resetReleaseStatus())
    },
    updateVersion(id, data) {
        dispatch(actions.updateVersion(id, data))
    },
    deleteVersion(id, data) {
        dispatch(actions.deleteVersion(id, data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ReleasePageContainer);
