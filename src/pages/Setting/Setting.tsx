import React from 'react';
import { IonPage, IonRow, IonCol, IonLabel, IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonButton, IonContent } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";

import './assets/scss/Setting.scss'


const Setting: React.FC<{history}> = (props) => {
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);
  const { i18n, t } = useTranslation();
  
  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
    rootDispatcher.setLanguage(e.target.value);
  }

  const gotoBack = (e, props) => {
    props.history.goBack()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header text-align-center">
          <div onClick={(e) => gotoBack(e, props)} slot="end">
            <i className="fal fa-times custom-icon-size-small"></i> 
          </div>
          <IonTitle>{config.brand.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <div className="margin-left-5">
            <IonLabel className="title">Language</IonLabel>
            <IonRow>
              <IonCol size="5" className="select">
                <IonSelect value={i18n.language} onIonChange={(e) => {onChangeLanguage(e)}} interface="popover" className="ion-select-custom relation-ship-width">
                  <IonSelectOption value="en">{t('general.english')}</IonSelectOption>
                  <IonSelectOption value="de">{t('general.german')}</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
          </div>
          <div className="margin-left-5">
            <IonRow>
              <IonCol size="6">
                <IonLabel className="title margin-left-7">Company</IonLabel>
                <br />
                <IonButton fill="clear" color="dark" size="small">Privacy</IonButton>
              </IonCol>
              <IonCol size="6">
                <IonLabel className="title margin-left-7">Legal</IonLabel>
                <br />
                <IonButton fill="clear" color="dark" size="small">Privacy</IonButton>
                <br />
                <IonButton fill="clear" color="dark" size="small">Terms</IonButton>
                <br />
                <IonButton fill="clear" color="dark" size="small">Cookie Policy</IonButton>
                <br />
                <IonButton fill="clear" color="dark" size="small">Intellectual</IonButton>
                <br />
                <IonButton fill="clear" color="dark" size="small">Property</IonButton>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
