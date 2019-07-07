import React, { Component } from 'react';
import ComponentView from './Component';
import {connect} from 'react-redux'
import { toast } from 'react-toastify' 

import CreateComponentModal from './CreateComponentModal'
import EditComponentModal from './EditComponentModal'

import * as actions from '../../actions/component'
import * as userActions from '../../actions/user'

//selector data
import * as selectors from '../../selectors/component'
import * as userSelectors from "../../selectors/user";
import * as projectSelectors from "../../selectors/project";

class ComponentPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenAddModal: false,
            isOpenEditModal: false,
            editComponentFormValue: {}
        }
    }
    
    componentWillMount() {
        this.getListUser()
        this.getListComponent()
    }

    componentWillReceiveProps(newProps) {
        const {createComponentStatus, updateComponentStatus} = newProps
        if(createComponentStatus) {
            toast.success('Create new component success')
            this.setState({isOpenAddModal: false})
            newProps.resetCreateComponentStatus()
            this.getListComponent()
        }
        if(updateComponentStatus) {
            toast.success('Update component success')
            this.setState({isOpenEditModal: false})
            newProps.resetUpdateComponentStatus()
            this.getListComponent()
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

      getListUser = () => {
        const params = {
          query: JSON.stringify({
            project: this.props.selectedProject._id,
          }),
          sort: JSON.stringify({
            displayName: -1,
          })
        };
        this.props.getListUser(params);
      }
    getListComponent  = () => {
        this.props.getListComponent(this.getBaseOption())
    }

    openCreateComponentModal = (t) => {
        // console.log(t)
        this.setState({isOpenAddModal: true})
    }

    closeCreateComponentModal = () => {
        this.setState({isOpenAddModal: false})
    }

    onChangeAddComponentForm = (key, value) => {
        this.props.changeAddComponentFormValue(key, value)
    }

    createComponent = () => {
        const {addComponentFormValue, selectedProject} = this.props
        this.props.createComponent({...addComponentFormValue, project: selectedProject._id})
    }
    selectComponent = (data) => {
        this.props.selectComponent(data)
    }

    openEditComponentModal = (data) => {
        this.setState({isOpenEditModal: true, editComponentFormValue: data})
    }

    closeEditComponentModal = () => {
        this.setState({isOpenEditModal: false, editComponentFormValue: {}})
    }

    onChangeEditComponentForm = (key, value) => {
        const {editComponentFormValue} = this.state
        editComponentFormValue[key] = value
        this.setState({editComponentFormValue})
    }

    updateComponent = () => {
        const {selectedProject} = this.props
        const {editComponentFormValue} = this.state
        const {name, description, lead} = editComponentFormValue
        let data = {
          name,
          description,
          lead: (lead || {}).value || null
        }
        this.props.updateComponent(editComponentFormValue._id, {...data, project: selectedProject._id})
    }

    render() {
        const {isOpenAddModal, isOpenEditModal, editComponentFormValue} = this.state
        const {addComponentFormValue, listComponent, searchValue, changeSearchValue, selectableLead} = this.props
        return (
            <div>
                <ComponentView 
                    openCreateComponentModal = {this.openCreateComponentModal}
                    listComponent={listComponent}
                    searchValue={searchValue}
                    selectComponent={(data) => this.selectComponent(data)}
                    onChangeSearchValue={(value) => changeSearchValue(value)}
                    openEditComponentModal={(data) =>this.openEditComponentModal(data)}
                    deleteComponent={(data) => this.deleteComponent(data)}
                />
                <CreateComponentModal 
                    openModal={isOpenAddModal}
                    closeModal={this.closeCreateComponentModal}
                    selectableLead={selectableLead}
                    onChangeValue={(key, value) => this.onChangeAddComponentForm(key, value)}
                    addComponentFormValue={addComponentFormValue}
                    createComponent={() => this.createComponent()}
                />
                <EditComponentModal 
                    openModal={isOpenEditModal}
                    closeModal={this.closeEditComponentModal}
                    selectableLead={selectableLead}
                    onChangeValue={(key, value) => this.onChangeEditComponentForm(key, value)}
                    editComponentFormValue={editComponentFormValue}
                    updateComponent={() => this.updateComponent()}
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    listComponent: selectors.getListComponent(state),
    createComponentStatus: selectors.getCreateComponentStatus(state),
    selectedProject: projectSelectors.getSelectedProject(state),
    addComponentFormValue: selectors.getAddComponentFormValue(state),
    searchValue: selectors.getSearchValue(state),
    selectableLead: userSelectors.getUserSelectable(state),
    updateComponentStatus: selectors.getUpdateComponentStatus(state)
})

const mapDispatchToProps = dispatch => ({
    getListComponent(query) {
        dispatch(actions.getListComponent(query))
    },
    createComponent(data) {
        dispatch(actions.createComponent(data))
    },
    changeAddComponentFormValue(key, value) {
        dispatch(actions.changeAddComponentFormValue(key, value))
    },
    resetCreateComponentStatus() {
        dispatch(actions.resetCreateComponentStatus())
    },
    changeSearchValue(value) {
        dispatch(actions.changeSearchValue(value))
    },
    selectComponent(data) {
        dispatch(actions.selectComponent(data))
    },
    getListUser(query) {
      dispatch(userActions.getListUser(query))
    },
    updateComponent(id, data) {
        dispatch(actions.updateComponent(id, data))
    },
    resetUpdateComponentStatus() {
        dispatch(actions.resetUpdateComponentStatus())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ComponentPageContainer);
