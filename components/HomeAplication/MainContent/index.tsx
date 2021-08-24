import { Flex } from "@chakra-ui/react";
import { useHomeApplication } from "../../../hooks/HomeApplication";
import { LeftSide } from "./LeftSide";
import { DescriptionBox } from "./LeftSide/DescriptionBox";
import { GroupBox } from "./LeftSide/GroupBox";
import { NameBox } from "./LeftSide/NameBox";
import { RightSide } from "./RightSide";
import { ImageBox } from "./RightSide/ImageBox";

export function MainContent(){

  const {
    chosenHeroData: heroData
  } = useHomeApplication()

  return(
    <Flex
      w="85%"
      h="100%"
      position="relative"
    >
      <LeftSide>
        <NameBox heroName={heroData?.name} />
        <GroupBox heroGroup={heroData?.group}/>
        <DescriptionBox heroDescription={heroData?.description}/>
      </LeftSide>
      <RightSide>
        <ImageBox 
          heroImage={heroData?.thumbnail} 
          heroName={heroData?.name}
        />
      </RightSide>
    </Flex>
  )
}



