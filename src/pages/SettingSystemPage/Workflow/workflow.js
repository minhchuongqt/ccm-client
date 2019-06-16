import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import * as SRD from "storm-react-diagrams";
import "storm-react-diagrams/dist/style.min.css";
import styled from "styled-components";
import MultiSelect from "../../../components/multiSelect";
import { updateWorkflow } from "../../../actions/workflow";

const generateClassForWorkflowStatus = status => {
  switch (status) {
    case "TODO":
      return "label-default";
    case "INPROGRESS":
      return "label-primary";
    case "DONE":
      return "label-success";
    default:
      return "label-default";
  }
};
const generateClassForLinkStatus = link => {
  if (link)
    return "fa-check-circle"
  else
    return "fa-times-circle"
};


const WorkflowView = props => {
  const { listWorkflow, openAddStepModal, workflowSelectable, updateWorkflow} = props;
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Settting</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Workflow Management</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="box box-success">
        <div className="box-header">
          <h3 className="box-title">Software Simplified Workflow Scheme</h3>
          <div className="box-tools pull-right">
            <button onClick={() => openAddStepModal()} type="button" className="btn btn-success">Add Step</button>
          </div>
        </div>

        <div className="box-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Step name</th>
                <th>Status</th>
                <th className="text-align-center">Link to others</th>
              </tr>
            </thead>
            <tbody>
              {listWorkflow.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td><span
                      className={
                        "label " +
                        generateClassForWorkflowStatus(
                          item.type || ""
                        )
                      }
                    >
                      {item.type}
                    </span>
                    </td>
                    {/* <td className="text-align-center"><i
                      className={
                        "fa " +
                        generateClassForLinkStatus(
                          item.linkAll || ""
                        )
                      }></i>
                    </td> */}
                    <td className="text-align-center">
                        <div className="col-sm-9">
                          <MultiSelect options={workflowSelectable}
                          //  value={workflowSelectable.label || []}
                          onChange={e => updateWorkflow(item._id, e)} />
                        </div>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkflowView;
