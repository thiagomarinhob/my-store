import styled from "styled-components";

interface IContainer {
  sidebar: boolean;
}

export const Container = styled.div<IContainer>`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  /* top: 0px; */
  /* left: 0px; */
  width: 250px;
  /* left: ${({ sidebar }: any) => (sidebar ? "0" : "-100%")}; */
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 1.875rem;
    height: 1.875rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 6.25rem;
`;
