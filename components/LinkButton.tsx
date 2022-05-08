import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, Link, ThemeTypings } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

type LinkButtonProps = {
  href: string;
  to: string;
  colorScheme: ThemeTypings['colorSchemes'] | (string & {});
};

const LinkButton: React.VFC<LinkButtonProps> = ({ href, to, colorScheme }) => {
  return (
    <Link as={NextLink} href={href} passHref>
      <Button colorScheme={colorScheme} size="100%" py={1.5} px={3}>
        {to} <ExternalLinkIcon mx="4px" />
      </Button>
    </Link>
  );
};
export default LinkButton;
