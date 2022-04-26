import React, { useCallback, useEffect, useState } from 'react';
import { getRequest } from '../api';
import { ContextProps, ContextProviderProp, CountryType } from '../types/types';

const myContext = React.createContext({} as ContextProps);
export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [toggle, setToggle] = useState(false);
  const [countries, setCountries] = useState<CountryType[] | null>();

  const handleSetCountries = useCallback((data) => {
    setCountries(data);
  }, []);

  async function getCountries() {
    const response = await getRequest('all');
    handleSetCountries(response);
  }

  useEffect(() => {
    getCountries();
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <myContext.Provider value={{ toggle, handleToggle, countries }}>{children}</myContext.Provider>
  );
};

export function useMyContext() {
  const context = React.useContext(myContext);

  if (!context) {
    throw new Error('useUtils must be used within an UserProvider');
  }

  return context;
}
