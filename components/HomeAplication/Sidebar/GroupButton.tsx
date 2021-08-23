import { Center, Text } from "@chakra-ui/react";

interface GroupButtonProps {
  group: string;
  index: number;
  isActive?: boolean;
  onClick: (group:string, index: number) => void;
}

export function GroupButton({
  group,
  onClick,
  isActive = false,
  index
}:GroupButtonProps) {
  
  const color = "rgba(200, 200, 200, 0.1)"

  return(
    <Center 
      onClick={()=> onClick(group, index)} 
      w="100%" 
      h="50px" 
      background={isActive ? color : ""}
      color="#ccc"

      cursor = "pointer"

      borderEndRadius="10px"

      userSelect="none"

      _hover={{
        background: color
      }}

      transition="all ease 1s"
    >
      <Text
        fontSize={group.length > 16 ? "16px" : "25px"}
        fontWeight="black"
        textTransform="capitalize"

      >
        {group}
      </Text>
    </Center>
  )
}