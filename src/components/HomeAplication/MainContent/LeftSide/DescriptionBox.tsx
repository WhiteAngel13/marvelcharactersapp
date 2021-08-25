import { Flex, Text } from "@chakra-ui/react";

interface DescriptionBoxProps{
  heroDescription: string
}

export function DescriptionBox({
  heroDescription
}:DescriptionBoxProps){

  return(
    <Flex
      bg="#a447de11"
      border="4px solid #ccc"
      borderRadius="10px"
      w="400px"
      h="250px"
      ml="50px"

      flexDirection="column"
    >
      <Text
        as="text"

        display="flex"

        fontSize="3xl"
        fontWeight="bold"
        fontFamily="fantasy"

        color="#ccc"
        alignSelf="flex-start"
        m="10px"
      >
        Description:
      </Text>
      <Text
        m="10px"
        fontSize="16px"
        color="#ccc "
      >
        {heroDescription}
      </Text>            
    </Flex>
  )
}