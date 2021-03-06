import styled, { keyframes } from 'styled-components';
import { CustomBackButton } from '../BackButton/style';
import { InfoListItem, InfoTitle } from '../List/style';

export const CountryImage = styled.img`
  margin-top: 4.9375rem;
  margin-bottom: 3.75rem;
  max-width: 100%;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);

  @media (min-width: 800px) {
    margin-top: 0rem;
  }
  @media (min-width: 68.75rem) {
    margin-bottom: 0rem;
  }
`;

export const BorderName = styled.h3`
  margin-top: 4rem;
  margin-bottom: 1.875rem;
  font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 50rem) {
    margin-top: 0rem;
  }
  @media (min-width: 68.75rem) {
    margin-top: 2rem;
    margin-bottom: 0.625rem;
  }
`;

export const BorderBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.625rem;
  flex-wrap: wrap;
  margin-bottom: 1.9375rem;
  @media (min-width: 68.75rem) {
    justify-content: flex-start;
  }
`;

export const NavButtons = styled(CustomBackButton)`
  font-size: 16px;
`;
export const MapLink = styled.a`
  text-decoration: none;
`;

export const CountryName = styled(InfoTitle)`
  font-size: 1.625rem;
  margin-bottom: 2.25rem;
  @media (min-width: 68.75rem) {
    font-size: 2rem;
  }
`;

export const CountryCategory = styled(InfoListItem)`
  margin-bottom: 1.4375rem;
`;

export const fadeIn = keyframes`
from {
  opacity:0;
} to {
  opacity:1;
}
`;

export const GridCountry = styled.div`
  animation: ${fadeIn} 1s linear;

  @media (min-width: 50rem) {
    margin-top: 4rem;
  }
  @media (min-width: 68.75rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    margin-top: 5rem;
    justify-items: center;
    align-items: flex-start;
  }
`;
export const FlexCountry = styled.div`
  @media (min-width: 50rem) {
    display: flex;
    justify-content: space-between;

    align-items: center;
    gap: 2rem;
    wrap: wrap;
  }
  @media (min-width: 68.75rem) {
    display: block;
  }
`;
