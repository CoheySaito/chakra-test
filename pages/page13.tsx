import React, { useState } from 'react';
import {
  Box,
  Grid,
  useColorModeValue,
  Image,
  useDisclosure,
  Center,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

import { ArrowUpDownIcon } from '@chakra-ui/icons';

const Page13: NextPage = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <Grid templateColumns="repeat(12, minmax(0, 1fr))" position="relative">
      <Box position="absolute" height="200vh" left="0px" top="0px" w="100%">
        <Box
          opacity={0.25}
          position="absolute"
          left="0px"
          top="0px"
          w="100%"
          height="inherit"
          zIndex="0"
          bgGradient={`linear(60deg, white 0%, primary.500 30%, secondary.500 80%, whiteAlpha.500 100% )`}
        />
        <Box
          position="absolute"
          left="0px"
          top="0px"
          w="100%"
          height="inherit"
          zIndex="0"
          bgGradient={`linear(0deg, white 50%, rgba(255, 255, 255, 0) 100% )`}
        />
      </Box>

      <Grid
        as="header"
        gridColumn="1/-1"
        templateColumns="repeat(12, minmax(0, 1fr))"
        justifyItems="center"
        alignItems="center"
        px={8}
        py={4}
        zIndex="1"
      >
        {[...Array.from(Array(12).keys())].map((each, i) => (
          <Box
            key={i}
            gridColumn="span 1"
            w="100%"
            h="10"
            bg="primary.50"
            border="1px solid black"
          />
        ))}

        <Flex gridColumn="span 4" justifySelf="start" alignItems="center">
          <Box as="figure" cursor="pointer">
            <Image
              src="/img/logo.png"
              mini-width="60px"
              height="60px"
              alt="logo"
              backgroundColor="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="surface"
            />
          </Box>
          <Flex flexDirection="column" ml={4}>
            <Text fontSize="xl" fontWeight="bold">
              HyperTheme
            </Text>
            <Text fontSize="sm" opacity={0.6}>
              Editor v0.1
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            ml="4"
            p="3"
            borderLeft="1px solid"
            borderColor="blackAlpha.300"
          >
            <Box as="figure" mr="2">
              <Image
                src="/img/chakra-ui-logo.png"
                width="25px"
                height="auto"
                alt="chakra-ui-logo"
              />
            </Box>
            <Text fontSize="md" fontWeight="semibold">
              Chakra UI
            </Text>
            <ArrowUpDownIcon w={3} h={3} ml="1" opacity={0.6} />
          </Flex>
        </Flex>
        <Flex gridColumn="9/12">
          <Link as={NextLink} href="/">
            Dpcs
          </Link>
        </Flex>

        <Box as="figure" gridColumn="-2/-1">
          <Image
            src="/img/logo.png"
            mini-width="60px"
            height="60px"
            alt="logo"
            backgroundColor="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="surface"
          />
        </Box>
      </Grid>
      <Box
        w="100%"
        h="10"
        bg="blue.500"
        gridColumn="2 /3"
        border="1px solid black"
      />
      <Box w="100%" h="10" bg="blue.500" border="1px solid black" />
      <Box w="100%" h="10" bg="blue.500" border="1px solid black" />
      <Box w="100%" h="10" bg="blue.500" border="1px solid black" />
      <Box w="100%" h="10" bg="blue.500" border="1px solid black" />
    </Grid>
  );
};
export default Page13;
