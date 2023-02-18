import React from 'react';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Main } from './Main';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}
