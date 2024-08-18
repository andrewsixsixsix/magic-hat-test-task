import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { TColorSet } from "@/styles/types";
import { useColors } from "@/hooks";

interface ISearchBarProps extends TextInputProps {}

export const SearchBar = ({ placeholder, ...props }: ISearchBarProps) => {
  const colors = useColors();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        style={styles.input}
        selectionColor={colors.accent}
        {...props}
      />
      <Ionicons
        name={"search"}
        size={20}
        color={colors.gray}
        style={styles.icon}
      />
    </View>
  );
};

const getStyles = (colors: TColorSet) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      borderColor: colors.gray,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: "row",
      paddingHorizontal: 10,
      width: "100%",
    },
    input: {
      flex: 1,
      paddingVertical: 12,
      color: colors.text,
    },
    icon: {
      paddingLeft: 10,
    },
  });
