import React from 'react';
import { IonTabBar, IonTabButton, IonBadge } from '@ionic/react';

import '../../theme/pages/MyContacts.scss';

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


const BottomTabBar: React.FC<{history}> = (props) => {

  return (

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
  );
};

export default BottomTabBar;