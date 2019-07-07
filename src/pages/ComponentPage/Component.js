import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import moment from "moment";
import { Link } from 'react-router-dom'
import { API } from "../../config";
import * as PATH from '../../constants/data/routeConstants'

const ComponentView = props => {
  const { searchValue, onChangeSearchValue, openCreateComponentModal, listComponent, selectComponent,
    openEditComponentModal, deleteComponent
  } = props;
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Component</BreadcrumbItem>
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
              placeholder="Search Component"
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
              className="btn btn-default"
              onClick={() => openCreateComponentModal("test")}
            >
              Create Component
            </button>
          </div>
        </div>
      <div className="box-body">
        <table id="example1" className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
              <th>Component Lead</th>
              {/* <th>Issues</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {(listComponent || []).map((item, index) => {
              return (
                <tr key={{ index }} className="cursor-pointer">
                  <td onClick={() => selectComponent(item)}>
                    <Link>{item.name}</Link>
                  </td>
                  <td>
                      {item.description}
                  </td>
                  <td>
                    <img src={API + ((item.lead || {}).avatarUrl || '/media/emptyAvatar.png')} width="18"/>&nbsp;{(item.lead|| {}).displayName || ''}
                  </td>
                  {/* <td>{12}</td> */}
                  <td>
                      <div className="btn-group">
                        <button type="button" className="btn btn-success" style={{margin: "0 5px"}}
                          disabled={item.released}
                          onClick={() => openEditComponentModal(item)}
                        >
                          <i className="fa fa-edit" title="Edit" />
                        </button>
                        <button type="button" className="btn btn-danger" style={{margin: "0 5px"}}
                          disabled={item.released}
                          onClick={() => deleteComponent(item)}
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

export default ComponentView;
