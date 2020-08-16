import React, {useState, useEffect, Fragment} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";


import './assets/scss/MyContacts.scss';

const gotoSetting = (e, props) => {
  e.preventDefault();
  props.history.push('/account_setting');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const gotoContactDetail = (e, history, id: string) => {
  history.push('/contactdetail', {id: id});
}

interface contactsType{
  id: string, fullname: string, image: string
}

const Contacts: React.FC<{history}> = (props) => {

  const [contacts, setContacts] = useState<Array<contactsType>>([])
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);
  


  useEffect(() => {
    console.log("11111111111")
    
    rootDispatcher.getCountries().then( res => {
      console.log(res)
    })

    rootDispatcher.getContacts().then( res => {
      console.log(res)
      if(res?.status === 200){
        setContacts(res?.data.contacts)
      }
    })
  }, [])

  const accountActivated = (e) => {
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoSetting(e, props)} slot="start">
            <i className="fal fa-cog custom-icon-size-small" slot="start"></i>
          </div>
          <div onClick={(e) => gotoEditProfile(e, props)} slot="end">
            <i className="far fa-user custom-icon-size-small" slot="end" ></i>
          </div>
          <IonTitle>My Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="padding-content justify-content-center">
        <IonRow className="grid-container">
          
          <ContactList contacts = {contacts}/>
        </IonRow>
        <IonToast
          isOpen={true}
          onDidDismiss={(e) => accountActivated(e)}
          message="Activated successfully."
          duration={2000}
          cssClass="bottom-toast-default"
        />
      </IonContent>
      {/* <BottomTabBar history={props.history} tab="contact"/> */}
    </IonPage>
  );
};

const ContactList: React.FC<{contacts: contactsType[]}> = (props) => {
  let history = useHistory()

  const realContacts = props.contacts.map((item, index) => {
    console.log(item)
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, history, item.id)} size="4" className="grid-img height-140" key={index}>
        <img className="img-auto card-effect object-fit-cover" src={item.image ? item.image : './assets/imgs/default_contact_avatar.png'} alt=""/>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen">
          <span className="pencil-icon ">
            <i className="fal fa-pencil-alt"></i>
          </span>
        </div>
      </IonCol>
    );
  });

  const initCard = (key) => {
    return(
      <IonCol size="4" className="grid-img height-140" key={key} onClick={() => {history.push('/addcontact')}}>
        <div className="empty-img card-effect">
        </div>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen full-fill-red-icon">
          <span className="white-icon">
            <i className="fal fa-plus"></i>
          </span>
        </div>
      </IonCol>
    )
  }

  const empty = () => {
    var tem = [] as any;
    if(props.contacts.length >= 9) tem.push(initCard(props.contacts.length));
    for(var i = props.contacts.length; i < 9; i++){
      tem.push(initCard(i));
    }
    return tem
  }

  return (
    <Fragment>
      { realContacts }
      { empty() }
    </Fragment>
  )
}

export default Contacts;
