import React, {} from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import ExperiencesPage from "./pages/Experiences/Experiences";
import RegisterPage from "./pages/Register/Register";
import ExperienceRegisterPage from "./pages/ExperienceRegister/ExperienceRegister";
import App from "./App";

const Routes = () => {
 return(  
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/experiencias" component={ExperiencesPage} />
        <Route path="/cadastro" component={RegisterPage} />
        <Route path="/cadastrarExperiencia" component={ExperienceRegisterPage} />
      </Switch>
    </Router>
   )
 
};

export default Routes;
