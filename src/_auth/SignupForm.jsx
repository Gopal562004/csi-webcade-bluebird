import React from "react";

const SignupForm = () => {
  return (
    <div className="w-full min-h-screen bg-[#c5b99e] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 w-4/5 md:w-1/2 max-h-[90vh] rounded-lg flex flex-col items-center">
        <div className="w-11/12">
          <h1 className="text-left text-3xl text-blue-600">Sign Up</h1>
        </div>

        <div className="mt-8 flex flex-col items-center w-full">
          {/* Name Input */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            className="w-[350px] h-12 border-2 border-gray-200 bg-transparent text-blue-600 rounded-md mb-4 px-3 focus:outline-none focus:border-blue-600"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your College Email ID"
            className="w-[350px] h-12 border-2 border-gray-200 bg-transparent text-blue-600 rounded-md mb-4 px-3 focus:outline-none focus:border-blue-600"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter New Password"
            className="w-[350px] h-12 border-2 border-gray-200 bg-transparent text-blue-600 rounded-md mb-4 px-3 focus:outline-none focus:border-blue-600"
            required
          />

          {/* Confirm Password Input */}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm New Password"
            className="w-[350px] h-12 border-2 border-gray-200 bg-transparent text-blue-600 rounded-md mb-4 px-3 focus:outline-none focus:border-blue-600"
            required
          />

          {/* Submit Button */}
          <button
            className="mt-6 px-6 py-3 border-2 border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors rounded-md"
            role="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
