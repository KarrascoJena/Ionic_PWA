import React, { useState } from 'react';
import { IonPage, IonInput, IonButton, IonText, IonBackButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCol, IonRow, IonSelectOption, IonTextarea } from '@ionic/react';

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
          <IonButtons slot="start" onClick={(e) => {props.history.history('experiences')}}>
            <IonBackButton text="" className="disabled-button"/>
          </IonButtons>
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