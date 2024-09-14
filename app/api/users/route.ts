import AuthOptions from '@/app/auth/AuthOptions';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // const session = await getServerSession(AuthOptions);
  // if (!session) return NextResponse.json({}, { status: 401 });

  const users = await prisma.user.findMany({ orderBy: { name: 'asc' } });

  return NextResponse.json(users);
}
