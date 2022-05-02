import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context';
import { ErrorMessage, InfoCategory, InfoCategoryInfo, InfoList } from '../List/style';
import { Border, BorderBox, BorderName, CountryCategory, CountryImage, CountryName } from './style';

const CountryPage = () => {
  const { countries, getCountryByName } = useMyContext();
  const internationalNumberFormat = new Intl.NumberFormat('en-US');
  const { name } = useParams();

  useEffect(() => {
    if (name !== undefined) getCountryByName(`/alpha/${name}`);
  }, []);

  if (countries) {
    return (
      <>
        <CountryImage src={countries[0].flags.svg} />
        <CountryName>{countries[0].name.common}</CountryName>
        <InfoList>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Native Name:</InfoCategoryInfo>
              {` ${countries[0].altSpellings[1]}`}
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Population:</InfoCategoryInfo>
              {` ${internationalNumberFormat.format(countries[0].population)}`}
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Region:</InfoCategoryInfo>
              {` ${countries[0].continents}`}
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Sub Region:</InfoCategoryInfo>
              {` ${countries[0].subregion}`}
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Capital:</InfoCategoryInfo>
              {` ${countries[0].capital}`}
            </InfoCategory>
          </CountryCategory>
        </InfoList>
        <InfoList>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Top Level Domain:</InfoCategoryInfo>
              {`  ${countries[0].tld}`}
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Currencies:</InfoCategoryInfo>
            </InfoCategory>
          </CountryCategory>
          <CountryCategory>
            <InfoCategory>
              <InfoCategoryInfo>Languages:</InfoCategoryInfo>
            </InfoCategory>
          </CountryCategory>
        </InfoList>
        <BorderName>Border Countries:</BorderName>
        <BorderBox>
          {countries[0].borders.map((border) => {
            return <Border key={border}>{border}</Border>;
          })}
        </BorderBox>
      </>
    );
  }
  return <ErrorMessage>No country found</ErrorMessage>;
};
export default CountryPage;
