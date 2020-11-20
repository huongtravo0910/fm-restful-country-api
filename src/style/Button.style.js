import styled from "styled-components";

export const Button = styled.span`
  width: 10rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.elementColor};
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 7px ${({ theme }) => theme.cardBoxShadow};
  outline: none;
  cursor: pointer;
  > .icon {
    margin-right: 1rem;
  }
`;
