import React from 'react';
import Layout from '../components/Layout';
import {
  Center,
  Flex,
  Spacer,
  Text,
  Square,
  Box,
  Badge,
  Image,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import AirbnbExample from '../components/AirbnbExample';
import { NextPage } from 'next';

const Page7: NextPage = () => {
  return (
    <Layout title="layout確認2">
      <Text>Stackで</Text>
      <Stack color="white" wrap="wrap" spacing={4} direction="row">
        <Center bg="gray.400" w="25%">
          <AirbnbExample />
        </Center>
        <Center bg="gray.400" w="25%">
          <AirbnbExample />
        </Center>
        <Center bg="gray.400" w="25%">
          <AirbnbExample />
        </Center>
        <Center bg="gray.400" w="25%">
          <AirbnbExample />
        </Center>
        <Center bg="gray.400" w="25%">
          <AirbnbExample />
        </Center>
      </Stack>
    </Layout>
  );
};
export default Page7;
