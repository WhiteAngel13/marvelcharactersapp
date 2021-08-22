import { Center, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SliderFrameProps{
  children: ReactNode
}

export function SliderFrame({
  children
}:SliderFrameProps){

  return(
    <Center
      bg="#e6e6e616"
      h="150px" 
      w="100%"
      p="8px"

      position="absolute"
      bottom="0"
    >
      <Flex h="100%" w="960px" overflow="hidden">
        {children}
      </Flex>
    </Center>
  )
}