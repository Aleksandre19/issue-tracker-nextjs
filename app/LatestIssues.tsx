import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';
import NextLink from 'next/link';
import { IssueStatusBadge } from './components';
import { getIssues } from './db/queryModel';
import { IssueType, userStatus } from './utils/userStatus';

const LatestIssues = async () => {
  // Check if the user is logged in or not
  const useSession = await userStatus();

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
