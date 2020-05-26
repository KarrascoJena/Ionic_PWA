import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge, IonRouterOutlet, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonVirtualScroll, IonGrid } from '@ionic/react';
import { peopleOutline, searchOutline, heartOutline, trailSignOutline, settingsSharp, personOutline, createOutline } from 'ionicons/icons';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../theme/pages/MyContacts.scss'

const gotoGetStart = (e, props) => {
  e.preventDefault();
  props.history.push('/getstart');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const gotoContactDetail = (e, props) => {
  props.history.push('/contactdetail');
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
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/38/f5/37/38f53753079845b89acc3f48f8c094d9/images/account_-_overview/u26.png?token=d4bb157f584a5de33b31f90b8ae931c4fb31f2e9d497bf6d460029cf7a060cd8',
  },
];

const MyAccount: React.FC = (props) => {
  const classes = useStyles();

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, props)} size="4" className="grid-img" key={index}>
        <img className="img-auto card-effect" src={item.img} />
        <div className="grid-img-button">
          <img src="./assets/icon/pencil.png" className="circle-icon"/>
        </div>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonIcon onClick={(e) => gotoGetStart(e, props)} icon={settingsSharp} slot="start" size="large"/>
          <IonIcon onClick={(e) => gotoEditProfile(e, props)} icon={personOutline} slot="end" size="large"/>
          <IonTitle>My Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
          <IonCol size="4" className="grid-img" >
            <div className="empty-img card-effect">
            </div>
            <div className="grid-img-button">
              <img src="./assets/icon/add.png" className="circle-icon"/>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>

      {/* <IonTabs> */}
        {/* <IonRouterOutlet></IonRouterOutlet> */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="speakers" onClick={() => {props.history.push('./discovervote')}}>
            <IonIcon icon={trailSignOutline} />
          </IonTabButton>

          <IonTabButton tab="schedule">
            <IonIcon icon={heartOutline} />
            <IonBadge>2</IonBadge>
          </IonTabButton>

        
          <IonTabButton tab="map">
            <img alt="" src="./assets/imgs/daiamond.png" height="55"/>
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

export default MyAccount;
