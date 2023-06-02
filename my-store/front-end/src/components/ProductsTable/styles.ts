import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 5px;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  th {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    padding: 1rem 0.75rem;
    text-align: center;
    line-height: 1.5rem;
  }

  td {
    padding: 0.5rem 2rem;
    background: ${(props) => props.theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 0.25rem;
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
