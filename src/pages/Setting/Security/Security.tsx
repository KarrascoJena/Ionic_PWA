import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonBackButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {useHistory} from 'react-router-dom'

import Password from './Password'
import IonReactNav from '../../../components/IonReactNav';
import TechDetail  from '../../../components/ion-nav/TechDetail';
import BottomTabBar from '../../../components/bottom-tab-bar';

import '../assets/scss/AccountSetting.scss';

const Test: React.FC = () => {
  return (
    <h1>I am here</h1>
  );
};

const settings = [
  {
    'title': 'Change Password',
    'content': <Password />
  }
];


const Notifications: React.FC = () => {

  let history = useHistory()
  const [setting, setSetting] = useState(settings[0])

  const settingList = settings.map((item, i) => {
    return (
      <IonItem button onClick={() => setSetting(settings[i])} lines="none"  className="ion-react-nav-detail-btn" key={i}>
        <label className="align-self-center label-padding-left">{item.title}</label>
      </IonItem>
    );
  })
  return (
    <IonPage>
      <IonContent>
        <IonReactRouter>
          <IonReactNav detail={() => <TechDetail {...setting} />}>
            <IonHeader>
              <IonToolbar className="padding-header">
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/account_setting" text="" className="disabled-button"/>
                </IonButtons>
                <IonTitle>Security</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonList >
                {settingList}
              </IonList>
            </IonContent>
          </IonReactNav>
        </IonReactRouter>
      </IonContent>
      <BottomTabBar history={history} />
    </IonPage>
  );
};


export default Notifications;