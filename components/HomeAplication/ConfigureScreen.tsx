import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ConfigureScreenProps {
  children: ReactNode
}

export function ConfigureScreen({
  children
} : ConfigureScreenProps){
  
  return(
    <Flex
      as="main"
      height="100vh"
      width="100%"
      position="relative"
      overflow="hidden"
    >
      { children }
    </Flex>
  )
}