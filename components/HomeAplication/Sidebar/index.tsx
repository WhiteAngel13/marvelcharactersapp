import { Center, Flex, Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GroupButton } from "./GroupButton";

interface SidebarProps{
  herosGroups: string[];
  setGroup?: (group : string) => void;
}

export function Sidebar({
  herosGroups,
  setGroup
} : SidebarProps){

  const [activeButton, setActiveButton] = useState(0);

  function handleChangeGroup(group: string, index: number){
    setGroup(group.split(" ").join("-"))
    setActiveButton(index)
  }
  
  return(
    <Center
      w="15%"
      h="100%"
    >
      <VStack w="100%">
        {
          herosGroups.map((group, index) => (
            <GroupButton 
              group={group} 
              onClick={handleChangeGroup} 
              index={index}
              key={group}
              {...index === activeButton ? {isActive : true} : null}
            />
          ))
        }
      </VStack>
    </Center>
  )
}