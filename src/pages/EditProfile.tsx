import React, { useState } from 'react';
import { IonTabs, IonDatetime, IonSelect, IonSelectOption, IonLabel, IonTabBar, IonInput, IonTabButton, IonIcon, IonBadge, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonList, IonItem, IonItemDivider } from '@ionic/react';
import { peopleOutline, searchOutline, heartOutline, trailSignOutline } from 'ionicons/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import './EditProfile.css';
import '../theme/pages/EditProfile.css'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack()
}

const gotoMyContacts = (e, props) => {
  e.preventDefault();
  props.history.push('/mycontacts');
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    inputTextForm: {
      borderRadius: '5px',
      borderColor: 'red'
    }
  }),
);

const EditProfile: React.FC = (props) => {
  const classes = useStyles();

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
            <IonButton onClick={(e) => gotoBack(e, props)}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoMyContacts(e, props)}>Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow>
          <IonCol size="4"></IonCol>
          <IonCol size="4">
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_settings/u41.png?token=b8149e9dc60237bdb6472331d27ee7d3800d4cc93600b998644097cf96aa2a63" />
          </IonCol>
          <IonCol size="4"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="2"></IonCol>
          <IonCol size="8">
            <a>Change profile photo</a>
          </IonCol>
          <IonCol size="2"></IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="input-label-custom">
            <IonLabel>Name</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.name} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeName(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="input-label-custom">
            <IonLabel>GENDER</IonLabel>
          </IonCol>
          <IonCol size="9" className="gender-padding-left">
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="male" control={<Radio color="primary" />} label="weiblish" checked={state.gender === 'male'} onChange={(e) => {onChangeGender(e)}}/>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="mannlish" checked={state.gender === 'female'} onChange={(e) => {onChangeGender(e)}}/>
              </RadioGroup>
            </FormControl>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="input-label-custom">
            <IonLabel>Birthday</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonDatetime value={state.birthday} placeholder="Select Date" className="ion-datetime-custom"></IonDatetime>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="input-label-custom">
            <IonLabel>City</IonLabel>
          </IonCol>
          <IonCol size="9">
            <IonItem>
              <IonInput value={state.city} clearInput={true} className="" onIonChange={(e) => onChangeCity(e)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="3" className="input-label-custom">
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
          <IonCol size="3" className="input-label-custom">
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
            <img alt="" src="./assets/imgs/daiamond.png"/>
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
