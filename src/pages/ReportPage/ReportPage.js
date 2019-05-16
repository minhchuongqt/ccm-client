import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Line } from 'react-chartjs-2';
const ReportPage = props => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sprint 1',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <div >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Report</BreadcrumbItem>
        </Breadcrumb>

      </div>
      <div>
        <div className="col-md-8">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h4 className="box-title">Sprint Report</h4>
            </div>
            <div className="box-body">
            <Line data={data} />
            </div>
          </div>
        </div>
        
      </div>


    </div >
  )
};

export default ReportPage;
