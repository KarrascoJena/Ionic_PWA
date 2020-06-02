import { AuthState, INIT_STATE } from './types';

export function updateSession(newSession: AuthState) {
  return {
    type: INIT_STATE,
    payload: newSession
  };
}
