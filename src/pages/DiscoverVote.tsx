import React from 'react';
import { IonIcon, IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButtons, IonAvatar } from '@ionic/react';
import { ellipsisHorizontalOutline } from 'ionicons/icons';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import EmoticonRating from '../components/emoticon-rating'

import '../theme/pages/DiscoverVote.scss'

const slider = (
  <AwesomeSlider className="custom-height" cssModule={AwesomeSliderStyles} bullets={true}>
    <div data-src="./assets/imgs/slides/slide2.jpg" />
    <div data-src="./assets/imgs/slides/slide1.jpg" />
    <div data-src="./assets/imgs/slides/slide3.jpg" />
    <div data-src="./assets/imgs/slides/slide4.jpg" />
    <div data-src="./assets/imgs/slides/slide5.jpg" />
    <div data-src="./assets/imgs/background.jpg" />
  </AwesomeSlider>
)

const gotoBack = (props) => {
  props.history.goBack()
}

const DiscoverVote: React.FC<{history}> = (props) => {

  const [value, setValue] = React.useState(1);
  const [valueText] = React.useState([
    'Hate', 'Disappointed', 'Natural', 'Good', 'Excellent'
  ]);

  const onChangeValue = (changedValue) => {
    setValue(changedValue)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <IonButtons slot="start" onClick={() => {props.history.goBack()}}>
            <i className="fal fa-times fa-2x"></i>
          </IonButtons>
          <IonButtons slot="end">
            <i className="fal fa-share-alt fa-2x"></i>
          </IonButtons>
          <IonTitle>Brand</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow>
          <IonCol size="9" className="font-size-20">
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
              <IonIcon icon={ellipsisHorizontalOutline}/>
            </span>
          </IonCol>
        </IonRow>

        <div className="position-relative">
          {slider}
          <img src="./assets/avatar/female1.jpg" className="bottom-profile-circle-img"/>
        </div>
        <div className="justify-content-center margin-10">
            <span className="icon-size-small">
              <i className="fas fa-undo"></i>
            </span>
            <span  className="icon-size-small">
              <i className="fas fa-info"></i>
            </span>
        </div>
        <div className="justify-content-center margin-top-10">
          <h4>{valueText[value]}</h4>
        </div>
        <EmoticonRating value={value} changeValue={(changedValue) => {onChangeValue(changedValue)}}/>
      </IonContent>
    </IonPage>
  );
};

export default DiscoverVote;
