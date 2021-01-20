import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      loggedin: false,
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/login" />;
    } else if (this.state.loggedin) {
      return <div>Admin</div>;
    } else return null;
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/admin/login`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data.loggedin) {
          this.setState({ loggedin: true });
        } else {
          this.setState({ redirect: true });
        }
      });
  }
}

export default Admin;
