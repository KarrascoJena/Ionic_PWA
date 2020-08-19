import React from 'react';
import { IonPage, IonContent, IonBadge, IonButton, IonLabel, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';
import { BackButton } from '../../components/ion-custom/customElement'

const EventDetail: React.FC<{ history:any; location: any;}> = (props) => { 
  const data = props.location.state;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <BackButton goBack={e => {props.history.goBack()}}/>
          <IonTitle className="text-align-center">Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="page-container text-align-center">
          <div className="text-align-left margin-top-10">
            <div className="title">{data.name}</div>
            <IonLabel>Supplier 1</IonLabel>
          </div>
          <img src="./assets/imgs/event_detail1.png" alt=""/>
          <div className="justify-content-space-between text-align-left">
            <div>
              <br />
              <div className="display-flex" >
                <IonLabel>Status:&nbsp;</IonLabel>
                {badge(data.status)}
              </div>
              {data.status === 1 ?
                null
                :
                <>
                  <br />
                  <div>
                    <IonLabel>Code:&nbsp;</IonLabel>
                    <IonLabel>83D3198</IonLabel>
                  </div>
                  <br />
                  <div>
                    <IonLabel>Date:&nbsp;</IonLabel>
                    <IonLabel>04.12.2020</IonLabel>
                  </div>
                  <br />
                  <div>
                    <IonLabel>Participants:&nbsp;</IonLabel>
                    <IonLabel>1</IonLabel>
                  </div>
                </>
              }
            </div>
            <IonButton fill="clear" className="black-button-text info-circle-icon-button font-size-25" onClick={() => {}}>
              <i className="fal fa-info-circle"></i>
            </IonButton>
          </div>
          <div className="justify-content-center margin-top-20">
            
          </div>
          {data.status === 1 ?
            <>
              <IonButton onClick={() => {props.history.push('event_book')}} className="red-button width-50">Book Now</IonButton>
              <div className="text-align-center">
                <IonButton fill="clear" color="secondary" size="small" onClick={() => {}}><IonLabel className="title-sub" color="primary">Convert</IonLabel></IonButton>
              </div>
            </>
            :
            <>
              <IonButton onClick={() => {}} className="red-button width-50">Cancel</IonButton>
              <div className="text-align-center">
                <IonButton fill="clear" color="secondary" size="small" onClick={() => {}}><IonLabel className="title-sub" color="primary">Change Request</IonLabel></IonButton>
              </div>
            </>
          }
        </div>
      </IonContent>
    </IonPage>
  );
};


const badge = (status) => {
  switch (status){
    case 1:
      return <IonBadge color="medium" style={{fontSize: '12px', width: '90px'}}>not booked</IonBadge>
    case 2:
      return <IonBadge color="warning" style={{fontSize: '12px', width: '90px'}}>pending</IonBadge>
    case 3:
      return <IonBadge color="success" style={{fontSize: '12px', width: '90px'}}>conformed</IonBadge>
    case 4:
      return <IonBadge style={{backgroundColor: '#cc33cc', fontSize: '12px', width: '90px'}}>proposed</IonBadge>
    case 5:
      return <IonBadge color="danger" style={{fontSize: '12px', width: '90px'}}>declined</IonBadge>
  }
}

export default EventDetail;