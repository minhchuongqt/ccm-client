import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../../pages/MainPage/Header";
import * as selectors from '../../selectors/user'
import {connect} from 'react-redux'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: localStorage.getItem("type")
    };
  }

  logout = () => {
    console.log('log out')
    // localStorage.removeItem("login");

    // this.props.history.push(PATH.LOGIN_URL);
    // Api.apiGet(urlApi.logout).then(res => {
    // });
  };

  render() {
    const { type } = this.state;
    const {userInfo} = this.props;
    const isShow = this.props.history.location.pathname === '/' ? false : true
    return (
      <div>
        <HeaderComponent {...this.props}  type={type} logout={() => this.logout()} 
          isShow={isShow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: selectors.getUserInfo(state)
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)  (withRouter(Header));
