// src/components/Leftsidebar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiBookOpen,
  HiUserGroup,
  HiClock,
  HiUser,
  HiBell,
  HiChat,
  HiCog,
  HiUserAdd,
  HiSearch,
  HiLogout,
} from "react-icons/hi";
import { useAuth } from "../../_auth/AuthContext"; // Import the useAuth hook
import RoleToggleButton from "../RoleToggleButton";

const Leftsidebar = () => {
  const { user, role, demoLogin } = useAuth(); // Access user and role from useAuth context

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col shadow-md fixed hidden md:block">
      {/* Profile Section */}
      <Link
        to="/profilepage"
        className="flex items-center p-4 border-b border-gray-700"
      >
        <img
          src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" // Replace with your profile image source
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">
            {demoLogin ? demoLogin.name : user?.name || "Username"}{" "}
            {/* Display username */}
          </h3>
          <p className="text-sm">{role === "mentor" ? "Mentor" : "Student"}</p>
        </div>
      </Link>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiHome className="mr-3" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/find-my-mentor"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiSearch className="mr-3" /> Find a Mentor
            </Link>
          </li>

          {/* Mentor-Specific Options */}
          {role === "mentor" && (
            <>
              <li>
                <Link
                  to="/set-availability"
                  className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
                >
                  <HiClock className="mr-3" /> Set Availability
                </Link>
              </li>
              <li>
                <Link
                  to="/mentee-requests"
                  className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
                >
                  <HiUser className="mr-3" /> Mentee Requests
                </Link>
              </li>
            </>
          )}

          {/* Student-Specific Options */}
          {role === "student" && (
            <li>
              <Link
                to="/beamentor"
                className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
              >
                <HiUserAdd className="mr-3" /> Be a Mentor
              </Link>
            </li>
          )}

          <li>
            <Link
              to={{
                pathname: "/mysessions",
                state: { demoLogin }, // Pass demoLogin as state
              }}
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiUserGroup className="mr-3" /> My Sessions
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiBell className="mr-3" /> Notifications
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiChat className="mr-3" /> Messages
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiCog className="mr-3" /> Settings
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-600 rounded transition duration-300"
            >
              <HiLogout className="mr-3" /> Logout
            </Link>
          </li>
          <li>
            <div className="px-4 py-2 hover:bg-gray-600 rounded transition duration-300">
              <RoleToggleButton />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Leftsidebar;
