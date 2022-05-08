import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customaizedTheme from '../styles/customaizedTheme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true} theme={customaizedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
