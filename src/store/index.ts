import {DispatchAction, InitialState, rootReducer} from "./root-reducer";
import {createStore} from "redux";


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null){
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined;
  }
};
  
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
  
const peristedState = loadState();

export const store = createStore(rootReducer, peristedState);

store.subscribe(() => {
  saveState(store.getState());
});
