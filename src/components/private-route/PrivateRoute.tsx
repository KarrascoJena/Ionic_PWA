import React from "react";
import { Redirect } from "react-router-dom";
import { IonRoute } from '@ionic/react';

const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <IonRoute {...rest} render={ props => isLogin === true ? <Component {...props} /> : <Redirect to = "/login"/>}/>
);

export default PrivateRoute