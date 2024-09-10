import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import RectMarkdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gapX='3' my='3'>
        <IssueStatusBadge status={issue.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose max-w-full' mt='5'>
        <RectMarkdown>{issue?.description}</RectMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
