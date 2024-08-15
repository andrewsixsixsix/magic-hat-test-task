import { Text } from "react-native";
import { Tabs } from "expo-router";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { useColors } from "@/hooks";
import { Button, TabBarIcon } from "@/components";
import { IColorSet } from "@/styles/types";

const headerRight = (color: IColorSet[keyof IColorSet]) => (
  <Button style={{ paddingRight: 20 }} onPress={() => {}}>
    <Text style={{ color }}>Reset</Text>
  </Button>
);

const tabBarIcon = (name: string, isFocused: boolean) => (
  <TabBarIcon name={name} isFocused={isFocused} />
);

export default function HomeLayout() {
  const colors = useColors();

  const screenOptions: BottomTabNavigationOptions = {
    headerRight: () => headerRight(colors.text),
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
