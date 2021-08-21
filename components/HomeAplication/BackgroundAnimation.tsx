import { Box, usePrefersReducedMotion } from "@chakra-ui/react";
import { breath } from "../../styles/Animations";


export function BackgroundAnimation(){

  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion ? undefined : `${breath} 60s infinite alternate`

  return(
    <Box
      position="absolute"
      left="0"
      right="0"
      top="0"
      bottom="0"
      bg="red"
      zIndex="0"
      
      backgroundPosition="center"
      backgroundSize="cover"

      transition="background-image ease 1s"
      backgroundImage="/bg01.png"
      
      filter="auto"
      blur=".14rem"

      animation={animation}
    />
  )

}