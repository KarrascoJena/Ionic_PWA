import React from 'react';
import { IonContent, IonPage, IonButton, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';
import '../theme/pages/GetStart.scss'

const slideOpts = {
  initialSlide: 0,
  speed: 400
}

const GetStart: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
      <IonSlides  pager={false} options={slideOpts}>

        <IonSlide>
          <div className="slide">
            <img alt="" src="./assets/imgs/background.jpg"/>
            <h2>Welcome</h2>
            <p>title1.</p>
          </div>
        </IonSlide>

        <IonSlide>
          <img alt="" src="./assets/imgs/background.jpg"/>
          <h2>What is landing?</h2>
          <p>title2</p>
        </IonSlide>

        <IonSlide>
          <img alt="" src="./assets/imgs/background.jpg"/>
          <h2>How to use this?</h2>
          <p>title3</p>
        </IonSlide>
      </IonSlides>
        <IonRow className="justify-content-end height-4">
          <IonCol size="1"></IonCol>
          <IonCol>
            <IonButton expand="block" routerLink="/mycontacts">Getting started</IonButton>
            <div className="font-10 footer-notice text-align-center">
              <p>We don't past anything to Facebook.</p>
              <p>By signingin, you agree to our Terms of Services and</p>
              <a href="/#">Privacy Policy</a>
            </div>
          </IonCol>
          <IonCol size="1"></IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default GetStart;
