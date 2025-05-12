import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { ChevronLeft, FileText, Calendar, Building2 } from 'lucide-react';

// Fetch the data
async function getJudgement(id: number) {
  try {
    return await prisma.judgement.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Error fetching judgement ${id} from DB:`, error);
    return null;
  }
}

// This is a SERVER COMPONENT
export default async function JudgementDetailPage({ params }: { params: { id: string } }) {
  const judgementId = parseInt(params.id, 10);

  if (isNaN(judgementId)) {
    notFound();
  }

  const judgement = await getJudgement(judgementId);

  if (!judgement) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 lg:py-16 max-w-7xl">
        {/* Navigation */}
        <Link 
          href="/judgements" 
          className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors duration-300 mb-6 lg:mb-10"
        >
          <ChevronLeft size={20} className="mr-2" /> 
          Back to Judgements List
        </Link>

        {/* Judgement Details */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-700 p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            {judgement.title}
          </h1>

          {/* Metadata */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 bg-blue-50 p-5 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="text-blue-600 shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600 font-medium">Case Number</p>
                <p className="text-lg font-semibold text-blue-900">
                  {judgement.caseNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Building2 className="text-blue-600 shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600 font-medium">Court</p>
                <p className="text-lg font-semibold text-blue-900">
                  {judgement.court}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="text-blue-600 shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-600 font-medium">Date of Judgement</p>
                <p className="text-lg font-semibold text-blue-900">
                  {new Date(judgement.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-800 space-y-4">
            <p className="whitespace-pre-wrap leading-relaxed">
              {judgement.fullContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}