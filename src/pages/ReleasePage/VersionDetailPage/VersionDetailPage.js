import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";



const VersionDetailPage = props => {
  const { selectedVersion } = props;
  return (
    <div id="version-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Version Detail</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {selectedVersion && 
      <div className="box">
        <div className="box-header">
        <span class="active breadcrumb-item sprint-name" aria-current="page">{selectedVersion.name}</span>&nbsp;&nbsp;
        <span
                        className= "label label-primary"
                      >
                        {selectedVersion.status}
        </span>
        <div className="group-btn" style={{ float: "right" }}>
            <button
              type="submit"
              className="btn btn-primary"
              
            >
              Release
            </button>
          </div>
       
        </div>
        <div className="box-body">
        <div className="progress sm">
                        <div
                          className="progress-bar progress-bar-green"
                          style={{ width: "30%" }}
                        />
                        <div
                          className="progress-bar progress-bar-yellow"
                          style={{ width: "40%" }}
                        />
                        <div
                          className="progress-bar progress-bar-blue"
                          style={{ width: "30%" }}
                        />
          </div>
          <table id="example1" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Type</th>
                <th>Key</th>
                <th>Summary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                  <tr  className="cursor-pointer">
                  
                  </tr>
            </tbody>
          </table>
        </div>
      </div>
      }
    </div>
  );
};

export default VersionDetailPage;
