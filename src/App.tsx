import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useSelector } from "react-redux";
import { InitialState } from "./store/root-reducer";

import MainPage from './pages/MainPage'

import GetStart from './pages/GetStart/GetStart';
import Setting from './pages/Setting/Setting';

import AddContact from './pages/Contact/AddContact';
import ContactDetail from './pages/Contact/ContactDetail';
import NoContacts from './pages/Contact/NoContact';

import SelectAvatar from './pages/User/SelectAvatar';
import Discover from './pages/User/Discover';
import EditProfile from './pages/User/EditProfile';
import AddGift from './pages/Experiences/AddGift';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/Signup';
import PasswordForgotten from './pages/Auth/PasswordForgotten';


import EventActivate from './pages/Event/EventActivate';
import Confirmed from './pages/Event/Confirmed';
import Events from './pages/Event/EventsList';
import EventDetail from './pages/Event/EventDetail';
import EventBook from './pages/Event/EventBook';

import DiscoverVote from './pages/User/DiscoverVote';

import PrivateRoute from './components/private-route/PrivateRoute'

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
import MyContacts from './pages/Contact/Contacts';


const App: React.FC = (props) => {
  setupConfig({mode: 'ios'})
  const isLogin = useSelector<InitialState, boolean>((state: InitialState) => {
    return state.authorized
  });
  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={SignUp} exact={true} />
        <Route path="/password_forgotten" component={PasswordForgotten} exact={true} />
        <Route path="/getstart" component={GetStart} exact={true} />

        <Route path="/setting" component={Setting} exact={true} />
        <Route path="/main_page" component={MyContacts}>
          <MainPage />
        </Route>
        
        <PrivateRoute path="/discovervote" component={DiscoverVote} isLogin = {isLogin} exact={true} />

        <PrivateRoute path="/events_list" component={Events} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/event_detail" component={EventDetail} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/event_book" component={EventBook} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/events_activate" component={EventActivate} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/conformed" component={Confirmed} isLogin = {isLogin} exact={true} />

        <PrivateRoute path="/addcontact" component={AddContact} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/contactdetail" component={ContactDetail} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/no_contacts" component={NoContacts} isLogin = {isLogin} exact={true} />

        {/* <PrivateRoute path="/editprofile" component={EditProfile} isLogin = {isLogin} exact={true} /> */}
        <PrivateRoute path="/editprofile" component={EditProfile} isLogin = {isLogin} exact={true} />
        <PrivateRoute path="/selectavatar" component={SelectAvatar} isLogin = {isLogin} exact={true} />

        <PrivateRoute path="/discover" component={Discover} isLogin = {isLogin} exact={true} />

        <PrivateRoute path="/add_gift" component={AddGift} isLogin = {isLogin} exact={true} />
        <Route path="/" render={() => <Redirect to="/getstart" />} exact={true} />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;