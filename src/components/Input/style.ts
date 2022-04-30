/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const BoxInput = styled.form`
  position: relative;
  color: ${({ theme }) => {
    return theme.color.inputText;
  }};
  margin-bottom: 3.125rem;
  @media (min-width: 50rem) {
    margin-bottom: 2.6875rem;
  }
`;

export const BodyInput = styled.input`
  padding: 1.25rem 2.5rem 1.25rem 5.625rem;
  background-color: ${({ theme }) => {
    return theme.color.input;
  }};
  color: inherit;
  border: none;
  outline: none;
  transition: 0.5s background-color linear;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  min-width: 100%;
  font-size: 0.9375rem;
  font-family: inherit;
  &::placeholder {
    color: ${({ theme }) => {
      return theme.color.inputText;
    }};
  }
  @media (min-width: 50rem) {
    width: 33.2vw;
    padding: 1.25rem 2.5rem 1.25rem 4.75rem;
    font-size: 0.875rem;
    font-weight: 300;
  }
`;

export const NavCustom = styled.nav`
  @media (min-width: 50rem) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 50%;
  left: 2.3rem;
  font-size: 1.5625rem;
  transform: translateY(-50%);
  @media (min-width: 50rem) {
    font-size: 1.375rem;
    left: 2rem;
  }
`;
