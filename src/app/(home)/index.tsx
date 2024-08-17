import { useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import {
  Button,
  HouseButton,
  ScoreBoard,
  ThemedText,
  ThemedView,
} from "@/components";
import { useColors } from "@/hooks";
import { TColorSet } from "@/styles/types";
import { useScoreActions } from "@/store/score";
import { GuessResult, TCharacterHouse } from "@/types";
import { useActiveCharacter, useCharacterActions } from "@/store/character";

const gryffindor = require("@/assets/images/gryffindor.png");
const hufflepuff = require("@/assets/images/hufflepuff.png");
const ravenclaw = require("@/assets/images/ravenclaw.png");
const slytherin = require("@/assets/images/slytherin.png");

export default function HomeTab() {
  const colors = useColors();
  const styles = getStyles(colors);

  const activeCharacter = useActiveCharacter();
  const { guessCharacterHouse } = useCharacterActions();
  const { incrementSuccess, incrementFailed } = useScoreActions();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {};

  const guess = (house: TCharacterHouse) => {
    if (isRefreshing) {
      return;
    }
    const guessResult = guessCharacterHouse(house);
    switch (guessResult) {
      case GuessResult.ALREADY_GUESSED:
        return;
      case GuessResult.SUCCESS:
        incrementSuccess();
        break;
      case GuessResult.FAILED:
        incrementFailed();
        break;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScoreBoard />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.character}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        <Image
          src={activeCharacter.image}
          resizeMode={"contain"}
          style={styles.characterImage}
        />
        <ThemedText type={"title"}>{activeCharacter.name}</ThemedText>
      </ScrollView>
      <View style={styles.buttons}>
        <View style={styles.buttonsRow}>
          <HouseButton
            source={gryffindor}
            title={"Gryffindor"}
            onPress={() => guess("Gryffindor")}
          />
          <HouseButton
            source={slytherin}
            title={"Slytherin"}
            onPress={() => guess("Slytherin")}
          />
        </View>
        <View style={styles.buttonsRow}>
          <HouseButton
            source={ravenclaw}
            title={"Ravenclaw"}
            onPress={() => guess("Ravenclaw")}
          />
          <HouseButton
            source={hufflepuff}
            title={"Hufflepuff"}
            onPress={() => guess("Hufflepuff")}
          />
        </View>
        <Button style={styles.notInHouseButton} onPress={() => guess("")}>
          <ThemedText type={"subtitle"}>Not in house</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
}

const getStyles = (colors: TColorSet) =>
  StyleSheet.create({
    buttons: {
      gap: 12,
      marginHorizontal: 20,
    },
    buttonsRow: {
      flexDirection: "row",
      gap: 12,
      justifyContent: "space-between",
    },
    character: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
    characterImage: {
      height: 150,
      width: 100,
    },
    container: {
      paddingVertical: 24,
    },
    notInHouseButton: {
      alignItems: "center",
      borderColor: colors.accent,
      borderRadius: 8,
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
  });
