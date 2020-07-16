import React from 'react';

import {IonButton, IonIcon, IonButtons, IonBackButton} from '@ionic/react'
import {arrowBack, chevronBackOutline} from 'ionicons/icons'  

const BackButton = (props) => {
  return (
    <IonButtons slot={props.slot} onClick={() => {props.onClick()}} >
      <div slot={props.slot} className="disabled-button ios button in-toolbar ion-activatable ion-focusable hydrated back-button-slot-start">
        <IonIcon slot={props.slot} size="large" ios={chevronBackOutline} md={arrowBack} className="disabled-button"/>
      </div>
    </IonButtons>
  );
}

export default BackButton