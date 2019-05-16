import React, { Component } from 'react';
import ActiveSprintPageView from './ActiveSprintPage';
import { connect } from 'react-redux'
import * as actions from '../../actions/backlog'
import * as selectors from '../../selectors/backlog'
class ActiveSprintPageContainer extends Component {
    componentWillMount(){
        this.props.getListSprint()
    }
    render() {
        const {sprint} = this.props
        return (
            <div>
                <ActiveSprintPageView 
                   
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sprint : state.SprintState,
    listSprint: selectors.listSprint(state),
})

const mapDispatchToProps = dispatch => ({
    getListSprint() {
        dispatch(actions.getListSprint())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ActiveSprintPageContainer));