/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context';
import Loader from '../Loader';

import {
  // DivTeste,
  ErrorMessage,
  ImageItem,
  InfoCategory,
  InfoCategoryInfo,
  InfoItem,
  InfoList,
  InfoListItem,
  InfoTitle,
  ListBody,
  ListItem,
  NavCountries,
  NavCountriesItem,
} from './style';

const List = () => {
  const { countries, inicio, setInicio, fim, setFim, loader, error } = useMyContext();
  // eslint-disable-next-line prefer-const
  let numbers: number[] = [1, 2, 3, 4, 5];

  const [navNumbers, setNavNumbers] = useState<number[]>();
  const internationalNumberFormat = new Intl.NumberFormat('en-US');
  console.log(internationalNumberFormat.format(123123));

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value: number = +e.currentTarget.innerHTML;
    if (value !== 1) setInicio((value - 1) * 25 + 1);
    else setInicio((value - 1) * 25);
    setFim(value * 25);
  };

  useEffect(() => {
    if (countries) {
      const size = countries.length / 25;
      numbers = [];
      for (let i = 1; i <= size; i += 1) {
        numbers.push(i);
      }

      setNavNumbers(numbers);
    }
  }, [countries]);
  if (countries) console.log(countries[0].population);
  return (
    <>
      <ListBody>
        {loader ? (
          <Loader />
        ) : error ? (
          <ErrorMessage> No country found.</ErrorMessage>
        ) : (
          countries?.sort().map((country, index) => {
            if (index >= inicio - 1 && index < fim) {
              return (
                <ListItem key={country.population}>
                  <ImageItem src={country.flags.png} />
                  <InfoItem>
                    <InfoTitle>{country.name.common}</InfoTitle>
                    <InfoList>
                      <InfoListItem>
                        <InfoCategory>
                          <InfoCategoryInfo>Population:</InfoCategoryInfo>
                          {` ${internationalNumberFormat.format(country.population)}`}
                        </InfoCategory>
                      </InfoListItem>
                      <InfoListItem>
                        <InfoCategory>
                          <InfoCategoryInfo>Region:</InfoCategoryInfo>
                          {` ${country.continents}`}
                        </InfoCategory>
                      </InfoListItem>
                      <InfoListItem>
                        <InfoCategory>
                          <InfoCategoryInfo>Capital:</InfoCategoryInfo>
                          {` ${country.capital}`}
                        </InfoCategory>
                      </InfoListItem>
                    </InfoList>
                  </InfoItem>
                </ListItem>
              );
            }
            return null;
          })
        )}
      </ListBody>
      <NavCountries>
        {navNumbers?.map((numb) => {
          return (
            <NavCountriesItem onClick={handleClick} key={numb}>
              {numb}
            </NavCountriesItem>
          );
        })}
      </NavCountries>
    </>
  );
};
export default List;
