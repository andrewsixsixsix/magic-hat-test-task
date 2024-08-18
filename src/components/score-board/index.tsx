import { StyleSheet, View } from "react-native";

import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import { useScore } from "@/store/score";

export const ScoreBoard = () => {
  const { total, success, failed } = useScore();

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
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
