import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem;
  cursor: pointer;
  border-radius: 0.625rem;
  margin: 0 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};

  > svg {
    margin: 0 0.625rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
