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
  const [error, setError] = useState(false);

  const handleSetCountries = useCallback((data) => {
    setCountries(
      data.sort((a: CountryType, b: CountryType) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      }),
    );
  }, []);

  async function getCountries() {
    try {
      setError(false);

      setLoader(true);
      const response = await getRequest('all');
      handleSetCountries(response);
      setLoader(false);
    } catch (erro) {
      setError(true);
      setLoader(false);
    }
  }

  async function getCountryByFilter(continent: string) {
    try {
      setError(false);

      setLoader(true);
      const response = await getRequest(`region/${continent}`);
      setLoader(false);

      handleSetCountries(response);
    } catch (erro) {
      setError(true);
      setLoader(false);
    }
  }

  async function getCountryByName(name: string) {
    try {
      setError(false);

      setLoader(true);
      const response = await getRequest(`name/${name}`);
      setLoader(false);

      handleSetCountries(response);
    } catch (erro) {
      setError(true);
      setLoader(false);
    }
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
        getCountries,
        error,
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
