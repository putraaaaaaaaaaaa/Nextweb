// getValidSlugs.ts
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

export async function getValidSlugs() {
  const populerRef = collection(db, 'populer');
  const q = query(populerRef, where('active', '==', true));
  const querySnapshot = await getDocs(q);

  const slugs = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return data.link.split('/').pop(); // Extracts the slug from the link
  });

  return slugs;
}