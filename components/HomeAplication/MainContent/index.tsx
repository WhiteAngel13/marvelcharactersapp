import { Center, Flex, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import { useHomeApplication } from "../../../hooks/HomeApplication";
import { HomeHerosType } from "../../../types/HomeHerosType";
import { Slider } from "../Slider";

export function MainContent(){

  const {
    chosenHeroData: heroData
  } = useHomeApplication()

  return(
    <Flex
      w="85%"
      h="100%"
      flexDir="column"
      position="relative"
    >
      <Flex  flex="1">
        <Flex direction="column" p="16px" flex="1" mt="60px" ml="100px">
          <Box
          >
            <Text
              as="text"

              fontSize="5xl"
              fontWeight="bold"
              fontFamily="fantasy"

              color="#ccc"
            >
              {heroData.name}
            </Text>            
          </Box>

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
              {heroData.group}
            </Text>            
          </Box>

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
              color="#ccc"
            >
              {heroData.description}
            </Text>            
          </Flex>
        </Flex>
        <Flex 
          flex="1"
        >
          <Flex mt="10%" flexDir="column" border="#222 solid 10px" borderRadius="10px" h="70%" width="60%" bg="blue">
            <Flex 
              flex="3"
              bgImage={heroData.thumbnail}
              bgSize="cover"
              bgPos="center"
            />
            <Flex flex="1" align="center" justify="center">
              <Text
                fontSize="4xl"
                fontWeight="black"
                color="#ccc"
              >
                {heroData.name}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}