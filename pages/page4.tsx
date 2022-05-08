import { Box, Button, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';

const Page: NextPage = () => {
  return (
    <Layout title="Button Shadow">
      <Stack p={10} spacing={4}>
        <Box p={4} bg={'gray.100'}>
          Plain
        </Box>
        <Box p={4} bg={'gray.100'} shadow="md">
          {' shadow="md"'}
        </Box>
        <Box p={4} bg={'gray.100'} shadow="md" rounded="md">
          {' shadow="md" rounded="md"'}
        </Box>
        <Box p={4} bg={'gray.100'} shadow="md" rounded="full">
          {'  shadow="md" rounded="full"'}
        </Box>
        <Box>
          <Button shadow="md">Button Shadow</Button>
        </Box>
      </Stack>
    </Layout>
  );
};
export default Page;
