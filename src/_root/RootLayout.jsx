// src/_root/RootLayout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../_auth/AuthContext";
import Dashboard from "./pages/Dashboard"; // Unified dashboard for both roles
import Topbar from "../component/shared/Topbar";
import Bottombar from "../component/shared/Bottombar";
import Leftsidebar from "../component/shared/Leftsidebar";

const RootLayout = () => {
  const location = useLocation(); // Get the current location to handle routing
  const { role } = useAuth(); // Access user role if needed

  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar - hidden on desktop */}
      <Topbar className="block md:hidden" />

      <div className="flex flex-1">
        {/* Leftsidebar - hidden on mobile */}
        <Leftsidebar className="hidden md:block md:w-64" />

        {/* Main content area */}
        <div className="flex-1 p-6 md:ml-64">
          {location.pathname === "/" ? (
            <Dashboard /> // Display unified dashboard
          ) : (
            <Outlet /> // Render nested routes
          )}
        </div>
      </div>

      {/* Bottombar - visible only on mobile */}
      <Bottombar className="block md:hidden" />
    </div>
  );
};

export default RootLayout;
