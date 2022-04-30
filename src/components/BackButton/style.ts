import styled from 'styled-components';

export const CustomBackButton = styled.button`
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  color: ${({ theme }) => {
    return theme.color.text;
  }};
  border: none;
  padding: 0.5rem 1.875rem;
  font-size: 1.0625rem;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  transition: transform 0.1s linear, background-color 0.5s linear;
  border-radius: 0.1875rem;
  &:hover {
    box-shadow: 0rem 0rem 1.25rem -0.125rem rgb(0 0 0 / 41%);
    transform: scale(1.05);
    cursor: pointer;
  }
`;
