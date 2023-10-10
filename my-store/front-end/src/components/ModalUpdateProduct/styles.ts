import styled from "styled-components";
import ReactModal from "react-modal";

export const ContainerModal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  width: 37.5rem;
  height: 31.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 0.5rem;
  padding: 1.25rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Prices = styled.div`
  display: flex;
`;
