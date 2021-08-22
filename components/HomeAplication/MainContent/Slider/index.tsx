import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { SliderFrame } from "./SliderFrame";
import { SliderRowController } from "./SliderRowController";

export function Slider(){
  
  const names = ["hulk", "cap america", "viuva negra", "gaviao arqueiro", "visão", "pantera negra", "thanos", "homem formiga", "homem aaranha", "dr strange"]
  const [movement, setMovement] = useState("")


  return(
    <SliderFrame>
      <Box bg="red" position="absolute" w="50px" h="50px" left="50px" onClick={()=>setMovement("left")} />
      <SliderRowController herosData={names} move={movement} />
      <Box bg="blue" position="absolute" w="50px" h="50px" bottom="0" left="50px" onClick={()=>setMovement("right")} />
    </SliderFrame>
  )
}