import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { IonPage, IonContent, IonInput, IonButton, IonTabBar, IonHeader, IonAlert, IonItem, IonTabButton, IonLabel } from '@ionic/react';

import './assets/scss/auth.scss';
import './assets/scss/passwordForgotten.scss';

const PasswordForgotten: React.FC<{ history:any; }> = (props) => { 
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({ issuer: process.env.REACT_APP_ISSUER });
    oktaAuth.signIn({options: {warnBeforePasswordExpired: true, multiOptionalFactorEnroll: false}, username, password })
    .then(res => {
      console.log(res)
      const sessionToken = res.sessionToken;
      setSessionToken(sessionToken);
      // sessionToken is a one-use token, so make sure this is only called once
      authService.redirect({ sessionToken });
      props.history.push('/mycontacts')
    })
    .catch((err) => {
      console.log(err.name)
      console.log(err)
      if(!err.errorCode){
        setAlert({state: true, header: 'server is not working', content: 'try again later'})
      } else if (err.errorCode == "E0000004"){
        setAlert({state: true, header: 'Authentication failed', content: 'Username and Password was wrong'})
      } else if (err.errorCode == "E0000001"){
        setAlert({state: true, header: 'Authentication failed', content: 'type the validate username and password'})
      }
    });
  };     

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const gotoSignIn = () => {
   props.history.push('/login')
  }

  const gotoSignUp = () => {
    props.history.push('/register')
  }

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <IonPage>
      <div className="header_brand_image justify-content-center">
        <img src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="signin-container">
          <div className="circle-icon huge-icon password-forgotten-huge-icon">
            <i className="fal fa-lock-alt"></i>
          </div>
          <div>
            <IonLabel className="large-title">
              Trouble Login in?
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <IonLabel className="truble-login-text disabled-button">
              Enter your email and we'll send you a link to get back into your account.
            </IonLabel>
          </div>
          <div className="truble-login-margin">
            <div className="bordered-text-input margin-top-10 text-align-left text-box">
              <IonInput value={email} onIonChange={handleEmailChange} placeholder = "Email" />
            </div>
          </div>
          <div className="truble-login-margin">
            <IonButton onClick={handleSubmit} expand="block" className="margin-top-20 red-button">Send Sign In Link</IonButton>
          </div>
          <div className="truble-login-margin">
            <p className="btn-separator truble-login-margin"><span>OR</span></p>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={gotoSignUp}><span className="font-size-16">Create New Account</span></IonButton>
          </div>
          <div className="truble-login-margin">
            <IonButton fill="clear" color="dark" size="small" onClick={gotoSignIn}><span  className="font-size-16">Back to Sign In</span></IonButton>
          </div>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PasswordForgotten;