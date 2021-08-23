import { Center, Flex, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import {SliderArrowButton} from "./SliderArrowButton"



interface SliderFrameProps{
  children: ReactNode,
  moveTo: (side: "left" | "right") => void
}

export function SliderFrame({
  children,
  moveTo
}:SliderFrameProps){


  return(
    <Center
      bg="#e6e6e616"
      h="150px" 
      w="100%"
      p="8px"

      transition="all ease 1s"

      position="absolute"
      bottom="0"
    >
      <Box h="100%" position="relative">
        <SliderArrowButton 
          side="left" 
          left="-90px"
          top="25px"
          onClick={()=>moveTo("left")}
        />

        <Flex h="100%" position="relative" w="960px" overflow="hidden">
          {children}
        </Flex>

        <SliderArrowButton 
          side="right" 
          right="-90px"
          top="25px"
          onClick={()=>moveTo("right")}
        />

      </Box>
    </Center>
  )
}