import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonList, IonItem, IonBackButton, IonInput } from '@ionic/react';

import '../assets/scss/AccountSetting.scss';

const Password: React.FC = () => {
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
          <IonTitle>Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList >
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="Current Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="New Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'old_password')} placeholder="New Password again"/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Password