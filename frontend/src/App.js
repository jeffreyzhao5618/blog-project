import React from "react";
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header pathname={window.location.pathname} />
        <div className="container mt-5">
          <div className="row">
            <main className="col-lg-9">
              <Switch>
                <Route path="/about">About</Route>
                <Route path="/contact">Contact</Route>
                <Route path="/portfolio">Portfolio</Route>
                <Route path="/" exact component={Home} />
                <Route>Page Not Found</Route>
              </Switch>
            </main>
            <aside className="col-lg-3">
              <Sidebar />
            </aside>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
