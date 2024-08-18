import { Image, StyleSheet, View } from "react-native";

import { ThemedText, ThemedView } from "@/components";
import { Stack, useLocalSearchParams } from "expo-router";
import { ICharacter } from "@/types";
import { useColors } from "@/hooks";
import { TColorSet } from "@/styles/types";

export default function DetailsScreen() {
  const colors = useColors();
  const params = useLocalSearchParams<{ character: string }>();
  const character: ICharacter = JSON.parse(params.character);
  const styles = getStyles(colors);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ headerTitle: character.name }} />
      <View style={styles.info}>
        <Image
          resizeMode={"contain"}
          src={character.image}
          style={styles.image}
        />
        <View style={styles.bioContainer}>
          {character.isGuessed ? (
            <View style={styles.bio}>
              <ThemedText type={"subtitle"}>
                House: <ThemedText>{character.house || "-"}</ThemedText>
              </ThemedText>
              <ThemedText type={"subtitle"}>
                {"Date of birth: "}
                <ThemedText>{character.dateOfBirth ?? "-"}</ThemedText>
              </ThemedText>
              <ThemedText type={"subtitle"}>
                Actor: <ThemedText>{character.actor || "-"}</ThemedText>
              </ThemedText>
              <ThemedText type={"subtitle"}>
                Patronus: <ThemedText>{character.patronus || "-"}</ThemedText>
              </ThemedText>
            </View>
          ) : (
            <ThemedText type={"subtitle"} style={styles.accessDenied}>
              Access denied
            </ThemedText>
          )}
        </View>
      </View>
    </ThemedView>
  );
}

const getStyles = (colors: TColorSet) =>
  StyleSheet.create({
    accessDenied: {
      borderColor: colors.red,
      borderRadius: 8,
      borderWidth: 1,
      color: colors.red,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    bio: {
      gap: 12,
    },
    bioContainer: {
      alignItems: "center",
      flex: 1,
      flexShrink: 1,
    },
    container: {
      paddingVertical: 24,
      paddingHorizontal: 20,
    },
    image: {
      height: 200,
      width: 150,
    },
    info: {
      flexDirection: "row",
      gap: 16,
    },
  });
