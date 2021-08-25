import { Flex } from "@chakra-ui/react";
import { CharacterCard } from "./CharacterCard";
import { CharacterDescription } from "./CharacterDescription";

interface CharacterAreaProps{
  id: number;
  name: string;
  description: string,
  thumbnail: string
}

export function CharacterArea({
  id,
  description,
  name,
  thumbnail,
} : CharacterAreaProps){
  return(
    <Flex
      minH="600px"
      w="100%"
      flexDir="row"
    >
      <CharacterDescription
        name={name}
        description={description}
      />
      <CharacterCard
        id={id}
        name={name}
        thumbnail={thumbnail}
      />
    </Flex>
  )
}