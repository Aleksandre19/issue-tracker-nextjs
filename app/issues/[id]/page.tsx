import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import AuthOptions from '@/app/auth/AuthOptions';
import AssigneeSelect from './AssigneeSelect';
import { cache } from 'react';
import { query } from '@/app/db/queryModel';
import { Issue } from '@prisma/client';

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  query<Issue>('findUnique', {
    where: { id: issueId },
  })
);

const IssueDetailpage = async ({ params }: Props) => {
  const session = await getServerSession(AuthOptions);

  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: '1', sm: '5' }} gap='5'>
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction='column' gap='4'>
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchIssue(parseInt(params.id));

  return {
    title: issue?.title,
    description: `Details of issue - ${issue?.title}`,
  };
}

export default IssueDetailpage;
