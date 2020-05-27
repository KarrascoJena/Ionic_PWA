import React from 'react';
import { IonContent, IonPage, IonButton, IonRow, IonCol, getPlatforms } from '@ionic/react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import '../theme/pages/GetStart.scss'

const slideOpts = {
  initialSlide: 0,
  speed: 400
}

const slider = (
  <AwesomeSlider style={{height: window.innerHeight}} cssModule={AwesomeSliderStyles} bullets={false}>
    <div data-src="./assets/imgs/slides/slide1.jpg" />
    <div data-src="./assets/imgs/slides/slide2.jpg" />
    <div data-src="./assets/imgs/slides/slide3.jpg" />
    <div data-src="./assets/imgs/slides/slide4.jpg" />
    <div data-src="./assets/imgs/slides/slide5.jpg" />
  </AwesomeSlider>
)

const GetStart: React.FC = () => {
  
  console.log(window.innerHeight)
  return (
    <IonPage>
      <IonContent>
      <div className="position-relative">
        {slider}
        <IonRow className="justify-content-end height-4 bottom-content">
          <IonCol>
            <IonButton expand="block" routerLink="/mycontacts">Getting started</IonButton>
            <div className="font-10 footer-notice text-align-center">
              <p>We don't past anything to Facebook.</p>
              <p>By signingin, you agree to our Terms of Services and</p>
              <a href="/#">Privacy Policy</a>
            </div>
          </IonCol>
        </IonRow>
      </div>
      
      </IonContent>
    </IonPage>
  );
};

export default GetStart;
