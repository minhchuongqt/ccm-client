import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../styleSheets/sass/components/Issue/IssueView.scss";

const ComponentView = props => {
  return (
    <div id="issue-view">
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Component</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default ComponentView