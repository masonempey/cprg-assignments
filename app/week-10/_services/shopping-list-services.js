//FROM CHAT GPT.

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the path to your Firebase config

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Array>} - An array of item objects with `id` and `data`.
 */
export async function getItems(userId) {
  const items = [];
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsRef);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, data: doc.data() });
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
  return items;
}

/**
 * Adds a new item to a specific user's list in Firestore.
 * @param {string} userId - The ID of the user.
 * @param {Object} item - The item data to add.
 * @returns {Promise<string>} - The ID of the newly created document.
 */
export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
