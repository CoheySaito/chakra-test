import { Box, Stack, useBreakpointValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/Layout';

const Page: NextPage = () => {
  const breakpointValue = useBreakpointValue(['base', 'sm', 'md', 'lg']);
  return (
    <Layout title="breakpoint">
      <Stack>
        <Box>Current Size:{breakpointValue}</Box>
        <Box p={2} bg={['red.200', 'yellow.200', 'green.200', 'blue.200']}>
          {`["red.200", "yellow.200", "green.200", "blue.200"]`}
        </Box>
        <Box
          p={2}
          bg={{
            base: 'red.200',
            sm: 'yellow.200',
            md: 'green.200',
            lg: 'blue.200',
          }}
        >
          {`{base: "red.200", sm: "yellow.200", md: "green.200", lg: "blue.200" }`}
        </Box>
        <Box p={2} bg={{ sm: 'yellow.200', md: 'green.200', lg: 'blue.200' }}>
          {`{ sm: "yellow.200", md: "green.200", lg: "blue.200" }`}
        </Box>
        <Box p={2} bg={{ base: 'red.200', md: 'green.200', lg: 'blue.200' }}>
          {`{ base: "red.200", md: "green.200", lg: "blue.200" }`}
        </Box>
      </Stack>
    </Layout>
  );
};

export default Page;
