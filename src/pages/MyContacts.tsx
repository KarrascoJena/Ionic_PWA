import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonBadge, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import { peopleOutline, searchOutline, heartOutline, trailSignOutline } from 'ionicons/icons';

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
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_overview/u26.png?token=c14a7f334166f6699c206821b3181cbe534ae07f3d0d6cd875622be59d71b9da',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_overview/u26.png?token=c14a7f334166f6699c206821b3181cbe534ae07f3d0d6cd875622be59d71b9da',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_settings/u41.png?token=0efbfee354b2c14c71f6dc351a34c2e80f778d6e40721d4d841260703fba3a0c',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_settings/u41.png?token=0efbfee354b2c14c71f6dc351a34c2e80f778d6e40721d4d841260703fba3a0c',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/3b/1c/f0/3b1cf058856c4f7ea8aa4ba8b2c3e486/images/account_-_overview/u26.png?token=c14a7f334166f6699c206821b3181cbe534ae07f3d0d6cd875622be59d71b9da',
  },
];

const MyAccount: React.FC = (props) => {
  const classes = useStyles();

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, props)} size="4" className="grid-img" key={index}>
        <img className="img-auto card-effect" src={item.img} />
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen">
          <span className="pencil-icon circle-icon">
            <i className="fal fa-pencil-alt"></i>
          </span>
        </div>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoGetStart(e, props)} slot="start">
            <i className="fal fa-cog fa-2x" slot="start"></i>
          </div>
          <div onClick={(e) => gotoEditProfile(e, props)} slot="end">
            <i className="far fa-user fa-2x" slot="end" ></i>
          </div>
          <IonTitle>My Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
          <IonCol size="4" className="grid-img" >
            <div className="empty-img card-effect">
            </div>
            <div className="grid-img-button bottom-circle-icon box-shadow-full-screen full-fill-red-icon">
              <span className="circle-icon white-icon">
                <i className="fal fa-plus"></i>
              </span>
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
