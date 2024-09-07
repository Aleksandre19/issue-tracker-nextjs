import { Box } from '@radix-ui/themes';
import { Skeleton } from '@/app/components';

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Skeleton height='20rem' />
      <Skeleton width='8rem' height='3rem' className='mt-4' />
    </Box>
  );
};

export default LoadingNewIssuePage;
