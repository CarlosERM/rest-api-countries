import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      elements: string;
      text: string;
      input: string;
    };
  }
}
