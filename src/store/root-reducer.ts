import {Action, Reducer, Dispatch} from "redux";

import API from './root-actions'

export interface InitialState {
    authorized: boolean;
    username: string;
    address: string;
    email: string;
    password: string;
    count: number;
    userInfo: object
}

export const initialState: InitialState = {
  authorized: false,
  username: '',
  address: '',
  email: '',
  password: '',
  count: 0,
  userInfo: {}
};

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

export enum ActionType {
  Login,
  Logout,
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
  Count
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
  if (action.type === ActionType.UpdateName) {
    return {...state, username: action.payload.username || ''};
  } else if (action.type === ActionType.DeleteName) {
    return {...state, username: ''};
  } else if (action.type === ActionType.DeleteAddress) {
    return {...state, address: ''};
  } else if (action.type === ActionType.UpdateAddress) {
    return {...state, username: action.payload.username || ''};
  } else if (action.type === ActionType.Count){
    return {...state, count: state.count++}
  } else if (action.type === ActionType.Login) {
    return { ...state, authorized: true, userInfo: {...action.payload.userInfo}}
  } else if (action.type === ActionType.Logout) {
    localStorage.removeItem('state');
    return initialState;
  }
  else {
    return state;
  } 
};

export class RootDispatcher {
    
  private readonly dispatch: Dispatch<DispatchAction>;
  
  constructor(dispatch: Dispatch<DispatchAction>){
    this.dispatch = dispatch; 
  }

  counter = async () => {
    this.dispatch({type: ActionType.Count, payload: {}})
  }

  login = async (email: string, password: string) => {
    return API.login(email, password).then( res => {
      if(res?.status === 200) this.dispatch({type: ActionType.Login, payload: {userInfo: res?.data}})
      return res
    });
  };

  logout = () => this.dispatch({type: ActionType.Logout, payload: {}})
  
  register = async (fullName: string, password: string, userName: string, email: string, phoneNumber: string) => {
    return API.register(fullName, password, userName, email, phoneNumber).then( res => {
      console.log(res)
      this.dispatch({type: ActionType.Login, payload: {userInfo: res?.data}})
      return res
    })
  };

  forgetPassword = async (email: string) => {
    return API.forgetPassword(email)
  };

  getUsers = async (id: string) => {
    return API.getUsers(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  deleteUsers = async (id: string) => {
    return API.deleteUsers(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getContacts = async () => {
    return API.getContacts().then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getContactDetail = async (id: string) => {
    return API.getContactsDetail(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  addContact = async (data: any) => {
    return API.addContact(data).then(res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getUserRelationshipStatus = async () => {
    return API.getUserRelationshipStatus().then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  deleteContact = async (id: string) => {
    return API.deleteContact(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getCountries = async () => {
    return API.getCountries().then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getCountry = async (countryId: string) => {
    return API.getCountry(countryId).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getDiscoveries = async () => {
    return API.getDiscoveries().then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getExperiences = async (id: string) => {
    return API.getExperiences(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getMatches = async () => {
    return API.getMatches().then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  deletematche = async (matchId: string) => {
    return API.deleteContact(matchId).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  sendMatchNotification = async (id: string) => {
    return API.sendMatchNotification(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  setMatchViwed = async (id: string) => {
    return API.setMatchViewed(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  setMatchQuality = async (id: string, value: number) => {
    return API.setMatchQuality(id, value).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };
  
  getProducts = async (id: string) => {
    return API.getProducts(id).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  getRating = async (experienceId: string, contactId: string, rate: number) => {
    return API.getRatings(experienceId, contactId, rate).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  isPersonalRatingRequired = async (experienceId: string) => {
    return API.isPersonalRatingRequired(experienceId).then( res => {
      if(res?.status === 401) this.logout()
      else return res
    })
  };

  setLanguage = (language: string) => {
    API.setLanguage(language)
  };
}