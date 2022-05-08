import React from 'react';
import Layout from '../components/Layout';
import { Center, Flex, Text, Square, Box } from '@chakra-ui/react';
import AirbnbExample from '../components/AirbnbExample';
import { NextPage } from 'next';

const InTheBox: React.FC = ({
  paddingX,
  children,
}: {
  children: React.ReactNode;
  paddingX: number;
}) => {
  return (
    <Center
      bg="gray.400"
      w={{ base: '100%', md: '50%', lg: '25%' }}
      p={paddingX}
    >
      {children}
    </Center>
  );
};

const Page7: NextPage = () => {
  const paddingX: number = 3;
  return (
    <Layout title="layout確認">
      <Text>Flexでネガティブマージンとpaddlingを使用</Text>
      <Box mx={-paddingX}>
        <Flex color="white" wrap="wrap">
          {[...Array.from(Array(10).keys())].map((each, i) => (
            <InTheBox {...{ paddingX }} key={i}>
              <AirbnbExample />
            </InTheBox>
          ))}
        </Flex>
      </Box>
    </Layout>
  );
};
export default Page7;
