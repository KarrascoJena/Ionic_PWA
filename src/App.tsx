import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import getStart from './pages/GetStart/GetStart';
import setting from './pages/GetStart/Setting';
import myAccount from './pages/Contact/MyContacts';
import editProfile from './pages/User/EditProfile';
import contactDetail from './pages/Contact/ContactDetail';
import selectAvatar from './pages/User/SelectAvatar';
import discoverVote from './pages/User/DiscoverVote';
import login from './pages/Auth/Login';
import logout from './pages/Auth/Logout'

/* apollo client part */
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import config from './config';

/* okta auth part */
import { Security, LoginCallback } from '@okta/okta-react';

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


const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss:experiencehasura.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          //Authorization: `Bearer ${authToken}`
          "x-hasura-access-key": "f23aee34c10c1abda86bcb1321c398f2553923f461e5abd2ce704179723cc4ff",
          "x-hasura-role": "client-app",
        }
      }
    }
  }),
  cache: cache
});



const App: React.FC<{}> = (props) => {

  const customAuthHandler = (props) => {props.history.push('/login')}
  return (
    <ApolloProvider client={client}>
      <IonApp>
        <Security {...config.okta} onAuthRequired={customAuthHandler}>
          <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/login" component={login} exact={true} />
                <Route path="/logout"  component={logout} exact={true} />
                <Route path="/getstart" component={getStart} exact={true} />
                <Route path="/setting" component={setting} exact={true} />
                <Route path="/mycontacts" component={myAccount} exact={true} />
                <Route path="/editprofile" component={editProfile} exact={true} />
                <Route path="/contactdetail" component={contactDetail} exact={true} />
                <Route path="/selectavatar" component={selectAvatar} exact={true} />
                <Route path="/discovervote" component={discoverVote} exact={true} />
                <Route path="/implicit/callback" component={LoginCallback} exact />
                <Route path="/" render={() => <Redirect to="/getstart" />} exact={true} />
                <Route component={getStart} />
              </IonRouterOutlet>
          </IonReactRouter>
        </Security>
      </IonApp>
    </ApolloProvider>
  );
}
export default App;
