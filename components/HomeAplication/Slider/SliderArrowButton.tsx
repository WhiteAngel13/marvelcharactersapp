import { Box, BoxProps, Image } from "@chakra-ui/react";

interface SliderArrowButtonProps extends BoxProps{
  side: "left" | "right"
}

export function SliderArrowButton({side, ...rest}:SliderArrowButtonProps){
  
  return(
    <Box 
      position="absolute" 
      
      w="80px" 
      h="80px"  

      cursor="pointer"

      zIndex="3"

      {...rest}
      
      >
        <Image 
          src="/arrow.png" 
          alt="arrow"
          filter=""
          
          {...side === "right" ? {transform:"rotate(180deg)"} : null}
        />
      </Box>
  )
}