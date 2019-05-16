import React, { Component } from "react";
import Chart from "../../components/chart/sprintChart";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;

const SprintInfo = styled.div`
  padding: 10px 0;
`;
const ChartContent = styled.div`
  padding: 20px 0;
`;
const TableContent = styled.div`
  padding: 20px 0;
`;

const switchLabel = status => {
  switch (status) {
    case 'Done':
      return 'label-success'
    case 'InProgress':
      return 'label-info'
    case 'Todo':
      return 'label-default'
  
    default:
      return ''
  }
  
}
class SprintReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { header: "Key", pointer: "key" },
        { header: "Summary", pointer: "summary" },
        { header: "Issue Type", pointer: "type" },
        { header: "Priority", pointer: "priority" },
        { header: "Status", pointer: row => <span className={`label ${switchLabel(row.status)}`}>{row.status}</span> },
        { header: "Story Points", pointer: "storyPoint" }
      ],
      data: [
        {
          key: "KLTN-1",
          summary: "Lấy yêu cầu",
          type: "Story",
          priority: "Medium",
          status: "Done",
          storyPoint: 5
        },
        {
          key: "KLTN-2",
          summary: "Xử lý yêu cầu",
          type: "Story",
          priority: "Medium",
          status: "Done",
          storyPoint: 5
        }
      ],
      data2: [
        {
          key: "KLTN-1",
          summary: "Vẽ Usecase",
          type: "Story",
          priority: "Medium",
          status: "Todo",
          storyPoint: 5
        },
        {
          key: "KLTN-2",
          summary: "Vẽ Database",
          type: "Story",
          priority: "Medium",
          status: "InProgress",
          storyPoint: 5
        }
      ],
    };
  }

  render() {
    const { columns, data, data2 } = this.state;
    return (
      <div>
        <Title className="pd">Sprint 1</Title>
        <SprintInfo>
          Active Sprint 16/thg 5/19 3:54 CH - 23/thg 5/19 7:03 CH
        </SprintInfo>
        <ChartContent>
          <Chart />
        </ChartContent>
        <TableContent>
        <Title className="pd">Status Report</Title>
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Tasks Done</h3>

                  <div className="box-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: "150px" }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control pull-right"
                        placeholder="Search"
                      />

                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        {columns.map((item, index) => {
                          return <th key={index}>{item.header}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, idx) => {
                        return (
                          <tr className="pointer" key={idx}>
                            {columns.map((col, index) => {
                              if(typeof col.pointer === 'string') {
                                return <td key={index}>{item[col.pointer]}</td>;
                              } else if (typeof col.pointer === 'function') {
                                return <td key={index}>{col.pointer(item)}</td>
                              }
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Tasks haven't done */}
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Tasks haven't done</h3>

                  <div className="box-tools">
                    <div
                      className="input-group input-group-sm"
                      style={{ width: "150px" }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        className="form-control pull-right"
                        placeholder="Search"
                      />

                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body table-responsive no-padding">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        {columns.map((item, index) => {
                          return <th key={index}>{item.header}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {data2.map((item, idx) => {
                        return (
                          <tr className="pointer" key={idx}>
                            {columns.map((col, index) => {
                              if(typeof col.pointer === 'string') {
                                return <td key={index}>{item[col.pointer]}</td>;
                              } else if (typeof col.pointer === 'function') {
                                return <td key={index}>{col.pointer(item)}</td>
                              }
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </TableContent>
      </div>
    );
  }
}

export default SprintReport;
