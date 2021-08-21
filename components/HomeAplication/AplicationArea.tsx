import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AplicationAreaProps{
  children: ReactNode;
}

export function AplicationArea({
  children
} : AplicationAreaProps){
  
  return(
    <Flex
      bg="red"
      position="absolute"

      left="0"
      right="0"
      top="15%"
      bottom="0"
    >
      { children }
    </Flex>
  )
}