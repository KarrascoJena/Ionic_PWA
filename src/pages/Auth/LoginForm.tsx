import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { IonPage, IonContent, IonInput, IonButton, IonTitle, IonHeader, IonAlert } from '@ionic/react';


const LoginForm: React.FC<{ history:any; }> = (props) => { 
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  
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
        <IonAlert
          isOpen={alert.state}
          onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
          cssClass='my-custom-class'
          header={alert.header}
          message={alert.content}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default LoginForm;