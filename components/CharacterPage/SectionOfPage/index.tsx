import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { SectionResponseFormatted } from "../../../types/CharacterDataTypes";

interface SectionOfPageProps {
  title: string,
  data: SectionResponseFormatted
}

export function SectionOfPage({
  data,
  title
} : SectionOfPageProps){

  const {collectionURI, items} = data

  return(
    <Center flex="1" my="4" flexDir="column">
      <Text 
        alignSelf="flex-start" 
        fontSize="6xl"
        fontWeight="bold"
        m="5"
        color="white"  
      >
          {title}
      </Text>

      <SimpleGrid columns={5} spacing="5">
        {
          items.map((item, key) => (
            <Box 
              bg="tomato" 
              bgImage={item.thumbnail} 
              bgPos="center"
              bgSize="cover"
              key={key} 
              height="200px" 
              width="160px"
              transition="all ease 1s"
              zIndex="1"


              _hover={{
                transform: "scale(1.8)",
                zIndex:"2"
              }}
            />
          ))
        }
      </SimpleGrid>
    </Center>
  )
}