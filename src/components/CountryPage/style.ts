import styled from 'styled-components';
import { CustomBackButton } from '../BackButton/style';
import { InfoListItem, InfoTitle } from '../List/style';

export const CountryImage = styled.img`
  margin-top: 4.9375rem;
  margin-bottom: 60px;
  max-width: 100%;
`;

export const BorderName = styled.h3`
  margin-top: 4rem;
  margin-bottom: 1.875rem;
  font-size: 20px;
  font-weight: 600;
`;

export const BorderBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 31px;
`;

export const Border = styled(CustomBackButton)`
  font-size: 0.75rem;
`;

export const CountryName = styled(InfoTitle)`
  font-size: 1.625rem;
  margin-bottom: 2.25rem;
`;

export const CountryCategory = styled(InfoListItem)`
  margin-bottom: 1.4375rem;
`;
