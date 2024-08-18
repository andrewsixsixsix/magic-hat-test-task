import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";

import { ICharacter } from "@/types";
import { Button } from "../button";
import { ThemedText } from "../themed-text";
import { TColorSet } from "@/styles/types";
import { DEFAULT_CHARACTER_IMAGE } from "@/constants";

interface CharacterItemProps {
  character: ICharacter;
  colors: TColorSet;
  isActive: boolean;
  onCharacterPress: () => void;
  onReloadPress: (character: ICharacter) => void;
}

export const CharacterItem = memo(
  ({
    character,
    colors,
    isActive,
    onCharacterPress,
    onReloadPress,
  }: CharacterItemProps) => (
    <View style={styles.container}>
      <Button style={styles.info} onPress={onCharacterPress}>
        <Image
          source={character.image || DEFAULT_CHARACTER_IMAGE}
          contentFit={"contain"}
          style={styles.image}
        />
        <View>
          <ThemedText type={"subtitle"}>{character.name}</ThemedText>
          <ThemedText
            type={"caption"}
          >{`Attempts: ${character.attempts}`}</ThemedText>
        </View>
      </Button>
      {character.isGuessed ? (
        <Ionicons name="checkmark-circle" size={24} color={colors.green} />
      ) : (
        <View style={styles.icons}>
          {isActive ? null : (
            <Button onPress={() => onReloadPress(character)}>
              <Ionicons name="reload" size={24} color={colors.accent} />
            </Button>
          )}
          <Entypo name="circle-with-cross" size={24} color={colors.red} />
        </View>
      )}
    </View>
  ),
  (prevProps, nextProps) => prevProps.isActive === nextProps.isActive,
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    gap: 12,
  },
  image: {
    height: 50,
    width: 50,
  },
  info: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 12,
  },
});
