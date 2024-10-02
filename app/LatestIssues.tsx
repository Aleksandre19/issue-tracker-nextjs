import { Issue, User } from '@prisma/client';
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import NextLink from 'next/link';
import AuthOptions from './auth/AuthOptions';
import { IssueStatusBadge } from './components';
import { getIssues } from './db/queryModel';

const LatestIssues = async () => {
  // Define a type for the IssueType
  type IssueType = Issue & { assignedToUser: User | null };

  // Fetch the session and determine whether to use session or not
  const session = await getServerSession(AuthOptions);
  const useSession = session ? true : false;

  // Fetch the latest issues
  const issues = await getIssues<IssueType[]>(useSession, 'findMany', {
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
      <Heading size='4' mb='5'>
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue: IssueType) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify='between'>
                  <Flex direction='column' gap='2' align='start'>
                    <NextLink href={`/issues/${issue.id}`}>
                      {issue.title}
                    </NextLink>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback='?'
                      size='2'
                      radius='full'
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
