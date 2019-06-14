import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import * as SRD from "storm-react-diagrams";
import "storm-react-diagrams/dist/style.min.css";
import styled from "styled-components";

const DiagramContent = styled.div`
  height: 550px;
  background-color: #3c94ff;
  padding: 20px;
  .srd-diagram {
    overflow: unset;
    position: unset;
    .srd-link-layer {
      top: unset;
      bottom: unset;
      left: unset;
      right: unset;
      height: unset;
      width: unset;
    }
    ,
    .srd-node-layer {
      top: unset;
      bottom: unset;
      left: unset;
      right: unset;
      .srd-default-node {
        border: unset;
      }
      .srd-default-node__title {
        background: unset;
      }
      .srd-default-node__ports {
        // background-image: unset;
      }
      .srd-default-node__in {
        padding: 0 20px 0 0;
      }
    }
  }
`;
const createEngine = () => {
  // 1) setup the diagram engine
  let engine = new SRD.DiagramEngine();
  engine.installDefaultFactories();

  // 2) setup the diagram model
  let model = new SRD.DiagramModel();

  // 3) create a default node

  let node1 = new SRD.DefaultNodeModel("TO DO", "#d2d6de");
  let port1 = node1.addOutPort("Out");
  node1.setPosition(250, 100);

  // 4) create another default node
  let node2 = new SRD.DefaultNodeModel("IN PROGRESS", "#00c0ef");
  let port2 = node2.addInPort("In");
  port2 = node2.addOutPort("Out");
  node2.setPosition(400, 100);

  let node3 = new SRD.DefaultNodeModel("DONE", "#00a65a");
  let port3 = node3.addInPort("In");
  node3.setPosition(550, 100);

  // 5) link the ports
  let link1 = port1.link(port2);
  let link2 = port2.link(port3);

  // 6) add the models to the root graph
  model.addAll(node1, node2, node3, link1, link2);

  // 7) load model into engine
  engine.setDiagramModel(model);
  return engine;
};

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
  const { listWorkflow, openAddStepModal } = props;
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
            <button  onClick={() => openAddStepModal()} type="button" className="btn btn-success">Add Step</button>
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
                      {item.name}
                    </span>
                    </td>
                    <td className="text-align-center"><i
                      className={
                        "fa " +
                        generateClassForLinkStatus(
                          item.linkAll || ""
                        )
                      }></i>
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
