import React from 'react';
import { IonPage, IonButton, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonContent } from '@ionic/react';

import useWebShare from "react-use-web-share";

import './assets/css/DiscoverVote.scss'



const Discover: React.FC<{history}> = (props) => {
  const { loading, isSupported, share } = useWebShare();

  function shareClick() {
    share({
      title: 'Parrot Tour',
      text:'Some text for Parrot Tour',
      url: 'Link to URL'
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={() => {props.history.goBack()}}>
            <i className="fal fa-paper-plane custom-icon-size-small"></i>
          </IonButtons>
          <IonButtons slot="end" onClick={() => { shareClick()}}>
            <i className="fal fa-share-alt custom-icon-size-small"></i>
          </IonButtons>
          <IonTitle>Discover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="signin-container">
          <div className="circle-icon huge-icon discover-huge-icon">
            <i className="fal fa-book-spells"></i>
          </div>
          <div className="discover-title">
            <IonLabel className="truble-login-title">
              Sorry!
            </IonLabel>
          </div>
          <div>
            <IonLabel className="truble-login-text">
              We are out of experiences for the moment but we'll come back soon with new ideas
            </IonLabel>
          </div>
          <IonButton expand="block" className="singup-button">Suggest New Experience</IonButton>
        </div>
      </IonContent>
     </IonPage>
  );
};

export default Discover;
