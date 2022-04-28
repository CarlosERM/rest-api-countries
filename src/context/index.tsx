import React, { useCallback, useEffect, useState } from 'react';
import { getRequest } from '../api';
import { ContextProps, ContextProviderProp, CountryType } from '../types/types';

const myContext = React.createContext({} as ContextProps);
export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [toggle, setToggle] = useState(false);
  const [countries, setCountries] = useState<CountryType[] | null>();
  const [inicio, setInicio] = useState(1);
  const [fim, setFim] = useState(25);
  const [loader, setLoader] = useState(false);
  const handleSetCountries = useCallback((data) => {
    setCountries(data);
  }, []);

  async function getCountries() {
    setLoader(true);
    const response = await getRequest('all');
    setLoader(false);

    handleSetCountries(response);
  }

  async function getCountryByFilter(continent: string) {
    setLoader(true);
    const response = await getRequest(`region/${continent}`);
    setLoader(false);

    handleSetCountries(response);
  }

  async function getCountryByName(name: string) {
    setLoader(true);
    const response = await getRequest(`name/${name}`);
    setLoader(false);

    handleSetCountries(response);
  }

  useEffect(() => {
    getCountries();
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <myContext.Provider
      value={{
        toggle,
        handleToggle,
        countries,
        inicio,
        setInicio,
        fim,
        setFim,
        loader,
        getCountryByFilter,
        getCountryByName,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export function useMyContext() {
  const context = React.useContext(myContext);

  if (!context) {
    throw new Error('useUtils must be used within an UserProvider');
  }

  return context;
}
