import { Box, usePrefersReducedMotion } from "@chakra-ui/react";
import { breath } from "../../styles/Animations";

export function BackgroundImageAnimation(){

  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion ? undefined : `${breath} 60s infinite alternate`;


  return(
    <Box
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"

      backgroundImage="/bg01.jpg"
      backgroundPosition="center"
      backgroundSize="cover"

      filter="blur(0.2rem)"

      animation={animation}

    />    
  )
}