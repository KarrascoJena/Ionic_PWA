import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import { useOktaAuth } from '@okta/okta-react';
import { gql } from "apollo-boost";
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';

import BottomTabBar from '../components/bottom-tab-bar';
import '../theme/pages/MyContacts.scss'

const gotoGetStart = (e, props) => {
  e.preventDefault();
  props.history.push('/getstart');
}

const gotoEditProfile = (e, props) => {
  e.preventDefault();
  props.history.push('/editprofile');
}

const gotoContactDetail = (e, props) => {
  props.history.push('/contactdetail');
}

const getUserQuery = gql`
query getUser($oktaId: String!)  {
  user: User(where: {otkaId: {_eq: $oktaId}}) {
    id
  }
}
`;

const contacts = [
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/79/40/55/79405597c78a427aad7454be74144d3d/images/account_-_overview/u26.png?token=4bf66e8f9a1fa75d65514bb559eeaff92a8f7229a164ad31976b0338c71ec196',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/79/40/55/79405597c78a427aad7454be74144d3d/images/account_-_overview/u26.png?token=4bf66e8f9a1fa75d65514bb559eeaff92a8f7229a164ad31976b0338c71ec196',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/79/40/55/79405597c78a427aad7454be74144d3d/images/account_-_overview/u26.png?token=4bf66e8f9a1fa75d65514bb559eeaff92a8f7229a164ad31976b0338c71ec196',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/79/40/55/79405597c78a427aad7454be74144d3d/images/account_-_overview/u26.png?token=4bf66e8f9a1fa75d65514bb559eeaff92a8f7229a164ad31976b0338c71ec196',
  },
  {
    img: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/2V3PDC/79/40/55/79405597c78a427aad7454be74144d3d/images/account_-_overview/u26.png?token=4bf66e8f9a1fa75d65514bb559eeaff92a8f7229a164ad31976b0338c71ec196',
  },
];

const MyAccount: React.FC< { history } > = (props) => {

  const [userInfo, setUserInfo] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { authState, authService } = useOktaAuth();

  const [loadUser, { loading, error, data }] = useLazyQuery(getUserQuery, {
    variables: {
      oktaId: userInfo.idp
    }
  });
  authService.getUser().then((info) => {
    setUserInfo(info);
    console.log(info)
  })

  // loadUser();
  const contactList = contacts.map((item, index) => {
    return(
      <IonCol onClick={(e) => gotoContactDetail(e, props)} size="4" className="grid-img" key={index}>
        <img className="img-auto card-effect" src={item.img} alt=""/>
        <div className="grid-img-button bottom-circle-icon box-shadow-full-screen">
          <span className="pencil-icon circle-icon">
            <i className="fal fa-pencil-alt"></i>
          </span>
        </div>
      </IonCol>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="padding-header">
          <div onClick={(e) => gotoGetStart(e, props)} slot="start">
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
          {contactList}
          <IonCol size="4" className="grid-img" >
            <div className="empty-img card-effect">
            </div>
            <div className="grid-img-button bottom-circle-icon box-shadow-full-screen full-fill-red-icon">
              <span className="circle-icon white-icon">
                <i className="fal fa-plus"></i>
              </span>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>

      <BottomTabBar history={props.history} />
    </IonPage>
  );
};

export default MyAccount;
