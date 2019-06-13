import React, { Component } from 'react';
import VersionDetailPageView from './VersionDetailPage';
import {connect} from 'react-redux'
import { toast } from 'react-toastify'
import {withRouter} from 'react-router-dom'
import _ from 'lodash'
import * as actions from '../../../actions/release';

//selector data
import * as selectors from '../../../selectors/release'
import * as projectSelectors from "../../../selectors/project";

class VersionDetailPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenAddModal: false
        }
    }
    
    componentWillMount() {
        const {selectedVersion} = this.props
        if(_.isEmpty(selectedVersion)) {
            this.props.history.push("/release")
        } else {
            this.getVersionDetail(selectedVersion._id)
        }
    }

    getVersionDetail = id => {
        this.props.getVersionDetail(id)
    }

    componentWillReceiveProps(newProps) {
        // const {selectedVersion} = newProps
        // if(_.isEmpty(selectedVersion)) {
        //     newProps.history.push("/release")
        // }
    }


    getBaseOption = () => {
        const params = {
          query: JSON.stringify({
            project: this.props.selectedProject._id
          })
        };
        return params;
      };

    



    render() {
        const {selectedVersion, listIssueOfVersion, issueCount} = this.props
        console.log(listIssueOfVersion)
        return (
            <div>
                <VersionDetailPageView 
                    selectedVersion = {selectedVersion}
                    listIssueOfVersion={listIssueOfVersion}
                    issueCount={issueCount}
                />
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedVersion: selectors.getSelectedVersion(state),
    listIssueOfVersion: selectors.getListIssueOfVersion(state),
    issueCount: selectors.getIssueCount(state)
})

const mapDispatchToProps = dispatch => ({
    getVersionDetail(id) {
        dispatch(actions.getVersionDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(VersionDetailPageContainer));
