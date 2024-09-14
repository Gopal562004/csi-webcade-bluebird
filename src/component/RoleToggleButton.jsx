import React from "react";
import { useAuth } from "../_auth/AuthContext"; // Import your custom hook

const RoleToggleButton = () => {
  const { role, toggleRole } = useAuth(); // Get role and toggle function from AuthContext

  return (
    <div className="flex items-center justify-between p-2">
      <span className="text-sm text-gray-400">
        {role === "student" ? "Student" : "Mentor"}
      </span>

      {/* Smaller Toggle Slider */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={role === "mentor"}
          onChange={toggleRole}
          className="sr-only"
        />
        <div className="w-10 h-5 bg-gray-500 rounded-full peer dark:bg-gray-600 peer-focus:ring-2 peer-focus:ring-blue-400 transition-all duration-300 ease-in-out">
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out transform ${
              role === "mentor" ? "translate-x-5 bg-blue-500" : ""
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default RoleToggleButton;
