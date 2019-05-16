import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Chart from '../../components/chart';

const ReportPage = props => {
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Report</BreadcrumbItem>
        </Breadcrumb>
     
      </div>
      <div>
        <Chart />
      </div>

    </div >
  )
};

export default ReportPage;
