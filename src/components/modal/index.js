import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Modal from "react-modal";
// import "../../styleSheets/sass/components/Issue/IssueView.scss";
// import { createProject } from "../../../actions/project";

const ModalComponent = props => {
  Modal.setAppElement('body')
  const customStyles = {
    overlay: {
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: "3"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "rgba(0,0,0,0)",
      border: "0px",
      transform: "translate(-50%, -50%)"
    }
  };
  const {
    closeModal,
    isOpen,
    title
  } = props;
  // console.log(projectTypeSelectable)
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      {/* <div className="modal fade" id="modal-addproject"> */}
      <div className="modal-dialog modal-top">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">{title}</h4>
          </div>
          {props.children}
        </div>
        {/* </div> */}
      </div>
    </Modal>
  );
};

export default ModalComponent;
