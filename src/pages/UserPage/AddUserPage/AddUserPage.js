import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const AddUserPage = props => {
  return (
    <div>
    <div className="col-md-3"></div>
    <div className = "col-md-6">
      <div class="box box-primary ">
        <div class="box-header with-border">
          <h3 class="box-title">Create new user</h3>
        </div>
        

        <form class="form-horizontal">
          <div class="box-body">
            <div class="form-group">
              <label class="col-sm-2 control-label">Username</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Desired username" />
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
            <div class="form-group">
              <label class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="Password" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Retype password</label>
              <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="Retype password" />
              </div>
            </div>

          </div>
          <div class="box-footer">
            <button type="submit" class="btn btn-success pull-right">Create user</button>
            <button type="submit" class="btn btn-default pull-right m-r-5">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
};

export default AddUserPage;
