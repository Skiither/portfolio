import { DefaultTheme } from "styled-components";

export type Theme = {
  corPrincipal: string;
  corSecundaria: string;
  corDeFundo: string;
  corDeFundoBotao: string;
  corDaBorda: string;
};

const themaDark: DefaultTheme = {
  corPrincipal: "#fff",
  corSecundaria: "#eee",
  corDeFundo: "#282a35",
  corDeFundoBotao: "#fff",
  corDaBorda: "#c1c1c1"
};

export default themaDark;
