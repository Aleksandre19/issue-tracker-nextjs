import { IssueActions } from '@/app/components';
import Pagination from '@/app/components/Pagination';
import { query } from '@/app/db/queryModel';
import { Issue, Status } from '@prisma/client';
import { Flex } from '@radix-ui/themes';
import { Metadata } from 'next';
import IssuesTabel, { columnNames, IssueQuery } from './IssuesTabel';

interface Props {
  searchParams: IssueQuery;
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await query<Issue[]>('findMany', {
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const pageCount = await query<number>('count', { where });

  return (
    <Flex direction='column' gap='3'>
      <IssueActions />
      <IssuesTabel searchParams={searchParams} issues={issues} />
      <Pagination
        itemCount={pageCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </Flex>
  );
};

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Issue Tracker - Issues List',
  description: 'View all project issues',
};

export default IssuePage;
