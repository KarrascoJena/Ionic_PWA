import React from "react";
import { Redirect } from "react-router-dom";
import { IonRoute, IonButton, IonIcon } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons'

export const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
  <IonRoute {...rest} render={ props => isLogin === true ? <Component {...props} /> : <Redirect to = "/login"/>}/>
);

export const BackButton = (props) => {
  return (
    <IonButton fill="clear" size="small" className="back-button" color="dark" onClick={() => {props.goBack()}}>
      <IonIcon icon={chevronBackOutline} style={{fontSize: '30px'}} slot="start"/>
    </IonButton>
  )
}