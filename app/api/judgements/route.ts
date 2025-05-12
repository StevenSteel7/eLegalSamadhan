// app/api/judgements/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the import path if necessary

// GET /api/judgements - List all judgements (or filtered/paginated)
export async function GET(request: Request) {
  try {
    // You can add pagination/filtering logic here later based on query params
    const judgements = await prisma.judgement.findMany({
      orderBy: {
        date: 'desc', // Example: order by date
      },
      // Select specific fields for list view to improve performance
      select: {
        id: true,
        title: true,
        caseNumber: true,
        court: true,
        date: true,
        summary: true, // Include summary for list
        // Don't select fullContent here unless needed for search logic
      },
    });
    return NextResponse.json(judgements);
  } catch (error) {
    console.error("Error fetching judgements:", error);
    return NextResponse.json({ error: 'Failed to fetch judgements' }, { status: 500 });
  }
}

// POST /api/judgements - Create a new judgement (for admin panel)
export async function POST(request: Request) {
  try {
 
    const body = await request.json();

    // Basic validation (you'd want more robust validation)
    if (!body.title || !body.caseNumber || !body.court || !body.date || !body.fullContent) {
       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newJudgement = await prisma.judgement.create({
      data: {
        title: body.title,
        caseNumber: body.caseNumber,
        court: body.court,
        date: body.date, // Assuming date is sent as string
        summary: body.summary || body.fullContent.substring(0, 150) + '...', // Auto-generate summary if not provided
        fullContent: body.fullContent,
      },
    });
    return NextResponse.json(newJudgement, { status: 201 }); // 201 Created
  } catch (error) {
     console.error("Error creating judgement:", error);
     return NextResponse.json({ error: 'Failed to create judgement' }, { status: 500 });
  }
}