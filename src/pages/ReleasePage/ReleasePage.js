import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import _ from "lodash"
import "../../styleSheets/sass/components/Version/VersionView.scss"
const ReleasePage = props => {
  const { listVersion } = props;
  return (
    <div id="version-view" >
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Releases</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {_.isEmpty(listVersion) &&
        <div>
          <div className="box">
            <div className="Container-sc-19i9g24-0 iZjHKc">
              <img className="Image-sc-1fxcbfe-0 efswFn" src={require('../../assets/img/stellar.png')} ></img>
              <h4 className="Header-sc-1jhbfl6-0 iWrPCB">Start versioning</h4>
              <p className="Description-sc-13esrtr-0 fNDTBH">Versions help you package and schedule project deliveries.
          Add a version to start collecting and releasing your work.</p>
              <div class="ActionsContainer-sc-1e9zrwk-0 bfqexM">
                <div class="css-vxcmzt">
                  <div class="css-z25nd1">
                  <button type="button" className="btn btn-primary"
                //  onClick={() => openCompleteSprintModal()}
                >Create Version</button>
                  </div>
                </div>
                <div class="SpinnerContainer-jd6kwc-0 bOGslK"></div>
              </div>
            </div>
          </div>
        </div>
      }
      {!_.isEmpty(listVersion) &&
        <div className="box">
          <div className="box-header">
            {/* <h3 className="box-title"></h3> */}
            <div className="input-group input-group-sm" style={{ width: '150px' }}>
              <input type="text" name="table_search" className="form-control pull-right" placeholder="Search version" />

              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          <div className="box-body">
            <table id="example1" className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Status</th>
                  <th>Progresss</th>
                  <th>Start date</th>
                  <th>Release date</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Version 3.0</td>
                  <td><span className="label label-primary">UNRELEASED</span></td>
                  <td>
                    <div className="progress sm">
                      <div className="progress-bar progress-bar-blue" style={{ width: '100%' }}></div>
                    </div>
                  </td>
                  <td>14/Mar/19</td>
                  <td>21/Mar/19</td>
                  <td></td>
                  <td>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary"><i className="fa fa-cube" title="Release"></i></button>
                      <button type="button" className="btn btn-success"><i className="fa fa-edit" title="Edit"></i></button>
                      <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Version 2.0</td>
                  <td><span className="label label-primary">UNRELEASED</span></td>
                  <td>
                    <div className="progress sm">
                      <div className="progress-bar progress-bar-green" style={{ width: '30%' }}></div>
                      <div className="progress-bar progress-bar-yellow" style={{ width: '40%' }}></div>
                      <div className="progress-bar progress-bar-blue" style={{ width: '30%' }}></div>
                    </div>
                  </td>
                  <td>7/Mar/19</td>
                  <td>14/Mar/19</td>
                  <td></td>
                  <td>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary"><i className="fa fa-cube" title="Release"></i></button>
                      <button type="button" className="btn btn-success"
                      ><i className="fa fa-edit" title="Edit"></i></button>
                      <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Version 1.0</td>
                  <td><span className="label label-success">RELEASED</span></td>
                  <td>
                    <div className="progress sm">
                      <div className="progress-bar progress-bar-green" style={{ width: '100%' }}></div>
                    </div>
                  </td>
                  <td>1/Mar/19</td>
                  <td>7/Mar/19</td>
                  <td></td>
                  <td>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary"><i className="fa fa-dropbox" title="Unrelease"></i></button>
                      <button type="button" className="btn btn-success"
                      ><i className="fa fa-edit" title="Edit"></i></button>
                      <button type="button" className="btn btn-danger"><i className="fa fa-trash-o" title="Remove"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div >
  )
};

export default ReleasePage;
