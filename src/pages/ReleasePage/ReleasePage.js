import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import moment from "moment";
import { Link } from 'react-router-dom'
import * as PATH from '../../constants/data/routeConstants'
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
  const {
    openCreateVersionModal,
    listVersion,
    searchValue,
    onChangeSearchValue,
    selectVersion,
    releaseVersion,
    unreleaseVersion,
    editVersion,
    deleteVersion
  } = props;
  // console.log(listVersion);
  return (
    <div id="version-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Releases</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="box">
        <div className="box-header">
          {/* <h3 className="box-title"></h3> */}
          <div
            className="input-group input-group-sm"
            style={{ width: "150px" }}
          >
            <input
              type="text"
              name="table_search"
              className="form-control pull-right"
              placeholder="Search version"
              value={searchValue}
              onChange={e => onChangeSearchValue(e.target.value)}
            />

            <div className="input-group-btn">
              <button type="submit" className="btn btn-default">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
          <div className="group-btn" style={{ float: "right" }}>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => openCreateVersionModal("test")}
            >
              Create Version
            </button>
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
                // console.log(item)
                const progressDone = (item.count.done / item.issueTotal) * 100
                // console.log(progressDone)
                const progressInProgress = (item.count.inProgress / item.issueTotal) * 100
                const progressToDo = 100 - progressDone - progressInProgress
                
                return (
                  
                  <tr key={index} className="cursor-pointer">
                    <td onClick={() => selectVersion(item)}><Link  to={PATH.VERSION_DETAIL_URL}>{item.name}</Link></td>
                    <td>
                      <span
                        className={
                          "label " + generateClassForVersionStatus(item.status)
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress sm">
                        <div
                          className="progress-bar progress-bar-green"
                          style={{ width: `${progressDone}%` }}
                        />
                        <div
                          className="progress-bar progress-bar-blue"
                          style={{ width: `${progressInProgress}%` }}
                        />
                        <div
                          className="progress-bar progress-bar-default"
                          style={{ width: `${progressToDo}%` }}
                        />
                      </div>
                    </td>
                    <td>{moment(item.startDate).format("MMM DD, YYYY")}</td>
                    <td>{moment(item.releaseDate).format("MMM DD, YYYY")}</td>
                    <td>{item.description}</td>
                    <td>
                      <div className="btn-group">
                        {item.released &&
                        <button type="button" className="btn btn-default" style={{margin: "0 5px"}}
                           onClick={() => unreleaseVersion(item._id)}
                        >
                          <i className="fa fa-cube" title="Unrelease" />
                        </button>
                        ||
                        <button type="button" className="btn btn-primary" style={{margin: "0 5px"}}
                           onClick={() => releaseVersion(item._id)}
                        >
                          <i className="fa fa-cube" title="Release" />
                        </button>
                      }
                        <button type="button" className="btn btn-success" style={{margin: "0 5px"}}
                          disabled={item.released}
                          onClick={() => editVersion(item)}
                        >
                          <i className="fa fa-edit" title="Edit" />
                        </button>
                        <button type="button" className="btn btn-danger" style={{margin: "0 5px"}}
                          disabled={item.released}
                          onClick={() => deleteVersion(item)}
                        >
                          <i className="fa fa-trash-o" title="Remove" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReleasePage;
