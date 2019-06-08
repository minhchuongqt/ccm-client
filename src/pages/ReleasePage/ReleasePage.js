import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import moment from 'moment'

const generateClassForVersionStatus = status => {
  switch (status) {
    case "RELEASED":
      return "label-success";
    case "UNRELEASED":
      return "label-primary";
    default:
      return "";
  }
};

const ReleasePage = props => {
  const {openCreateVersionModal, listVersion, searchValue, onChangeSearchValue} = props
  console.log(listVersion)
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Release</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="box">
        <div className="box-header">
          {/* <h3 className="box-title"></h3> */}
          <div className="input-group input-group-sm" style={{ width: '150px' }}>
            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search version"
              value={searchValue}
              onChange={e => onChangeSearchValue(e.target.value)}
            />

            <div className="input-group-btn">
              <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
            </div>
            
          </div>
            <div className="group-btn" style={{float: "right"}}>
              <button type="submit" className="btn btn-default" onClick={() => openCreateVersionModal('test')}>Create Version</button>
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
              {listVersion.map((item, index) => {

                return (
                  <tr key={{index}} className="cursor-pointer">
                <td>{item.name}</td>
                <td><span className={"label " + generateClassForVersionStatus(item.status)}>{item.status}</span></td>
                <td>
                  <div className="progress sm">
                  <div className="progress-bar progress-bar-green" style={{ width: '30%' }}></div>
                    <div className="progress-bar progress-bar-yellow" style={{ width: '40%' }}></div>
                    <div className="progress-bar progress-bar-blue" style={{ width: '30%' }}></div>
                  </div>
                </td>
                <td>{moment(item.startDate).format("MMM DD YYYY")}</td>
                <td>{moment(item.releaseDate).format("MMM DD YYYY")}</td>
                <td>{item.description}</td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary"><i className="fa fa-cube" title="Release"></i></button>
                    <button type="button" className="btn btn-success"><i className="fa fa-edit" title="Edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                  </div>
                </td>
              </tr>
                )
              })}
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
};

export default ReleasePage;
