import { useSlider } from "../../../hooks/useSlider";
import { SliderFrame } from "./SliderFrame";
import { SliderRowController } from "./SliderRowController";
import { HomeHerosType } from "../../../types/HomeHerosType"
 
interface SliderProps {
  herosData: HomeHerosType[]
}

export function Slider({
  herosData
}:SliderProps){
  
  const {
    moveTo,
    SliderCardActive,
    setSliderCardActive,
    movementInPx,
  } = useSlider({ listLength:herosData.length })
  
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