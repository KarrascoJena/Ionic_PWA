import React, { Fragment } from 'react';
import {
  IonTabButton, IonTabBar, IonLabel, IonBadge
} from '@ionic/react';
import { useSelector } from "react-redux";
import { InitialState } from "../store/root-reducer";

/* Core CSS required for Ionic components to work properly */
import PrivateRoute from '../components/private-route/PrivateRoute'

import Contacts from './Contact/Contacts';
import SearchOverview from '../pages/Search/Search';
import Experiences from '../pages/Experiences/Experiences';
import Matchs from '../pages/Matchs/matchs';
import AccountSetting from '../pages/Setting/AccountSetting';
import Notifications from '../pages/Setting/Notifications/Notifications'
import SecuritySetting from '../pages/Setting/Security/Security'
import EmailAndSMS from '../pages/Setting/Notifications/EmailAndSMS';
import Password from '../pages/Setting/Security/Password';
const MainPage: React.FC = (props) => {
  const isLogin = useSelector<InitialState, boolean>((state: InitialState) => {
    return state.authorized
  });

  return(
    <Fragment>
      
      <PrivateRoute path="/main_page/matchs" component={Matchs} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/experiences" component={Experiences} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/search_overview" component={SearchOverview} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/contacts" component={Contacts} isLogin = {isLogin} exact={true} />
      
      <PrivateRoute path="/main_page/account_setting" component={AccountSetting} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/account_setting/notifications" component={Notifications} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/account_setting/notifications/emailandsms" component={EmailAndSMS} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/account_setting/security" component={SecuritySetting} isLogin = {isLogin} exact={true} />
      <PrivateRoute path="/main_page/account_setting/security/password" component={Password} isLogin = {isLogin} />
      
      <PrivateRoute path="/main_page/" component={Contacts} isLogin = {isLogin} exact={true} />
        
      <IonTabBar slot="bottom" className="bottom-tab-bar-background-color bottom-icon-height" style={{position: 'fixed', width: '100%', bottom: '0', left: '0'}} >
        <IonTabButton tab="discovervote" href="/discovervote" onClick={() => {console.log('123')}}>
          <span className="tab-bar-icon custom-icon-size-small">
            <i className="fal fa-telescope"></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Discover</IonLabel>
        </IonTabButton>

        <IonTabButton tab="matches" href="/main_page/matchs">
          <span className="tab-bar-icon custom-icon-size-small ">
            <i className='fal fa-heart'></i>
          </span>
          <label className="bottom-tab-bar-button">Matches</label>
          <IonBadge>2</IonBadge>
        </IonTabButton>

      
        <IonTabButton tab="experiences" href="/main_page/experiences">
          <span className="tab-bar-icon custom-icon-size-small">
            <i  className='fal fa-book-spells'></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Experiences</IonLabel>
        </IonTabButton>

        <IonTabButton tab="searchoverview" href="/main_page/search_overview">
          <span className="tab-bar-icon custom-icon-size-small">
            <i className='fal fa-search'></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Search</IonLabel>

        </IonTabButton>
        
        <IonTabButton tab="myContacts" href="/main_page/contacts">
          <span className="tab-bar-icon custom-icon-size-small">
            <i className='fal fa-user-friends'></i>
          </span>
          <IonLabel className="bottom-tab-bar-button">Contacts</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </Fragment>
    )
}

export default MainPage;
