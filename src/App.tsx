import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useSelector } from "react-redux";
import { InitialState } from "./store/root-reducer";

import getStart from './pages/GetStart/GetStart';
import setting from './pages/Setting/Setting';
import noContacts from './pages/Contact/NoContact';
import accountSetting from './pages/Setting/AccountSetting';
import searchOverview from './pages/Search/Search';
import contactDetail from './pages/Contact/ContactDetail';
import selectAvatar from './pages/User/SelectAvatar';
import discoverVote from './pages/User/DiscoverVote';
import discover from './pages/User/Discover';
import editProfile from './pages/User/EditProfile';
import myContacts from './pages/Contact/MyContacts';
import matchs from './pages/Matchs/matchs';
import experiences from './pages/Experiences/Experiences';
import addGift from './pages/Experiences/AddGift';
import login from './pages/Auth/Login';
import signUp from './pages/Auth/Signup';
import passwordForgotten from './pages/Auth/PasswordForgotten';
import notifications from './pages/Setting/Notifications/Notifications'
import securitySetting from './pages/Setting/Security/Security'
import emailAndSMS from './pages/Setting/Notifications/EmailAndSMS';
import password from './pages/Setting/Security/Password';

import eventActivate from './pages/Event/EventActivate';
import confirmed from './pages/Event/Confirmed';
import events from './pages/Event/EventsList';
import eventDetail from './pages/Event/EventDetail';
import eventBook from './pages/Event/EventBook';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/index.scss';


const App: React.FC = (props) => {
  const isLogin = useSelector<InitialState, boolean>((state: InitialState) => {
    return state.authorized
  });
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route component={getStart} />
          <Route path="/login" component={login} exact={true} />
          <Route path="/register" component={signUp} exact={true} />
          <Route path="/password_forgotten" component={passwordForgotten} exact={true} />
          <Route path="/getstart" component={getStart} exact={true} />
          <Route path="/setting" component={setting} exact={true} />

          <Route path="/account_setting" component={isLogin ? accountSetting : redirectToLogin} exact={true} />

          <Route path="/account_setting/notifications" component={isLogin ? notifications : redirectToLogin} exact={true} />
          <Route path="/account_setting/notifications/emailandsms" component={isLogin ? emailAndSMS : redirectToLogin} exact={true}/>
          <Route path="/account_setting/security" component={isLogin ? securitySetting : redirectToLogin} exact={true} />
          <Route path="/account_setting/security/password" component={isLogin ? password : redirectToLogin} />
          
          <Route path="/events_list" component={isLogin ? events : redirectToLogin} exact={true} />
          <Route path="/event_detail" component={isLogin ? eventDetail : redirectToLogin} exact={true} />
          <Route path="/event_book" component={isLogin ? eventBook : redirectToLogin} exact={true} />
          <Route path="/events_activate" component={isLogin ? eventActivate : redirectToLogin} exact={true} />
          <Route path="/conformed" component={isLogin ? confirmed : redirectToLogin} exact={true} />

          <Route path="/mycontacts" component={isLogin ? myContacts : redirectToLogin} exact={true} />

          <Route path="/no_contacts" component={isLogin ? noContacts : redirectToLogin} exact={true} />
          <Route path="/search_overview" component={isLogin ? searchOverview : redirectToLogin} exact={true} />
          <Route path="/editprofile" component={isLogin ? editProfile : redirectToLogin} exact={true} />
          <Route path="/contactdetail" component={isLogin ? contactDetail : redirectToLogin} exact={true} />
          <Route path="/selectavatar" component={isLogin ? selectAvatar : redirectToLogin} exact={true} />
          <Route path="/discovervote" component={isLogin ? discoverVote : redirectToLogin} exact={true} />
          <Route path="/discover" component={isLogin ? discover : redirectToLogin} exact={true} />
          <Route path="/matches" component={isLogin ? matchs : redirectToLogin} exact={true} />
          <Route path="/experiences" component={isLogin ? experiences : redirectToLogin} exact={true} />
          <Route path="/add_gift" component={isLogin ? addGift : redirectToLogin} exact={true} />
          <Route path="/" render={() => <Redirect to="/getstart" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}


const redirectToLogin: React.FC = (props) => {
  return(
    <Redirect to="login" />
  );
}
export default App;