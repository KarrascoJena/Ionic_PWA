import React from 'react';
import { IonPage, IonButton, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonContent } from '@ionic/react';


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
        <div className="signin-container">
          <div className="circle-icon huge-icon discover-huge-icon">
            <i className="fal fa-user-friends"></i>
          </div>
          <div className="discover-title">
            <IonLabel className="truble-login-title">
              No Contact Found!
            </IonLabel>
          </div>
          <div>
            <IonLabel className="truble-login-text">
              You need to define minimum one contact before you can use the discovery featur.
            </IonLabel>
          </div>
          <IonButton expand="block" className="singup-button">Add New Contact</IonButton>
        </div>
      </IonContent>
     </IonPage>
  );
};

export default NoContacts;
