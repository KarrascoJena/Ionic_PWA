import React from 'react'
import {IonPage, IonLabel, IonList, IonItem, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar} from '@ionic/react'

import './assets/scss/matchs.scss';

const Personal_Matches = [
  {
    img: './assets/imgs/slides/slide2.jpg',
    name: 'Christian',
    matches: 'nothing found'
  },
  {
    img: './assets/imgs/slides/slide9.jpeg',
    name: 'Morina',
    matches: 'nothing found'
  },
  {
    img: './assets/imgs/slides/slide3.jpg',
    name: 'Shrive',
    matches: 'nothing found'
  }
]

const Contact_Matches = [
  {
    img: './assets/imgs/slides/slide4.jpg',
    name: 'Daniela',
    matches: 'nothing found'
  },
  {
    img: './assets/imgs/slides/slide5.jpg',
    name: 'John',
    matches: 'nothing found'
  },
  {
    img: './assets/imgs/slides/slide6.jpg',
    name: 'Zakia',
    matches: 'nothing found'
  }
]
const Matchs: React.FC<{history}> = (props) => {

  const PersonalList = Personal_Matches.map((item, index) => {
    return (
      <IonItem key={index}>
        <IonRow>
          <IonCol size="3" className="avatar-border padding-right-20">
            <IonAvatar className="avatar-img">
              <img src={item.img} alt="" className="circle-border"/>
            </IonAvatar>
          </IonCol>
          <IonCol size="9" className="align-items-center">
            <div className="title">{item.name}</div>
            <div className="text">Matches: {item.matches}</div>
          </IonCol>
        </IonRow>
      </IonItem>
    );
  })

  const ContactList = Contact_Matches.map((item, index) => {
    return (
      <IonItem key={index}>
        <IonRow>
          <IonCol size="3" className="avatar-border padding-right-20">
            <IonAvatar className="avatar-img">
              <img src={item.img} alt="" className="circle-border"/>
            </IonAvatar>
          </IonCol>
          <IonCol size="9" className="align-items-center">
            <div className="title">{item.name}</div>
            <div className="text">Matches: {item.matches}</div>
          </IonCol>
        </IonRow>
      </IonItem>
    );
  })

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonTitle className="text-align-center">Matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="page-container">
          <br />
          <IonLabel className="text-align-left">Personal Matches</IonLabel>
          <IonList>
            {PersonalList}
          </IonList>
          <br />
          <IonLabel className="text-align-left">Contact Matches</IonLabel>
          <IonList>
            {ContactList}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Matchs