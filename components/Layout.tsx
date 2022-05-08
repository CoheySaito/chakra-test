import { MoonIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import LinkButton from './LinkButton';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title = 'Chakra test', children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue('secondary', 'primary');
  return (
    <Container height="100vh" bg="gray.50" maxW="5xl">
      <Head>
        <title>{title}</title>
      </Head>
      <Box as="header" my={4}>
        <Grid
          autoRows="1fr"
          columnGap={3}
          rowGap={4}
          templateColumns={{
            base: 'repeat(3, minmax(0, 1fr))',
            md: 'repeat(6, minmax(0, 1fr))',
            lg: 'repeat(8, minmax(0, 1fr))',
          }}
        >
          <Center>
            <LinkButton href="/" to="Home" colorScheme="primary" />
          </Center>
          <Center>
            <LinkButton href="/page1" to=" Page1" colorScheme="secondary" />
          </Center>

          <Center>
            <LinkButton href="/page2" to=" Page2" colorScheme="red" />
          </Center>

          <Center>
            <LinkButton href="/page3" to=" Page3" colorScheme="orange" />
          </Center>

          <Center>
            <LinkButton href="/page4" to=" Page4" colorScheme="yellow" />
          </Center>

          <Center>
            <LinkButton href="/page5" to=" Page5" colorScheme="green" />
          </Center>

          <Center>
            <LinkButton href="/page6" to=" Page6" colorScheme="teal" />
          </Center>

          <Center>
            <LinkButton href="/page7" to=" Page7" colorScheme="blue" />
          </Center>

          <Center>
            <LinkButton href="/page8" to=" Page8" colorScheme="blackAlpha" />
          </Center>
          <Center>
            <LinkButton href="/page9" to=" Page9" colorScheme="cyan" />
          </Center>
          <Center>
            <LinkButton href="/page10" to=" Page10" colorScheme="purple" />
          </Center>
          <Center>
            <LinkButton href="/page11" to=" Page11" colorScheme="pink" />
          </Center>
          <Center>
            <LinkButton href="/page12" to=" Page12" colorScheme="linkedin" />
          </Center>
          <Center>
            <LinkButton href="/page13" to=" Page13" colorScheme="facebook" />
          </Center>
        </Grid>
      </Box>
      <main>{children}</main>
      <Flex as="footer" justify="space-around" mt={3} alignItems="center">
        <p> Chakra test</p>
        <Button
          leftIcon={<MoonIcon color={buttonColor} />}
          onClick={toggleColorMode}
          colorScheme="primary"
          shadow="md"
          rounded="full"
          variant="outline"
        >
          Toggle {colorMode === 'light' ? 'Dark!' : 'Light!'}
        </Button>
      </Flex>
      <Footer />
    </Container>
  );
};
export default Layout;
