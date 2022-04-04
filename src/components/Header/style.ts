import styled from 'styled-components';

export const HeaderBody = styled.div`
  color: ${({ theme }) => {
    return theme.color.text;
  }};
`;

export const HeaderTitle = styled.h1`
  font-weight: bold;
`;

export const HeaderToggle = styled.input``;
