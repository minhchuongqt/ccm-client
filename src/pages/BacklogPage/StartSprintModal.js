import React from "react";
import Modal from "../../components/modal";
import "../../styleSheets/sass/components/Issue/IssueView.scss";

const StartSprintModal = props => {
  const {
    onChangeStartValue,
    closeStartModal,
    openStartModal,
    startSprint,
    data,
  } = props;
  return (
    <Modal isOpen={openStartModal} title="Start Sprint" closeModal={closeStartModal} >
      {/* <div className="modal fade" id="modal-addsprint"> */}

      <div id="issue-view" className="form-horizontal">
        <div className="modal-body">
          <div className="form-group">
            <label className="col-sm-3 control-label">
              Sprint name<span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputSum"
                value={data.name}
                onChange={e => onChangeStartValue("name", e.target.value)}
              />
            </div>
          </div>

              {/* <DateTime 
                timeFormat={false}
                inputProps={{placeholder: "Date picker here"}}
              /> */}
          <div className="form-group">
            <label  className="col-sm-3 control-label">Start date</label>
            <div className="col-sm-9">
              <div className="input-group date">
                <div className="input-group-addon">
                  <i className="fa fa-calendar"></i>
                </div>
                <input type="text" className="form-control pull-right" id="datepicker" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label  className="col-sm-3 control-label">End date</label>
            <div className="col-sm-9">
              <div className="input-group date">
                <div className="input-group-addon">
                  <i className="fa fa-calendar"></i>
                </div>
                <input type="text" className="form-control pull-right" id="datepicker" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Sprint goal</label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                name="textDescription"
                id="Des"
                rows="3"
                value={data.goal}
                onChange={e => onChangeStartValue("goal", e.target.value)}
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