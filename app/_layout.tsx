import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#252525",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "ClashDisplay",
          fontSize: 24,
        },
        headerTitle: "Le T3 du Mardi",
      }}
    />
  );
}
