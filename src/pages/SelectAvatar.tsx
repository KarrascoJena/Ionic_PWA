import React from 'react';
import { IonIcon, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonRow, IonCol } from '@ionic/react';
import { settingsSharp, personOutline } from 'ionicons/icons';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../theme/pages/SelectAvatar.scss'

const gotoGetStart = (e, props) => {
  e.preventDefault();
  props.history.push('/getstart');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const changeAvatar = (e, props) => {
  
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
    gridList: {
      width: 250,
      height: 350,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const contacts = [
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
  {img: './assets/avatar/female1.jpg' },
  {img: './assets/avatar/male1.jpg' },
];

const SelectAvartar: React.FC = (props) => {
  const classes = useStyles();

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => changeAvatar(e, props)} size="3" className="grid-img" key={index}>
          <img className="img-auto card-effect" src={item.img} />
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonIcon onClick={(e) => gotoGetStart(e, props)} icon={settingsSharp} slot="start" size="large"/>
          <IonIcon onClick={(e) => gotoEditProfile(e, props)} icon={personOutline} slot="end" size="large"/>
          <IonTitle>Select Avatar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SelectAvartar;
