import { Center } from "@chakra-ui/react";
import { ImageBox } from "../Global/ImageBox";

interface CharacterCardProps{
  id: number
  thumbnail: string
  name: string
}
 
export function CharacterCard({
  id,
  name,
  thumbnail
} : CharacterCardProps){

  return(
    <Center flex="2">
      <ImageBox
        h="70%" w="70%"
        heroId={id}
        heroImage={thumbnail}
        heroName={name}
      />
    </Center>
  )
}