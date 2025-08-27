import "styled-components";
import type { Theme } from "../Themes/dark";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
