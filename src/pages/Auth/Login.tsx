
import React from 'react';
import LoginForm from './LoginForm';


const Login: React.FC<{ issuer }> = (props) => { 
  return (
    <LoginForm history={props}/>
  )
};

export default Login;