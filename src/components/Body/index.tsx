import React from 'react';
import { ContainerBody } from './style';

interface BodyProp {
  children: React.ReactNode;
}
const Body = ({ children }: BodyProp) => {
  return <ContainerBody>{children}</ContainerBody>;
};

export default Body;
