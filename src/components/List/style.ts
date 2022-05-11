/* eslint-disable arrow-body-style */
import styled, { keyframes } from 'styled-components';

export const ListBody = styled.ul`
  margin-top: 2.5rem;
  padding: 0rem 3.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  column-gap: 5.23vw;

  justify-content: center;
  @media (min-width: 48.5625rem) {
    grid-template-columns: repeat(2, minmax(11.875rem, 18.75rem));
  }
  @media (min-width: 50rem) {
    margin-top: 0rem;
    padding: 0;
  }
  @media (min-width: 68.75rem) {
    grid-template-columns: repeat(3, minmax(11.875rem, 16.5625rem));
  }
  @media (min-width: 81.25rem) {
    grid-template-columns: repeat(4, minmax(11.875rem, 16.5625rem));
  } ;
`;

export const fadeIn = keyframes`
from {
  opacity:0;
} to {
  opacity:1;
}
`;
export const ListItem = styled.li`
  animation: ${fadeIn} 1s linear;
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
  margin-bottom: 3.125rem;
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
  height: 12.5rem;
  @media (min-width: 50rem) {
    height: 10rem;
  }
`;
export const InfoItem = styled.div`
  padding: 1.875rem;
  @media (min-width: 50rem) {
    padding: 1.625rem 1.5rem;
  }
`;
export const InfoTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 1.875rem;
  font-size: 1.4375rem;
  @media (min-width: 50rem) {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;

export const InfoList = styled.ul`
  margin-bottom: 1.625rem;

  & + & {
    margin-top: 3.125rem;
  }

  @media (min-width: 50rem) {
    margin-bottom: 0rem;
  }
`;

export const InfoListItem = styled.li`
  margin-bottom: 0.875rem;
`;
export const InfoCategory = styled.p`
  font-weight: 300;
  font-size: 1rem;
  @media (min-width: 50rem) {
    font-size: 0.875rem;
  }
`;
export const InfoCategoryInfo = styled.span`
  font-weight: 600;
  font-size: 1.0313rem;
  @media (min-width: 50rem) {
    font-size: 0.875rem;
    letter-spacing: 0.0625rem;
  }
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
export const ErrorMessage = styled.p`
  font-size: 1.25rem;
  margin: 1.25rem auto;
  grid-column: span 4;
  font-weight: 600;
`;
// interface IDivTeste {
//   image: string;
// }
// export const DivTeste = styled.div<IDivTeste>`
//   background: url(${(props) => props.image}) no-repeat center;
//   background-size: cover;
//   height: 12.5rem;
//   border-radius: 0.25rem 0.25rem 0rem 0rem;
//   @media (min-width: 50rem) {
//     height: 10rem;
//   }
// `;
