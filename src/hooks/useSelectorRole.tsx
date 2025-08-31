import { useState } from "react";

type Role = "student" | "teacher";

export function useSelectorRole() {
  const [selectedRole, setSelectedRole] = useState<Role>("student");

  function handleSelectStudent() {
    setSelectedRole("student");
  }

  function handleSelectTeacher() {
    setSelectedRole("teacher");
  }

  return {
    selectedRole,
    setSelectedRole,
    handleSelectStudent,
    handleSelectTeacher,
  };
}
