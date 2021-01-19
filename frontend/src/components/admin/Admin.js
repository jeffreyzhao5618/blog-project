import React from "react";

function Admin() {
  return (
    <div className="card mt-5 w-50 mx-auto">
      <form className="card-body">
        <div className="form-group">
          <label htmlFor="inputUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Admin;
