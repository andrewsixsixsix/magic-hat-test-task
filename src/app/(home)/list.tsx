import { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import { CharacterItem, ScoreBoard, ThemedView } from "@/components";
import {
  useActiveCharacter,
  useCharacterActions,
  useGuessedCharacters,
} from "@/store/character";
import { ICharacter } from "@/types";
import { useColors } from "@/hooks";

export default function ListTab() {
  const colors = useColors();
  const activeCharacter = useActiveCharacter();
  const guessedCharacters = useGuessedCharacters();
  const { setActiveCharacter } = useCharacterActions();

  const toDetails = (character: ICharacter) =>
    router.navigate({
      pathname: "/details",
      params: { character: JSON.stringify(character) },
    });

  const renderItem = useCallback(
    ({ item }: { item: ICharacter }) => (
      <CharacterItem
        character={item}
        colors={colors}
        isActive={activeCharacter.id === item.id}
        onCharacterPress={() => toDetails(item)}
        onReloadPress={setActiveCharacter}
      />
    ),
    [],
  );

  const separator = useCallback(() => <View style={styles.separator} />, []);

  return (
    <ThemedView style={styles.container}>
      <ScoreBoard />
      <FlatList
        contentContainerStyle={styles.list}
        data={guessedCharacters}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={separator}
        renderItem={renderItem}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 20,
  },
});
