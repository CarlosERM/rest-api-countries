import { SetStateAction } from 'react';

export interface ContextProviderProp {
  children: React.ReactNode;
}

export interface ContextProps {
  toggle: boolean;
  handleToggle: () => void;
  countries: CountryType[] | null | undefined;
  inicio: number;
  setInicio: React.Dispatch<SetStateAction<number>>;
  fim: number;
  setFim: React.Dispatch<SetStateAction<number>>;
  loader: boolean;
  getCountryByFilter: (continent: string) => Promise<void>;
  getCountryByName: (name: string) => Promise<void>;
  getCountries: () => void;
  error: boolean;
  option: string | undefined;
  setOption: React.Dispatch<SetStateAction<string | undefined>>;
  country: string;
  setCountry: React.Dispatch<SetStateAction<string>>;
}

export interface CountryType {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: object;
  car: object;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: object;
  demonyms: object;
  fifa: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  gini: object;
  idd: object;
  independent: boolean;
  landlocked: boolean;
  languages: object;
  latlng: number[];
  maps: object;
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: object;
  unMember: boolean;
}
