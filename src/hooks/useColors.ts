import { useColorScheme } from "react-native";

import { colors } from "@/styles";
import { IColorSet } from "@/styles/types";

export const useColors = (): IColorSet => {
  const theme = useColorScheme() ?? "light";
  return colors[theme];
};
