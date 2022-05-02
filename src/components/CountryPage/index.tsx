import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context';
import { ErrorMessage, InfoCategory, InfoCategoryInfo, InfoList } from '../List/style';
import Loader from '../Loader';
import {
  NavButtons,
  BorderBox,
  BorderName,
  CountryCategory,
  CountryImage,
  CountryName,
  MapLink,
  GridCountry,
  FlexCountry,
} from './style';

const CountryPage = () => {
  const { countries, getCountryByName, loader } = useMyContext();
  const internationalNumberFormat = new Intl.NumberFormat('en-US');
  const { countryname } = useParams();

  useEffect(() => {
    if (countryname !== undefined) getCountryByName(countryname);
  }, []);

  if (countries) {
    const {
      flags,
      name,
      altSpellings,
      population,
      continents,
      subregion,
      capital,
      tld,
      maps,
      borders,
    } = countries[0];

    if (loader) {
      return <Loader />;
    }
    return (
      <GridCountry>
        {flags.svg && <CountryImage src={flags.svg} />}
        <FlexCountry>
          <div>
            {name && <CountryName>{name.common}</CountryName>}
            <InfoList>
              {altSpellings && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Native Name: </InfoCategoryInfo>
                    {altSpellings[1]}
                  </InfoCategory>
                </CountryCategory>
              )}
              {population && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Population: </InfoCategoryInfo>
                    {internationalNumberFormat.format(population)}
                  </InfoCategory>
                </CountryCategory>
              )}
              {continents && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Region: </InfoCategoryInfo>
                    {continents}
                  </InfoCategory>
                </CountryCategory>
              )}
              {subregion && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Sub Region: </InfoCategoryInfo>
                    {subregion}
                  </InfoCategory>
                </CountryCategory>
              )}
              {capital && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Capital: </InfoCategoryInfo>
                    {capital}
                  </InfoCategory>
                </CountryCategory>
              )}
              {tld && (
                <CountryCategory>
                  <InfoCategory>
                    <InfoCategoryInfo>Top Level Domain: </InfoCategoryInfo>
                    {tld}
                  </InfoCategory>
                </CountryCategory>
              )}
            </InfoList>
          </div>
          <div>
            <BorderName>Maps:</BorderName>
            {maps && (
              <BorderBox>
                <MapLink href={maps.googleMaps} target="_blank" rel="noopener noreferrer">
                  <NavButtons>Google Maps</NavButtons>
                </MapLink>
                <MapLink href={maps.openStreetMaps} target="_blank" rel="noopener noreferrer">
                  <NavButtons>Open Street Maps</NavButtons>
                </MapLink>
              </BorderBox>
            )}
            {borders && (
              <>
                <BorderName>Border Countries:</BorderName>
                <BorderBox>
                  {borders.map((border1) => {
                    return <NavButtons key={border1.toLowerCase()}>{border1}</NavButtons>;
                  })}
                </BorderBox>
              </>
            )}
          </div>
        </FlexCountry>
      </GridCountry>
    );
  }
  return <ErrorMessage>No country found</ErrorMessage>;
};
export default CountryPage;
