/* eslint-disable react/require-default-props */
import React from 'react';
import { CustomLoader } from './style';

interface ILoader {
  style?: string;
}
const Loader = ({ style = 'block' }: ILoader) => {
  return <CustomLoader style={{ display: `${style}` }} />;
};

export default Loader;
