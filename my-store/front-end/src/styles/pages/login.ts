import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerImage = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 80px;
  }

  width: 45%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1.25rem;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  margin-top: 1.25rem;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 420;
  height: 3.875rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.blueSecundary};
  color: ${({ theme }) => theme.colors.white};

  min-height: 3.3125rem;
  align-items: center;
  justify-content: center;
  outline: none;
  line-height: 2.125rem;
  text-align: center;
  border: 0.0625rem solid ${({ theme }) => theme.colors.blueSecundary};

  &:hover {
    filter: brightness(0.9);
  }
`;
