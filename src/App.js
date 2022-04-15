import React from "react";
// import "./styles/App.scss";
import "./styles/main.css";
import Index from "./pages";
import NotFound from "./pages/notFound";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path='/not-found' component={NotFound}></Route>
        <Redirect to='/not-found'></Redirect>
      </Switch>
    </div>
  );
}

export default withRouter(App);
