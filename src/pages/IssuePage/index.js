import React, { Component } from 'react';
import IssuePageView from './IssuePage';
import { connect } from 'react-redux'
import * as actions from '../../actions/issue'
import * as selectors from '../../selectors/issue'
class IssuePageContainer extends Component {
    componentWillMount() {
        this.props.getIssueList()
    }

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    header: 'Project', poiter: 'name'
                },
                {
                    header: 'Key', poiter: 'key'
                },
                {
                    header: 'Project Type', poiter: 'projectType'
                },
                {
                    header: 'Project Lead', poiter: 'projectLead'
                },
                {
                    header: 'Create Date', poiter: 'createdDate'
                },
                {
                    header: 'Update Date', poiter: 'updatedDate'
                }
            ],

        }
    }

    render() {
        const { listIssue } = this.props
        console.log(listIssue)
        return (
            <div>
                <IssuePageView/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listIssue: selectors.listIssue(state)
})

const mapDispatchToProps = dispatch => ({
    getIssueList() {
        dispatch(actions.getIssueList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)((IssuePageContainer));