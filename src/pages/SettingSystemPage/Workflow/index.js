import React, { Component } from 'react';
import WorkflowView from "./workflow.js";
class WorkflowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  
  render() {
    // console.log(this.state)
    return (
      <div>
        <WorkflowView onChangeValue={(key, value) => this.setState({[key]: value}) }/>
      </div>
    );
  }
}

export default WorkflowContainer;