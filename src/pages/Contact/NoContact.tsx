import React from 'react';
import { IonPage, IonButton, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonContent } from '@ionic/react';

import './assets/scss/NoContacts.scss'
const NoContacts: React.FC<{history}> = (props) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <i className="fal fa-paper-plane custom-icon-size-small"></i>
          </IonButtons>
          <IonButtons slot="end">
            <i className="fal fa-share-alt custom-icon-size-small"></i>
          </IonButtons>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="landing-container">
          <div className="circle-icon huge-icon margin-top-30 user-friends-icon-custom">
            <i className="fal fa-user-friends"></i>
          </div>
          <div className="margin-top-30">
            <IonLabel className="title">
              No Contact Found!
            </IonLabel>
          </div>
          <div className="margin-top-30">
            <IonLabel className="text-details">
              You need to define minimum one contact before you can use the discovery featur.
            </IonLabel>
          </div>
          <IonButton expand="block" className="margin-top-20 red-button">Add New Contact</IonButton>
        </div>
      </IonContent>
     </IonPage>
  );
};

export default NoContacts;
