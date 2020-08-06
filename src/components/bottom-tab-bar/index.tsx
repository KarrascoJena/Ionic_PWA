import React, {Fragment} from 'react';
import { IonTabBar, IonTabButton, IonBadge, IonLabel } from '@ionic/react';

import './assets/css/bottomTabBar.scss';

// const gotoGetStart = (e, props) => {
//   e.preventDefault();
//   props.history.push('/getstart');
// }

// const gotoEditProfile = (e, props) => {
//   e.preventDefault();
//   props.history.push('/editprofile');
// }

// const gotoContactDetail = (e, props) => {
//   props.history.push('/contactdetail');
// }

interface propsData {
  history: any,
  tab: string
}
const BottomTabBar: React.FC<propsData> = (props) => {
  return (

      <IonTabBar slot="bottom" className="bottom-tab-bar-background-color bottom-icon-height">
        <IonTabButton tab="speakers" onClick={() => {props.history.push('./discovervote')}}>
          <span className="tab-bar-icon custom-icon-size-small">
            <i className="fal fa-telescope"></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Discover</IonLabel>
        </IonTabButton>

        <IonTabButton tab="schedule" onClick={() => {props.history.push('./matches')}}>
          <span className="tab-bar-icon custom-icon-size-small ">
            <i className={props.tab == 'matche' ? 'fas fa-heart' : 'fal fa-heart'}></i>
          </span>
          <label className="bottom-tab-bar-button">Matches</label>
          <IonBadge>2</IonBadge>
        </IonTabButton>

      
        <IonTabButton tab="map" onClick={() => {props.history.push('./experiences')}}>
          <span className="tab-bar-icon custom-icon-size-small">
            <i  className={props.tab == 'experience' ? 'fas fa-book-spells' : 'fal fa-book-spells'}></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Experiences</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search_overview"  onClick={() => {props.history.push('./search_overview')}}>
          <span className="tab-bar-icon custom-icon-size-small">
            <i className={props.tab == 'search' ? 'fas fa-search' : 'fal fa-search'}></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Search</IonLabel>

        </IonTabButton>
        
        <IonTabButton tab="about"   onClick={() => {props.history.push('./myContacts')}}>
          <span className="tab-bar-icon custom-icon-size-small">
            <i className={props.tab == 'contact' ? 'fas fa-user-friends' : 'fal fa-user-friends'}></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Contacts</IonLabel>
        </IonTabButton>
      </IonTabBar>
  );
};

export default BottomTabBar;
