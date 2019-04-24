import React from 'react';
import PropTypes from 'prop-types'

const TableComponent = props => {
    const { columns, data } = props
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">All Project -  All Categories</h3>

                            <div className="box-tools">
                                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                    <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                                    <div className="input-group-btn">
                                        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-body table-responsive no-padding">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        {columns.map((item, index) => {
                                            return (
                                                <th key={index}>{item.header}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, idx) => {
                                        return (
                                            <tr key={idx}>
                                                {columns.map((col, index) => {
                                                    return (
                                                        <td key={index}>{item[col.poiter]}</td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

TableComponent.propType = {
    columns: PropTypes.any,
    data: PropTypes.any
}

TableComponent.defaultProps = {
    columns: [
        {
            header: 'Project', poiter: 'project'
        },
        {
            header: 'Key', poiter: 'key'
        },
        {
            header: 'Project Type', poiter: 'projectType'
        },
        {
            header: 'Project Lead', poiter: 'projectLead'
        },
        {
            header: 'Project Category', poiter: 'projectCategory'
        },
        {
            header: 'URL', poiter: 'url'
        }
    ],
    data: [
        {
            project: 'Delphinus', key: 'DEL', projectType: 'Software', projectLead: "Le Minh Chuong", projectCategory: "No category", url: "No URL"
        },
        {
            project: 'Smart Buddy', key: 'SMA', projectType: 'Software', projectLead: "Pham Hong Cang", projectCategory: "No category", url: "No URL"
        },
        {
            project: 'Sodexo', key: 'SOD', projectType: 'Software', projectLead: "Pham Hong Cang", projectCategory: "No category", url: "No URL"
        }
    ]
}

export default TableComponent;