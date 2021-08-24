import { Flex, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface SliderCardProps{
  isActive?: boolean;
  heroName: string;
  image:string;
  index?:number;

  onClick?: (index : number) => void
}

export function SliderCard({
  isActive = false,
  heroName,
  image,
  index,
  onClick
}: SliderCardProps){

  return(
    <SliderCardFrame
      backGroundImage={image}
      index={index}
      isActive={isActive}
      onClick={onClick}
    >
      <Text
        display="flex"
        alignItems="center"
        justifyContent="center"
        
        
        height="29px" 
        width="calc(100% + 1px)"
        mb="-0.5px"

        borderBottomRadius="6px"

        transition="all ease 1s"

        bg={`${isActive ? "#ffffff" : "#222222"}cc`}

        fontSize="15px"
        fontWeight="bold"

        textTransform="capitalize"
      >
        {heroName}
      </Text>
    </SliderCardFrame>
  )
}



interface SliderCardFrameProps{
  children: ReactNode;
  isActive: boolean;
  backGroundImage: string;
  index:number;
  onClick: (index : number) => void
}

const SliderCardFrame = ({
  children,
  isActive,
  backGroundImage,
  index,
  onClick
} : SliderCardFrameProps) => {

  return(
    <Flex
      w="120px"
      minW="120x"
      h="100%"
      mx="20px"

      cursor="pointer"

      userSelect="none"

      flexDirection="column"
      border={`5px solid`}
      borderColor={`${isActive ? "#ccc" : "#222"}`}
      borderRadius="10px"

      justify="flex-end"
      align="center"
      color={`${!isActive ? "#ffffff" : "#222222"}cc`}

      backgroundImage={backGroundImage}
      backgroundSize="cover"
      backgroundPosition="center"

      transition="border-color ease 1s"

      _hover={{
        color: "#ccc",
        borderColor: "#ccc"
      }}

      onClick={()=>onClick(index)}
    >
      {children}
    </Flex>
  )
}