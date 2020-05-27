import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons } from '@ionic/react';
import { } from 'ionicons/icons';

import '../theme/pages/SelectAvatar.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack();
}

const gotoContactDetail = (e, props) => {
  e.preventDefault();
  props.history.push('/contactdetail');
}

const changeAvatar = (e, props) => {
  
}

const contacts = [
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
];

const SelectAvartar: React.FC = (props) => {

  const  [selectedNo, setSelectedNo] = useState(-1);

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => changeAvatar(e, props)} size="4" className="grid-img" key={index}>
          <img className={selectedNo === index ? "" : "not-selected"} src={item.img} onClick={() => {setSelectedNo(index)}} alt=""/>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonButton onClick={(e) => gotoBack(e, props)} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoContactDetail(e, props)} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SelectAvartar;
