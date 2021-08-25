import { Box, Text } from "@chakra-ui/react";

interface NameBoxProps{
  heroName: string;
}

export function NameBox({
  heroName
}: NameBoxProps){

  return(
    <Box>
      <Text
        as="text"

        fontSize="5xl"
        fontWeight="bold"
        fontFamily="fantasy"

        color="#ccc"
      >
        {heroName}
      </Text>            
    </Box>
  )
}