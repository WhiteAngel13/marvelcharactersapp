import { Center } from "@chakra-ui/react"
import { HomeHerosType } from "../../../types/HomeHerosType"
import { SliderCard } from "./SliderCard"

interface SliderRowControllerProps {
  herosData: HomeHerosType[],
  movementInPx: number,
  SliderCardActive: number

  onClick: (index : number) => void;
}

export function SliderRowController({
  herosData,
  SliderCardActive,
  movementInPx,
  onClick
}:SliderRowControllerProps){

  return(
    <Center 
      width={`${herosData.length <= 6 ? "100%" : ""}`} 
      transform="auto" 
      transition="all ease 1s" 
      
      translateX={`${herosData.length > 6 ? movementInPx : ""}`}>
      {
        herosData.map((item, index)=>(
          <SliderCard
            heroName={item.nameFormatted}
            image={item.thumbnail}
            key={item.name}
            index={index}
            onClick={onClick}
            {...index === SliderCardActive ? {isActive:true} : null}
          />
        ))
      }
    </Center>
  )
}

