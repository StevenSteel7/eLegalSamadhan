//app\api\judgements\[id]\route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest, context: { params: { id?: string } }) {
  if (!context.params?.id) {
    return NextResponse.json({ error: 'Judgement ID is required' }, { status: 400 });
  }

  const id = parseInt(context.params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
  }

  try {
    const judgement = await prisma.judgement.findUnique({
      where: { id },
    });

    if (!judgement) {
      return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
    }

    return NextResponse.json(judgement);
  } catch (error) {
    console.error('Error fetching judgement:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/judgements/:id - Update a judgement (for admin panel)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    // *** IMPORTANT: Implement authentication/authorization here! ***
    // This route should be protected.

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
    }

    try {
        const body = await request.json();

        // Basic validation (you'd want more robust validation)
         if (!body.title || !body.caseNumber || !body.court || !body.date || !body.fullContent) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updatedJudgement = await prisma.judgement.update({
            where: { id: id },
            data: {
                title: body.title,
                caseNumber: body.caseNumber,
                court: body.court,
                // Make sure the date format from the frontend matches what Prisma/DB expects if not just a string
                date: body.date,
                summary: body.summary, // Allow updating summary
                fullContent: body.fullContent,
            },
        });

        return NextResponse.json(updatedJudgement); // 200 OK by default on success
    } catch (error) {
        console.error(`Error updating judgement ${id}:`, error);
         if (error instanceof Error && (error as any).code === 'P2025') { // Prisma error code for record not found
              return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
         }
        return NextResponse.json({ error: 'Failed to update judgement' }, { status: 500 });
    }
}

// DELETE /api/judgements/:id - Delete a judgement (for admin panel)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
     // *** IMPORTANT: Implement authentication/authorization here! ***
    // This route should be protected.

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid Judgement ID' }, { status: 400 });
    }

    try {
        await prisma.judgement.delete({
            where: { id: id },
        });

        return NextResponse.json({ message: 'Judgement deleted successfully' }); // 200 OK by default
    } catch (error) {
         console.error(`Error deleting judgement ${id}:`, error);
          if (error instanceof Error && (error as any).code === 'P2025') { // Prisma error code for record not found
              return NextResponse.json({ error: 'Judgement not found' }, { status: 404 });
         }
        return NextResponse.json({ error: 'Failed to delete judgement' }, { status: 500 });
    }
}