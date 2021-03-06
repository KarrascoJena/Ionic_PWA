import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import {useRouteMatch} from 'react-router-dom'
import { BackButton } from '../../../components/ion-custom/customElement'

import '../assets/scss/AccountSetting.scss';

const settings = [
  {
    'title': 'Change Password',
    'url': 'password'
  }
];


const Security: React.FC<{history}> = (props) => {
  let { path } = useRouteMatch();
  const settingList = settings.map((item, i) => {
    return (
      <IonItem button onClick={(e) => {e.preventDefault(); props.history.push(`${path}/${item.url}`)}} lines="none"  className="ion-react-nav-detail-btn" key={i}>
        <label className="align-self-center label-padding-left">{item.title}</label>
      </IonItem>
    );
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <BackButton goBack={e => {props.history.goBack()}}/>
          <IonTitle>Security</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-list">
          {settingList}
        </IonList>
      </IonContent>
    </IonPage>
  );
};


export default Security;