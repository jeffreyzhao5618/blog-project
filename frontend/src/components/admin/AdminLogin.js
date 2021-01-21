import { React, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect: false,
    };

    // this.login = this.login.bind();
    // this.changeUsernameHandler = this.changeUsernameHandler.bind();
    // this.changePasswordHandler = this.changePasswordHandler.bind();
  }

  login = () => {
    axios
      .post(
        `${SERVER_URL}/admin/login`,
        {
          username: this.state.username,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success) {
          this.setState({ redirect: true });
        } else {
          this.setState({ username: "", password: "" });
          alert("Login Failed");
        }
      });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin" />;
    } else {
      return (
        <div className="card mt-5 w-50 mx-auto">
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="inputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                autoComplete="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.changeUsernameHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                autoComplete="current-password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changePasswordHandler}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={this.login}
            >
              Log In
            </button>
          </form>
        </div>
      );
    }
  }
}

export default AdminLogin;
