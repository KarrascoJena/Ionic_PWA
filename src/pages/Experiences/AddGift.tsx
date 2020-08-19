import React, { useState } from 'react';
import { IonPage, IonInput, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonRow } from '@ionic/react';
import { BackButton } from '../../components/ion-custom/customElement'

const AddGift: React.FC<{ history:any; }> = (props) => { 
  const [state, setState] = useState({
    code: '',
  })

  const handleCodeChange = (e) => {
    setState({...state, code: e.target.value})
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <BackButton goBack={e => {props.history.goBack()}}/>
          <IonTitle>Add</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="landing-container margin-top-20">
          <div className="text-align-left margin-top-10">
            <div className="title">Enter Code</div>
          </div>
          <IonRow className="margin-top-20">
            <IonCol size="2" className="align-item-center">
              <IonLabel>Code: </IonLabel>
            </IonCol>
            <IonCol size="10">
              <div className="bordered-text-input text-align-left text-box">
                <IonInput value={state.code} onIonChange={handleCodeChange} placeholder = "Enter Code" />
              </div>
            </IonCol>
          </IonRow>
          <div className="justify-content-center">
            <IonButton className="red-button width-50">Add</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddGift;