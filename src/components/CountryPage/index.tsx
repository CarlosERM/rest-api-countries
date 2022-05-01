import React from 'react';
import { useMyContext } from '../../context';
import { InfoCategory, InfoCategoryInfo, InfoList, InfoListItem, InfoTitle } from '../List/style';
import { CountryImage } from './style';

const CountryPage = () => {
  const { countries } = useMyContext();
  const internationalNumberFormat = new Intl.NumberFormat('en-US');

  if (countries) {
    console.log(countries[0]);

    return (
      <>
        <CountryImage src={countries[0].flags.svg} />
        <InfoTitle>{countries[0].name.common}</InfoTitle>
        <InfoList>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Native name:</InfoCategoryInfo>
              {` ${countries[0].altSpellings[1]}`}
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Population:</InfoCategoryInfo>
              {` ${internationalNumberFormat.format(countries[0].population)}`}
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Region:</InfoCategoryInfo>
              {` ${countries[0].continents}`}
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Sub Region:</InfoCategoryInfo>
              {` ${countries[0].subregion}`}
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Capital:</InfoCategoryInfo>
              {` ${countries[0].capital}`}
            </InfoCategory>
          </InfoListItem>
        </InfoList>
        {/* dsdasd */}
        <InfoList>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Top Level Domain:</InfoCategoryInfo>
              {`  ${countries[0].tld}`}
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Currencies:</InfoCategoryInfo>
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Languages:</InfoCategoryInfo>
            </InfoCategory>
          </InfoListItem>
          <InfoListItem>
            <InfoCategory>
              <InfoCategoryInfo>Sub Region:</InfoCategoryInfo>
              {` ${countries[0].subregion}`}
            </InfoCategory>
          </InfoListItem>
        </InfoList>
      </>
    );
  }
  return <p> Country not found</p>;
};

export default CountryPage;
