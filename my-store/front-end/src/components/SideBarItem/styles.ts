import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.grayPrimary};
  padding: 0.625rem;
  cursor: pointer;
  border-radius: 0.625rem;
  margin: 0 0.625rem 1.25rem;

  > svg {
    margin: 0 0.625rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.graySecuundary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
