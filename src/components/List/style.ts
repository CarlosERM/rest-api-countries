import styled from 'styled-components';

export const ListBody = styled.ul`
  padding: 0rem 3.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
`;

export const ListItem = styled.ul`
  border-radius: 10px;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  background-color: ${({ theme }) => {
    return theme.color.elements;
  }};
`;

export const ImageItem = styled.img`
  border-radius: 10px 10px 0px 0px;
`;
export const InfoItem = styled.div`
  padding: 30px;
`;
export const InfoTitle = styled.h2`
  font-weight: bold;
`;
