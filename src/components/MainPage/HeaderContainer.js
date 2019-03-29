import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import * as PATH from "../../constants/data/routeConstants";
import HeaderComponent from "../../components/MainPage/Header";
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
    // console.log('this.props')
    return (
      <div>
        <HeaderComponent {...this.props}  type={type} logout={() => this.logout()} />
        <Greeting greeting='asasdasdasd' />
      </div>
    );
  }
}

const Greeting = props => <h1>{props.greeting}</h1>;

export default withRouter(Header);
