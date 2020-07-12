import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonButtons, IonButton, IonLabel, IonList, IonItem, IonIcon, IonBackButton } from '@ionic/react';

import BottomTabBar from '../../components/bottom-tab-bar';

import './assets/scss/AccountSetting.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack();
}
const onChangeCheck = (e, url, props) => {
  e.preventDefault();
  props.history.push('/' + url);
}

const settings = [
  {
    'title': 'Notifications',
    'icon': 'fal fa-bell',
    'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
    'color': '#E63135'
  },
  {
    'title': 'Security',
    'icon': 'fal fa-shield-check',
    'description': 'The latest version of cascading stylesheets - the styling language of the web!',
    'color': '#0CA9EA'
  },
  {
    'title': 'Account',
    'icon': 'fal fa-user-circle',
    'description': 'The latest version of the web\'s markup language.',
    'color': '#F46529'
  },
  {
    'title': 'Help',
    'icon': 'fal fa-question-circle',
    'description': 'One of the most popular programming languages on the Web!',
    'color': '#FFD439'
  },
  {
    'title': 'About',
    'icon': 'fal fa-info-circle',
    'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
    'color': '#CE6296'
  },
];

const showDetail = (title) => {
}

const AccountSetting: React.FC<{history}> = (props) => {
  
  const settingList = settings.map((item, index) => {
    return (
      <div key={index}>
        <IonItem button onClick={() => showDetail(item.title)} lines="none">
          <div className="justify-content-center align-item-center">
            <span className="account-setting-icon-font-size">
              <i className={item.icon}></i>
            </span>
          </div>
          <label className="align-self-center label-padding-left">{item.title}</label>
        </IonItem>
      </div>
    );
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonBackButton defaultHref="login" text="" className="disabled-button"/>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="justify-content-center">
        <IonRow>
          <IonList style={{width: '100%'}}>
            {settingList}
          </IonList>
        </IonRow>
        <hr className="seperator-hr"/>
        <IonButton fill="clear" onClick={(e) => {props.history.push('/logout')}}>Sign Out</IonButton>
        <div className="account-setting-version">
          <IonLabel>Version 1.0</IonLabel>
        </div>
      </IonContent>
      <BottomTabBar history={props.history} />
    </IonPage>
  );
};


export default AccountSetting;