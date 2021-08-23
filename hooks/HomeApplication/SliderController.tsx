import { useState, Dispatch, SetStateAction, createContext, useContext } from "react";
import { useHomeApplication } from ".";

interface SliderControllerProps {
  listLength: number
}

interface SliderControllerReturn {
  moveTo: (move : "left" | "right") => void,
  setSliderCardActive: Dispatch<SetStateAction<number>>,
  setSliderInMovement: Dispatch<SetStateAction<number>>,
  SliderCardActive: number,
  movementInPx: number
}

export type SliderController = ({}: SliderControllerProps) => SliderControllerReturn

const SliderContext = createContext({} as SliderControllerReturn)

export const SliderProvider = ({children}) => {

  const {listLength} = useHomeApplication()
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

  const value =  {
    moveTo,
    setSliderCardActive,
    setSliderInMovement,
    SliderCardActive,
    movementInPx,
  }

  return(
    <SliderContext.Provider value={value}>
      {children}
    </SliderContext.Provider>
  )

} 

export const useSlider = () => useContext(SliderContext)