import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import * as PATH from "../../constants/data/routeConstants";
import HeaderComponent from "../../pages/MainPage/Header";
// import * as Api from "../../api/registerApi";
// import urlApi from "../../constants/urlApi";

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
    //   console.log(res);
    // });
  };

  render() {
    const { type } = this.state;
    const isShow = this.props.history.location.pathname == '/' ? false : true
    return (
      <div>
        <HeaderComponent {...this.props}  type={type} logout={() => this.logout()} 
          isShow={isShow}
        />
      </div>
    );
  }
}

export default  (withRouter(Header));
