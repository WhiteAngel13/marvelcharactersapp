import { Flex, Text } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt"

interface ImageBoxProps{
  heroName: string,
  heroImage: string
}

export function ImageBox({
  heroImage,
  heroName
}:ImageBoxProps){

  return(
    <Tilt
      style={{
        display: "flex",
        flexDirection: "column",

        border: "#222 solid 10px",
        borderRadius: "10px",

        marginTop:"10%",
        height:"70%",
        width: "60%",

        backgroundColor:"#222222cc",

        userSelect:"none",
        
        cursor: "pointer"
      }}

      tiltReverse
    >
      <Flex 
        flex="3"
        bgImage={heroImage}
        bgSize="cover"
        bgPos="center"
      />
      <Flex flex="1" align="center" justify="center">
        <Text
          fontSize="4xl"
          fontWeight="black"
          color="#ccc"
        >
          {heroName}
        </Text>
      </Flex>
    </Tilt>
  )
}