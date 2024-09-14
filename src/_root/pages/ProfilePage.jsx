// src/components/ProfilePage.jsx
import React from "react";
import { FaCalendarAlt, FaEnvelope, FaPhone, FaLink } from "react-icons/fa"; // Import icons from react-icons

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="relative w-full h-[25vh] bg-gradient-to-r from-purple-600 to-red-500 flex items-center justify-center text-white hidden md:block">
        <div className="absolute bottom-0 pb-4 text-center w-full">
          <h1 className="text-3xl font-bold">User Profile</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start w-full p-4 md:p-8 pt-16 pb-16 md:pt-8 md:pb-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center w-full md:w-[35%] bg-white shadow-lg rounded-lg p-4 mb-4 md:mb-0 ">
          <img
            src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
            alt="Profile"
            className="rounded-lg w-full max-w-[300px] h-[350px] object-cover border-4 border-white shadow-md mb-4 "
          />
          <div className="mt-4 text-center ">
            <h2 className="text-xl font-semibold uppercase">User Name</h2>
            <p className="text-lg text-gray-600">User Role</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-[60%] bg-white shadow-lg rounded-lg p-6 md:ml-5">
          <div className="flex items-center mt-4">
            <FaCalendarAlt className="text-purple-600 text-2xl" />
            <span className="ml-3 text-lg font-medium">Join Date</span>
          </div>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-purple-600 text-2xl" />
            <div className="ml-3">
              <span className="text-lg font-medium">Email Address:</span>
              <p className="text-gray-700">demo@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaPhone className="text-purple-600 text-2xl" />
            <div className="ml-3">
              <span className="text-lg font-medium">Phone Number:</span>
              <p className="text-gray-700">123-456-7890</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaLink className="text-purple-600 text-2xl" />
            <div className="ml-3">
              <span className="text-lg font-medium">Website:</span>
              <p className="text-gray-700">www.demo.com</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-lg font-medium">About:</span>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                sequi doloribus aliquid non illo iure et culpa odio modi a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
