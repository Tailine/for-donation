import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      purple: {
        100: "#595B83",
        500: "#333456",
        900: "#060930",
      },
      black: "#2D2D2D",
      pink: "#F4ABC4",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
