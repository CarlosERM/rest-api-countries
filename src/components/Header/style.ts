import styled from 'styled-components';

export const HeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.7rem 1.25rem 2.5rem;
  box-shadow: 0rem -1.875rem 2.8125rem 0rem black;
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  transition: 0.5s background-color linear;
  @media (min-width: 50rem) {
    padding: 1.75rem 5rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 800;
  font-size: 1.0625rem;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: 50rem) {
    font-size: 1.5rem;
  }
`;
export const NavLinkHeader = styled.a`
  text-decoration: none;
  color: inherit;
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
