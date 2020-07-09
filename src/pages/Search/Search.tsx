import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonSearchbar, IonButton, IonRow, IonCol, IonLabel } from '@ionic/react';

import BottomTabBar from '../../components/bottom-tab-bar';

import './assets/scss/search.scss';


const gotoSuggest = (e, props) => {
  console.log("123123")
}

const contacts = [
  {
    img: './assets/imgs/slides/slide2.jpg',
  },
  {
    img: './assets/imgs/slides/slide3.jpg',
  },
  {
    img: './assets/imgs/slides/slide4.jpg',
  },
  {
    img: './assets/imgs/slides/slide5.jpg',
  },
  {
    img: './assets/imgs/slides/slide6.jpg',
  },
  {
    img: './assets/imgs/slides/slide7.jpg',
  },
  {
    img: './assets/imgs/slides/slide8.jpeg',
  },
  {
    img: './assets/imgs/slides/slide9.jpeg',
  },
  {
    img: './assets/imgs/slides/slide10.jpeg',
  },
];

const Search: React.FC<{history}> = (props) => {

  const contactList = contacts.map((item, index) => {
    return(
      <IonCol size="4" className="search-overview-img" key={index}>
        <img className="img-auto" src={item.img} alt=""/>
      </IonCol>
    );
  });

  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          {contactList}
        </IonRow>
      </IonContent>
      <div className="text-align-center">
        <IonLabel>Experience not found?</IonLabel>
      </div>
      <IonButton onClick={ (e) => {gotoSuggest(e)}} expand="block" className="red-button">Suggest New Experience</IonButton>
      <BottomTabBar history={props.history} />
    </IonPage>
  );
};

export default Search;
