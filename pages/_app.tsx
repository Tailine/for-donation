import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

function MyApp({ Component, pageProps }: AppProps) {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    xxl: "94em",
  });

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
    breakpoints,
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
