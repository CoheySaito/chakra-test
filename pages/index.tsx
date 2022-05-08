import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <>
      <Head>
        <title>Chakra-test</title>
      </Head>

      <Layout title="Home">
        <Flex alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={6}
          >
            <Heading mb={6}>Log in</Heading>
            <Input
              placeholder="kkk@chakra.com"
              variant="filled"
              mb={3}
              type="email"
            />
            <Input
              placeholder="******"
              variant="filled"
              mb={6}
              type="password"
            />
            <Button mb={6} colorScheme="teal">
              Log in
            </Button>
            <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
