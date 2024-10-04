import prisma from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Status } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { issueSessionRecords } from '../utils/issueSessionRecords';

const AuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },

  events: {
    async signIn({ user, isNewUser }) {
      if (isNewUser) {
        try {
          const updatedRecords = issueSessionRecords.map((issueRecord) => ({
            title: issueRecord.title,
            description: issueRecord.description,
            status: issueRecord.status as Status,
            createdAt: new Date(issueRecord.createdAt),
            updatedAt: new Date(issueRecord.updatedAt),
            issueUserEmail: user.email,
          }));
          await prisma.issueSession.createMany({
            data: updatedRecords,
            skipDuplicates: true,
          });
        } catch (error) {
          console.error('Error updating issue records:', error);
        }
      }
    },
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

export default AuthOptions;
