import { Flex } from "@chakra-ui/react";

export function CharacterArea({children}){
  return(
    <Flex
      minH="600px"
      w="100%"
      flexDir="row"
    >
      {children}
    </Flex>
  )
}