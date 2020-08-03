
import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from "react-redux";
import { RootDispatcher } from "../../store/root-reducer";
interface Props {
  history: any
}

const Logout: React.FC<Props> = (props) => { 
  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);
  rootDispatcher.logout();

  return (<LoginForm history={props.history} />);
};

export default Logout;