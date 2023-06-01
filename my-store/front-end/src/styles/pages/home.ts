import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
  height: 100vh;
  max-width: 90rem;
  background: ${({ theme }) => theme.colors.black};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Command = styled.div``;
