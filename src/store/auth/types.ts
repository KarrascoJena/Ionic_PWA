// Describing the shape of the system's slice of state
export interface AuthState {
  loggedIn: boolean;
  session: string;
  userName: string;
  authInfo: object;
}

// Describing the different ACTION NAMES available
export const INIT_STATE = "INIT_STATE";

interface UpdateSessionAction {
  type: typeof INIT_STATE;
  payload: AuthState;
}

export type AuthStateType = UpdateSessionAction;
