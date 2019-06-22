import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../../pages/MainPage/Header";
import * as selectors from '../../selectors/user'
import * as actions from '../../actions/user'
import {connect} from 'react-redux'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localStorage.getItem("type")
    };
  }

  componentWillReceiveProps(newProps) {
    const {updateUserStatus} = newProps
    if(updateUserStatus) {
      this.props.resetUpdateStatus()
      this.props.getUserInfo()
    }
  }

  logout = () => {
    console.log('log out')
    // localStorage.removeItem("login");

    // this.props.history.push(PATH.LOGIN_URL);
    // Api.apiGet(urlApi.logout).then(res => {
    // });
  };

  updateAvatar = (key, value) => {
    this.props.updateAvatar(value)
  }

  render() {
    const { type } = this.state;
    const {userInfo} = this.props;
    const isShow = this.props.history.location.pathname === '/' ? false : true
    return (
      <div>
        <HeaderComponent {...this.props}  type={type} logout={() => this.logout()} 
          updateAvatar={(key, value) => this.updateAvatar(key, value)}
          isShow={isShow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: selectors.getUserInfo(state),
  updateUserStatus: selectors.getUpdateUserStatus(state),
})

const mapDispatchToProps = dispatch => ({
  updateAvatar(file) {
    dispatch(actions.updateAvatar(file))
  },
  getUserInfo() {
    dispatch(actions.getUserInfo())
  },
  resetUpdateStatus() {
    dispatch(actions.resetInviteUserStatus())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)  (withRouter(Header));
