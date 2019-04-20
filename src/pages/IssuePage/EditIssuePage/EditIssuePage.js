import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../styleSheets/sass/components/Issue/IssueView.scss"
import imgUser from '../../../assets/img/avatar5.png'
const EditIssuePage = props => {
  return (
    <div id="issue-view">
      <div class="modal fade" id="modal-editissue">
        <div class="modal-dialog modal-top">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Edit Issue</h4>
            </div>
            <div className="form-horizontal">
              <div class="modal-body">

                <div class="form-group">
                  <label for="selectType" class="col-sm-3 control-label">Issue Type<span style={{ color: 'red' }}>*</span></label>
                  <div class="col-sm-9">
                    <select class="form-control select2" style = {{width: '100%'}}>
                      <option selected="selected">Story</option>
                      <option>Task</option>
                      <option>Bug</option>
                      <option>Epic</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inputSum" class="col-sm-3 control-label">Summary<span style={{ color: 'red' }}>*</span></label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputSum" placeholder="Summary" />
                  </div>
                </div>

               
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Description</label>
                  <div class="col-sm-9">
                      <textarea class="form-control" name="textDescription" id="Des" rows="3"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Priority</label>
                  <div class="col-sm-9">
                    <select class="form-control select2" style = {{width: '100%'}}>
                      <option selected="selected">Medium</option>
                      <option>Highest</option>
                      <option>High</option>
                      <option>Low</option>
                      <option>Lowest</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Labels</label>
                  <div class="col-sm-9">
                    <select class="form-control select2" style = {{width: '100%'}}>
                      <option selected="selected"></option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Assignee</label>
                  <div class="col-sm-9">
                    <select class="form-control select2" style = {{width: '100%'}}>
                      <option selected="selected">Automatic</option>
                    </select>
                    <a className="pointer">Assign to me</a>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Sprint</label>
                  <div class="col-sm-9">
                  <select class="form-control select2" style = {{width: '100%'}}>
                      <option selected="selected"></option>
                    </select>
                  </div>
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
    </div >
  )
};

export default EditIssuePage;
