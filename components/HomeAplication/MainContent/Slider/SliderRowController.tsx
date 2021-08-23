import { Flex, list } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useSlider } from "../../../../hooks/useSlider"
import { SliderCard } from "./SliderCard"

interface SliderRowControllerProps {
  herosData: string[],
  movementInPx: number,
  SliderCardActive: number
}

export function SliderRowController({
  herosData,
  SliderCardActive,
  movementInPx
}:SliderRowControllerProps){

  return(
    <Flex transform="auto" translateX={movementInPx}>
      {
        herosData.map((item, index)=>{
          if(index === SliderCardActive){
            return <SliderCard heroName={item} key={item} isActive />
          }else{
            return <SliderCard heroName={item} key={item} />
          }
        })
      }
    </Flex>
  )
}

