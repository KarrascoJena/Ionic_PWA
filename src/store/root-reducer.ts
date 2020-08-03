import {Action, Reducer, Dispatch} from "redux";
import API from './root-actions'

export interface InitialState {
    authorized: boolean;
    username: string;
    address: string;
    email: string;
    password: string;
    userInfo: object
}

export const initialState: InitialState = {
  authorized: false,
  username: '',
  address: '',
  email: 'manuel.schwarz@live.at',
  password: 'Password1234!',
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
  } else if (action.type === ActionType.Login) {
    state.authorized = true
    state.userInfo = {...action.payload.userInfo}
    return state
  } else if (action.type === ActionType.Logout) {
    state = initialState
    return state
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
  updateName = (username: string) => this.dispatch({type: ActionType.UpdateName, payload: {username}});
  
  updateAddress = (address: string) => this.dispatch({type: ActionType.UpdateAddress, payload: {address}});
  
  deleteName = () => this.dispatch({type: ActionType.DeleteName, payload: {}});

  deleteAddress = () => this.dispatch({type: ActionType.DeleteAddress, payload: {}});

  login = async (email: string, password: string) => {
    return API.login(email, password).then(res => {
      this.dispatch({type: ActionType.Login, payload: {userInfo: res?.data}})
      return res
    });
  };

  logout = () => this.dispatch({type: ActionType.Logout, payload: {}})
  
  register = async (fullName: string, password: string, userName: string, email: string, phoneNumber: string) => {
    return API.register(fullName, password, userName, email, phoneNumber)
  };

  forgetPassword = async (email: string) => {
    return API.forgetPassword(email)
  };
}