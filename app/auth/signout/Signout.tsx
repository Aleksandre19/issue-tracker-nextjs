'use client';

import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Signout({ providers }: { providers: any }) {
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
              SignOut
            </Heading>
            <Text size='4'>Are you sure you want to sign out?</Text>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                  <Button size='4' onClick={() => signOut(provider.id)}>
                    <Text size='6'> Sign Out</Text>
                  </Button>
                </div>
              ))}
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
