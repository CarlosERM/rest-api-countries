import React, { useCallback, useState } from 'react';
import { getRequest } from '../api';
import { ContextProps } from '../types/ContextProps';
import { CountryType } from '../types/CountryType';

export interface ContextProviderProp {
  children: React.ReactNode;
}

const myContext = React.createContext({} as ContextProps);
export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [toggle, setToggle] = useState(true);
  const [countries, setCountries] = useState<CountryType[] | null>();
  const [inicio, setInicio] = useState(0);
  const [fim, setFim] = useState(24);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [option, setOption] = useState<string | undefined>();
  const [country, setCountry] = useState('');

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
      setInicio(0);
      setFim(24);
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
      setInicio(0);
      setFim(24);

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
      setInicio(0);
      setFim(24);
    } catch (erro) {
      setError(true);
      setLoader(false);
    }
  }

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
        option,
        setOption,
        country,
        setCountry,
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
