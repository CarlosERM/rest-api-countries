import styled from 'styled-components';

export const ListBody = styled.ul`
  margin-top: 2.5rem;
  padding: 0rem 3.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  column-gap: 5.23vw;

  @media (min-width: 48.5625rem) {
    grid-template-columns: repeat(2, minmax(11.875rem, 1fr));
  }
  @media (min-width: 68.75rem) {
    grid-template-columns: repeat(4, minmax(11.875rem, 16.5625rem));
    /* column-gap: 4.6875rem; */
  } ;
`;

export const ListItem = styled.li`
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  margin-bottom: 50px;
  transition: transform 0.1s linear, background-color 0.5s linear;
  color: inherit;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 0.1s linear;
    box-shadow: 0rem 0rem 1.25rem -0.125rem rgb(0 0 0 / 41%);
  }
`;

export const ImageItem = styled.img`
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  width: 100%;
  height: 200px;
  @media (min-width: 50rem) {
    height: 47.61%;
  }
`;
export const InfoItem = styled.div`
  padding: 1.875rem;
`;
export const InfoTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 1.875rem;
  font-size: 1.4375rem;
`;

export const InfoList = styled.ul`
  margin-bottom: 1.625rem;
`;

export const InfoListItem = styled.li`
  margin-bottom: 0.875rem;
`;
export const InfoCategory = styled.p`
  font-weight: 300;
  font-size: 16px;
`;
export const InfoCategoryInfo = styled.span`
  font-weight: 600;
  font-size: 1.0313rem;
`;

export const NavCountries = styled.ul`
  justify-content: center;
  display: flex;
`;
export const NavCountriesItem = styled.li`
  & + & {
    margin-left: 1rem;
  }
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
