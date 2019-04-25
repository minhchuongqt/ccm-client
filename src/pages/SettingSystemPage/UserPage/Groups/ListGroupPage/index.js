import React, { Component } from 'react';
import ListGroupPageView from './ListGroupPage';
import { connect } from 'react-redux'
import * as groupActions from '../../../../../actions/group'
class ListGroupPageContainer extends Component {
    componentWillMount(){
        this.props.getListGroup();
    }
    
   

    render() {
        return (
            <div>
                <ListGroupPageView />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    groupList: state.GroupState.groupList
})

const mapDispatchToProps = dispatch => ({
    getListGroup() {
        dispatch(groupActions.getListGroup())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ListGroupPageContainer));