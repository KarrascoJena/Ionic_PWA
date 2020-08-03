
import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useSelector } from "react-redux";
import { InitialState } from "../../store/root-reducer";


const Login: React.FC<{ issuer }> = (props) => { 
  const isLogin = useSelector<InitialState, boolean>((state: InitialState) => {
    return state.authorized
  });

  if(isLogin) return <Redirect to="/mycontacts" />
  return (
    <LoginForm history={props}/>
  )
};

export default Login;