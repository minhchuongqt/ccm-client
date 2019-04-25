import React, { Component } from 'react';
import SideBarComponent from './SideBar';
import {Router,Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as selectors from '../../selectors/project'
import _ from 'lodash'
class SideBar extends Component {

    componentWillMount() {
        const {selectedProject} = this.props
        if(_.isEmpty(selectedProject)) {
            this.props.history.push('/')
        } 
    }
    componentWillReceiveProps(newProps) {
        if(newProps.location.pathname === '/') {
            document.getElementById('main-body').className += " sidebar-collapse "
        } else {
            document.getElementById('main-body').className = ""
        }
    }

    render() {
        const {selectedProject} = this.props
        return (
            <div>
                    <SideBarComponent 
                        selectedProject={selectedProject}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: selectors.selectedProject(state),
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(SideBar));