import { Center, Flex, Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useHomeApplication } from "../../../hooks/HomeApplication";
import { GroupButton } from "./GroupButton";

export function Sidebar(){

  const { setGroupToShow, formattedGroups } = useHomeApplication()
  const [activeButton, setActiveButton] = useState(0);

  function handleChangeGroup(group: string, index: number){
    setGroupToShow(group)
    setActiveButton(index)
  }
  
  return(
    <Center
      w="15%"
      h="100%"
    >
      <VStack w="100%">
        {
          formattedGroups.map((group, index) => (
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