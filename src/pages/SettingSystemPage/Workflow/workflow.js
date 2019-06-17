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
  const { listWorkflow, openAddStepModal, workflowSelectable, updateWorkflow, swapWorkflow } = props;
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Setting</BreadcrumbItem>
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
                <th className="text-align-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listWorkflow.map((item, index) => {
                // console.log(item)
                const disabledUp = (item.sequence == 1)
                const disabledDown = (item.sequence == listWorkflow.length)
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
                        <MultiSelect
                          value={item.to || []}
                          options={workflowSelectable}
                          onChange={e => updateWorkflow(item._id, e)} />
                      </div>
                    </td>
                    <td className="text-align-center">
                      {/* <div className="btn-group">
                        <button type="button" className="btn btn-success" ><i className="fa fa-edit" title="Edit User"></i></button> &nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" ><i className="fa fa-trash-o" title="Remove User"></i></button>
                      </div> */}
                        <div className="btn-group-vertical">
                          <button type="button" disabled = {disabledUp} onClick={()=> swapWorkflow(item._id, listWorkflow[index-1]._id)} class="btn btn-xs btn-default"><i className="fa fa-caret-up" title="Move Up"></i></button>
                          <button type="button" disabled = {disabledDown} onClick={()=> swapWorkflow(item._id, listWorkflow[index+1]._id)} class="btn btn-xs btn-default"><i className="fa fa-caret-down" title="Move Down"></i></button>
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
