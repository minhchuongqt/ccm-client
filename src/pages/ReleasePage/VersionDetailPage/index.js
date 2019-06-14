import React, { Component } from 'react';
import VersionDetailPageView from './VersionDetailPage';
import {connect} from 'react-redux'
import { toast } from 'react-toastify'
import {withRouter} from 'react-router-dom'
import _ from 'lodash'

import * as actions from '../../../actions/release';
import * as issueActions from '../../../actions/issue';

//selector data
import * as selectors from '../../../selectors/release';
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
        }
    }

    getVersionDetail = id => {
        this.props.getVersionDetail(id)
    }

    componentWillReceiveProps(newProps) {
        const {releaseStatus, unreleaseStatus, selectedVersion} = newProps
        console.log(releaseStatus)
        console.log(unreleaseStatus)
        if(releaseStatus) {
            toast.success("Release successful.")
            newProps.resetReleaseStatus()
            this.props.getVersionDetail(selectedVersion._id)
        }
        if(unreleaseStatus) {
            toast.success("Unrelease successful.")
            newProps.resetReleaseStatus()
            this.props.getVersionDetail(selectedVersion._id)
        }
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

    selectIssue = async (id) => {
        await this.props.selectIssue(id)
        this.props.history.push('/issue')
    }

    render() {
        const {listIssueOfVersion, issueCount, versionDetail} = this.props
        console.log(listIssueOfVersion)
        return (
            <div>
                <VersionDetailPageView 
                    selectIssue={(id) => this.selectIssue(id)}
                    selectedVersion = {versionDetail}
                    listIssueOfVersion={listIssueOfVersion}
                    issueCount={issueCount}
                    releaseVersion={id => this.props.releaseVersion(id)}
                    unreleaseVersion={id => this.props.unreleaseVersion(id)}
                />
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedVersion: selectors.getSelectedVersion(state),
    listIssueOfVersion: selectors.getListIssueOfVersion(state),
    issueCount: selectors.getIssueCount(state),
    releaseStatus: selectors.getReleaseStatus(state),
    unreleaseStatus: selectors.getUnreleaseStatus(state),
    versionDetail: selectors.getVersionDetail(state)
})

const mapDispatchToProps = dispatch => ({
    getVersionDetail(id) {
        dispatch(actions.getVersionDetail(id))
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
    selectIssue(id) {
        dispatch(issueActions.getIssueInfo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(VersionDetailPageContainer));
