import React from 'react';
import { IonRow, IonCol } from '@ionic/react';

import Images from './images'


const DiscoverVote: React.FC<{value: number; changeValue: (changedValue: number) => void;}> = (props) => {


  return (
    <IonRow>
    <IonCol size="1"></IonCol>
    <IonCol size="2" onTouchStart = {() => {props.changeValue(0)}}>
      <img src={props.value === 0 ? Images.hate.gif : Images.hate.inactive} alt=""/>
    </IonCol>
    <IonCol size="2" onTouchStart = {() => {props.changeValue(1)}}>
      <img src={props.value === 1 ? Images.disappointed.gif : Images.disappointed.inactive} alt=""/>
    </IonCol>
    <IonCol size="2" onTouchStart = {() => {props.changeValue(2)}}>
      <img src={props.value === 2 ? Images.natural.gif : Images.natural.inactive} alt=""/>
    </IonCol>
    <IonCol size="2" onTouchStart = {() => {props.changeValue(3)}}>
      <img src={props.value === 3 ? Images.good.gif : Images.good.inactive} alt=""/>
    </IonCol>
    <IonCol size="2" onTouchStart = {() => {props.changeValue(4)}} >
      <img src={props.value === 4 ? Images.excellent.gif : Images.excellent.inactive} alt=""/>
    </IonCol>
    <IonCol size="1"></IonCol>
  </IonRow>
  );
};

export default DiscoverVote;