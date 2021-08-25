import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react"

interface LeftSideProps{
  children: ReactNode
}

export function LeftSide({
  children
}:LeftSideProps){

  return(
    <Flex 
      direction="column" 
      p="16px" 
      flex="1" 
      mt="60px" 
      ml="100px"
    >
      {children}
    </Flex>
  )

}