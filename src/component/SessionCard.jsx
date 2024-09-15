import React from "react";

const SessionCard = ({ session }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-2 text-purple-600">
        {session.title}
      </h2>
      <p className="text-gray-700 mb-4">{session.description}</p>
      <div className="text-gray-500 text-sm mb-2">
        <p>
          <strong>Date:</strong> {session.sessionDate.date}
        </p>
        {session.time && (
          <p>
            <strong>Time:</strong> {session.time.from} - {session.time.to}
          </p>
        )}
        {session.location && (
          <p>
            <strong>Location:</strong> {session.location}
          </p>
        )}
        <p>
          <strong>Status:</strong> {session.status}
        </p>
        <p>
          <strong>Mentor:</strong> {session.mentorName}{" "}
          {/* Display mentor name */}
        </p>
      </div>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
        Join Session
      </button>
    </div>
  );
};

export default SessionCard;
