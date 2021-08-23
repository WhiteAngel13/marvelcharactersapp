import { Box } from "@chakra-ui/react";
import { useSlider } from "../../../../hooks/useSlider";
import { SliderFrame } from "./SliderFrame";
import { SliderRowController } from "./SliderRowController";



export function Slider(){
  
  const names = ["hulk", "cap america", "viuva negra", "gaviao arqueiro", "visão", "pantera negra", "thanos", "homem formiga", "homem aaranha", "dr strange"]
  
  const {
    moveTo,
    SliderCardActive,
    movementInPx
  } = useSlider({ listLength:names.length })
  

  return(
    <SliderFrame>
      <Box bg="red" position="absolute" w="50px" h="50px" left="50px" onClick={()=>moveTo("left")} />
      <SliderRowController herosData={names} SliderCardActive={SliderCardActive} movementInPx={movementInPx} />
      <Box bg="blue" position="absolute" w="50px" h="50px" bottom="0" left="50px" onClick={()=>moveTo("right")} />
    </SliderFrame>
  )
}