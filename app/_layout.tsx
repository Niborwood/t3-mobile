import { StyleSheet } from "react-native";
import Menu from "../components/Menu";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
