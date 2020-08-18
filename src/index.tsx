import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import * as serviceWorker from './serviceWorker';
import './i18next';
import { Provider } from 'react-redux';
import { store } from './store/index';

defineCustomElements(window);

ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~</div>)}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
