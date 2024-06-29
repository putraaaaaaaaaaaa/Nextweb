// utils/fetchSlugs.ts
import { db } from "@/firebase"; // Adjust the path based on your project structure
import { collection, getDocs } from "firebase/firestore";

interface SlugData {
  link: string;
  name: string;
  sub_name: string;
  thumbnail: string;
  banner: string;
}

export async function fetchValidSlugs(): Promise<SlugData[]> {
  const validSlugs: SlugData[] = [];
  const querySnapshot = await getDocs(collection(db, "populer"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data.link) {
      validSlugs.push({ link: data.link, name: data.name, sub_name: data.sub_name, banner: data.banner, thumbnail: data.thumbnail });
    }
  });
  return validSlugs;
}
