export interface CountryType {
  altSpellings: string[];
  borders: string[];
  capital: string[];
  capitalInfo: object;
  continents: string[];
  currencies: object;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  languages: [
    {
      name: string;
    },
  ];
  name: {
    common: string;
    official: string;
    nativeName: {
      sqi: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  timezones: string[];
  tld: string[];
}
