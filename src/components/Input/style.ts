import styled from 'styled-components';

export const BoxInput = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.inputText};
`;
const BodyInput = styled.input`
  min-width: 100%;
  padding: 1.25rem 2.5rem 1.25rem 5.625rem;
  background-color: ${({ theme }) => theme.color.input};
  border: none;
  outline: none;
  transition: 0.5s background-color linear;
  box-shadow: 0rem 0rem 0.9375rem -0.25rem rgb(0 0 0 / 41%);
  border-radius: 0.3125rem;
  margin-bottom: 3.125rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.inputText};
  }
`;

export default BodyInput;
