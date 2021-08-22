import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SliderCard } from "./SliderCard"

interface SliderRowControllerProps {
  herosData: string[]
  move: "left" | "right"
}

export function SliderRowController({
  herosData,
  move
}:SliderRowControllerProps){

  const [SliderCardActive, setSliderCardActive] = useState(0)
  
  const convertToPx = (id:number) => {
    if(id <= 0){
      return 0
    }else if (id >= herosData.length-1 )  {
      return -((herosData.length-5) * 160)
    }else{
      return -((id-5) * 160)
    }
  }

  console.log(SliderCardActive)

  useEffect(()=>{
    if(move === "left"){
      if(SliderCardActive <= 0){
        setSliderCardActive(0)
      }else{
        setSliderCardActive(old => old - 1)
      }
    }else{
      if(SliderCardActive >= herosData.length-1){
        setSliderCardActive(herosData.length-5)
      }else{
        setSliderCardActive(old => old+1)
      }
    }
  }, [move])



  return(
    <Flex transform="auto" translateX={convertToPx(SliderCardActive)}>
      {
        herosData.map(item=>(
          <SliderCard heroName={item} key={item} />
        ))
      }
    </Flex>
  )
}

