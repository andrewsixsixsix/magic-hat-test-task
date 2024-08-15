type Theme = "dark" | "light";

export interface IColorSet {
  accent: string;
  main: string;
  shadow: string;
  text: string;
}

export type TColors = Record<Theme, IColorSet>;
