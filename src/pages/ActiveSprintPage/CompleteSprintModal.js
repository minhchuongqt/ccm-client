import React from "react";

import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import SearchSelect from "../../components/singleSelect";
const CompleteSprintModal = props => {
  const {
    onChangeCompleteValue,
    closeCompleteModal,
    openCompleteModal,
    completeSprint,
    sprintTypeSelectable,
    data,
    activeSprintInfo,
    issueCompleteInfo
  } = props;
  return (
    <Modal isOpen={openCompleteModal} title="Complete Sprint" closeModal={closeCompleteModal} >
      {/* <div className="modal fade" id="modal-addsprint"> */}

      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
          <div className="row"><label className="col-sm-12 ">{activeSprintInfo.name}</label></div>
          { issueCompleteInfo && issueCompleteInfo.map((workflow, index) => {
            return (
            <div className="row" key={index}>
              <label className="col-sm-12 ">{workflow.issues.length} issues in {workflow.workflow.name} </label>
            </div>
            )
          })}
          
          {/* <div className="row"><label className="col-sm-12 ">Incomplete issues will be moved to the backlog</label></div> */}
          
          
          <div className="row"><label className="col-sm-12 ">Select where all the incomplete issues should be moved:</label></div>
          {/* <label className="col-sm-2 ">Sprint</label> */}
          <div className="row">
              <div className="col-sm-10">
                <SearchSelect
                  options={sprintTypeSelectable}
                  value={data.moveToSprint}
                  onChange={e => onChangeCompleteValue("moveToSprint", e)}
                />
              </div>
            </div>
            <br/>
            <div className="row">
            <h5>Sub-tasks are not included in the total(s) above, and are always included in the same sprint as their parent issue.</h5>
            </div>
            <div className="form-group">
             
            </div>
            {/* <div className="">
              <input
                type="text"
                className="form-control"
                id="inputSum"
                value={data.moveToSprint}
                onChange={e => onChangeCompleteValue("moveToSprint", e.target.value)}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-default-c pull-left"
          data-dismiss="modal"
          onClick={() => closeCompleteModal()}
        >
          Cancel
            </button>
        <button
          type="button"
          className="btn btn-success-c"
          onClick={() => completeSprint()}
        >
          Complete
            </button>
      </div>
      {/* </div> */}
    </Modal>
  );
};

export default CompleteSprintModal;
