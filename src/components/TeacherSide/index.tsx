import { StyleSheet, Text, View } from "react-native";

export default function TeacherSide() {
  return (
    <View>
      <Text style={styles.text}>Welcome, Cecilia</Text>
      <Text style={styles.text}>You are a Student! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
