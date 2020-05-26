import React, { useState } from 'react';
import { IonTabs, IonDatetime, IonSelect, IonSelectOption, IonLabel, IonTabBar, IonInput, IonTabButton, IonIcon, IonBadge, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonButtons, IonList, IonItem, IonItemDivider } from '@ionic/react';
import { close, shareSocial, sendOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../theme/pages/DiscoverVote.scss'

const gotoBack = (props) => {
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

const DiscoverVote: React.FC = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    name: 'Edina',
    gender: 'female',
    birthday: Date(),
    city: 'Graz',
    status: 'Relationship',
    children: 2
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start">
            <IonIcon icon={close} onClick={() => gotoBack(props)} size="large"/>
          </IonButtons>
          <IonButtons slot="end">
              <IonIcon icon={shareSocial} size="large" color="danger"/>
          </IonButtons>
          <IonTitle>Brand</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow>
          <IonCol size="8" className="font-size-20 padding-left-20">
            Title
          </IonCol>
          <IonCol size="2">
            <IonIcon icon={sendOutline} size="large"/>
          </IonCol>
          <IonCol size="2">
            <IonIcon icon={ellipsisHorizontalOutline} size="large"/>
          </IonCol>
        </IonRow>
        <IonRow>
          <Rating/>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverVote;

const Rating = (props) => {
  return(
    <IonRow>
      <IonCol size="1"></IonCol>
      <IonCol size="2"  onTouchStart = {() => {console.log("I am 1st emoji")}}>
        <img src="./assets/avatar/female1.jpg"/>
      </IonCol>
      <IonCol size="2"  onTouchStart = {() => {console.log("I am 2nd emoji")}}>
        <img src="./assets/avatar/male1.jpg"/>
      </IonCol>
      <IonCol size="2"  onTouchStart = {() => {console.log("I am 3rd emoji")}}>
        <img src="./assets/avatar/female1.jpg"/>
      </IonCol>
      <IonCol size="2" onFocus = {() => {console.log("focused on 4th emoji")}} onTouchStart = {() => {console.log("I am 4th emoji")}}>
        <img src="./assets/avatar/male1.jpg"/>
      </IonCol>
      <IonCol size="2" onTouchMove={(e) => {console.log(e.currentTarget)}} >
        <img className="mouse-hover" src="./assets/avatar/female1.jpg"/>
      </IonCol>
      <IonCol size="1"></IonCol>
    </IonRow>
  );
}