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

const gryffindor = require("@/assets/images/gryffindor.png");
const hufflepuff = require("@/assets/images/hufflepuff.png");
const ravenclaw = require("@/assets/images/ravenclaw.png");
const slytherin = require("@/assets/images/slytherin.png");

export default function HomeTab() {
  const colors = useColors();
  const styles = getStyles(colors);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {};

  const onPress = () => {
    if (isRefreshing) {
      return;
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
          src={"https://ik.imagekit.io/hpapi/harry.jpg"}
          resizeMode={"contain"}
          style={styles.characterImage}
        />
        <ThemedText type={"title"}>Harry Potter</ThemedText>
      </ScrollView>
      <View style={styles.buttons}>
        <View style={styles.buttonsRow}>
          <HouseButton
            source={gryffindor}
            title={"Gryffindor"}
            onPress={onPress}
          />
          <HouseButton
            source={slytherin}
            title={"Slytherin"}
            onPress={onPress}
          />
        </View>
        <View style={styles.buttonsRow}>
          <HouseButton
            source={ravenclaw}
            title={"Ravenclaw"}
            onPress={onPress}
          />
          <HouseButton
            source={hufflepuff}
            title={"Hufflepuff"}
            onPress={onPress}
          />
        </View>
        <Button style={styles.notInHouseButton} onPress={onPress}>
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
