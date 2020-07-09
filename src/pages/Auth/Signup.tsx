import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { IonPage, IonContent, IonInput, IonButton, IonTabBar, IonHeader, IonAlert, IonItem, IonTabButton, IonLabel } from '@ionic/react';

import './assets/scss/auth.scss';

const Signup: React.FC<{ history:any; }> = (props) => { 
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

  const handleFullNameChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  const gotoSignIn = () => {
   props.history.push('/login')
  }

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <img src="./assets/imgs/brand.png"></img>
      </IonHeader>
      <IonContent>
        <div className="signin-container">
          <IonLabel className="singup-header-text">
            Sign up to find experiences for your friends and you.
          </IonLabel>
          <IonButton onClick={handleSubmit} expand="block" className="signin-button signup-facebook">Sign in with Facebook</IonButton>
          <p className="btn-separator"><span>OR</span></p>
          <IonItem className="input-block">
            <IonInput value={email} onIonChange={handleEmailChange} placeholder = "Email" />
          </IonItem>
          <IonItem className="input-block">
            <IonInput value={fullname} onIonChange={handleFullNameChange} placeholder = "Full Name" />
          </IonItem>
          <IonItem className="input-block">
            <IonInput value={username} onIonChange={handleUsernameChange} placeholder = "Username?" />
          </IonItem>
          <IonItem className="input-block">
            <IonInput value={password} onIonChange={handlePasswordChange} placeholder = "Password?" />
          </IonItem>
          <IonButton onClick={handleSubmit} expand="block" className="singup-button">Sign Up</IonButton>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
          <IonLabel className="singup-header-text">
            By signing up, you agreeto our Terms Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar tecnologies in out Cookies Policy
          </IonLabel>
          <div className="align-item-center justify-content-center">
            <IonLabel>Have an account? </IonLabel>
            <IonButton fill="clear" color="primary" size="small" onClick={gotoSignIn}>Sign In</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;