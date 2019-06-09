import React, { Component } from 'react';
import ComponentView from './Component';
import {connect} from 'react-redux'
import { toast } from 'react-toastify' 

import CreateComponentModal from './CreateComponentModal'

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
            isOpenAddModal: false
        }
    }
    
    componentWillMount() {
        this.getListUser()
        this.getListComponent()
    }

    componentWillReceiveProps(newProps) {
        const {createComponentStatus} = newProps
        if(createComponentStatus) {
            toast.success('Create new component success')
            this.setState({isOpenAddModal: false})
            newProps.resetCreateComponentStatus()
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

    render() {
        const {isOpenAddModal} = this.state
        const {addComponentFormValue, listComponent, searchValue, changeSearchValue, selectableLead} = this.props
        return (
            <div>
                <ComponentView 
                    openCreateComponentModal = {this.openCreateComponentModal}
                    listComponent={listComponent}
                    searchValue={searchValue}
                    selectComponent={(data) => this.selectComponent(data)}
                    onChangeSearchValue={(value) => changeSearchValue(value)}
                />
                <CreateComponentModal 
                    openModal={isOpenAddModal}
                    closeModal={this.closeCreateComponentModal}
                    selectableLead={selectableLead}
                    onChangeValue={(key, value) => this.onChangeAddComponentForm(key, value)}
                    addComponentFormValue={addComponentFormValue}
                    createComponent={() => this.createComponent()}
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ComponentPageContainer);
