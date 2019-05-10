import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import imgProject from '../../assets/img/project.png'
import * as PATH from '../../constants/data/routeConstants'
import { Link } from 'react-router-dom'
import "../../styleSheets/sass/components/Project/projectView.scss"
import _ from 'lodash'
const switchColor = (number) => {
  if (number % 3 == 1) {
    return "bg-yellow";
  }
  if (number % 3 == 2) {
    return "bg-red";
  }
  if (number % 3 == 0) {
    return "bg-green";
  }

}

const ProjectPage = props => {
  const { listProject, columns, openAddProjectModal, selectProject, switchPage } = props
  return (
    <div id="project-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>System Dashboard</BreadcrumbItem>
        </Breadcrumb>
      </div>
      
      <div >
        <div className="create-project">
        <div className="pull-right">
          <button type="button" className="btn btn-success-c" data-toggle="modal" data-target="#modal-addproject"
            onClick={() => openAddProjectModal()}
          >Create Project</button>
        </div>
        </div>
        
      </div>
      <div className="row">
        {listProject.map((project, index) => {
          // console.log(project)
          return (
            <div className="col-md-4" key={index}>
              <div className="box box-widget widget-user-2">
                <Link onClick={() => selectProject(project)} to={PATH.BACKLOG_URL}><div className={"widget-user-header " } >
                  <div className="widget-user-image">
                    <img className="img-circle" src={imgProject} alt="Project Avatar" />
                  </div>
                  <h3 className="widget-user-username">{project.name}</h3>
                  <h5 className="widget-user-desc">{project.createdDate}</h5>
                </div>
                </Link>
                <div className="box-footer no-padding">
                  <ul className="nav nav-stacked">
                    <li><a href="#">To Do <span className="pull-right badge bg-blue">{project.count.toDo}</span></a></li>
                    <li><a href="#">In Progress <span className="pull-right badge bg-aqua">{project.count.inProgress}</span></a></li>
                    <li><a href="#">Done <span className="pull-right badge bg-green">{project.count.done}</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}



      </div>
      {!_.isEmpty(listProject) &&
      <div className="row">

        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">All Project -  All Categories</h3>

              <div className="box-tools">
                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                  <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                  <div className="input-group-btn">
                    <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body table-responsive no-padding">
              <table className="table table-hover">
                <thead>
                  <tr >
                    {columns.map((item, index) => {
                      return (
                        <th key={index}>{item.header}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>

                  {listProject.map((item, idx) => {
                    return (
                      <tr className="pointer" key={idx} onClick={() => {selectProject(item); switchPage()}} >
                        {columns.map((col, index) => {
                          return (
                            <td key={index}>{item[col.poiter]}</td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
};

export default ProjectPage;
