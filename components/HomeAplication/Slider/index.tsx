import { SliderFrame } from "./SliderFrame";
import { SliderRowController } from "./SliderRowController";
import { HomeHerosType } from "../../../types/HomeHerosType"
import { useEffect } from "react";
import { useHomeApplication } from "../../../hooks/HomeApplication";
import { useSlider } from "../../../hooks/HomeApplication/SliderController";


export function Slider(){

  const {
    herosDataFiltered: herosData,
    setChosenHero,
  } = useHomeApplication()

  const {
    SliderCardActive,
    moveTo,
    movementInPx,
    setSliderCardActive,
    setSliderInMovement,
  } = useSlider()

  useEffect(()=>{
    const chosenHero = SliderCardActive
    setChosenHero(chosenHero)
  }, [SliderCardActive])

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