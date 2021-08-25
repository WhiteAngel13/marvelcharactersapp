import { Box, Center, usePrefersReducedMotion } from "@chakra-ui/react";
import { breath } from "../../styles/Animations";

export function BackgroundImageAnimation(){

  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion ? undefined : `${breath} 60s infinite alternate`;

  return(
    <Center
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

    >
      <Box 
        w="45%" 
        h="200%" 
        bg="#00000099"
        transform="auto"

        rotate="-35deg"
        translateX="-5%"
      />
        {}
    </Center>
  )
}