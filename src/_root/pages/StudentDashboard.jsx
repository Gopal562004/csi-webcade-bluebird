import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockSessions = [
  { id: 1, date: "2024-09-20", time: "10:00 AM", mentor: "Jane Doe" },
  { id: 2, date: "2024-09-22", time: "02:00 PM", mentor: "John Smith" },
];

const mockAssignments = [
  { id: 1, title: "Math Assignment", dueDate: "2024-09-25" },
  { id: 2, title: "Science Project", dueDate: "2024-10-01" },
];

const mockSubjects = [
  {
    id: 1,
    name: "Mathematics",
    guide: "Basic to Advanced Algebra, Calculus, etc.",
  },
  { id: 2, name: "Science", guide: "Physics, Chemistry, Biology Guides" },
];

const StudentDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
  });

  useEffect(() => {
    // Fetch sessions and assignments from an API or use mock data
    setSessions(mockSessions);
    setAssignments(mockAssignments);
  }, []);

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      {/* Profile Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        {/* Add functionality to edit profile */}
      </section>

      {/* Subject Guides Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Subject-Wise Guides</h2>
        {mockSubjects.length > 0 ? (
          <ul className="space-y-4">
            {mockSubjects.map((subject) => (
              <li key={subject.id} className="border p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p>{subject.guide}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No guides available.</p>
        )}
      </section>

      {/* Upcoming Sessions Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
        {sessions.length > 0 ? (
          <ul className="space-y-4">
            {sessions.map((session) => (
              <li key={session.id} className="border p-4 rounded-lg shadow-sm">
                <p>
                  <strong>Date:</strong> {session.date}
                </p>
                <p>
                  <strong>Time:</strong> {session.time}
                </p>
                <p>
                  <strong>Mentor:</strong> {session.mentor}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming sessions.</p>
        )}
      </section>

      {/* Assignments Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Assignments</h2>
        {assignments.length > 0 ? (
          <ul className="space-y-4">
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                className="border p-4 rounded-lg shadow-sm"
              >
                <p>
                  <strong>Title:</strong> {assignment.title}
                </p>
                <p>
                  <strong>Due Date:</strong> {assignment.dueDate}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments.</p>
        )}
      </section>
    </div>
  );
};

export default StudentDashboard;
