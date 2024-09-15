import React, { useEffect, useState } from "react";
import { getSessions } from "../../../firebase/services/sessionService";
import SessionCard from "../../component/SessionCard";

const MySessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const studentId = "UQkPe7HPEOMxYFSqHXf8"; // Replace with dynamic value if needed
        const sessionsData = await getSessions(studentId);
        setSessions(sessionsData);
        console.log("Fetched sessions:", sessionsData); // Print sessions to console
        sessionsData.forEach((session) => {
          console.log(
            `Session ID: ${session.id}, Mentor: ${session.mentorName}`
          );
        });
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
      {sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
};

export default MySessions;
