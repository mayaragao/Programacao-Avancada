import React, {useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import ExperiencesPage from "./pages/Experiences/Experiences";
import RegisterPage from "./pages/Register/Register";
import ExperienceRegisterPage from "./pages/ExperienceRegister/ExperienceRegister";
import {AuthProvider} from './context/AuthContext'
import App from "./App";
import {Context} from './context/AuthContext'
const Routes = () => {

 function CustomRoute({isPrivate, ...rest}){
    const { loading, authenticated } = useContext(Context);
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (isPrivate && !authenticated) {
      return <Redirect to="/login" />
    }
  
    return <Route {...rest} />;
 }

 return(  
 <AuthProvider>
    <Router>
      <Switch>
        <CustomRoute exact path="/" component={App} />
        <CustomRoute path="/login" component={LoginPage} />
        <CustomRoute path="/experiencias" component={ExperiencesPage} />
        <CustomRoute path="/cadastro" component={RegisterPage} />
        <CustomRoute path="/cadastrarExperiencia" component={ExperienceRegisterPage} />
      </Switch>
    </Router>
    </AuthProvider>)
 
};

export default Routes;
