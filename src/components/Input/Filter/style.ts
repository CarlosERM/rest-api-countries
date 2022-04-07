import styled from 'styled-components';
/* eslint-disable @typescript-eslint/indent */

export const BodyFilter = styled.select`
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  padding: 1.25rem 1.875rem 1.25rem 1.875rem;
  transition: 0.5s background-color linear;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  min-width: 100%;
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  color: ${({ theme }) => {
    return theme.color.text;
  }};
`;

export const BodyFilterWrapper = styled.div`
  position: relative;
  width: 50%;
  margin-bottom: 2.5rem;
`;
