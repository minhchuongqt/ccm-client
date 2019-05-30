import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import data from "../data.json";
import Board from "react-trello";
import _ from "lodash"
import "../../styleSheets/sass/components/Sprint/SprintView.scss"
// storiesOf('Basic Functions', module)
//   .add('Tags', () => (
//     <Board/>
//   ));
const CustomLaneHeader = props => {
  return (
    <div>
      <header
        style={{
          borderBottom: '2px solid #c5c5c5',
          paddingBottom: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <div >{props.title}</div>
        {props.label
        }
      </header>
    </div>
  )
}
const ActiveSprintPage = props => {
  const { data } = props


  const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, card) => {
    props.handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card)
  }

  return (
    <div id="sprint-view" >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Active Sprint</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {!_.isEmpty(data) &&
        <div>
          <div>
            <div className="complete-sprint">
              <div className="pull-right">
                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-addproject"
                 
                >Complete Sprint</button>
              </div>
            </div>

          </div>
          <div className="row">
          <Board className="board-background-color board-content"
            data={data}
            draggable
            cardDragClass="draggingCard"
            laneDraggable={false}
            customLaneHeader={<CustomLaneHeader />}
            draggable
            handleDragEnd={handleDragEnd}
          />
          </div>
        </div>
      }
    </div >
  )
};

export default ActiveSprintPage;
