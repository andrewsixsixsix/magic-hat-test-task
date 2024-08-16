import { Tabs } from "expo-router";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { useColors } from "@/hooks";
import { Button, TabBarIcon, ThemedText } from "@/components";

const headerRight = () => (
  <Button style={{ paddingRight: 20 }} onPress={() => {}}>
    <ThemedText>Reset</ThemedText>
  </Button>
);

const tabBarIcon = (name: string, isFocused: boolean) => (
  <TabBarIcon name={name} isFocused={isFocused} />
);

export default function HomeLayout() {
  const colors = useColors();

  const screenOptions: BottomTabNavigationOptions = {
    headerRight: () => headerRight(),
    headerStyle: { backgroundColor: colors.main, shadowColor: colors.shadow },
    headerTitleAlign: "center",
    headerTitleStyle: { color: colors.text },
    tabBarActiveTintColor: colors.accent,
    tabBarInactiveTintColor: colors.text,
    tabBarStyle: {
      backgroundColor: colors.main,
      borderTopColor: colors.shadow,
    },
  };

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name={"index"}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => tabBarIcon("home", focused),
        }}
      />
      <Tabs.Screen
        name={"list"}
        options={{
          title: "List",
          tabBarIcon: ({ focused }) => tabBarIcon("list-ul", focused),
        }}
      />
    </Tabs>
  );
}
