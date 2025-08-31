import React from "react";
import { StyleSheet, View } from "react-native";

import { RoleSelector } from "./src/components/RoleSelector";
import { useSelectorRole } from "./src/hooks/useSelectorRole";

const StudentSide = React.lazy(
  () =>
    import(/* webpackChunkName: "student" */ "./src/components/StudentSide"),
);
const TeacherSide = React.lazy(
  () =>
    import(/* webpackChunkName: "teacher" */ "./src/components/TeacherSide"),
);

function App() {
  const { selectedRole, handleSelectStudent, handleSelectTeacher } =
    useSelectorRole();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {selectedRole === "student" ? <StudentSide /> : <TeacherSide />}
      </View>

      <View style={styles.switchContainer}>
        <RoleSelector
          selectedRole={selectedRole}
          onStudentSelected={handleSelectStudent}
          onTeacherSelected={handleSelectTeacher}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#0e0d0dff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchContainer: {
    height: 80,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
});

export default App;
