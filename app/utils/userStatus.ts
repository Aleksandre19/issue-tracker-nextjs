import { Issue } from '@prisma/client';
import { User, getServerSession } from 'next-auth';
import AuthOptions from '../auth/AuthOptions';

// Define a type for the IssueType
export type IssueType = Issue & { assignedToUser: User | null };

export const userStatus = async () => {
  // Fetch the session and determine whether to use session or not
  const session = await getServerSession(AuthOptions);
  const useSession = session ? true : false;

  return { useSession, session };
};
