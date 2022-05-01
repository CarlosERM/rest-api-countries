import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from '../components/Body';
import Input from '../components/Input';
import Filter from '../components/Input/Filter';
import { NavCustom } from '../components/Input/style';
import List from '../components/List';

export const Home = () => {
  return (
    <Body>
      <NavCustom>
        <Input />
        <Filter />
      </NavCustom>
      <List />
      <Outlet />
    </Body>
  );
};
