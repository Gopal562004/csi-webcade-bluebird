import React, { useState, useEffect } from "react";
import MentorCard from "../../component/MentorCard";
import { getMentors } from "../../../firebase/services/mentorService";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const FindMyMentor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentorsData = await getMentors();
        setMentors(mentorsData);
      } catch (err) {
        console.error("Error fetching mentors:", err);
        setError("Unable to fetch mentors. Please try again later.");
      }
    };

    fetchMentors();
  }, []);

const filteredMentors = mentors.filter(
  (mentor) =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (Array.isArray(mentor.domain) &&
      mentor.domain.some((d) =>
        d.toLowerCase().includes(searchTerm.toLowerCase())
      ))
);


  // Shuffle the filtered mentors array
  const shuffledMentors = shuffleArray(filteredMentors);

  return (
    <div className="p-6 mt-12 md:mt-5 mb-12">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search mentors"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-5 p-2 border border-gray-300 rounded  "
      />

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shuffledMentors.length > 0 ? (
          shuffledMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <p>No mentors found</p>
        )}
      </div>
    </div>
  );
};

export default FindMyMentor;
