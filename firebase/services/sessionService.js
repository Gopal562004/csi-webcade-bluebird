import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

// Function to fetch the mentor's name using the mentorId
const getMentorName = async (mentorRef) => {
  try {
    const mentorSnapshot = await getDoc(mentorRef);
    if (mentorSnapshot.exists()) {
      return mentorSnapshot.data().name;
    } else {
      return "Unknown Mentor";
    }
  } catch (error) {
    console.error("Error fetching mentor name:", error);
    return "Unknown Mentor";
  }
};

// Function to fetch sessions and corresponding mentor names
export const getSessions = async (studentId) => {
  try {
    const sessionsCollection = collection(db, "sessions");
    const studentRef = doc(db, "users", studentId);
    const sessionsQuery = query(
      sessionsCollection,
      where("studentId", "==", studentRef)
    );

    const sessionsSnapshot = await getDocs(sessionsQuery);

    const sessionsWithMentorNames = await Promise.all(
      sessionsSnapshot.docs.map(async (doc) => {
        const sessionData = doc.data();
        const mentorRef = sessionData.mentorId;
        const mentorName = await getMentorName(mentorRef);

        return {
          id: doc.id,
          ...sessionData,
          mentorName, // Include mentor's name in the session data
        };
      })
    );

    return sessionsWithMentorNames;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    throw error;
  }
};
