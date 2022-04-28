import React from 'react';
import Body from '../components/Body';
import Input from '../components/Input';
import Filter from '../components/Input/Filter';
import List from '../components/List';

export const Home = () => {
  return (
    <Body>
      <nav>
        <Input />
        <Filter />
      </nav>
      <List />
    </Body>
  );
};
