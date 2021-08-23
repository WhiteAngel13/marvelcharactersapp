import { useSlider } from "../../../hooks/useSlider";
import { SliderFrame } from "./SliderFrame";
import { SliderRowController } from "./SliderRowController";
import { HomeHerosType } from "../../../types/HomeHerosType"
import { useEffect } from "react";
 
interface SliderProps {
  herosData: HomeHerosType[]
}

export function Slider({
  herosData,
}:SliderProps){
  
  const {
    moveTo,
    SliderCardActive,
    setSliderCardActive,
    setSliderInMovement,
    movementInPx,
  } = useSlider({ listLength:herosData.length })

  useEffect(()=>{
    setSliderCardActive(0)
    setSliderInMovement(0)
  }, [herosData, setSliderCardActive, setSliderInMovement])
  
  return(
    <SliderFrame moveTo={moveTo}>
        <SliderRowController 
          herosData={herosData} 
          SliderCardActive={SliderCardActive} 
          movementInPx={movementInPx}
          onClick={setSliderCardActive}
        />
    </SliderFrame>
  )
}