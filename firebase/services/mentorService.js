import { db } from "../firebase"; // Import your Firebase configuration
import { collection, getDocs, query, where } from "firebase/firestore";

export const getMentors = async () => {
  try {
    const mentorsCollection = collection(db, "users");
    const mentorsQuery = query(
      mentorsCollection,
      where("role", "==", "mentor")
    );
    const mentorsSnapshot = await getDocs(mentorsQuery);
    const mentorsList = mentorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return mentorsList;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    

    throw error;
  }
};
