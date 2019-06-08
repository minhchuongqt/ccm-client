import React, { Component } from 'react';
import VersionDetailPageView from './VersionDetailPage';
import {connect} from 'react-redux'
import { toast } from 'react-toastify' 

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
        const {selectedVersion} = this.props
        console.log(selectedVersion)
        return (
            <div>
                <VersionDetailPageView 
                    selectedVersion = {selectedVersion}
                />
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedVersion: selectors.getSelectedVersion(state),
})

const mapDispatchToProps = dispatch => ({
   
})

export default connect(mapStateToProps, mapDispatchToProps) (VersionDetailPageContainer);
