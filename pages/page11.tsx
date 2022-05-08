import React from 'react';
import Layout from '../components/Layout';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';

const Page11: NextPage = () => {
  return (
    <Layout title="layerStyle">
      <SimpleGrid columns={2} spacing={6}>
        <Box layerStyle="selected">This is a box</Box>
        <Box layerStyle="base">This is a box</Box>
      </SimpleGrid>
    </Layout>
  );
};
export default Page11;
