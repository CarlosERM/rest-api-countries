import React from 'react';
import BackButton from '../components/BackButton';
import Body from '../components/Body';
import { CountryBody } from '../components/BodyCountryPage/style';
import CountryPage from '../components/CountryPage';

export const Country = () => {
  return (
    <Body>
      <CountryBody>
        <BackButton />
        <CountryPage />
      </CountryBody>
    </Body>
  );
};
