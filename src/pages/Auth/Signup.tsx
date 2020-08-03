import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonAlert, IonLabel } from '@ionic/react';
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";


import './assets/scss/auth.scss';

const Signup: React.FC<{ history:any; }> = (props) => { 
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  const handleSubmit = (e) => {

    rootDispatcher.register(fullname, username, password, email, fullname).then(res => {
      const status = res?.status
      if(status == 401){
        setAlert({state: true, header: 'server is not working', content: 'try again later'})
      } else if (status == 400){
        setAlert({state: true, header: 'Authentication failed', content: `${res?.data.exceptionMessage}`})
      } else {
        props.history.push('/login')
      }
    })
  };
       
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullname(e.target.value);
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

  return (
    <IonPage>
      <div className="header_brand_image justify-content-center">
        <img alt="" src="./assets/imgs/brand_black.png"></img>
      </div>
      <IonContent>
        <div className="landing-container">
          <div className="singup-header-text padding-top-20 title">
            Sign up to find experiences for your friends and you.
          </div>
          <IonButton onClick={()=>{}} expand="block" className="margin-top-20 signin-with-facebook red-button color-white justify-content-space-between text-transform-none">
          <span className="facebook-icon-size">
            <i className="fab fa-facebook-square"></i>
          </span>
            Sign in with Facebook
          </IonButton>
          <p className="btn-separator"><span>OR</span></p>
          <div className="bordered-text-input margin-top-10 text-align-left text-box">
            <IonInput value={email} onIonChange={handleEmailChange} placeholder = "Email" />
          </div>
          <div className="bordered-text-input margin-top-10 text-align-left text-box">
            <IonInput value={fullname} onIonChange={handleFullNameChange} placeholder = "Full Name" />
          </div>
          <div className="bordered-text-input margin-top-10 text-align-left text-box">
            <IonInput value={username} onIonChange={handleUsernameChange} placeholder = "Username" />
          </div>
          <div className="bordered-text-input margin-top-10 text-align-left text-box">
            <IonInput value={password} type="password" onIonChange={handlePasswordChange} placeholder = "Password" />
          </div>
          <IonButton onClick={handleSubmit} expand="block" className="margin-top-20 red-button text-transform-none">Sign Up</IonButton>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
          <IonLabel className="text">
            <br />
            By signing up, you agreeto our Terms Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar tecnologies in out Cookies Policy
          </IonLabel>
          <div className="align-item-center justify-content-center disabled-button">
            <IonLabel className="text">Have an account? </IonLabel>
            <IonButton fill="clear" color="primary" size="small" onClick={gotoSignIn} className="link-main text-transform-none">Sign In</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;