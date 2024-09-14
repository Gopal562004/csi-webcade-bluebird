// src/_auth/AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Create the AuthContext with default values
const AuthContext = createContext();

// AuthProvider component to provide context values
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state
  const [role, setRole] = useState("student"); // Default role

  // Function to log in a user with a specified role
  const login = (userData, userRole = "student") => {
    setUser(userData);
    setRole(userRole); // Set role during login
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setRole("student"); // Reset to default role on logout
  };

  // Function to toggle between student and mentor roles
  const toggleRole = () => {
    setRole((prevRole) => (prevRole === "student" ? "mentor" : "student"));
  };

  // Demo login function with predefined credentials
  const demoLogin = () => {
    const demoUser = {
      id: "UQkPe7HPEOMxYFSqHXf8", // Demo user ID
      name: "Demo User",
      email: "demo@example.com",
      username: "demouser",
    };
    login(demoUser, "student"); // You can also make the role "mentor" here if needed
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, role, toggleRole, demoLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
