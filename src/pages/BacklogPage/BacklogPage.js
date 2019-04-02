import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const BacklogPage = props => {
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Backlog</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">User Story</h3>

              <div class="box-tools">
                <div class="input-group input-group-sm" style={{ width: '150px' }}>
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search" />

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <td>As a developer, I can update story and task status</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>


    </div >

  )
};

export default BacklogPage;
