import React, { Component } from 'react';
import Chart from "../../components/chart/projectChart";
import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  padding: 10px 0;
`

const SprintInfo = styled.div`
  padding: 10px 0;
`
class ProjectReport extends Component {
  render() {
    return (
      <div>
        <Title className="pd">Project Name</Title>
        {/* <SprintInfo>Active Sprint 16/thg 5/19 3:54 CH - 23/thg 5/19 7:03 CH</SprintInfo> */}
        <Chart />
      </div>
    );
  }
}

export default ProjectReport;