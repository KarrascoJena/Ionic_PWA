import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonAlert, IonToolbar, IonButtons, IonButton, IonList, IonItem, IonBackButton, IonInput } from '@ionic/react';
import { BackButton } from '../../../components/ion-custom/customElement'
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../../store/root-reducer";
import '../assets/scss/AccountSetting.scss';

const Password: React.FC<{history}> = (props) => {
  const  [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordRepeat: '',
  })

  const [alert, setAlert] = useState({
    state: false,
    header: '',
    content: ''
  })
  
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  const onChangeCheck = (e, field) => {
    setState({...state, [field]: e.target.value})
  }

  const savePassword = () => {
    rootDispatcher.changePassword(state.currentPassword, state.newPassword, state.newPasswordRepeat).then(res => {
      console.log(res)
      if(res?.status == 400){
        setAlert({state: true, content: res?.data.exceptionMessage, header: 'error'})
      } else if(res?.status == 200) {
        setAlert({state: true, content: res?.data, header: 'success'})
      }
    })
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <BackButton goBack={e => {props.history.goBack()}}/>
          <IonButtons slot="end">
            <IonButton onClick={(e) => {savePassword()}} strong={true}className="done-button">Save</IonButton>
          </IonButtons>
          <IonTitle>Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-list">
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'currentPassword')} placeholder="Current Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'newPassword')} placeholder="New Password"/>
          </IonItem>
  
          <IonItem lines="none" className="justify-content-space-between">
            <IonInput type="password" onIonChange={(e) => onChangeCheck(e, 'newPasswordRepeat')} placeholder="New Password again"/>
          </IonItem>
        </IonList>
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

export default Password