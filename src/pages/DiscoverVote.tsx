import React from 'react';
import { IonIcon, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButtons, IonAvatar } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import EmoticonRating from '../components/emoticon-rating'
import useWebShare from "react-use-web-share";

import '../theme/pages/DiscoverVote.scss'

const slider = (
  <AwesomeSlider style={{height: window.innerHeight - 300}} cssModule={AwesomeSliderStyles} bullets={true}>
    <div data-src="https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image1.jpg" />
    <div data-src="https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image2.jpg" />
    <div data-src="https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image3.jpg" />
    <div data-src="https://experiencecontent.blob.core.windows.net/experience/801f4489-98f8-4f7e-8c62-f050293f2a1b/image4.jpg" />
  </AwesomeSlider>
)

const gotoBack = (props) => {
  props.history.goBack()
}

const DiscoverVote: React.FC<{history}> = (props) => {

  const [value, setValue] = React.useState(-1);
  const [valueText] = React.useState([
    'hates', 'does not like', 'might like', 'likes', 'loves'
  ]);

  
  const { loading, isSupported, share } = useWebShare();

  // ToDo: Static test text which needs to be changed
  // ToDo: Add image for social web sharing
  function shareClick() {
    share({
      title: 'Parrot Tour',
      text:'Some text for Parrot Tour',
      url: 'Link to URL'
    });
  }

  const onChangeValue = (changedValue) => {
    setValue(changedValue)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={() => {props.history.goBack()}}>
            <i className="fal fa-times custom-icon-size-small"></i>
          </IonButtons>
          <IonButtons slot="end" onClick={() => { shareClick()}}>
            <i className="fal fa-share-alt custom-icon-size-small"></i>
          </IonButtons>
          <IonTitle>Brand</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        
        <IonRow class="custom-height-35 align-item-center">
          <IonCol size="9" className="custom-title-font-size">
            Title
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <i className="fal fa-bookmark"></i>
            </span>
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <i className="fal fa-paper-plane"></i>
            </span>
          </IonCol>
          <IonCol size="1">
            <span className="icon-size-small">
              <IonIcon icon={ellipsisHorizontal}/>
            </span>
          </IonCol>
        </IonRow>

        <div className="position-relative">
          {slider}
          <img src="https://experiencecontent.blob.core.windows.net/user/5717f23a-d765-48d6-ac16-f11169860c19/profile.jpg" className="bottom-profile-circle-img"/>
        </div>
        <div className="justify-content-space-between margin-10">
            <span className="custom-title-font-size">
              <i className="fas fa-undo"></i>
            </span>
            <span  className="custom-title-font-size">
              <i className="fas fa-info"></i>
            </span>
        </div>
        <div className="justify-content-center margin-top-10">
          <h4>Christian</h4>
          {/* <h4>{valueText[value]}</h4> */}
        </div>
        <EmoticonRating value={value} changeValue={(changedValue) => {onChangeValue(changedValue)}}/>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverVote;
