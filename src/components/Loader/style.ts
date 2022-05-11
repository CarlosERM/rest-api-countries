/* eslint-disable @typescript-eslint/indent */
import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const CustomLoader = styled.div`
  border: 0.5rem solid
    ${({ theme }) => {
      return theme.color.elements;
    }};
  border-top: 0.5rem solid
    ${({ theme }) => {
      return theme.color.text;
    }};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${rotate} 2s linear infinite;
  margin: 3rem auto 2.5rem auto;
  grid-column: span 4;
`;
