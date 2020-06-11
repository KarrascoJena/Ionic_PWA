import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonBadge, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import { peopleOutline, searchOutline, heartOutline, trailSignOutline } from 'ionicons/icons';

import '../theme/pages/MyContacts.scss'

const gotoGetStart = (e, props) => {
  e.preventDefault();
  props.history.push('/getstart');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const gotoContactDetail = (e, props) => {
  props.history.push('/contactdetail');
}

const contacts = [
  {
    img: 'https://experiencecontent.blob.core.windows.net/user/5717f23a-d765-48d6-ac16-f11169860c19/profile.jpg',
  },
  {
    img: 'https://experiencecontent.blob.core.windows.net/user/2fb1c8e4-42a4-43a6-a337-b8cc52c83d3f/profile.jpg',
  },
];

const MyAccount: React.FC<{history}> = (props) => {

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, props)} size="4" className="grid-img" key={index}>
        <img className="img-auto card-effect" src={item.img} alt=""/>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen">
          <span className="pencil-icon circle-icon">
            <i className="fal fa-pencil-alt"></i>
          </span>
        </div>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoGetStart(e, props)} slot="start">
            <i className="fal fa-cog custom-icon-size-small" slot="start"></i>
          </div>
          <div onClick={(e) => gotoEditProfile(e, props)} slot="end">
            <i className="far fa-user custom-icon-size-small" slot="end" ></i>
          </div>
          <IonTitle>My Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
          <IonCol size="4" className="grid-img" >
            <div className="empty-img card-effect">
            </div>
            <div className="grid-img-button bottom-circle-icon box-shadow-full-screen full-fill-red-icon">
              <span className="circle-icon white-icon">
                <i className="fal fa-plus"></i>
              </span>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>

      {/* <IonTabs> */}
        {/* <IonRouterOutlet></IonRouterOutlet> */}
        <IonTabBar slot="bottom" className="bottom-tab-bar-background-color bottom-icon-height">
          <IonTabButton tab="speakers" onClick={() => {props.history.push('./discovervote')}}>
            <span className="tab-bar-icon custom-icon-size-small">
              <i className="fal fa-telescope"></i>
            </span>
          </IonTabButton>

          <IonTabButton tab="schedule">
            <span className="tab-bar-icon custom-icon-size-small ">
              <i className="fal fa-heart"></i>
            </span>
            <IonBadge>2</IonBadge>
          </IonTabButton>

        
          <IonTabButton tab="map">
            <span className="tab-bar-icon custom-icon-size-small">
              <i className="fal fa-book-spells"></i>
            </span>
          </IonTabButton>

          <IonTabButton tab="about">
            <span className="tab-bar-icon custom-icon-size-small">
              <i className="fal fa-search"></i>
            </span>
          </IonTabButton>
          
          <IonTabButton tab="about">
            <span className="tab-bar-icon custom-icon-size-small">
              <i className="fas fa-user-friends"></i>
            </span>
          </IonTabButton>
        </IonTabBar>
      {/* </IonTabs> */}
    </IonPage>
  );
};

export default MyAccount;
