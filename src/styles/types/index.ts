import { TextStyle } from "react-native";

type Theme = "dark" | "light";

export type TColorSet = {
  accent: string;
  main: string;
  shadow: string;
  text: string;
};

export type TColors = Record<Theme, TColorSet>;

export type TFontType = "default" | "subtitle" | "title";

export type TFont = {
  fontSize: TextStyle["fontSize"];
  fontWeight: TextStyle["fontWeight"];
};

export type TFonts = Record<TFontType, TFont>;
