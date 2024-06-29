// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { fetchValidSlugs } from './slug'; // Adjust the path based on your project structure
import ClientPage from './client'; // Import the client component

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const validSlugs = await fetchValidSlugs();
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  return <ClientPage slug={slug} />;
}
