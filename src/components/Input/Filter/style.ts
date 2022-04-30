import styled from 'styled-components';
/* eslint-disable @typescript-eslint/indent */

export const FilterBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1.25rem 1.875rem;
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  color: inherit;
  transition: 0.5s background-color linear;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: 0.9375rem;
  @media (min-width: 50rem) {
    width: 22vw;
    padding: 1.25rem 0.9375rem 1.25rem 1.5rem;
    font-size: 0.875rem;
  }
  @media (min-width: 81.25rem) {
    width: 13.88vw;
  }
`;

export const Options = styled.ul`
  position: absolute;
  margin-top: 0.3125rem;
  padding: 1.5rem 1.875rem 1.5625rem 1.875rem;
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
  margin-bottom: 0.9rem;
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
  width: 58.5%;
  position: relative;
  @media (min-width: 50rem) {
    width: auto;
  }
`;
