import React, { useState } from 'react';
import { IonPage, IonInput, IonButton, IonTabBar,  IonAlert, IonTabButton, IonLabel, IonContent, IonLoading } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";

import './assets/scss/auth.scss';

interface Props {
  history: any
}

const LoginForm: React.FC<Props> = (props) => { 
  const [email, setEmail] = useState<string>('manuel.schwarz@live.at');
  const [password, setPassword] = useState<string>('Password1234!');
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content:''
  });
  const [signinDisabled, setSigninDisabled] = useState<boolean>(true)
  
  let history = useHistory()

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);


  const handleSubmit = (e) => {
    setShowLoading(true)
    rootDispatcher.login(email, password).then(res => {
      const status = res?.status
      setShowLoading(false)
      if(status === 401){
        setAlert({state: true, header: 'server is not working', content: 'try again later'})
      } else if (status === 400){
        setAlert({state: true, header: 'Authentication failed', content: `${res?.data.exceptionMessage}`})
      } else if (status === 200){
        history.push('/main_page/contacts')
      }
    })
  };     

  const handleUsernameChange = (e) => {
    setEmail(e.target.value)
    checkFilled()
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkFilled()
  };

  const gotoSignUp = () => {
    history.push('/register')
  }

  const gotoForgottenPassword = () => {
    history.push('/password_forgotten')
  }
  const checkFilled = () => {
    if(email !== '' && password !== '') {
      setSigninDisabled(false)
    } else {
      setSigninDisabled(true)
    }
  }
  return (
    <IonPage>
      <div>
        <div className="header_brand_image justify-content-center">
          <img alt="" src="./assets/imgs/brand_black.png" onClick={() => {history.push('')}}></img>
        </div>
      </div>
      <IonContent>
        <IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          message={'Please wait...'}
        />
        <div className="landing-container margin-top-20">
          <div className="bordered-text-input margin-top-20 text-align-left text-box">
            <IonInput value={email} onIonChange={handleUsernameChange} placeholder = "Username or email" />
          </div>
          <div className="bordered-text-input margin-top-20 text-align-left text-box">
            <IonInput value={password} type="password" onIonChange={handlePasswordChange} placeholder = "Password" />
          </div>
          <IonButton onClick={handleSubmit} disabled={signinDisabled} expand="block" className="margin-top-20 signin-button red-button text-transform-none">Sign In</IonButton>
          <IonAlert
            isOpen={alert.state}
            onDidDismiss={() => setAlert({state: false, header: '', content: ''})}
            cssClass='my-custom-class'
            header={alert.header}
            message={alert.content}
            buttons={['OK']}
          />
          <p className="btn-separator"><span>OR</span></p>
          <IonButton onClick={handleSubmit} expand="block" fill="clear" className="margin-top-20 signin-with-facebook text-transform-none">
            <span className="account-setting-icon-font-size" style={{marginRight: '10px'}}>
              <i className="fab fa-facebook-square"></i>
            </span>
            Sign in with Facebook
          </IonButton>
          <div className="text-align-center">
            <IonButton fill="clear" size="small" onClick={gotoForgottenPassword} className="text text-transform-none">Forget password?</IonButton>
          </div>
          <div className="align-item-center justify-content-center padding-top-50">
            <IonLabel className="text">Don't have an account? </IonLabel>
            <IonButton fill="clear" color="primary" size="small" onClick={gotoSignUp} className="link-main text-transform-none">Sign Up</IonButton>
          </div>
        </div>
      </IonContent>
      <IonTabBar slot="bottom" className="bottom-tab-bar-background-color bottom-icon-height">
        <IonTabButton tab="about" onClick={() => {props.history.push('./discovervote')}}>
          ABOUT
        </IonTabButton>

        <IonTabButton tab="help">
          HELP
        </IonTabButton>
        <IonTabButton tab="privacy">
          PRIVACY
        </IonTabButton>

        <IonTabButton tab="terms">
          TERMS
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default LoginForm;