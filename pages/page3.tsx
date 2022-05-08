import { Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';

const SwitchMobile = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    return (
      <Box bg="red.100" p={4}>
        Hello Mobile
      </Box>
    );
  }
  return <Box bg="blue.100">Hello Desktop</Box>;
};

const Page: NextPage = () => {
  const breakpointValue = useBreakpointValue(['base', 'sm', 'md', 'lg']);

  return (
    <Layout title="breakpointValue">
      <Stack>
        <Box>Current Size:{breakpointValue}</Box>
        <Box>
          <SwitchMobile />
        </Box>
      </Stack>
    </Layout>
  );
};
export default Page;
