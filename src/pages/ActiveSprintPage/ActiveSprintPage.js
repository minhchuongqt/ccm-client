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
  // console.log(props)
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
        {props.cards.length} issue{props.cards.length > 1 && 's'}
      </header>
    </div>
  )
}

const ActiveSprintPage = props => {
  const { data, activeSprintInfo, openCompleteSprintModal, searchValue, onChangeSearchValue, shouldReceiveNewData } = props


  const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, card) => {
    props.handleDragEnd(cardId, sourceLaneId, targetLaneId, position, card, data)
  }

  // const shouldReceiveNewData = nextData => {
  //   console.log(nextData)
  // }
  // console.log(data)
  
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
            <li className="active breadcrumb-item sprint-name" aria-current="page">{activeSprintInfo.name}</li>
              <div className="pull-right">
              
              <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-addproject"
                 onClick={() => openCompleteSprintModal()}
                >Complete Sprint</button>
              </div>
            </div>

          </div>
          <div style={{ width: "20%", marginBottom: "10px", display: 'flex' }}>
              <div className="form-group">
                {/* <span className="fa fa-search form-control-feedback"></span> */}
                <input style={{ height: 38, width: 270 }} type="text" className="form-control" placeholder="Search"
                  onChange={e => onChangeSearchValue(e.target.value)}
                  value={searchValue || ''}
                />
              </div>
            </div>
          <div className="row">
            <Board className="board-background-color board-content"
              data={data}
              cardDragClass="draggingCard"
              laneDraggable={false}
              customLaneHeader={<CustomLaneHeader />}
              draggable
              handleDragEnd={handleDragEnd}
              // onDataChange={shouldReceiveNewData}
            />
          </div>
        </div>
      }
    </div >
  )
};

export default ActiveSprintPage;
