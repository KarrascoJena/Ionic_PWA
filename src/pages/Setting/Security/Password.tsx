import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonList, IonItem, IonBackButton, IonInput } from '@ionic/react';
import { BackButton } from '../../../components/ion-custom/customElement'

import '../assets/scss/AccountSetting.scss';

const Password: React.FC<{history}> = (props) => {
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
        <IonToolbar className="padding-header">
          <BackButton goBack={e => {props.history.goBack()}}/>
          <IonButtons slot="end">
            <IonButton onClick={(e) => {}} strong={true}className="done-button">Save</IonButton>
          </IonButtons>
          <IonTitle>Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-list">
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