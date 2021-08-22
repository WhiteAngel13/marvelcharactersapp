import { Flex, } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentApplicationProps{
  children: ReactNode
}

export function ContentApplication({
  children
}:ContentApplicationProps){

  return(
    <Flex
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
    >
      {children}
    </Flex>    
  )
}