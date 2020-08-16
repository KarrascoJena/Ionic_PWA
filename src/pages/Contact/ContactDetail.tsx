import React, { useState, useLayoutEffect } from 'react';
import { IonDatetime, IonSelect, IonSelectOption, IonToggle, IonAvatar, IonLabel, IonRange, IonInput, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonItem, IonAlert } from '@ionic/react';
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ChoosePhoto from '../../components/change-photo';
import { initState } from './InitContactData' 

import './assets/scss/ContactDetail.scss';

const gotoBack = (e, props) => {
  e.preventDefault();
  props.history.goBack()
}

const gotoMyContacts = (e, props) => {
  e.preventDefault();
  props.history.push('/mycontacts');
}

const ContactDetail: React.FC<{history}> = (props) => {
  const location = useLocation()
  const [contact] = useState<any>(location.state);
  const [fetched, setFetched] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [relationshipStatus, setRelationshipStatus] = useState([]);
  const [validEmailError, setValidEmailError] = useState('');

  const [state, setState] = useState<any>({...initState});

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  useLayoutEffect(() => {
    rootDispatcher.getUserRelationshipStatus().then (res => {
      setRelationshipStatus(res?.data)
      console.log(res)
    })

    rootDispatcher.getContactDetail(contact.id).then( res => {
      setState({
        ...state,
        contactId: res?.data.contact.id,
        fullName: res?.data.user.fullName,
        gender: res?.data.user.gender,
        birthday: res?.data.user.birthday,
        contactRelationshipTypeId: res?.data.contact.contactRelationshipTypeId,
        city: res?.data.user.city,
        image: res?.data.user.image,
        travelRadius: res?.data.user.travelRadius,
        events: {...state.events, ...res?.data.contact.events},
        interests: {...state.interests, ...res?.data.user.interests},
        characteristics: {...state.characteristics, ...res?.data.user.characteristics},
        connections: {...state.connections, ...res?.data.user.connections}
      })
      console.log(state)
      console.log(res)
      setFetched(true);
    })

    

  }, [])

  const onChangeName = (e) => {
    setState({...state, name: e.target.value})
  }
  const onChangeBirthday = (e) => {
    setState({...state, birthday: e})
  }

  const onChangeGender = (e) => {
    setState({...state, gender: e.target.value})
  }

  const onChangeCity = (e) => {
    setState({...state, city: e.target.value})
  }  
  
  const onChangeRelationship = (e) => {
    setState({...state, contactRelationshipTypeId: e.target.value})
  }

  const onChangeCheck = (e, field) => {
    // setState({...state, [field]: !state[field]})
  }
  
  const onChangeConnections = (e, field) => {
    setState({...state, [field]: e.target.value})
    if(field === 'contactEmail'){
      if(!/.+@.+\.[A-Za-z]+$/.test(e.target.value)){
        setValidEmailError('please enter a valid email address')
      } else {
        setValidEmailError('')
      }
    }
  }
  if(fetched === false) return (<></>)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header header-bacground-color">
          <IonButtons slot="start">
            <IonButton onClick={(e) => gotoBack(e, props)} className="cancel-button">Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={(e) => gotoMyContacts(e, props)} strong={true} className="done-button">Done</IonButton>
          </IonButtons>
          <IonTitle>Edit Contact</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <div id="brife">
          <IonRow>
            <IonCol size="2"></IonCol>
            <IonCol size="8" className="justify-content-center">
              <IonAvatar class="profile-img-cover">
                <img src={state.image ? state.image : './assets/imgs/default_contact_avatar.png'} alt=""/>
              </IonAvatar>
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
          
          <ChoosePhoto title="Change profile photo" history={props.history}/>
          
          <IonRow>
            <IonCol size="3" className="input-label-custom">
              <IonLabel className="align-self-center">Name*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonInput value={state.fullName} autofocus={true} clearInput={true} className="" onIonChange={(e) => onChangeName(e)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="3" className="input-label-custom">
              <IonLabel className="align-self-center">Gender*</IonLabel>
            </IonCol>
            <IonCol size="9" className="gender-padding-left">
              <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <FormControlLabel value="Male" control={<Radio color="primary" />} label="female" checked={state.gender === 'Female'} onChange={(e) => {onChangeGender(e)}}/>
                  <FormControlLabel value="Female" control={<Radio color="primary" />} label="male" checked={state.gender === 'Male'} onChange={(e) => {onChangeGender(e)}}/>
                </RadioGroup>
              </FormControl>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="3" className="input-label-custom">
              <IonLabel className="align-self-center">Birthday*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonDatetime value={state.birthday} onIonChange={(e) => {onChangeBirthday(e)}} placeholder="Select Date" className="ion-datetime-custom"></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="3" className="input-label-custom">
              <IonLabel className="align-self-center" >Relationship*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonSelect value={state.contactRelationshipTypeId} onIonChange={(e) => {onChangeRelationship(e)}} interface="popover" className="ion-select-custom relation-ship-width">
                  {
                    relationshipStatus.map((item: any, key: number) => {
                      return (
                        <IonSelectOption value={item.id} key = {key}>{item.name}</IonSelectOption>
                      )
                    })
                  }
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="3" className="input-label-custom">
              <IonLabel className="align-self-center">City*</IonLabel>
            </IonCol>
            <IonCol size="9">
              <IonItem>
                <IonInput value={state.city} clearInput={true} className="" onIonChange={(e) => onChangeCity(e)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <br/>
          <label className="label-padding-left">Travel Readiness [km]</label>
          <IonRange min={50} max={500} color="secondary" value={state.travelRadius}>
            <IonLabel slot="start">50</IonLabel>
            <IonLabel slot="end">500</IonLabel>
          </IonRange>
        </div>

        <div id="Occasions" className="occasions">
          <h4 className="underline-text-decorate">Occasions</h4>
          <label className="grey-text">Select to receive experieces for</label>

          <IonRow>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-birthday-cake fa-1x", "Birthday")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.birthday.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'checkBirthday')}/>
            </IonCol>
          </IonRow>
          <br/>
          <IonRow>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-tree-christmas fa-1x", "Chrismas")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.chrismas.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'checkChrismas')}/>
            </IonCol>
          </IonRow>
          <br/>

          <IonRow>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-island-tropical fa-1x", "Vacation")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.vacation.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'checkVacation')}/>
            </IonCol>
          </IonRow>
          <br/>

          <IonRow>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-calendar-day fa-1x", "Weekend")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.weekend.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'checkWeekend')}/>
            </IonCol>
          </IonRow>
          <br/>

          <IonRow hidden={state.contactRelationshipTypeId !== "82d33a98-699a-43df-b3b8-46f81b52e22f"}>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-kiss-wink-heart fa-1x", "Valentine")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.valentine.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'checkValentine')}/>
            </IonCol>
          </IonRow>
          <br/>
          
          <IonRow hidden={state.contactRelationshipTypeId !== "82d33a98-699a-43df-b3b8-46f81b52e22f"}>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("fal fa-kiss-wink-heart fa-1x", "Father or Mother day")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.parentsday.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'parentsday')}/>
            </IonCol>
          </IonRow>
          <br/>

          <IonRow hidden={state.contactRelationshipTypeId !== "82d33a98-699a-43df-b3b8-46f81b52e22f"}>
            <IonCol size="10" className="input-label-custom">
              {renderOccasionIcon("far fa-heart fa-1x", "Anniversary")}
            </IonCol>
            <IonCol size="2">
              <IonToggle checked={state.events.anniversary.isActive === "1" ? true : false} onIonChange={(e) => onChangeCheck(e, 'anniversary')}/>
            </IonCol>
          </IonRow>
          <IonRow hidden={state.contactRelationshipTypeId !== "82d33a98-699a-43df-b3b8-46f81b52e22f" || state.contact.events.anniversary.isActive === "0"}>
            <IonCol size="12">
              <IonItem>
                <IonDatetime value={state.birthday} placeholder="Select Date" className="ion-datetime-custom"></IonDatetime>
              </IonItem>
            </IonCol>
          </IonRow>
        </div>

        <div id="Interests" className="interests">
          <h4 className="">Interests</h4>
          <label className="grey-text">Defiine preferences of you favourite</label>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Dinner & Culinary</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.dinner_culture.rating}>
              <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Short holiday & Overnight stay</label>
            {/* <IonRange min={0} max={10} color="secondary" value={state.rangeType2}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange> */}
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Flying & Falling</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.fly_fall.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Driving fun & Motorsport</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.driving_motosport.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Sport, Action & Natur</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.sport_action_nature.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Wellness & Beauty</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.wellness_beauty.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Culture & Creative</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.culture_creative.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Wind & Water</label>
            <IonRange min={0} max={10} color="secondary" value={state.interests.wind_water.rating}>
            <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>
        </div>

        <div id="Characteristics" className="margin-bottom-characteristics characteristics">
          <h4 className="">Characteristics</h4>
          <label className="grey-text">Define preferences of you favourite</label>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Fitness Level</label>
            <IonRange min={0} max={10} color="secondary" value={state.characteristics.fitness_level.rating}>
              <IonLabel slot="start">low</IonLabel>
              <IonLabel slot="end">high</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Personality</label>
            <IonRange min={0} max={10} color="secondary" value={state.characteristics.personality.rating}>
              <IonLabel slot="start">calm</IonLabel>
              <IonLabel slot="end">wild</IonLabel>
            </IonRange>
          </div>

          <div className="range-div-padding-top">
            <label className="label-padding-left">Sociality</label>
            <IonRange min={0} max={10} color="secondary" value={state.characteristics.sociality.rating}>
              <IonLabel slot="start">solo</IonLabel>
              <IonLabel slot="end">group</IonLabel>
            </IonRange>
          </div>
        </div>
        

        <div id="Connections" className="margin-bottom-connections connections">
          <h4 className="">Connections</h4>
          <IonRow>
            <IonCol size="1" className="input-label-custom align-item-center">
              <i className="fas fa-envelope-square fa-2x"></i>
            </IonCol>
            <IonCol size="11">
              <IonItem>
                <IonInput value={state.connections.email.address} type="email" clearInput={true} className="" onIonChange={(e) => onChangeConnections(e, 'contactEmail')}></IonInput>
              </IonItem>
              <div className="text-align-center">
                <IonLabel color="danger">{validEmailError}</IonLabel>
              </div>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="1" className="input-label-custom align-item-center">
              <i className="fa fa-phone-square-alt fa-2x"></i>
            </IonCol>
            <IonCol size="11">
              <IonItem>
                <IonInput value={state.connections.phone.number} type="tel" clearInput={true} className="" onIonChange={(e) => onChangeConnections(e, 'telNumber')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="1" className="input-label-custom align-item-center">
              <i className="fab fa-facebook-square fa-2x"></i>
            </IonCol>
            <IonCol size="11">
              <IonItem>
                <IonInput value={state.connections.facebook.username} type="text" clearInput={true} className="" onIonChange={(e) => onChangeConnections(e, 'facebookUsername')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="1" className="input-label-custom align-item-center">
              <i className="fab fa-instagram-square fa-2x"></i>
            </IonCol>
            <IonCol size="11">
              <IonItem>
                <IonInput value={state.connections.instagram.username} type="email" clearInput={true} className="" onIonChange={(e) => onChangeConnections(e, 'instagramEmail')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="1" className="input-label-custom align-item-center">
              <i className="fab fa-whatsapp-square fa-2x"></i>
            </IonCol>
            <IonCol size="11">
              <IonItem>
                <IonInput value={state.connections.whatsapp.number} type="text" clearInput={true} className="" onIonChange={(e) => onChangeConnections(e, 'whatsAppNumber')}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </div>

        <div id="delete-connect" className="delete-contact">
          <IonButton fill="clear" onClick={() => setShowAlert(true)}>Delete contact</IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Are you sure?'}
          message={'Your contact will be deleted for ever'}
          buttons={[
            'No',
            {
              text: 'Yes',
              handler: () => {rootDispatcher.deleteContact(contact.id).then(res => {
                console.log(res)
                props.history.push('main_page')
              })}
            }
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default ContactDetail;


const renderOccasionIcon = (icons, title) => {
  return (
    <IonRow>
      <div className="occasions-icon full-fill-red-icon justify-content-center align-item-center">
        <span className="white-icon">
          <i className={icons}></i>
        </span>
      </div>
      <label className="align-self-center label-padding-left">{title}</label>
    </IonRow>
  );
}