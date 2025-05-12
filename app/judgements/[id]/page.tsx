// app/judgements/[id]/page.tsx
import React from 'react';
import { BookOpen, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma'; // Adjust import path
import { notFound } from 'next/navigation'; // To handle 404

// Define the type based on your Prisma schema
interface Judgement {
  id: number;
  title: string;
  caseNumber: string;
  court: string;
  date: string;
  summary?: string | null;
  fullContent: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the props
interface JudgementDetailPageProps {
  params: {
    id: string; // The dynamic segment [id]
  };
}

// Fetch data on the server
async function getJudgement(id: number): Promise<Judgement | null> {
  try {
    const judgement = await prisma.judgement.findUnique({
      where: { id: id },
    });
    // Prisma returns null if not found
    return judgement;
  } catch (error) {
    console.error(`Error fetching judgement ${id} from DB:`, error);
    return null; // Or throw an error
  }
}

// This is a Server Component
const JudgementDetailPage: React.FC<JudgementDetailPageProps> = async ({ params }) => {
  const judgementId = parseInt(params.id, 10);

  if (isNaN(judgementId)) {
     notFound(); // Use Next.js notFound helper for invalid IDs
  }

  // Fetch the judgement data
  const judgement = await getJudgement(judgementId);

  // Handle case where judgement is not found
  if (!judgement) {
    notFound(); // Use Next.js notFound helper for 404
  }

  // Render the full judgement content
  return (
    <div className="relative bg-gray-50 py-16 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl"> {/* Limit max width for readability */}

        {/* Back Button */}
         <Link href="/judgements" className="inline-flex items-center text-blue-900 hover:underline mb-8">
             <ChevronLeft size={18} className="mr-1" /> Back to Judgements List
        </Link>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-t-4 border-blue-700">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{judgement.title}</h1>

             <p className="text-gray-700 text-sm mb-2">
                <span className="font-medium">Case No:</span> {judgement.caseNumber}
            </p>
            <p className="text-gray-700 text-sm mb-4">
                <span className="font-medium">Court:</span> {judgement.court} <br/>
                {/* Format date if needed, storing as string is okay for simple display */}
                <span className="font-medium">Date:</span> {judgement.date}
            </p>

            <hr className="my-6 border-gray-200" /> {/* Separator */}

            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800"> {/* Using Tailwind Typography */}
                {/* Display the full content */}
                <p className="whitespace-pre-wrap">{judgement.fullContent}</p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default JudgementDetailPage;

// Optional: Generate static params for pre-rendering popular judgements
// This is only necessary if you want to use generateStaticParams
// and have a small, known set of popular IDs you want to build at build time.
// Otherwise, leave this out for dynamic rendering.
/*
export async function generateStaticParams() {
   const judgements = await prisma.judgement.findMany({
     select: { id: true },
     take: 10, // Example: pre-render first 10
   });
   return judgements.map((judgement) => ({
     id: judgement.id.toString(),
   }));
}
*/