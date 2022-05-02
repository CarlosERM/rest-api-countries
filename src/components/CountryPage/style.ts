import styled from 'styled-components';
import { CustomBackButton } from '../BackButton/style';

export const CountryImage = styled.img`
  margin-top: 4.9375rem;
  margin-bottom: 4.9375rem;

  max-width: 100%;
  height: auto;
`;

export const BorderName = styled.h3`
  margin-bottom: 1.875rem;
`;

export const BorderBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.8125rem;
  flex-wrap: wrap;
`;

export const Border = styled(CustomBackButton)`
  font-size: 0.75rem;
`;
