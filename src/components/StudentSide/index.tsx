import { StyleSheet, Text, View } from "react-native";

export default function StudentSide() {
  return (
    <View>
      <Text style={styles.text}>Welcome, Antonio</Text>
      <Text style={styles.text}>You are a Student!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
