import { Flex, Text } from "@chakra-ui/react";
import { StyledTilt } from "./StyledTilt"
import Router from "next/router"

interface ImageBoxProps{
  heroName: string,
  heroImage: string
  heroId: number

  h: string,
  w: string,
  mt?: string,
}

export function ImageBox({
  heroImage,
  heroName,
  heroId,
  h,
  mt = "0",
  w
}:ImageBoxProps){

  function handleGoToInfoPage(){
    Router.push(`/character/${heroId}`)
  }

  return(
    <StyledTilt
      h={h} w={w} mt={mt}
    >
      <Flex
        onClick={handleGoToInfoPage}
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
    </StyledTilt>
  )
}