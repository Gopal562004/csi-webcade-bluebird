// src/firebase/services/sessionService.js
import { db } from "../firebase"; // Import your Firebase configuration
import { collection, getDocs, query, where } from "firebase/firestore";

export const getSessionsByUser = async (userId) => {
  try {
    const sessionsCollection = collection(db, "sessions");
    const sessionsQuery = query(
      sessionsCollection,
      where("studentId", "==", `/users/${userId}`)
    );
    const sessionsSnapshot = await getDocs(sessionsQuery);
    const sessionsList = sessionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Sessions List:", sessionsList); // Debug log
    return sessionsList;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    throw error;
  }
};
