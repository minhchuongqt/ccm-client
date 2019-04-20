import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const EditUserPage = props => {
  return (
    <div >
      <div class="modal fade" id="modal-edituser">
        <div class="modal-dialog modal-top">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Edit User</h4>
            </div>
            <div className="form-horizontal">
              <div class="modal-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Email</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="User's email" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Display name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Display name" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Fullname</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="User's fullname" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Group</label>
                  <div class="col-sm-10">
                    <select name="SelectGroup" id="inputSelectGroup" class="form-control" required="required">
                      <option value="">CC Admin</option>
                    </select>
                  </div>
                </div>

              </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Create</button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditUserPage;
