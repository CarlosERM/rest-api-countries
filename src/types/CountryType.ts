export interface CountryType {
  borders: string[];
  altSpellings: string[];
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
  cca2: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}
