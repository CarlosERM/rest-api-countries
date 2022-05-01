import { SetStateAction } from 'react';
import { CountryType } from './CountryType';

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
