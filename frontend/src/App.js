import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Portfolio from "./components/main/Portfolio";
import Post from "./components/main/Post";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/main/Footer";
import AdminLogin from "./components/admin/AdminLogin";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route component={Blog} />
      </Switch>
    </Router>
  );
}

function Blog() {
  return (
    <React.Fragment>
      <Header />
      <div className="container mt-5 mb-5">
        <div className="row">
          <main className="col-lg-9">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route
                path={["/", "/page/:page"]}
                exact
                render={(props) => (
                  <Home
                    key={props.match.params.page ? props.match.params.page : 0}
                    {...props}
                  />
                )}
              />
              <Route
                path="/post/:id"
                render={(props) => (
                  <Post key={props.match.params.id} {...props} />
                )}
              />
              <Route>Page Not Found</Route>
            </Switch>
          </main>
          <aside className="col-lg-3">
            <Sidebar />
          </aside>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
