import React, { useContext} from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from "./pages/Login/Login";
import ExperiencesPage from "./pages/Experiences/Experiences";
import RegisterPage from "./pages/Register/Register";
import ExperienceRegisterPage from "./pages/ExperienceRegister/ExperienceRegister";
import App from "./App";
import { AuthProvider , Context} from "./context/AuthContext";
import history from './history';

const Routes = () => {

  function CustomRoute({isPrivate, ...rest}){

    const {authenticated} = useContext(Context);

    if (isPrivate && !authenticated)
    {
      return <Redirect to= "login"/> 
    } 

    return <Route {...rest}/>
  }

 return(  
  <AuthProvider>
    <Router history={history}>
      <Switch>
         <CustomRoute exact  path="/" component={App} />       
          <CustomRoute exact path="/login" component={LoginPage} />       
          <CustomRoute exact isPrivate path="/experiencias" component={ExperiencesPage} />
          <CustomRoute exact isPrivate path="/cadastro" component={RegisterPage} />
          <CustomRoute exact isPrivate path="/cadastrarExperiencia" component={ExperienceRegisterPage} />
      </Switch>
    </Router>
    </AuthProvider>

   )
 
};

export default Routes;
