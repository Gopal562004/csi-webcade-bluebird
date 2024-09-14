import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import { AuthProvider, useAuth } from "./_auth/AuthContext"; // Correct path for AuthContext
import FindMyMentor from "./_root/pages/FindMyMentor";
import MySessions from "./_root/pages/MySessions";
import BeAMentor from "./_root/pages/BeAMentor";
import ProfilePage from "./_root/pages/ProfilePage";
import SignupForm from "./_auth/SignupForm";
import RootAuth from "./_auth/RootAuth";

// Create a wrapper component to use the hook and pass props
const AppWrapper = () => {
  const { demoLogin } = useAuth(); // Use the hook here

  return (
    <Router>
      <Routes>
        {/* Redirect the root path to the signup page */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route element={<RootAuth />}>
          <Route path="/signup" element={<SignupForm />} />
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />{" "}
          {/* Dashboard as the default route */}
          <Route path="find-my-mentor" element={<FindMyMentor />} />
          <Route path="beamentor" element={<BeAMentor />} />
          <Route
            path="mysessions"
            element={<MySessions demoLogin={demoLogin} />}
          />
          <Route path="profilepage" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
};

export default App;
