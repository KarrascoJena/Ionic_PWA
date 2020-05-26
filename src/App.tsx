import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import getStart from './pages/GetStart';
import myAccount from './pages/MyContacts';
import editProfile from './pages/EditProfile';
import contactDetail from './pages/ContactDetail';
import selectAvatar from './pages/SelectAvatar';
import discoverVote from './pages/DiscoverVote';

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
import './theme/index.scss'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/getstart" component={getStart} exact={true} />
          <Route path="/mycontacts" component={myAccount} exact={true} />
          <Route path="/editprofile" component={editProfile} exact={true} />
          <Route path="/contactdetail" component={contactDetail} exact={true} />
          <Route path="/selectavatar" component={selectAvatar} exact={true} />
          <Route path="/discovervote" component={discoverVote} exact={true} />
          <Route path="/" render={() => <Redirect to="/getstart" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
