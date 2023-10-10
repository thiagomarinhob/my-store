import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 20px 3px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;

  > svg {
    position: fixed;
    color: ${({ theme }) => theme.colors.white};
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 1.375rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
