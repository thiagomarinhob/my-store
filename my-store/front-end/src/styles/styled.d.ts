import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      brown: string;
      black: string;
      gray: string;
      gray2: string;
      bluePrimary: string;
      blueSecundary: string;
    };
  }
}
