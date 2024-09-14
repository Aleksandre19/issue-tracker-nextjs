import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';
import { issueSchema } from '@/app/validationSchemas';
import { getServerSession } from 'next-auth';
import AuthOptions from '@/app/auth/AuthOptions';

export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  if (!session) return Response.json({}, { status: 401 });

  const body = await request.json();

  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
