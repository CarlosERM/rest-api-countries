/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { getRequest } from '../api';

interface ContextProviderProp {
  children: React.ReactNode;
}

interface ContextProps {
  toggle: boolean;
  handleToggle: () => void;
}

const myContext = React.createContext({} as ContextProps);

export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [toggle, setToggle] = useState(false);
  // const [countries, setCountries] = useState();

  // function getCountries() {
  //   const teste: AxiosResponse<any, any> = getRequest('all');
  //   console.log(teste);
  // }
  // getCountries();
  function handleToggle() {
    setToggle(!toggle);
  }

  return <myContext.Provider value={{ toggle, handleToggle }}>{children}</myContext.Provider>;
};

export function useMyContext() {
  const context = React.useContext(myContext);

  if (!context) {
    throw new Error('useUtils must be used within an UserProvider');
  }

  return context;
}
