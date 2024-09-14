// // utils/firestoreUtils.js
// import { db } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";

// export const createUserProfile = async (user) => {
//   try {
//     const userRef = doc(db, "users", user.uid);
//     await setDoc(userRef, {
//       name: user.displayName || "Anonymous",
//       email: user.email || "",
//       role: "student", // Default role; change as needed
//       subjects: [], // Initialize with empty array or specific subjects
//       profileImage: user.photoURL || "default_profile_image_url",
//       bio: "",
//     });
//     console.log("User profile created/updated");
//   } catch (error) {
//     console.error("Error creating/updating user profile:", error);
//   }
// };
