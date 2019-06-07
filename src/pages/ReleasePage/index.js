import React, { Component } from 'react';
import ReleasePageView from './ReleasePage';
import { connect } from 'react-redux'
import * as versionActions from '../../actions/version'
import * as versionSelectors from '../../selectors/version';
import * as projectSelectors from "../../selectors/project";
class ReleasePageContainer extends Component {
    componentWillMount(){
        this.getListVersion()
    }
   
    getBaseOption = () => {
        const params = {
          query: JSON.stringify({
            project: this.props.selectedProject._id
          })
        };
        return params;
    };
    getListVersion = () => {
        const query = {
            ...this.getBaseOption()
        }
        this.props.getListVersion(query)
    }
    render() {
        const {listVersion} = this.props;
        return (
            <div>
                <ReleasePageView 
                   listVersion = {listVersion}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedProject: projectSelectors.getSelectedProject(state),
    listVersion: versionSelectors.getListVersion(state)
})

const mapDispatchToProps = dispatch => ({
    getListVersion(query) {
      dispatch(versionActions.getListVersion(query));
    }
})

export default connect(mapStateToProps, mapDispatchToProps) ((ReleasePageContainer));