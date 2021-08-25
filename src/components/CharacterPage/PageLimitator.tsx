import { Flex } from "@chakra-ui/react";

export function PageLimitator({children}){
  
  return(
    <Flex 
      bg="#11111188" 
      flex="1"
      w="100%"
      maxW="1000px"
      margin= "0 auto"
      flexDir="column"

      h="max-content"

      position="static"      
    >
      {children}
    </Flex>
  )
}