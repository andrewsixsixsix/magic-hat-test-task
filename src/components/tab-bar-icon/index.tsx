import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useColors } from "@/hooks";

interface TabBarIconProps {
  isFocused: boolean;
  name: string;
}

export const TabBarIcon = ({ isFocused, name }: TabBarIconProps) => {
  const colors = useColors();

  return (
    <FontAwesome5
      name={name}
      size={24}
      color={isFocused ? colors.accent : colors.text}
    />
  );
};
