import React, { useState } from 'react';
import { IonDatetime, IonSelect, IonSelectOption, IonLabel, IonTabBar, IonAvatar, IonInput, IonTabButton, IonIcon, IonBadge, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonItem } from '@ionic/react';
import { peopleOutline, searchOutline, heartOutline, trailSignOutline } from 'ionicons/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import '../theme/pages/EditProfile.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack()
}

const gotoMyContacts = (e, props) => {
  e.preventDefault();
  props.history.push('/mycontacts');
}

const EditProfile: React.FC = (props) => {

  const [state, setState] = useState({
    name: 'Edina',
    gender: 'female',
    birthday: Date(),
    city: 'Graz',
    status: 'Relationship',
    children: 2
  })

  const onChangeName = (e) => {
    setState({...state, name: e.target.value})
    console.log(state.birthday)
  }
  const onChangeBirthday = (e) => {
    console.log(e)
    setState({...state, birthday: e})
  }

  const onChangeGender = (e) => {
    setState({...state, gender: e.target.value})
  }

  const onChangeCity = (e) => {
    setState({...state, city: e.target.value})
  }  
  
  const onChangeStatus = (e) => {
    setState({...state, status: e.target.value})
  }
  
  const onChangeChildren = (e) => {
    setState({...state, children: e.target.value})
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonButton onClick={(e) => gotoBack(e, props)} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoMyContacts(e, props)} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content">
        <IonRow>
          <IonCol size="2"></IonCol>
          <IonCol size="8" className="justify-content-center">
            <IonAvatar class="profile-img-cover">
              <img alt="" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_overview/u26.png?token=c14a7f334166f6699c206821b3181cbe534ae07f3d0d6cd875622be59d71b9da" />
            </IonAvatar>
          </IonCol>
          <IonCol size="2"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="2"></IonCol>
          <IonCol size="8" className="text-align-center">
            <IonButton fill="clear">Change profile photo</IonButton>
          </IonCol>
          <IonCol size="2"></IonCol>
        </IonRow>
        <hr className="line-divider"/>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Name</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.name} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeName(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>GENDER</IonLabel>
          </IonCol>
          <IonCol size="9" className="gender-padding-left">
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="male" control={<Radio color="primary" />} label="female" checked={state.gender === 'male'} onChange={(e) => {onChangeGender(e)}}/>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="male" checked={state.gender === 'female'} onChange={(e) => {onChangeGender(e)}}/>
              </RadioGroup>
            </FormControl>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Birthday</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonDatetime value={state.birthday} onIonChange={(e) => {onChangeBirthday(e)}} placeholder="Select Date" className="ion-datetime-custom"></IonDatetime>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>City</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.city} clearInput={true} className="" onIonChange={(e) => onChangeCity(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Status</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonSelect value={state.status} onIonChange={(e) => {onChangeStatus(e)}} interface="popover" className="ion-select-custom">
                <IonSelectOption value="Single">Single</IonSelectOption>
                <IonSelectOption value="Married">Married</IonSelectOption>
                <IonSelectOption value="Divorced">Divorced</IonSelectOption>
                <IonSelectOption value="Relationship">Relationship</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="align-item-center">
            <IonLabel>Children</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonSelect value={state.children} onIonChange={(e) => {onChangeChildren(e)}} interface="popover" className="ion-select-custom">
                <IonSelectOption value={1}>1</IonSelectOption>
                <IonSelectOption value={2}>2</IonSelectOption>
                <IonSelectOption value={3}>3</IonSelectOption>
                <IonSelectOption value={4}>4</IonSelectOption>
                <IonSelectOption value={5}>> 5</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

      </IonContent>

      {/* <IonTabs> */}
        {/* <IonRouterOutlet></IonRouterOutlet> */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="speakers">
            <IonIcon icon={trailSignOutline} />
          </IonTabButton>

          <IonTabButton tab="schedule">
            <IonIcon icon={heartOutline} />
            <IonBadge>2</IonBadge>
          </IonTabButton>

        
          <IonTabButton tab="map">
            <img src="./assets/imgs/daiamond.png" alt="" />
          </IonTabButton>

          <IonTabButton tab="about">
            <IonIcon icon={searchOutline} />
          </IonTabButton>
          
          <IonTabButton tab="about">
            <IonIcon icon={peopleOutline} />
          </IonTabButton>
        </IonTabBar>
      {/* </IonTabs> */}
    </IonPage>
  );
};

export default EditProfile;
