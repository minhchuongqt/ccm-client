import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// import data from "../data.json";
import Board from "react-trello";
import _ from "lodash"
import "../../styleSheets/sass/components/Sprint/SprintView.scss"


const ActiveSprintPage = props => {
  const { data } = props
  return (
    <div id = "sprint-view" >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Active Sprint</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {!_.isEmpty(data) &&
      <div>
        <Board className = "board-background-color board-content" 
          data={data} 
          draggable 
          cardDragClass="draggingCard"
          laneDraggable = {false}
          handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, cardDetails) => console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails)}
        />
      </div>
      }
    </div >


  )
};

export default ActiveSprintPage;
