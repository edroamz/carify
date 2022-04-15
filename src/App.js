import React from "react";
// import "./styles/App.scss";
import "./styles/main.css";
import Index from "./pages";
import NotFound from "./pages/notFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
