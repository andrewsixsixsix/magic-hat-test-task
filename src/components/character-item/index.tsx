import { Image, StyleSheet, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ICharacter } from "@/types";
import { Button } from "../button";
import { ThemedText } from "../themed-text";
import { TColorSet } from "@/styles/types";

interface CharacterItemProps {
  character: ICharacter;
  colors: TColorSet;
  isActive: boolean;
  onCharacterPress: () => void;
  onReloadPress: (character: ICharacter) => void;
}

export const CharacterItem = ({
  character,
  colors,
  isActive,
  onCharacterPress,
  onReloadPress,
}: CharacterItemProps) => (
  <View style={styles.container}>
    <Button style={styles.info} onPress={onCharacterPress}>
      <Image
        src={character.image}
        resizeMode={"contain"}
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
