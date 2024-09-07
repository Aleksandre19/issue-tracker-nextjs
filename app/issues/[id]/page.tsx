import { IssueStatusBadge } from '@/app/components';
import prisma from '@/prisma/client';
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import RectMarkdown from 'react-markdown';

interface Props {
  params: { id: string };
}

const IssueDetailpage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Box>
      <Heading>{issue?.title}</Heading>
      <Flex gapX='3' my='3'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose' mt='5'>
        <RectMarkdown>{issue?.description}</RectMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetailpage;
