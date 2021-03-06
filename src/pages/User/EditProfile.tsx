import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IonDatetime, IonSelect, IonSelectOption, IonLabel, IonAvatar, IonInput, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonItem } from '@ionic/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ChoosePhoto from '../../components/change-photo';

import { useSelector } from "react-redux";
import { InitialState } from "../../store/root-reducer";
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";


import './assets/css/EditProfile.scss'

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack()
}

const gotoMyContacts = (e, props) => {
  e.preventDefault();
  props.history.push('/main_page/contacts');
}

const EditProfile: React.FC<{history}> = (props) => {
  const userInfo = useSelector<InitialState, any>((state: InitialState) => {
    return state.userInfo
  });

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);
  const [state, setState] = useState({
    fetched: false,
    fullName: '',
    username: userInfo.userName,
    gender: 'Female',
    birthday: '',
    city: '',
    status: 'Relationship',
    children: 2,
  })

  useLayoutEffect(() => {
    rootDispatcher.getUsers(userInfo.id).then(res => {
      console.log(res?.data)
      setState({
        ...state,
        fullName: res?.data.fullName,
        gender: res?.data.gender,
        birthday: res?.data.birthday,
        city: res?.data.city,
        status: res?.data.userRelationshipStatusId,
        children: res?.data.children,
        fetched: true
      })
    })
  }, []);

  const onChangeName = (e) => {
    setState({...state, fullName: e.target.value})
  }
  
  const onChangeUserName = (e) => {
    setState({...state, username: e.target.value})
  }

  const onChangeBirthday = (e) => {
    e.preventDefault();
    console.log(e.detail.value)
    setState({...state, birthday: e.detail.value})
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
  
  if(state.fetched === false) return (<></>);
  else {
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
                <img alt="" src="https://experiencecontent.blob.core.windows.net/user/901890a5-64c1-468d-a603-930c724e082a/profile.jpg" />
              </IonAvatar>
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
  
          <ChoosePhoto title="Change profile photo" history={props.history}/>
  
          <IonRow>
            <IonCol size="3" className="align-item-center">
              <IonLabel>Name*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonInput value={state.fullName} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeName(e)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
  
          <IonRow>
            <IonCol size="3" className="align-item-center">
              <IonLabel>Username*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonInput value={state.username} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeUserName(e)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
  
  
          <IonRow>
            <IonCol size="3" className="align-item-center">
              <IonLabel>Gender</IonLabel>
            </IonCol>
            <IonCol size="9" className="gender-padding-left">
              <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <FormControlLabel value="Male" control={<Radio color="primary" />} label="female" checked={state.gender === 'Male'} onChange={(e) => {onChangeGender(e)}}/>
                  <FormControlLabel value="Female" control={<Radio color="primary" />} label="male" checked={state.gender === 'Female'} onChange={(e) => {onChangeGender(e)}}/>
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
                <IonSelect value={state.status} onIonChange={(e) => {onChangeStatus(e)}} interface="popover" className="ion-select-custom relation-ship-width">
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
                  <IonSelectOption value={0}>0</IonSelectOption>
                  <IonSelectOption value={1}>1</IonSelectOption>
                  <IonSelectOption value={2}>2</IonSelectOption>
                  <IonSelectOption value={3}>3</IonSelectOption>
                  <IonSelectOption value={4}>4</IonSelectOption>
                  <IonSelectOption value={5}>5</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
};

export default EditProfile;
