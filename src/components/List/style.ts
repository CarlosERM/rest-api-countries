import styled from 'styled-components';

export const ListBody = styled.ul`
  margin-top: 2.5rem;
  padding: 0rem 3.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  border-radius: 0.625rem;
  box-shadow: 0px 0px 15px -4px rgb(0 0 0 / 41%);
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  margin-bottom: 50px;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 0.1s linear;
    box-shadow: 0px 0px 20px -2px rgb(0 0 0 / 41%);
  }
`;

export const ImageItem = styled.img`
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  width: 100%;
  height: 50%;
  @media (min-width: 800px) {
    height: 47.61;
  }
`;
export const InfoItem = styled.div`
  padding: 1.875rem;
`;
export const InfoTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 20px;
`;

export const InfoList = styled.ul``;

export const InfoListItem = styled.li`
  margin-bottom: 15px;
`;
export const InfoCategory = styled.p``;
export const InfoCategoryInfo = styled.span`
  font-weight: bold;
`;

export const NavCountries = styled.ul`
  justify-content: center;
  display: flex;
`;
export const NavCountriesItem = styled.li`
  & + & {
    margin-left: 16px;
  }
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
