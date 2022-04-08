import React from 'react';

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
  const brazil = {
    name: 'Brazil',
    population: 200000000,
    region: 'America',
    capital: 'Brasília',
  };
  return (
    <ListBody>
      <ListItem>
        <ImageItem src="https://flagcdn.com/uy.svg" width="100%" />
        <InfoItem>
          <InfoTitle>{brazil.name}</InfoTitle>
          <InfoList>
            <InfoListItem>
              <InfoCategory>
                <InfoCategoryInfo>Population:</InfoCategoryInfo>
                {` ${brazil.population}`}
              </InfoCategory>
            </InfoListItem>
            <InfoListItem>
              <InfoCategory>
                <InfoCategoryInfo>Region:</InfoCategoryInfo>
                {` ${brazil.region}`}
              </InfoCategory>
            </InfoListItem>
            <InfoListItem>
              <InfoCategory>
                <InfoCategoryInfo>Capital:</InfoCategoryInfo>
                {` ${brazil.capital}`}
              </InfoCategory>
            </InfoListItem>
          </InfoList>
        </InfoItem>
      </ListItem>
    </ListBody>
  );
};
export default List;
