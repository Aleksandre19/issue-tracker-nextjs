import AuthOptions from '@/app/auth/AuthOptions';
import { patchIssueSchema } from '@/app/validationSchemas';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Secure the route against unauthenticated users.
  const session = await getServerSession(AuthOptions);
  if (!session) return Response.json({}, { status: 401 });

  // Fetch issue body.
  const body = await request.json();

  // Validate the issue body.
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // Destructure the issue body.
  const { title, description, assignedToUserId, status } = body;

  // Check if the user exists in the body and validate it.
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });

    if (!user)
      return NextResponse.json({ error: 'Invalid user' }, { status: 400 });
  }

  // Fetch the issue.
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  // Check if the issue exists.
  if (!issue)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  // Update the issue.
  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId,
      status,
    },
  });

  // Return updated issue.
  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(AuthOptions);
  if (!session) return Response.json({}, { status: 401 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({});
}
