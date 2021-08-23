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

    const constant = move === "left" ? 4 : 1

    const leftDistance = SliderCardActive - constant 
    const rightDistance = listLength - leftDistance
    const weAreIn = leftDistance < rightDistance ? "left" : "right"

    console.log(leftDistance, rightDistance)
    if(move === "left"){
      
      if(weAreIn === "left"){
        setSliderInMovement(Math.min(leftDistance, rightDistance))
      }else{
        setSliderInMovement(Math.max(leftDistance, rightDistance))
      }

      if(SliderCardActive >= 1){
        setSliderCardActive(old => old-1)
      }

    }else{

      if(weAreIn === "left"){
        setSliderInMovement(Math.min(leftDistance, rightDistance))
      }else{
        setSliderInMovement(Math.max(leftDistance, rightDistance))
      }

      if(SliderCardActive < listLength - 1){
        setSliderCardActive(old => old+1)
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
    setSliderCardActive,
    SliderCardActive,
    movementInPx,
  }

}
