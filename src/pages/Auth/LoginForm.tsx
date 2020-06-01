import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { IonPage, IonContent, IonInput, IonButton, IonTitle, IonHeader } from '@ionic/react';


const LoginForm: React.FC<{ history:any; }> = (props) => { 
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) => {

    console.log(username)
    console.log(password)
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
    .catch(err => console.log('Found an error', err));
  };     

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Login</IonTitle>
      </IonHeader>
      <IonContent>
        <IonInput value={username} onIonChange={handleUsernameChange} placeholder = "Username?" />
        <IonInput value={password} onIonChange={handlePasswordChange} placeholder = "Password?" />
        <IonButton onClick={handleSubmit}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginForm;