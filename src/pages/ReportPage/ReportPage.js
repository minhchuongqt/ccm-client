import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import SprintReport from "./SprintReport";
import ProjectReport from "./ProjectReport";

const ReportPage = props => {
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Report</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <div>
          <div className="nav-tabs-custom">
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#tab_1" data-toggle="tab">
                  Sprint Report
                </a>
              </li>
              <li>
                <a href="#tab_2" data-toggle="tab">
                  Project Report
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tab_1">
                <SprintReport />
              </div>
              <div className="tab-pane" id="tab_2">
                <ProjectReport />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
