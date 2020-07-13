import React from 'react';

import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react';

interface SettingDetails {
  content: object;
}

const TechDetail: React.FC<SettingDetails> = ({ content }) => {
  console.log(content)
  return (
    <React.Fragment>
      <IonHeader translucent>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {content}
      </IonContent>
    </React.Fragment>
  );
};

export default TechDetail