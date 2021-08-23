import { useState } from "react";

interface UseSliderProps {
  listLength: number
}

export function useSlider ({
  listLength
} : UseSliderProps) {

  const [SliderInMovement, setSliderInMovement] = useState(0);
  const [SliderCardActive, setSliderCardActive] = useState(0);

  const moveTo = (
    move : "left" | "right",
  ) => {

    if(move === "left"){
      if(SliderInMovement <= 0){
        setSliderInMovement(0)
      }else {
        setSliderInMovement(old => old - 1)
      }

      if(SliderCardActive >= 1){
        setSliderCardActive(old => old - 1)
        console.log(SliderCardActive)
      }
    }else{
      
      if(SliderInMovement >= listLength-6){
        setSliderInMovement(listLength-6)
      }else{
        setSliderInMovement(old => old + 1)
      }

      if(SliderCardActive < listLength-1){
        setSliderCardActive(old => old + 1)
      }
    }
  }

  const convertToPx = (id:number) => {
    if(id <= 0){
      return 0
    }else if (id + 6 >= listLength )  {
      return -( (listLength - 6) * 160)
    }else{
      return -(id * 160)
    }
  }

  const movementInPx = convertToPx(SliderInMovement)

  return {
    moveTo,
    SliderInMovement,
    SliderCardActive,
    movementInPx
  }

}
