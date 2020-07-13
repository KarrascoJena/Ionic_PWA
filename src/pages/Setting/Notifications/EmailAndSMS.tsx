import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonList, IonItem, IonToggle, IonBackButton } from '@ionic/react';

import '../assets/scss/AccountSetting.scss';

const EmailAndSMS: React.FC = () => {
  const  [state, setState] = useState({
    PauseAll: true,
    Matches: true,
    Invitations: true,
    Gifts: true,
    Events: true
  })

  const onChangeCheck = (e, field) => {
    setState({...state, [field]: !state[field]})
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header text-align-center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" text="" className="disabled-button"/>
          </IonButtons>
          <IonButton fill="clear" onClick={(e) => {}} strong={true} slot="end" className="done-button">Save</IonButton>
          <IonTitle>Email and SMS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList >
          <IonItem>
            <IonLabel>Pause All</IonLabel>
            <IonToggle checked={state.PauseAll} onIonChange={(e) => onChangeCheck(e, 'PauseAll')}/>
          </IonItem>
          <IonItem lines="none" className="justify-content-space-between">
            <IonLabel>Matches</IonLabel>
            <IonToggle checked={state.Matches} onIonChange={(e) => onChangeCheck(e, 'Matches')}/>
          </IonItem>
          <IonItem lines="none" className="justify-content-space-between">
            <IonLabel>Invitations</IonLabel>
            <IonToggle checked={state.Invitations} onIonChange={(e) => onChangeCheck(e, 'Invitations')}/>
          </IonItem>
          <IonItem lines="none" className="justify-content-space-between">
            <IonLabel>Gifts</IonLabel>
            <IonToggle checked={state.Gifts} onIonChange={(e) => onChangeCheck(e, 'Gifts')}/>
          </IonItem>
          <IonItem lines="none" className="justify-content-space-between">
            <IonLabel>Events</IonLabel>
            <IonToggle checked={state.Events} onIonChange={(e) => onChangeCheck(e, 'Events')}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EmailAndSMS