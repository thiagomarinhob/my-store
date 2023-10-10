import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 70%;
`;

export const HeaderMenu = styled.div`
  display: flex;

  margin-left: 0.625rem;
  padding: 0.625rem 0 6.25rem 0;
  background-color: ${({ theme }) => theme.colors.primary};

  > h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  margin-left: 0.625rem;
  min-width: 25rem;
`;

export const Menu = styled.div``;
