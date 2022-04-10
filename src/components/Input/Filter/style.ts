import styled from 'styled-components';
/* eslint-disable @typescript-eslint/indent */

export const FilterBody = styled.div`
  padding: 1.25rem 1.875rem 1.25rem 1.875rem;
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  color: inherit;
  transition: 0.5s background-color linear;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  cursor: pointer;
`;

export const Options = styled.ul`
  position: absolute;
  margin-top: 0.3125rem;
  padding: 1.875rem 1.875rem 25px 1.875rem;
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  width: 100%;
`;
export const OptionsItem = styled.li`
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  margin-bottom: 1.25rem;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0rem;
  }

  &:hover {
    font-size: 1.125rem;
    transition: 0.1s font-size linear;
  }
`;

export const WrapperFilter = styled.div`
  width: 53.5%;
  position: relative;
`;
