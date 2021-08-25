import { Flex, Text } from "@chakra-ui/react";

interface CharacterDescriptionProps{
  name: string
  description: string
}

export function CharacterDescription({
  name,
  description
} : CharacterDescriptionProps){

  return(
    <Flex flex="3" flexDirection="column">
      <Text
        fontSize="4xl"
        fontWeight="black"
        borderBottom="3px solid #FFF"
        borderRadius="base"
        color="#CCC" 
        h="max"
        margin="0 auto"
        mt="8"
      >
        {name}
      </Text>
      <Text
        color="#CCC"
        fontSize="2xl"
        m="20px"
      >
        {description}
      </Text>
    </Flex>
  )
}