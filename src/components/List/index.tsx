import React from 'react';
import { useMyContext } from '../../context';
import Loader from '../Loader';

import {
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
  const { countries, inicio, setInicio, fim, setFim, loader } = useMyContext();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value: number = +e.currentTarget.innerHTML;
    if (value !== 1) setInicio((value - 1) * 25 + 1);
    else setInicio((value - 1) * 25);
    setFim(value * 25);
  };
  return (
    <>
      <ListBody>
        {loader ? (
          <Loader />
        ) : (
          countries?.map((country, index) => {
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
                          {` ${country.population}`}
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
        {numbers.map((numb) => {
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
