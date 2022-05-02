/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  // eslint-disable-next-line operator-linebreak
  const { countries, inicio, setInicio, fim, setFim, loader, error } = useMyContext();
  // eslint-disable-next-line prefer-const
  let numbers: number[] = [1];

  const [navNumbers, setNavNumbers] = useState<number[]>();
  const internationalNumberFormat = new Intl.NumberFormat('en-US');
  useEffect(() => {
    if (countries) {
      const size = Math.ceil(countries.length / 24);
      numbers = [];
      for (let i = 1; i <= size; i += 1) {
        numbers.push(i);
      }
      setNavNumbers(numbers);
    }
  }, [countries]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value: number = +e.currentTarget.innerHTML;
    if (value !== 1) {
      setInicio((value - 1) * 24);
    } else {
      setInicio(0);
    }
    setFim(value * 24);
    scrollToTop();
  };

  return (
    <>
      <ListBody>
        {loader ? (
          <Loader />
        ) : error ? (
          <ErrorMessage>No country found.</ErrorMessage>
        ) : (
          countries?.sort().map((country, index) => {
            if (index >= inicio && index < fim) {
              return (
                <NavLink
                  to={`/country/${country.name.common}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={country.name.common}
                >
                  <ListItem data-name={country.name.common}>
                    <ImageItem src={country.flags.png} />
                    <InfoItem>
                      {country.name.common && <InfoTitle>{country.name.common}</InfoTitle>}
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
                </NavLink>
              );
            }
            return null;
          })
        )}
      </ListBody>
      {loader || error ? (
        <NavCountries />
      ) : (
        <NavCountries>
          {navNumbers?.map((numb) => {
            return (
              <NavCountriesItem onClick={handleClick} key={numb}>
                {numb}
              </NavCountriesItem>
            );
          })}
        </NavCountries>
      )}
    </>
  );
};
export default List;
