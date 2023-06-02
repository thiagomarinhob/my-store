import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
`;

export const ContainerTable = styled.div`
  display: flex;
  margin-top: -70px;
  margin-left: 25px;
  width: 1200px;
  min-width: 400px;
`;

export const HeaderMenu = styled.div`
  background-color: #41414c;
  padding: 1rem 1rem 12rem;

  > h1 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Menu = styled.div``;
