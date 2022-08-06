/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useState} from 'react';

export const Context = createContext({});
const { Provider, Consumer } = Context;
export const useStore = () => {
  const store = useContext(Context);
  return store;
};

export const withStore = Component => props => {
  return <Consumer>{store => <Component {...props} store={store} />}</Consumer>;
};

export default props => {
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');

  const setUser = (emaiText,passwordText) =>{
    console.log('ACESSOU O SET USER')
    console.log(emaiText, passwordText)
    setEmailUser(emaiText)
    setPassword(passwordText)
    showUserStoredInTheStore()
   
  }
  const showUserStoredInTheStore = () =>{
    console.log('email: ', emailUser, 'password: ', password)
  }
  return (
    <Provider
      value={{
        emailUser,
        setEmailUser,
        password,
        setPassword,
        setUser,
        showUserStoredInTheStore
      }}>
      {props.children}
    </Provider>
  );
};
