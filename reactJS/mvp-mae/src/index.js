import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import ExperiencesPage from "./pages/Experiences/Experiences";
import RegisterPage from "./pages/Register/Register";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/experiencias" component={ExperiencesPage} />
        <Route path="/cadastro" component={RegisterPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
