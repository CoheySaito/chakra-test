import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Center, Spinner } from '@chakra-ui/react';
import { NextPage } from 'next';

const Page12: NextPage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return <Layout title="loading">Loaded</Layout>;
};
export default Page12;
