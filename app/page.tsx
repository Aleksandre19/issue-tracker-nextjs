import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';
import { query } from './db/queryModel';
import IssueChart from './IssueChart';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';
import { userStatus } from './utils/userStatus';

export default async function Home() {
  // Fetch the OPEN issues
  const open = await query<number>('count', {
    where: { status: 'OPEN' },
  });

  // Fetch the IN_PROGRESS issues
  const inProgress = await query<number>('count', {
    where: { status: 'IN_PROGRESS' },
  });

  // Fetch the CLOSED issues
  const closed = await query<number>('count', {
    where: { status: 'CLOSED' },
  });

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Flex direction='column' gap='5'>
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Issue Tracker - Dashboard',
  description: 'View a summary of project issues',
};
