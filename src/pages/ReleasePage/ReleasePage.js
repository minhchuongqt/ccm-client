import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const ReleasePage = props => {
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Release</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="box">
        <div className="box-header">
          <h3 className="box-title"></h3>
          <div className="input-group input-group-sm" style={{ width: '150px' }}>
            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search version" />

            <div className="input-group-btn">
              <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>
        <div className="box-body">
          <table id="example1" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Version</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Start date</th>
                <th>Release date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Version 3.0</td>
                <td><span className="label label-primary">UNRELEASED</span></td>
                <td>
                  <div className="progress sm">
                    <div className="progress-bar progress-bar-blue" style={{ width: '100%' }}></div>
                  </div>
                </td>
                <td>14/Mar/19</td>
                <td>21/Mar/19</td>
                <td></td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary"><i className="fa fa-cube" title="Release"></i></button>
                    <button type="button" className="btn btn-success"><i className="fa fa-edit" title="Edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Version 2.0</td>
                <td><span className="label label-primary">UNRELEASED</span></td>
                <td>
                  <div className="progress sm">
                    <div className="progress-bar progress-bar-green" style={{ width: '30%' }}></div>
                    <div className="progress-bar progress-bar-yellow" style={{ width: '40%' }}></div>
                    <div className="progress-bar progress-bar-blue" style={{ width: '30%' }}></div>
                  </div>
                </td>
                <td>7/Mar/19</td>
                <td>14/Mar/19</td>
                <td></td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary"><i className="fa fa-cube" title="Release"></i></button>
                    <button type="button" className="btn btn-success"
                    ><i className="fa fa-edit" title="Edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Version 1.0</td>
                <td><span className="label label-success">RELEASED</span></td>
                <td>
                  <div className="progress sm">
                    <div className="progress-bar progress-bar-green" style={{ width: '100%' }}></div>
                  </div>
                </td>
                <td>1/Mar/19</td>
                <td>7/Mar/19</td>
                <td></td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary"><i className="fa fa-dropbox" title="Unrelease"></i></button>
                    <button type="button" className="btn btn-success"
                    ><i className="fa fa-edit" title="Edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
};

export default ReleasePage;
