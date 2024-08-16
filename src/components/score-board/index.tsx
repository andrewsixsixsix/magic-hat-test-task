import { StyleSheet, View } from "react-native";

import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

export const ScoreBoard = () => {
  const total = 5;
  const success = 4;
  const failed = 1;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.box}>
        <ThemedText type={"subtitle"}>{total}</ThemedText>
        <ThemedText>Total</ThemedText>
      </View>
      <View style={styles.box}>
        <ThemedText type={"subtitle"}>{success}</ThemedText>
        <ThemedText>Success</ThemedText>
      </View>
      <View style={styles.box}>
        <ThemedText type={"subtitle"}>{failed}</ThemedText>
        <ThemedText>Failed</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
