import React from 'react'
import {IonPage, IonList, IonItem, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonNav } from '@ionic/react'

import BottomTabBar from '../../components/bottom-tab-bar';
import './assets/scss/Experiences.scss';

const Personal_Matches = [
  {
    icon: 'fal fa-lock-alt',
    title: 'Available',
    text: 'experiences are waiting for you'
  },
  {
    icon: 'fal fa-lock-alt',
    title: 'Bought',
    text: '3 experiences you can gift to your favorites'
  },
  {
    icon: 'fal fa-lock-alt',
    title: 'Statistic',
    text: 'Badge Level: hero You completed 16 experiences'
  },
  {
    icon: 'fal fa-lock-alt',
    title: 'Statistic',
    text: 'Badge Level: hero You completed 16 experiences'
  },
  {
    icon: 'fal fa-lock-alt',
    title: 'Wallet',
    text: '€ 23,- are available for your next experience'
  }
];

const Experiences: React.FC<{history}> = (props) => {

  const PersonalList = Personal_Matches.map((item, index) => {
    return (
      <IonItem key={index} lines="none" className="background-grey-light">
        <IonRow className="background-grey-light margin-top-10 width-100">
          <IonCol size="3" className="avatar-border padding-right-10 padding-left-20">
            <div className="circle-icon large-icon password-forgotten-huge-icon">
              <i className={item.icon}></i>
            </div>
          </IonCol>
          <IonCol size="9" className="align-items-center">
            <div className="title">{item.title}</div>
            <div className="text">{item.text}</div>
          </IonCol>
        </IonRow>
      </IonItem>
    );
  })

   return(
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonTitle className="text-align-center">Experiences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="page-container">
          <br />
          <div className="justify-content-center">
            <IonButton className="red-button text-transform-none">Add Gifted Experience</IonButton>
          </div>
          <br />
          <IonList>
            {PersonalList}
          </IonList>
          <br />
          
        </div>
      </IonContent>
      <BottomTabBar history={props.history} />
    </IonPage>
  );
}

export default Experiences