import AuthOptions from '@/app/auth/AuthOptions';
import { query } from '@/app/db/queryModel';
import { issueSchema } from '@/app/validationSchemas';
import { Issue } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  if (!session) return Response.json({}, { status: 401 });

  const body = await request.json();

  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const newIssue = await query<Issue>('create', {
    data: {
      title: body.title,
      description: body.description,
      issueUserEmail: session?.user?.email,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
