import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import data from "../data.json";
import Board from "react-trello";
import "../../styleSheets/sass/components/Sprint/SprintView.scss"
const ActiveSprintPage = props => {
  return (
    <div id = "sprint-view" >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Active Sprint</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div  >
        <Board className = "board-background-color board-content" 
          data={data} 
          draggable 
          handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, cardDetails) => console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails)}
        />
      </div>
    </div >


  )
};

export default ActiveSprintPage;
