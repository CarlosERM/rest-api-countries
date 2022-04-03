import styled from 'styled-components';

export const HeaderBody = styled.div`
  color: ${({ theme }) => {
    return theme.color.text;
  }};
`;
