import { Box, Text } from "@chakra-ui/react";

interface GroupBoxProps{
  heroGroup: string
}

export function GroupBox({
  heroGroup
}:GroupBoxProps){

  return(
    <Box 
      h="80px"
    >
      <Text
        as="text"

        fontSize="3xl"
        fontWeight="bold"
        fontFamily="fantasy"

        color="#ccc"
      >
        {heroGroup}
      </Text>            
    </Box>
  )
}