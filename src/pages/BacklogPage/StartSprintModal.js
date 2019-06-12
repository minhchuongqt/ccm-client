import React from "react";
import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";
import DatePicker from "react-datepicker";

const StartSprintModal = props => {
  const {
    onChangeStartValue,
    closeStartModal,
    openStartModal,
    startSprint,
    data,
    startSprintName
  } = props;
  console.log(data)
  return (
    <Modal isOpen={openStartModal} title={`Start Sprint: ${startSprintName}`} closeModal={closeStartModal} >
      {/* <div className="modal fade" id="modal-addsprint"> */}

      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          

              {/* <DateTime 
                timeFormat={false}
                inputProps={{placeholder: "Date picker here"}}
              /> */}
          <div className="form-group">
            <label  className="col-sm-3 control-label">Start date</label>
            <div className="col-sm-9">
            <DatePicker 
                  selected={data.startDate}
                  onChange={e => onChangeStartValue('startDate', e)}
                />
            </div>
          </div>

          <div className="form-group">
            <label  className="col-sm-3 control-label">End date</label>
            <div className="col-sm-9">
            <DatePicker 
                  selected={data.endDate}
                  onChange={e => onChangeStartValue('endDate', e)}
                />
            </div>
          </div>
          
        </div>
      </div>
      <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default-c pull-left"
              data-dismiss="modal"
              onClick={() => closeStartModal()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success-c"
              onClick={() => startSprint()}
            >
              OK
            </button>
          </div>
      {/* </div> */}
    </Modal>
  );
};

export default StartSprintModal;
