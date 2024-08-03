import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakraProviders({ children }: { children: ReactNode }): JSX.Element {
  return <ChakraProvider>{children}</ChakraProvider>;
}
