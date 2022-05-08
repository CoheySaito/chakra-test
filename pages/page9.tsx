import React from 'react';
import Layout from '../components/Layout';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { NextPage } from 'next';

const Page9: NextPage = () => {
  return (
    <Layout title="grit確認">
      <Grid
        h="200px"
        templateRows="repeat(2, minmax(0, 1fr))"
        templateColumns="repeat(5, minmax(0, 1fr))"
        gap={4}
        alignItems="center"
        justifyItems="center"
      >
        <GridItem
          w="80%"
          h="80%"
          rowSpan={2}
          colSpan={1}
          bg="tomato"
          justifySelf="start"
          alignSelf="start"
        >
          <Text>Item1</Text>
        </GridItem>
        <GridItem w="80%" h="80%" colSpan={2} bg="papayawhip">
          <Text>Item2</Text>
        </GridItem>
        <GridItem w="80%" h="80%" colSpan={2} bg="papayawhip">
          <Text>Item3</Text>
        </GridItem>
        <GridItem w="80%" h="80%" colSpan={4} bg="tomato">
          <Text>Item4</Text>
        </GridItem>
      </Grid>
    </Layout>
  );
};
export default Page9;
