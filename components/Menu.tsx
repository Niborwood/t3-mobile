import { View, Text, StyleSheet } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Le T3 du Mardi</Text>
      <Text style={styles.menu}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: "ClashDisplay",
    fontSize: 24,
    color: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
    backgroundColor: "#252525",
  },
  menu: {
    color: "#fff",
  },
});
