// src/pages/MySessions.js
import React, { useState, useEffect } from "react";
import SessionCard from "../../component/SessionCard";

const MySessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Mock session data for display without backend
    const mockSessions = [
      {
        id: "1",
        title: "React Basics Mentorship",
        description: "Learn the fundamentals of React.js.",
        sessionDate: { date: "2024-09-20" },
        time: { from: "10:00 AM", to: "11:00 AM" },
        location: "Zoom",
        status: "pending",
        studentId: "/users/UQkPe7HPEOMxYFSqHXf8",
        mentorId: "/users/50IHZ9wRtINsAGyOuREK",
      },
      {
        id: "2",
        title: "Advanced Node.js",
        description: "Dive deep into Node.js and backend development.",
        sessionDate: { date: "2024-09-22" },
        time: { from: "2:00 PM", to: "3:30 PM" },
        location: "Google Meet",
        status: "confirmed",
        studentId: "/users/UQkPe7HPEOMxYFSqHXf8",
        mentorId: "/users/50IHZ9wRtINsAGyOuREK",
      },
    ];

    setSessions(mockSessions);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">My Sessions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))
        ) : (
          <p className="text-gray-500">No sessions found</p>
        )}
      </div>
    </div>
  );
};

export default MySessions;
