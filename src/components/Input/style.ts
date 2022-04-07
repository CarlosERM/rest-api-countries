/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';

export const BoxInput = styled.div`
  position: relative;
  color: ${({ theme }) => {
    return theme.color.inputText;
  }};
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
  margin-bottom: 50px;
  min-width: 100%;

  &::placeholder {
    color: ${({ theme }) => {
      return theme.color.inputText;
    }};
  }
`;
