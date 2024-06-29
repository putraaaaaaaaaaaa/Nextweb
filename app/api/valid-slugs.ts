// pages/api/valid-slugs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getValidSlugs } from '@/firebase'; // Adjust this import

let cachedSlugs: string[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const currentTime = Date.now();

  if (!cachedSlugs || currentTime - lastFetchTime > CACHE_DURATION) {
    cachedSlugs = await getValidSlugs();
    lastFetchTime = currentTime;
  }

  res.status(200).json(cachedSlugs);
}