import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      primary: string;
      secundary: string;
      purple: string;
      title: string;
    };
  }
}
