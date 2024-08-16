import { Image, ImageProps, PressableProps, StyleSheet } from "react-native";

import { Button } from "../button";
import { ThemedText } from "../themed-text";
import { TColorSet } from "@/styles/types";
import { useColors } from "@/hooks";

interface HouseButtonProps extends PressableProps {
  source: ImageProps["source"];
  title: string;
}

export const HouseButton = ({
  source,
  title,
  onPress,
  ...props
}: HouseButtonProps) => {
  const colors = useColors();
  const styles = getStyles(colors);

  return (
    <Button onPress={onPress} {...props} style={styles.button}>
      <Image source={source} resizeMode={"contain"} style={styles.logo} />
      <ThemedText type={"subtitle"}>{title}</ThemedText>
    </Button>
  );
};

const getStyles = (colors: TColorSet) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      borderColor: colors.accent,
      borderRadius: 8,
      borderWidth: 2,
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
    logo: {
      width: 60,
      height: 60,
    },
  });
