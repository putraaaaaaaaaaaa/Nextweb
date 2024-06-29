// firebase-utils.ts
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust this import based on your Firebase setup

export async function getPopularItems() {
  const q = query(collection(db, "populer"), where("active", "==", true));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}