import React from 'react';
import { Route } from 'react-router-dom';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonList, IonItem, IonBackButton } from '@ionic/react';
import BottomTabBar from '../../components/bottom-tab-bar';
import Notifications from './Notifications/Notifications'
import Security from './Security/Security'
import {useHistory} from 'react-router-dom'

import './assets/scss/AccountSetting.scss';


const settings = [
  {
    'title': 'Notifications',
    'icon': 'fal fa-bell',
    'url': '/notifications'
  },
  {
    'title': 'Security',
    'icon': 'fal fa-shield-check',
    'url': '/security'

  },
  {
    'title': 'Account',
    'icon': 'fal fa-user-circle',
    'url': '/account'
  },
  {
    'title': 'Help',
    'icon': 'fal fa-question-circle',
    'url': '/help'
  },
  {
    'title': 'About',
    'icon': 'fal fa-info-circle',
    'url': '/about'
  },
];



const Index: React.FC<{history}> = (props) => {
  let history = useHistory()

  const gotoSubLink = (e, url) => {
    e.preventDefault();
    history.push('/notifications')
  }

  const settingList = settings.map((item, i) => {
    return (
      <IonItem button onClick={(e) => {history.push(item.url)}} lines="none"  className="ion-react-nav-detail-btn" key={i}>
        <div className="justify-content-center align-item-center">
          <span className="account-setting-icon-font-size">
            <i className={item.icon}></i>
          </span>
        </div>
        <label className="align-self-center label-padding-left">{item.title}</label>
      </IonItem>
    );
  })
  return (
   <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" text="" className="disabled-button"/>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList >
          {settingList}
        </IonList>
        <hr className="seperator-hr"/>
        <IonButton fill="clear" onClick={(e) => {props.history.goBack()}} className="link-main text-transform-none">Sign Out</IonButton>
        <div className="account-setting-version text">
          <IonLabel>Version 1.0</IonLabel>
        </div>
        <BottomTabBar history={props.history} />
      </IonContent>
    </IonPage>
  );
};


const Test: React.FC = () => {
  return (
    <h1>I am here</h1>
  );
};

const Settings: React.FC<{history}> = (props) => {
  return (
    <React.Fragment>
      <Route path="/notifications" component={Notifications} exact={true} />
      <Route path="/security" component={Security} exact={true} />
      <Route component={Index} />
    </React.Fragment>
  );
};


export default Settings;