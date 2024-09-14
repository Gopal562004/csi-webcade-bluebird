// src/components/TopBar.js
import React from "react";
import { Link } from "react-router-dom";
import { HiUser, HiLogout } from "react-icons/hi";
import { useAuth } from "../../_auth/AuthContext"; // Correct path for useAuth
import RoleToggleButton from "../RoleToggleButton";

const Topbar = () => {
  const { user, role, demoLogin } = useAuth(); // Access user and role from useAuth context

  return (
    <div className="w-full bg-gray-800 text-white flex justify-between items-center p-4 shadow-md fixed top-0 z-50 block md:hidden">
      {/* Left Section: Profile */}
      <Link to="/profilepage" className="flex items-center">
        <img
          src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" // Replace with your profile image source
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="text-lg font-semibold">
            {demoLogin ? demoLogin.name : user?.name || "Username"}
          </h3>
          <p className="text-sm">{role === "mentor" ? "Mentor" : "Student"}</p>
        </div>
      </Link>

      {/* Right Section: Logout and Role Toggle */}
      <div className="flex items-center space-x-4">
        <RoleToggleButton />
        <Link
          to="#"
          className="flex items-center text-gray-200 hover:text-red-500 transition duration-300"
        >
          <HiLogout className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
