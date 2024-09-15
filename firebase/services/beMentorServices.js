import { db } from "../firebase"; // Adjust the path as needed for your firebase config
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

// Function to add a mentor's information to the 'users' collection
export const addMentorData = async (mentorData) => {
  try {
    // Add the form data to the Firestore 'users' collection
    const docRef = await addDoc(collection(db, "users"), {
      ...mentorData,
      role: "mentor", // Assign 'mentor' role
      createdAt: new Date(), // Add a timestamp field
    });

    console.log("Mentor document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding mentor document: ", error);
    throw error;
  }
};
