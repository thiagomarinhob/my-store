import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0 0;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  th {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    padding: 16px 12px;
    text-align: center;
    line-height: 1.5rem;
  }

  td {
    padding: 0.5rem 2rem;
    background: ${(props) => props.theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
`;

export const Options = styled.div`
  display: flex;

  img {
    cursor: pointer;

    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;
