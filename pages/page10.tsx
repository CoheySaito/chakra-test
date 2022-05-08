import React from 'react';
import Layout from '../components/Layout';
import { Grid, Center, Text } from '@chakra-ui/react';
import AirbnbExample from '../components/AirbnbExample';
import { NextPage } from 'next';

const Page10: NextPage = () => {
  return (
    <Layout title="grit確認">
      <Grid
        autoRows="1fr"
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))',
          md: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(4, minmax(0, 1fr))',
        }}
        gap={4}
      >
        <Center
          bg="gray.100"
          gridColumn={{
            base: 'span 1',
            md: 'span 1',
            lg: 'span 2',
          }}
          gridRow={{
            base: 'span 1',
            md: 'span 1',
            lg: 'span 2',
          }}
        >
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
        <Center bg="gray.100">
          <AirbnbExample />
        </Center>
      </Grid>
    </Layout>
  );
};
export default Page10;
