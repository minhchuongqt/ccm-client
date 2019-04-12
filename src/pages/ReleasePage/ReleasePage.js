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
      <div class="box">
        <div class="box-header">
          <h3 class="box-title"></h3>
          <div class="input-group input-group-sm" style={{ width: '150px' }}>
            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search version" />

            <div class="input-group-btn">
              <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
        <div class="box-body">
          <table id="example1" class="table table-bordered table-hover">
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
                <td><span class="label label-primary">UNRELEASED</span></td>
                <td>
                  <div class="progress sm">
                    <div class="progress-bar progress-bar-blue" style={{ width: '100%' }}></div>
                  </div>
                </td>
                <td>14/Mar/19</td>
                <td>21/Mar/19</td>
                <td></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary"><i class="fa fa-cube" title="Release"></i></button>
                    <button type="button" class="btn btn-success"><i class="fa fa-edit" title="Edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Version 2.0</td>
                <td><span class="label label-primary">UNRELEASED</span></td>
                <td>
                  <div class="progress sm">
                    <div class="progress-bar progress-bar-green" style={{ width: '30%' }}></div>
                    <div class="progress-bar progress-bar-yellow" style={{ width: '40%' }}></div>
                    <div class="progress-bar progress-bar-blue" style={{ width: '30%' }}></div>
                  </div>
                </td>
                <td>7/Mar/19</td>
                <td>14/Mar/19</td>
                <td></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary"><i class="fa fa-cube" title="Release"></i></button>
                    <button type="button" class="btn btn-success"
                    ><i class="fa fa-edit" title="Edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Version 1.0</td>
                <td><span class="label label-success">RELEASED</span></td>
                <td>
                  <div class="progress sm">
                    <div class="progress-bar progress-bar-green" style={{ width: '100%' }}></div>
                  </div>
                </td>
                <td>1/Mar/19</td>
                <td>7/Mar/19</td>
                <td></td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary"><i class="fa fa-dropbox" title="Unrelease"></i></button>
                    <button type="button" class="btn btn-success"
                    ><i class="fa fa-edit" title="Edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash-o" title="Remove"></i></button>
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
