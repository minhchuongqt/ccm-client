import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../styleSheets/sass/components/Issue/IssueView.scss"
const EditSprintPage = props => {
  return (
    <div id="issue-view">
      <div class="modal fade" id="modal-editsprint">
        <div class="modal-dialog top-0">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Edit Sprint</h4>
            </div>
            <div className="form-horizontal">
              <div class="modal-body">

                <div class="form-group">
                  <label for="inputSum" class="col-sm-3 control-label">Sprint name<span style={{ color: 'red' }}>*</span></label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputSum" placeholder="Summary" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputSum" class="col-sm-3 control-label">Start date<span style={{ color: 'red' }}>*</span></label>
                  <div class="col-sm-9">
                    <div class="input-group date">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control pull-right" id="datepicker" />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputSum" class="col-sm-3 control-label">End date<span style={{ color: 'red' }}>*</span></label>
                  <div class="col-sm-9">
                  <div class="input-group date">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control pull-right" id="datepicker" />
                    </div>
                  </div>
                </div>


                <div class="form-group">
                  <label class="col-sm-3 control-label">Sprint goal</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" name="textDescription" id="Des" rows="3"></textarea>
                  </div>
                </div>


              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modal-deletesprint">
        <div class="modal-dialog top-0">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Delete Sprint</h4>
            </div>
            <div className="form-horizontal">
              <div class="modal-body">
              <p>Are you sure you want to delete <strong>Sprint 1</strong>?</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger">Confirm Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default EditSprintPage;
