import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 This is your Profile Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
