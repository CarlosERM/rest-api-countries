import React from 'react';
import { ImageItem, InfoItem, InfoTitle, ListBody, ListItem } from './style';

const List = () => {
  const brazil = {
    name: 'Brazil',
    population: 200000000,
    region: 'America',
    Capital: 'Brasília',
  };
  return (
    <ListBody>
      <ListItem>
        <ImageItem src="https://flagcdn.com/uy.svg" width="100%" />
        <InfoItem>
          <InfoTitle>{brazil.name}</InfoTitle>
        </InfoItem>
      </ListItem>
    </ListBody>
  );
};
export default List;
