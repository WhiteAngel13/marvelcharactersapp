import { Flex, Text } from "@chakra-ui/react"

interface SliderCardProps{
  isActive?: boolean;
  heroName: string;
}


export function SliderCard({
  isActive = false,
  heroName
}: SliderCardProps){

  return(
    <Flex
      w="120px"
      minW="120x"
      h="100%"
      mx="20px"
      flexDirection="column"
      border={`5px solid ${isActive ? "#ccc" : "#222"}`}
      borderRadius="10px"
      justify="flex-end"
      color={`${isActive ? "#ffffff" : "#222222"}cc`}

      _hover={{
        color: "#ccc",
        borderColor: "#ccc"
      }}
    >
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="20px" 
        width="100%"
        mb="2"
        fontSize="12px"
      >
        {heroName}
      </Text>
    </Flex>
  )
}