import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
const ProjectManagementPage = props => {
  const { 
    listProject,
    chooseProject,
    deleteProject,
    project,
    userInfo
   } = props
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Setting</BreadcrumbItem>
          <BreadcrumbItem active>Project</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="modal fade" id="modal-deleteproject">
        <div className="modal-dialog modal-top">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Delete Project</h4>
            </div>
            <div className="form-horizontal">
              <div className="modal-body">
              <p>Are you sure you want to delete <strong>{project.name}</strong>?</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => deleteProject(project._id)}>Confirm Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">All Projects</h3>
          {/* <div className="box-tools pull-right">
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-adduser">Create user</button>
          </div> */}
        </div>
        <div className="box-body">
          <table id="example1" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Key</th>
                <th>Project Type</th>
                <th>Project Lead</th>
                <th>Create Date</th>
                <th>Update Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listProject.map((item, idx) => {
                return (
                  <tr key = {idx}>
                    <td>{item.name}</td>
                    <td>{item.key}</td>
                    <td>{(item.projectType || {}).name}</td>
                    <td>{(item.lead || {}).displayName}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.updatedDate}</td>
                    <td>
                      {(item.lead || {})._id === userInfo._id &&
                        <div className="btn-group">
                          {/* <button type="button" className="btn btn-success" data-toggle="modal" data-target=""><i className="fa fa-user-plus" title="Invite Users"></i></button> */}
                          <button type="button" onClick={() => chooseProject(item)} className="btn btn-danger" data-toggle="modal" data-target="#modal-deleteproject"><i className="fa fa-trash-o" title="Delete Project"></i></button>
                        </div>
                      }
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  )

};
export default ProjectManagementPage;
