import { UPDATE_SESSION, AuthState, AuthStateType } from './types'

const initialState: AuthState = {
  loggedIn: false,
  session: "",
  userName: "",
  authInfo: {}
};

export function authReducer(
  state = initialState,
  action: AuthStateType
): AuthState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
