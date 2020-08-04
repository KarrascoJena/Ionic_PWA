import React from 'react';
import { IonPage } from '@ionic/react';
import Carousel from 're-carousel'
import { useTranslation } from 'react-i18next';

import IndicatorDots from './indicatorDots'
import './assets/scss/GetStart.scss'


const GetStart: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <IonPage>
      <Carousel loop={true} axis="x" auto={true} interval={3000} duration={500} widgets={[IndicatorDots]}>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide1.jpg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.1')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.1')}</h4>
          </div>
        </div>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide2.jpg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.2')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.2')}</h4>
          </div>
        </div>
        <div className="background-image-full-screen" style={{ height: '100%', backgroundImage: `url('./assets/imgs/slides/slide3.jpg')`}}>
          <div className="slider-discription">
            <h4 className="get-start-title">{t('title.3')}</h4>
            <h4 className="subtitle-color subtitle">{t('sub_title.3')}</h4>
          </div>
        </div>
      </Carousel>
    </IonPage>
  );
};

export default GetStart;
