import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TRoleSelector = {
  onStudentSelected: () => void;
  onTeacherSelected: () => void;
  selectedRole: "student" | "teacher";
};

export function RoleSelector({
  onStudentSelected,
  onTeacherSelected,
  selectedRole,
}: TRoleSelector) {
  return (
    <View style={styles.container}>
      <View style={styles.selectorContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedRole === "student"
              ? styles.selectedButton
              : styles.unselectButton,
          ]}
          onPress={onStudentSelected}
        >
          <Text style={styles.label}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedRole === "teacher"
              ? styles.selectedButton
              : styles.unselectButton,
          ]}
          onPress={onTeacherSelected}
        >
          <Text style={styles.label}>Teacher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1c1cff",
    alignItems: "center",
  },
  selectorContainer: {
    flexDirection: "row",
    backgroundColor: "#1e1c1cff",
    padding: 20,
    gap: 4,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  selectedButton: {
    backgroundColor: "#4b4b4bff",
  },
  unselectButton: {
    backgroundColor: "#1e1c1cff",
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
});
