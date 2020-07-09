import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonLabel } from '@ionic/react';

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
const AccountSetting: React.FC<{history}> = (props) => {
  const [state, setState] = useState({
    contactEmail: "chris@huhu.com",
    telNumber: '+43 664 049 4493',
    facebookUsername: 'chris23424',
    instagramEmail: 'chris@huhu.com',
    whatsAppNumber: '+43 664304938'
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoBack(e, props)} slot="start">
            <i className="fal fa-cog custom-icon-size-small" slot="start"></i>
          </div>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="justify-content-center">
        <IonRow className="account-setting-item">
          <IonCol size="10" className="input-label-custom">
            {renderOccasionIcon("fal fa-bell", "Notifications")}
          </IonCol>
          <IonCol size="1">
            <IonButton fill="clear" onClick={(e) => onChangeCheck(e, 'getstart', props)} className="black-button-text"><i className="fal fa-cog custom-icon-size-small" slot="start"></i></IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="account-setting-item">
          <IonCol size="10" className="input-label-custom">
            {renderOccasionIcon("fal fa-shield-check", "Security")}
          </IonCol>
          <IonCol size="1">
            <IonButton fill="clear" onClick={(e) => onChangeCheck(e, 'getstart', props)} className="black-button-text"><i className="fal fa-cog custom-icon-size-small" slot="start"></i></IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="account-setting-item">
          <IonCol size="10" className="input-label-custom">
            {renderOccasionIcon("fal fa-user-circle", "Account")}
          </IonCol>
          <IonCol size="1">
            <IonButton fill="clear" onClick={(e) => onChangeCheck(e, 'getstart', props)} className="black-button-text"><i className="fal fa-cog custom-icon-size-small" slot="start"></i></IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="account-setting-item">
          <IonCol size="10" className="input-label-custom">
            {renderOccasionIcon("fal fa-question-circle", "Help")}
          </IonCol>
          <IonCol size="1">
            <IonButton fill="clear" onClick={(e) => onChangeCheck(e, 'getstart', props)} className="black-button-text"><i className="fal fa-cog custom-icon-size-small" slot="start"></i></IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="account-setting-item">
          <IonCol size="10" className="input-label-custom">
            {renderOccasionIcon("fal fa-info-circle", "About")}
          </IonCol>
          <IonCol size="1">
            <IonButton fill="clear" onClick={(e) => onChangeCheck(e, 'getstart', props)} className="black-button-text"><i className="fal fa-cog custom-icon-size-small" slot="start"></i></IonButton>
          </IonCol>
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


const renderOccasionIcon = (icons, title) => {
  return (
    <IonRow>
      <div className="justify-content-center align-item-center">
        <span className="account-setting-icon-font-size">
          <i className={icons}></i>
        </span>
      </div>
      <label className="align-self-center label-padding-left">{title}</label>
    </IonRow>
  );
}

export default AccountSetting;