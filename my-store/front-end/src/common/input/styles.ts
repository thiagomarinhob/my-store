import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  > input {
    margin-bottom: 1.875rem;
    width: 100%;
    min-width: 4.375rem;
    height: 3.875rem;
    padding: 0 0.625rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    outline-color: ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    border-radius: 0.625rem;
    color: #4a4a4a;
    font-size: 1.375rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    text-overflow: ellipsis;
    font-weight: 420;
  }

  input:-internal-autofill-selected {
    background-color: transparent;
  }

  > input:focus {
    outline-color: ${({ theme }) => theme.colors.gray2};
  }

  > input.filled ~ div,
  > input:focus ~ div {
    bottom: 1.9375rem;
  }

  > input.filled:valid {
    border-color: #54813a;
  }

  > input.filled:invalid,
  > input.error,
  > input.error.filled {
    border-color: #991b21;
  }

  > input:invalid:focus ~ div,
  > input.error:invalid:focus ~ div,
  > input.error:focus ~ div {
    color: #991b21;
  }

  > input.filled:invalid ~ div,
  > input.error.filled ~ div {
    color: #991b21;
  }

  > img {
    position: absolute;
    right: 0;
    top: 2.625rem;
    width: 4.375rem;
    height: 3.875rem;
  }
  > input:disabled {
    background: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.gray2};
    cursor: not-allowed;
  }

  > input:focus {
    border-color: ${({ theme }) => theme.colors.gray2};
  }
  > input[type="date"]::-webkit-inner-spin-button,
  > input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  > input::-webkit-input-placeholder {
    font-weight: 420;
    font-size: 1.375rem;
    color: #a0a0a0;
  }
`;

interface IError {
  error: boolean;
}

interface ILabel {
  error: boolean;
  filled: string;
}

export const Label = styled.div<ILabel>`
  padding: 0;
  font-size: 1.5rem;
  height: 2.125rem;
  font-weight: 420;
  margin-bottom: 9px;
  ${({ error, filled, theme }) =>
    error
      ? `color: #991b21;`
      : `${
          filled
            ? `color: ${theme.colors.gray2};`
            : `color: ${theme.colors.white};`
        }`}
`;

export const Error = styled.div<IError>`
  color: #991b21;
  font-size: 1.125rem;
  height: 1.9375rem;
  width: 100%;
  padding: 0;
  font-weight: 420;
  justify-content: left;
  ${({ error }: any) => (error ? "display: flex;" : "display: hidden;")}
`;
