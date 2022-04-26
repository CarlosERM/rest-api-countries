import styled from 'styled-components';

export const HeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 1.25rem 2.5rem;
  box-shadow: 0px -30px 45px 0px black;
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  transition: 0.5s background-color linear;
`;

export const HeaderTitle = styled.h1`
  font-weight: 800;
  font-size: 1.0625rem;
`;

export const HeaderToggle = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 600;
  align-items: center;
`;
export const Toggle = styled.button`
  width: 0.9375rem;
  height: 0.9375rem;
  border: none;
  cursor: pointer;
  background: inherit;
`;
