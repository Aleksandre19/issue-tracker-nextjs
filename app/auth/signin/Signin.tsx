'use client';

import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Signin({ providers }: { providers: any }) {
  return (
    <Flex
      justify='center'
      align='center'
      minHeight='calc(100vh - 164px)' // This ensures the flex container takes up the full viewport height
    >
      <Box mx='auto'>
        <Card>
          <Flex direction='column' gap='5' align='center' my='5' mx='5'>
            <Heading as='h1' className='text-center'>
              Please Sign In to continue
            </Heading>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                  <Button size='4' onClick={() => signIn(provider.id)}>
                    <Text> Sign in with {provider.name}</Text>
                    {provider.name === 'Google' && (
                      <Image
                        src='/google-logo.png'
                        alt='Google logo'
                        width={30}
                        height={30}
                        className='ml-1 rounded-full'
                      />
                    )}
                  </Button>
                </div>
              ))}
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
