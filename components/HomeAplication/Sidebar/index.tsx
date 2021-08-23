import { Center, Flex, Box, VStack } from "@chakra-ui/react";

interface SidebarProps{
  herosGroups: string[];
  setGroup?: (group : string) => void;
}

export function Sidebar({
  herosGroups,
  setGroup
} : SidebarProps){
  return(
    <Center
      w="15%"
      h="100%"
    >
      <VStack w="100%">
        {herosGroups.map(group => <Center onClick={() => setGroup(group)} w="100%" h="50px" bg="red" key={group} >{group}</Center>)}
      </VStack>
    </Center>
  )
}