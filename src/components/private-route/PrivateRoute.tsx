import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonRedirect, IonRoute } from '@ionic/react';

import Login from "../../pages/Auth/Login"

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <IonRoute {...rest} render={ props => isLogin === true ? <Component {...props} /> : <Redirect to = "/login"/>}/>
);

export default PrivateRoute