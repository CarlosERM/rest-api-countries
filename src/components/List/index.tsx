import React from 'react';
import { useMyContext } from '../../context';

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
} from './style';

const List = () => {
  const { countries } = useMyContext();

  return (
    <ListBody>
      {countries?.map((country, index) => {
        if (index < 25) {
          return (
            <ListItem>
              <ImageItem src={country.flags.svg} width="100%" />
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
      })}
    </ListBody>
  );
};
export default List;
