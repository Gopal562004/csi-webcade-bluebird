// src/components/BottomBar.js
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
} from "react-icons/hi";
import { useAuth } from "../../_auth/AuthContext"; // Correct path for useAuth

const Bottombar = () => {
  const { role } = useAuth(); // Access role from useAuth context

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around items-center p-2 shadow-md md:hidden">
      <Link
        to="/"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
      >
        <HiHome className="text-2xl" />
        <span className="text-xs">Dashboard</span>
      </Link>
      <Link
        to="/find-my-mentor"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
      >
        <HiSearch className="text-2xl" />
        <span className="text-xs">Find Mentor</span>
      </Link>
      {role === "mentor" && (
        <>
          <Link
            to="/set-availability"
            className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
          >
            <HiClock className="text-2xl" />
            <span className="text-xs">Availability</span>
          </Link>
          <Link
            to="/mentee-requests"
            className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
          >
            <HiUser className="text-2xl" />
            <span className="text-xs">Requests</span>
          </Link>
        </>
      )}
      {role === "student" && (
        <Link
          to="/beamentor"
          className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
        >
          <HiUserAdd className="text-2xl" />
          <span className="text-xs">Be a Mentor</span>
        </Link>
      )}
      <Link
        to="/mysessions"
        className="flex flex-col items-center text-gray-200 hover:text-blue-500 transition duration-300"
      >
        <HiUserGroup className="text-2xl" />
        <span className="text-xs">Sessions</span>
      </Link>
    </div>
  );
};

export default Bottombar;
