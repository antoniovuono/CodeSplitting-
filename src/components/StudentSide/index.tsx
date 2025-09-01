import { StyleSheet, Text, View } from "react-native";

export default function StudentSide() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Antonio</Text>
      <Text style={styles.text}>You are a Student!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
