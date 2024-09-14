import React, { useState, useEffect } from "react";

// Mock data for demonstration
const mockMentees = [
  { id: 1, name: "Alice Smith", email: "alice@example.com" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com" },
];

const mockSessions = [
  { id: 1, date: "2024-09-21", time: "11:00 AM", student: "Charlie Brown" },
  { id: 2, date: "2024-09-23", time: "03:00 PM", student: "Emily Davis" },
];

const MentorDashboard = () => {
  const [mentees, setMentees] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [profile, setProfile] = useState({
    name: "Dr. Sam Wilson",
    email: "sam@example.com",
  });

  useEffect(() => {
    // Fetch mentees and sessions from an API or use mock data
    setMentees(mockMentees);
    setSessions(mockSessions);
  }, []);

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Mentor Dashboard</h1>

      {/* Profile Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
        <div className="bg-white p-4 rounded shadow">
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          {/* Add functionality to edit profile */}
        </div>
      </section>

      {/* Mentee List Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mentees</h2>
        <div className="bg-white p-4 rounded shadow">
          {mentees.length > 0 ? (
            <ul>
              {mentees.map((mentee) => (
                <li key={mentee.id} className="mb-2">
                  <p>
                    <strong>Name:</strong> {mentee.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {mentee.email}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No mentees assigned.</p>
          )}
        </div>
      </section>

      {/* Scheduled Sessions Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Scheduled Sessions</h2>
        <div className="bg-white p-4 rounded shadow">
          {sessions.length > 0 ? (
            <ul>
              {sessions.map((session) => (
                <li key={session.id} className="mb-2">
                  <p>
                    <strong>Date:</strong> {session.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {session.time}
                  </p>
                  <p>
                    <strong>Student:</strong> {session.student}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No scheduled sessions.</p>
          )}
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <div className="bg-white p-4 rounded shadow">
          {/* Replace with actual notifications */}
          <p>No new notifications.</p>
        </div>
      </section>
    </div>
  );
};

export default MentorDashboard;
