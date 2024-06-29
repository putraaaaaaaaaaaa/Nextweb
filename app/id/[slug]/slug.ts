// utils/fetchSlugs.ts
import { db } from '@/firebase'; // Adjust the path based on your project structure
import { collection, getDocs } from 'firebase/firestore';

export async function fetchValidSlugs(): Promise<string[]> {
  const validSlugs: string[] = [];
  const querySnapshot = await getDocs(collection(db, "populer"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.link) {
      validSlugs.push(data.link);
    }
  });
  return validSlugs;
}
